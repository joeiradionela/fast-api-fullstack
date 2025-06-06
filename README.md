# fast-api-fullstack

# ✅ Full-Stack To-Do List Application

This project is a complete full-stack To-Do List application that combines a React frontend with a FastAPI backend. The backend exposes a RESTful API and uses SQLite for data storage, while the frontend provides functionality for users to add, edit, delete, and filter tasks.

---

## ⚙️ Setup Instructions

### Prerequisites

Ensure the following are installed on your machine:

- **Node.js and npm** (for the React frontend)  
- **Python** (for the FastAPI backend)  
- **SQLite** (optional — used by default)

---

### 📦 Frontend (React)

Clone the repository to your local machine:
```bash
git clone https://github.com/joeiradionela/fast-api-frontend.git
cd fast-api-frontend
```

Install the necessary dependencies for the frontend:
```bash
npm install
```

Start the development server to view the frontend:
```bash
npm run dev
```

The frontend will now be available at `http://localhost:5173`.

---

### 🛠 Backend (FastAPI)

Go to the backend directory:
```bash
cd fast-api-backend
```

Create and activate a virtual environment for Python:
```bash
python -m venv venv
source venv/bin/activate
```

On Windows, use:
```bash
venv\Scripts\activate
```

Install the required backend dependencies:
```bash
pip install -r requirements.txt
```

Run the FastAPI development server to start the backend:
```bash
uvicorn app.main:app --reload
```

The backend will be available at `http://localhost:8000`.

---

### 🔗 Live Deployment Links
Backend (FastAPI): https://fast-api-backend-dmz8.onrender.com/docs

Frontend (React): https://joeiradionela.github.io/fast-api-frontend/

### 🔗 Backend API Endpoints
GET https://fast-api-backend-dmz8.onrender.com/todos/
Description: Fetch all to-do items.

POST https://fast-api-backend-dmz8.onrender.com/todos/
Description: Create a new to-do item.

PUT https://fast-api-backend-dmz8.onrender.com/todos/{todo_id}
Description: Update a to-do item by ID.

DELETE https://fast-api-backend-dmz8.onrender.com/todos/{todo_id}
Description: Delete a to-do item by ID.

GET https://fast-api-backend-dmz8.onrender.com/todos/filter/{status}

