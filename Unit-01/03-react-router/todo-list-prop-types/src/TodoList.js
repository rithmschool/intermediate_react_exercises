import React, { Component } from 'react';
import Todo from './Todo'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import { Route } from 'react-router-dom';


class TodoList extends Component {
	constructor(props){
   		super(props);
   		this.state = {
   			todos: [
   				{
					id: 1,
					title: 'Do THIS!!',
					text: 'Get homework done!'
				}, 
				{
					id: 2,
					title: 'Please work!!',
					text: 'Still more to do!'
				}
			]
   		}
   		this.handleAdd = this.handleAdd.bind(this);
   		this.addEdits = this.addEdits.bind(this);
  	}

  	handleRemove(idx) {
  		const { todos } = this.state;
  		const newTodos = todos
  			.slice(0, idx)
  			.concat(todos.slice(idx + 1));
  		this.setState({
  			todos: newTodos
  		});
  	}

  	handleAdd(newTodo) {
    	this.setState({todos: [newTodo, ...this.state.todos]})
  }


	addEdits(e) {
  		console.log(e);

  		const editTodos = this.state.todos.map((todo,idx) => {
  			if (idx === e.position) {
  				todo.title = e.title,
  				todo.text = e.text
  			}
  			return todo
  		})
  		this.setState({
  			todos: editTodos
  		})
  	}


	render() {
		let todos = this.state.todos.map((todo, idx) => {
			return (
				<Todo key={idx}
					id={idx}
					removeTodo= {this.handleRemove.bind(this, idx)}
					title={todo.title}
					text={todo.text}
					addEdits={this.addEdits}
				/>
			)
		})
		return (
			<div>
				<Route 
					path='/new/todo'
					render={props => (
						<NewTodoForm {...props} addTodo={this.handleAdd} />
					)}
				/>
				<h1>TodoList!</h1>
				<Route exact path="/todos" component={() => <div>{todos}</div>} />
			</div>
		)
	}
}

export default TodoList;