import React from 'react';
import { Link } from 'react-router-dom';

export default function Todo({ task, id, deleteTodo }) {
  return (
    <div>
      <div>{task}</div>
      <Link to={`/todos/${id}/edit`}>Edit</Link>
      <button onClick={() => deleteTodo(id)}>X</button>
    </div>
  );
}
