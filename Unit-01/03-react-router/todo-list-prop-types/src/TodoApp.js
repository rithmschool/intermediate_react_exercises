import React, { Component } from 'react';
import logo from './logo.svg';
import './TodoApp.css';
import TodoList from './TodoList'
import { Route, Link } from 'react-router-dom';
import NewTodoForm from './NewTodoForm';

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
	      <h2>
	      	<Link to='/todos'>View Todos</Link>
	      </h2>

	      <h2>
	      	<Link to='/new/todo'>Add Todo</Link>
	      </h2>

	      <Route path='/todos' component={TodoList} />
	      <Route path='/new/todo' component={NewTodoForm} />
      </div>
    );
  }
}

export default TodoApp;