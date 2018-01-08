import React, { Component } from "react";
import { Link } from "react-router-dom";
import ToDoList from "./ToDoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ToDo List</h1>
        </header>
        <Link to="/todos">See all to-dos!</Link>
        <Link to="/todos/new">Make a new to-do! </Link>
        <ToDoList />
      </div>
    );
  }
}

export default App;
