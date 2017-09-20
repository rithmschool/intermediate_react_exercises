var App = React.createClass({
    render: function(){
        return (
                <div>
                    <h1>Hello World!</h1>
                    <h2>My name is {this.props.name}</h2>
                    <h2>My name is {this.props.name2}</h2>
                    <h2>My name is {this.props.name3}</h2>
                </div>
            )
    }
})

ReactDOM.render(
	<App name='Aaron' name2 = 'Matt' name3 = 'Abominable Snowman'/>,
	document.getElementById('app')
)