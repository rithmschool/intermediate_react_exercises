import React, {Component} from 'react';

export default class Color extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: this.getRandomColor()
		}
		this.handleClick = this.handleClick.bind(this)
	}


	getRandomColor() {
		return '#'+Math.floor(Math.random()*16777215).toString(16);
	}

	handleClick(){
		console.log(this.getRandomColor())
		this.setState({color: this.getRandomColor()})
	}

render() {
	return(
		<div style={ {backgroundColor: this.state.color} }>
			<p style= {{color: "{{this.state.color}}"}}>This is a NEW child component</p>
			<button onClick={this.handleClick}>
				Change MyColor to {this.state.color}
			</button>
		</div>
		)
	}
}