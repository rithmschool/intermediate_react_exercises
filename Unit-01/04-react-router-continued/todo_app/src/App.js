import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import TodoList from './todoList';

class App extends Component {
  render() {
    return (
      // <div>
      //  <TodoList />
      // </div>
    <div className="App">
	    <div className="App-header">
	      <h2>
	        <Link to="/todos">See My Todos</Link>
	      </h2>
	      <p>
	        <Link to="/todos/new">Add a Todo</Link>
	      </p>
	    </div>
	    <Route path="/" component={TodoList} />
    </div>
    );
  }
}

export default App;

