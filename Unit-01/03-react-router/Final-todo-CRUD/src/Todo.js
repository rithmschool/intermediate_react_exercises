import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap'
import './Todo.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Todo extends Component {
	constructor(props){
		super(props)

		this.state = {
			done: false,
			isShowingEditForm: false,
			fading: false
		}
		this.handleComplete = this.handleComplete.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	handleDelete(){
		this.setState({fading: true})
		setTimeout(function(){
			this.props.deleteTodo()
		}.bind(this), 500)
	}

	handleComplete() {
		this.setState({done: !this.state.done})
	}


	render(){
		let buttonText = this.state.done ? "Mark as incomplete" : "Mark as complete";
		let completedStyle = this.state.done ? "success" : "danger";
		let buttonDecoration = this.state.done ? "line-through" : "none"
		let editForm = this.props.match ? 
			<button className='edit-button'>
				<Link to={`/todos/${this.props.id}/edit`}>Edit this todo</Link>
			</button> : null;

		let styles = {
			textDecoration: buttonDecoration
		}

		let todoStyle = this.state.fading ? {
		  opacity: '0',
		  transition: 'opacity .5s ease'
		} : 
		{
			borderStyle: 'solid',
			borderWidth: '2px 20px 4px 20px',
			borderColor: 'black',
			transition: 'opacity 1s ease-in-out'
		}


		return(
		  <ListGroupItem style={todoStyle} bsStyle={completedStyle}>
		    {/* {this.props.match && this.props.match.params.id && <button>Fooooo</button>} */}
		    <h1 style={styles}><Link to={`/todos/${this.props.id}`}>{this.props.title}</Link></h1>
		    <p> {this.props.description} </p>
		    <button className='btn btn-warning' onClick={this.handleComplete}>{buttonText}</button>
		    <br />
		    <button className='btn btn-danger' onClick={this.handleDelete}>Delete this todo</button>
		  	<br/>
		  	{editForm}
		  </ListGroupItem>
		)
	}
}

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

export default Todo;