import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Color extends Component {
	constructor(props) {
		super(props);


	}


	render() {
		const style = {
			backgroundColor: 'red'
		}
		return(
			<div style={style}>
				<h1>We are in the Color!! {this.props.name}</h1>
				<p>{this.props.name}</p>
  			</div>
		)
	}
} 
 
export default Color;