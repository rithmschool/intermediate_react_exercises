import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, deleteTodo }) {
  const noTodosMessage = <p>No todos here...</p>;

  const todosList = (
    <div>
      {todos.map((todo, idx) => (
        <Todo task={todo.task} id={todo.id} key={idx} deleteTodo={deleteTodo} />
      ))}
    </div>
  );

  return <div>{todos.length === 0 ? noTodosMessage : todosList}</div>;
}
