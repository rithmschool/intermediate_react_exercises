import React, { Component } from "react";
import "./ColorForm.css";

class ColorForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			hex: "#FFFFFF"
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handeleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.addColor();
		this.history.push("/colors");
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={this.handleChange}
						name="color"
						placeholder="name your color"
						value={this.state.name}
					/>
					<input
						type="color"
						onChange={this.handleChange}
						value={this.state.hex}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}
