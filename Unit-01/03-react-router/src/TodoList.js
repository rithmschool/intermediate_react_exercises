import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo.js'
import NewTodo from './NewTodo.js'
import {Link, Route} from 'react-router-dom'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        'build a todo app',
        'contribute to open source',
        'build a time machine',
        'take a nap'
      ]
    }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(newTodo) {
    let {todos} = this.state
    this.setState({todos: todos.concat(newTodo)})
  }

  handleEdit(idx, updatedTodo) {
    let {todos} = this.state
    todos[idx] = updatedTodo
    this.setState({todos})
  }

  handleDelete(idx) {
    let {todos} = this.state
    todos = todos.slice(0, idx).concat(todos.slice(idx + 1))
    this.setState({todos});
  }

  render() {
    let todos = this.state.todos.map((todo, idx) => {
      return (
        <div key={idx}>
          <Todo
            {...this.props}
            todoIdx={idx + 1}
            todo={todo}
            handleDelete={this.handleDelete.bind(this, idx)}
            handleEdit={this.handleEdit.bind(this, idx)}
          />
        </div>
      )
    })

    return (
      <div className="TodoList">
        <div className="TodoList-header">
          <h1>I'm very important! Look at all the things I have to do!</h1>

          <Route path='/todos/new' render={() => (
            <NewTodo addTodo={this.addTodo}/>
          )}/>

          <Route exact path='/todos' render={() => (
            <Link to='/todos/new'>
              <button className="new-todo-button">Make a new Todo!</button>
            </Link>
          )}/>

        </div>
        <div className="Todos">
          {todos}
        </div>
      </div>
    )
  }
}

export default TodoList;
