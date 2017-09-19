import React, { Component} from 'react';
import 'font-awesome/css/font-awesome.css';
import './Todo.css';
import EditTodo from './EditTodo.js'
import {Link, Route} from 'react-router-dom'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  componentWillMount() {
    if(+this.props.location.pathname.split('/')[2] === this.props.todoIdx){
      this.setState({editing: true})
    }
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing})
  }

  render() {
    let editing = this.state.editing ?
      <EditTodo
        todo={this.props.todo}
        handleEdit={this.props.handleEdit}
        toggleEdit={this.toggleEdit}
      /> :
      null;

    return (
      <div className="Todo">
        <aside>
          <h1>#{this.props.todoIdx}</h1>
        </aside>
        <div className="Todo-main">
          <p>{this.props.todo}</p>
          {editing}
          <div>

            <Route exact path='/todos' render={() => (
              <div>
                <Link to={`/todos/${this.props.todoIdx}/edit`}>
                  <button onClick={this.toggleEdit} className="edit">
                    <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
                  </button>
                </Link>
                <button onClick={this.props.handleDelete} className="delete">
                  <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                </button>
              </div>
            )}/>

          </div>
        </div>
      </div>
    )
  }
}

export default Todo;
