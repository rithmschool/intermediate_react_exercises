import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';


class EditForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			position: this.props.id,
			title: '',
			text: '',
			completed: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.editFormSubmit = this.editFormSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	editFormSubmit(e) {
		e.preventDefault();
		this.setState({
			completed: true
		})
		this.props.addEdits(this.state);
	}

	render() {
		return(
			this.state.completed ? <Redirect to='/todos' /> :
			<div>
				<form onSubmit={this.editFormSubmit}>
					<label>Edit Todo</label>
					<input onChange={this.handleChange} name='title' placeholder={this.props.currentTodo.title} />
					<input onChange={this.handleChange} name='text' placeholder={this.props.currentTodo.text} />
					<input type='Submit' value='Submit Edit' />
				</form>
			</div>
		)
	}
}

// EditForm.propTypes = {
// 	addEdits: PropTypes.func,
// 	toggleEdit: PropTypes.func,
// 	currentTodo: PropTypes.func
// }

export default EditForm;
