import React from "react"
import {Person, hobbies} from "./Person.jsx"

export const App = React.createClass({
	render(){
		const people=[{name:"Elie", age:19}, {name:"Matt", age:28}, {name:"Tim", age:27}, {name:"Janey", age:18}, {name:"Cassandra", age:30}]
		var aboutPeople = people.map((obj,idx) => <li key={idx}><Person name={obj.name} age={obj.age}/></li>)
		var style={color: "red"}
		return (
			<div>
				{this.props.info}
				<h1 style={style}>Hello World!</h1>
				<ul style={style}>
					{aboutPeople}
				</ul>
			</div>
		)
	}
});