import React, { Component } from 'react';
import { Redirect } from 'react-router';

class NewTodoForm extends Component {
	constructor(props) {
		super(props)

    this.state = {
      title: '',
      text: '',
      completed: false
    }
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
  	}

	handleSubmit(e) {
		e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      title:'',
      text: '',
      completed: true
    })
	}
	
	render() {
    return (
      this.state.completed ? <Redirect to='/todos' /> :
      <div>
        <h4>Add a todo!</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id">Todo Name: </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="topic "
            onChange={this.handleChange}
          />
          <label htmlFor="id">Todo Desc: </label>
          <input
            value={this.state.text}
            type="text"
            name="text"
            placeholder="what do ya need tadah?"
            onChange={this.handleChange}
          />
          <input type="submit" value="Add your todo!" />
        </form>
      </div>
    )
  }
}



export default NewTodoForm;