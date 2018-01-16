import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Color extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			colorVal: ''
		}

		this.handleClick = this.handleClick.bind(this);

	}

	handleClick(e) {
		console.log(this.props.name + ' ' + this.props.colorVal)
		this.setState({name: this.props.name, colorVal: this.props.colorVal}, () => {
			this.props.toggleCheck(this.state);	
		})
		
	}

	render() {
		
		return(
			<div>
              <h1>THIS IS .</h1>
              <h1>ISN'T IT BEAUTIFUL?</h1>
              <button>GO BACK</button>
            </div>
		)
	}
} 
 
export default Color;


// <Color 
        //   key={idx}
        //   id={idx}
        //   toggleCheck={this.toggleCheck}
        //   name={color.name}
        //   colorVal={color.colorVal}
        // />