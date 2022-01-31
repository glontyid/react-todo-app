import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todoItems, onDeleted, onToggleImportant, onToggleDone }) => {
  const todoElements = todoItems.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <TodoItem 
        { ...itemProps } 
        key={id} 
        onDeleted={() => onDeleted(id)} 
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
      />
    )
  })

  return (
    <ul className="list-group">
      { todoElements }
    </ul>
  );
};

export default TodoList;
