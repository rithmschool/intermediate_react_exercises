import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import TodoListContainer from './TodoListContainer';
import TodoFormContainer from './TodoFormContainer';
import TodoEditContainer from './TodoEditContainer';

const HeaderNav = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand header-link" to="/todos">
          <span role="img" aria-label="todo checkbox icon">✅</span> Todo App
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li><Link className="header-link" to="/todos/new">New Todo</Link></li>
      </ul>
    </div>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div>
        <HeaderNav/>
        <div>
          <Route exact path="/todos" component={TodoListContainer} />
          <Route path="/todos/new" component={TodoFormContainer} />
          <Route path="/todos/:id/edit" component={TodoEditContainer} />
        </div>
      </div>
    );
  }
}

export default App;
