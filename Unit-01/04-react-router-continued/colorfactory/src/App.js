import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ColorsList from "./ColorsList";
import "./App.css";

class App extends Component {
  render() {
    const header = (
      <div>
        <h1 className="App-title">Welcome to Colors</h1>
        <Link to="/colors" className="Header-link">
          see all colors
        </Link>
        <br />
        <Link to="/colors/new" className="Header-link">
          add new color
        </Link>
      </div>
    );
    return (
      <div className="App">
        <header className="App-header">{header}</header>
        <Switch>
          <Route path="/colors/new" />
          <Route path="/colors/:color" />
          <Route path="/colors" />
          <Redirect path="/colors" />
        </Switch>
      </div>
    );
  }
}

export default App;
