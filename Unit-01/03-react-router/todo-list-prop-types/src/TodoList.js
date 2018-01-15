import React, { Component } from 'react';
import Todo from './Todo'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import { Route } from 'react-router-dom';
import EditForm from './EditForm';


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
					path='/todos/new' 
					render={props => (
            			<NewTodoForm {...props} addTodo={this.handleAdd} />
          		)} />

				<Route 
					exact path='/todos/:id' 
					render={props =>
            			todos.find(t => t.props.id === +props.match.params.id) || null}
        		/>


				<Route 
					exact path='/todos/:id/edit' 
					render={props => {
						let todo =
          					todos.find(t => t.props.id === +props.match.params.id) || null;
          				return (
          					<EditForm 
          						{...props}
								currentTodo={{title: todo.props.title, text: todo.props.text}}
          						title={todo.props.title}
          						text={todo.props.text}
          						id={todo.props.id}
          						addEdits={this.addEdits}
          					/>
          				)
          			}}
              	/>


				<h1>TodoList!</h1>
				<Route exact path="/todos" component={() => <div>{todos}</div>} />
			</div>
		)
	}
}

export default TodoList;