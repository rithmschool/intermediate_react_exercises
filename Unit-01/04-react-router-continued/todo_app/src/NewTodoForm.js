import React, {Component} from "react";

class NewTodoForm extends Component{
	constructor(props){
        super(props);

        this.state={
            title: "",
            description: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
   
    handleChange(e){
    	this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e){
    	e.preventDefault();
        this.props.addTodo(this.state);
        //reset state once the new todo has been created
        this.setState({
            title: "",
            description: "", 
            done: false
        });
        this.props.history.push("/todos");
    }

	render(){
		return(
			<div>
             <form onSubmit={this.handleSubmit}>
                 <h3>Create a new Todo</h3>
                 
                 <input 
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Enter a title"
                />

                <input 
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="Enter a description"
                />
                
                <input type="submit" value="create new todo" />
                
             </form>
			</div>
		)
	}
}

export default NewTodoForm;
