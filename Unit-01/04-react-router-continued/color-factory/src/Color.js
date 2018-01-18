import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Color extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			colorVal: ''
		}

	}

	render() {
		const style = {
			height: '100vh',
			backgroundColor: `${this.props.colorVal}`
		}
		return (
			<div style={style}>
				<h1>THIS IS {this.props.colorName.toUpperCase()}.</h1>
				<h1>ISN'T IT BEAUTIFUL?</h1>
			</div>
		)
	}
}

export default Color;
