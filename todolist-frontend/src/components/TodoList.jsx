import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import "./../../src/index.css";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");

  const API_URL = "http://localhost:8000/todos/";
  ;

  useEffect(() => {
    // Fetch tasks with the current filter
    axios
      .get(API_URL, {
        params: {
          status: filter, // Send the filter status as a query parameter
        },
      })
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, [filter]); // Fetch tasks whenever the filter changes


  const addTask = () => {
    if (task.trim() === "") return;
    axios
      .post(API_URL, { title: task, completed: false })
      .then((response) => {
        setTasks([...tasks, response.data]);
        setTask("");
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  const removeTask = (id) => {
    axios
      .delete(`${API_URL}${id}/`)
      .then(() => setTasks(tasks.filter((t) => t.id !== id)))
      .catch((error) => console.error("Error removing task:", error));
  };

  const toggleCompletion = (id) => {
    const task = tasks.find((t) => t.id === id);
    axios
      .put(`${API_URL}${id}/`, {
        title: task.title,
        completed: !task.completed,
      })
      .then((response) => {
        setTasks(tasks.map((t) => (t.id === id ? response.data : t)));
      })
      .catch((error) => console.error("Error toggling completion:", error));
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].title);
  };

  const saveEdit = (id) => {
    axios
      .put(`${API_URL}${id}/`, {
        title: editText,
        completed: tasks.find((t) => t.id === id).completed,
      })
      .then((response) => {
        setTasks(tasks.map((t) => (t.id === id ? response.data : t)));
        setEditIndex(null);
      })
      .catch((error) => console.error("Error saving task:", error));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <div className="filters">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? "active" : ""}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={filter === "pending" ? "active" : ""}
        >
          Pending
        </button>
      </div>

      <ul>
        {tasks.map((t, index) => (
          <li key={t.id} className="task-item">
            <div className="task-content">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleCompletion(t.id)}
              />
              {editIndex === index ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <span className={t.completed ? "completed" : ""}>
                  {t.title}
                </span>
              )}
            </div>

            <div className="task-buttons">
              {editIndex === index ? (
                <button onClick={() => saveEdit(t.id)}>
                  <FaSave /> Save
                </button>
              ) : (
                <button onClick={() => startEditing(index)}>
                  <FaEdit /> Edit
                </button>
              )}
              <button onClick={() => removeTask(t.id)}>
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
