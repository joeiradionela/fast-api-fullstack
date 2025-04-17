from pydantic import BaseModel

class TodoBase(BaseModel):
    title: str
    completed: bool

class TodoCreate(TodoBase):
    pass

class TodoUpdate(TodoBase):
    pass

class TodoOut(TodoBase):
    id: int

    class Config:
        orm_mode = True

