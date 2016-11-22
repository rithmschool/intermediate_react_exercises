import React from "react"
import {render} from "react-dom"

export const Person = React.createClass({

	isLegal(){
		if(this.props.age>=21){
			return "Have a drink!"
		} else {
			return "You must be 21"
		}
	},
	
	isLongName(){
		if(this.props.name.length > 8){
			var shortName = this.props.name.slice(0,6);
			return shortName;
		} else {
			return this.props.name;
		}
	},

	render(){
		const hobbies=["sailing", "coding", "biking", "drinking", "cooking"];
		
		return(
			<p>
				Learn some information about: {this.isLongName()} is {this.props.age}<br/>
				{this.isLegal()}<br/>
				Favorite hobby: {hobbies[Math.floor(Math.random() * 5)]}
			</p>
		)
	}
});
