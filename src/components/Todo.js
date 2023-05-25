import React, { useState } from "react";
import "../styles/Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoKeyDown = (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { title: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleTodoToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <div className="header">
        <h1>Todo List</h1>
        <input
          className="new-todo"
          placeholder="Add New Todo"
          value={newTodo}
          onChange={handleNewTodoChange}
          onKeyDown={handleNewTodoKeyDown}
        />
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={todo.completed ? "completed" : ""}
            onClick={() => handleTodoToggle(index)}
          >
            <span className="title">{todo.title}</span>
            <button
              className="delete"
              onClick={(event) => {
                event.stopPropagation();
                handleTodoDelete(index);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
