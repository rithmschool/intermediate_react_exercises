import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';



class ColorForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			colorName: '',
			colorVal: '#6bd395',
			completed: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addColor(this.state)
		this.setState({
			completed: !this.state.completed
		})
	}

	render() {
		return (
			this.state.completed ? <Redirect to='/colors' /> :
				<div>
					<h1>Test</h1>
					<form>
						<label>Color Name</label>
						<input name='colorName' onChange={this.handleChange} />
						<label>Color Value</label>
						<input type='color' name='colorVal' onChange={this.handleChange} />
						<Link to={`/colors`}><input type='submit' value='Add Color' onClick={this.handleSubmit} /></Link>
					</form>
				</div>
		)
	}

}


export default ColorForm;