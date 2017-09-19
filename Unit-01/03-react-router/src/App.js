import React from "react";
import TodoList from "./TodoList";
import { Route, Link } from "react-router-dom";
import "./App.css";

const App = () => (
  <div className="App">
    <div className="App-header">
      <h2>
        <Link to="/todos">See my todos!</Link>
      </h2>
      <p>
        <Link to="/todos/new">Add a todo!</Link>
      </p>
    </div>
    <Route path="/todos" component={TodoList} />
  </div>
);

export default App;
