var App = React.createClass({
	person: function(){
		return(<div>
				<p>Learn some information about this person!</p>
				<ul>
					<li>Name: {this.props.name}</li>,
					<li>Age: {this.props.age}</li>
				</ul>
				</div>
			)
	},
	ageCheck: function(){
		if (this.props.age >= 21) {
			return <p>Have a drink darling!</p>
		} else {
			return <p>You're too young and dumb</p>
		}
	}
,
	render:function(){
		return(
			<div>
				<h1>Hi there!</h1>
				{this.person()}
				{this.ageCheck()}
			</div>
			)
	}
})

ReactDOM.render(
	<App name='Abominbable SNowman' age='18'/>,document.getElementById('app')
	)