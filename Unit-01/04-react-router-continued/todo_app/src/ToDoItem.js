import React from "react";
import styled from 'styled-components';
import {Route, Link} from "react-router-dom";

    // id={todo.id}
    //     		done={todo.done}
    //     		edit={todo.edit} 
    //     		key={todo.id}
    //     		title={todo.title} 
    //     		description={todo.description} 
    //     		remove={this.handleRemove.bind(this, todo.id)}
    //     		complete={this.handleComplete.bind(this, todo.id)}
    //             editButton={this.handleEditButton.bind(this, todo.id)}
    //             handleEdit={this.handleEdit.bind(this, todo.id)}
const ListItem = styled.li`
   text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;

const ToDoItem = props => {
	//change to const???
	let todo;
    	let buttonText = props.done ? "Mark Incomplete" : "Mark Complete"
	    todo = (
			<div>
			    <ListItem done={props.done} key={props.id}> 
			         <Link to={`/todos/${props.id}`}> {props.title} </Link> 
			         <div> {props.description} </div>
			    </ListItem>
			    <button onClick={props.complete}>{buttonText}</button>
			    <button onClick={props.remove}>Remove</button>
			    <button onClick={props.editButton}>Edit a Todo</button>
		    </div>  
		 )

	return todo;
}

export default ToDoItem;


