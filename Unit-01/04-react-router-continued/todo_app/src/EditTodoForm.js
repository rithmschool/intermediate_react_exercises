//When the form is submitted, it should rename the todo's task.
//Depending on the UI which you choose, you may have to use a few 
//lifecycle hooks to ensure that your application works as expected.

//As a bonus, store your todos in localStorage! When using localStorage, 
//you will need to use a life cycle method in order for this to work properly.

import React, {Component} from "react";

class EditTodoForm extends Component{
	constructor(props){
		super(props);
		this.state={
            title: "",
            description: ""
        }
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
    	e.preventDefault();
        this.props.edit(this.state);
        this.props.history.push("/todos");

    }

	render(){

		return(
             <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Edit this todo</p>
                    <p>{this.props.todo.title}</p>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="put the new title here"
                     />
                    <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder={this.props.getTodo}
                     />
                     <input type="submit" value="Edit this todo" />
                </form>     
             </div>
		)
	}
}

// EditTodoForm.defaultProps = {
//     title: "",
//     description: ""
// }

export default EditTodoForm;