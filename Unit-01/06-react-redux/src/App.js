import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import TodoListContainer from './TodoListContainer';
import TodoFormContainer from './TodoFormContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to our Todo App!</h1>
        <Link to='/todos'>See Your Todos</Link>
        <br/>
        <Link to="/todos/new">Add New Todo</Link>

        <Route exact path="/todos" component={TodoListContainer} />
        <Route path="/todos/new" component={TodoFormContainer} />
        <Route path="/todos/:id/edit" component={TodoFormContainer} />
      </div>
    );
  }
}

export default App;
