import React, { Component } from 'react'



class ColorForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			colorName: '',
			colorValue: ''
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
		console.log(e.target)
		this.props.addColor(this.state)
	}

render() {
	return (
		<div>
		  <h1>Test</h1>
		    <form onSubmit={this.handleSubmit}>
		    	<label>Color Name</label>
		    	<input name='colorName' onChange={this.handleChange}/>
		    	<label>Color Value</label>
		     	<input type='color' name='colorValue' onChange={this.handleChange}/>
		     	<input type='submit' value='Add Color' />
		    </form>
  		</div>
	)
}

} 


export default ColorForm;