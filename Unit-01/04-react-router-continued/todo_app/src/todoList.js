import React, {Component} from "react"
import ToDoItem from './ToDoItem'
import NewTodoForm from './NewTodoForm'
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import EditTodoForm from './EditTodoForm';

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = {
			todos:[
			    {title:"one ", description:"make breakfast", done: false, id:0, edit:false},
			    {title:"two ", description:"got to gym", done: false, id:1, edit:false}
			    ],
			idCounter: 1    
		};
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleRemove(id){
       const list = [...this.state.todos];
       let newList = list.filter(todo=>(todo.id !== id))
       this.setState({ todos: newList });
	}

	handleComplete(id){
       const list2 = [...this.state.todos];
       let todo = list2.find((todo)=>id===todo.id);
       todo["done"] = !todo["done"];
       //list2[id]["done"]= true;
       this.setState({ todos: list2 });
	}

	handleAdd(todo){
		var newId = this.state.idCounter + 1;
        this.setState({
        	idCounter: newId,
        	todos: [{...todo, id: newId, done:false, edit:false}, ...this.state.todos]
        });
	}
    //just an edting request
    handleEditButton(id) {
        // const newTodos = this.state.todos.map(todo=>{
        //         if(todo.id === id){
        //         	todo.edit=true;
        //         }
        //         return todo;
        // });
        // // this.setState({todos: newTodos});
        this.props.history.push(`/todos/${id}/edit`);
    }
    //editing the actual data
	handleEdit(id, newTodo){
        const list4 = [...this.state.todos];
        let newTodos = list4.map(todo=>{
        	if(id === +todo.id){
               todo = Object.assign({}, todo, newTodo, {edit:false})
             }       
            return todo;
        })
        this.setState({todos: newTodos});
        this.props.history.push('./todos');
	}
  
	render(){
		const todoList = this.state.todos.map(todo => (
//???????????  why you cant put this whole ToDoItem in a div ????????????????????
             <ToDoItem 
    		    id={todo.id}
        		done={todo.done}
        		edit={todo.edit} 
        		key={todo.id}
        		title={todo.title} 
        		description={todo.description} 
        		remove={this.handleRemove.bind(this, todo.id)}
        		complete={this.handleComplete.bind(this, todo.id)}
                editButton={this.handleEditButton.bind(this, todo.id)}
                handleEdit={this.handleEdit.bind(this, todo.id)}
    		/>
        ));   	

	    const getSingleTodo = routeProps => {
		    const id = +routeProps.match.params.id;
	        const todo = todoList.find(todo => (todo.props.id === id));
	        console.log(todo);
	        return <div>{todo}</div>
		} 

		return(
			<div>
			    <Switch>
	                <Route
	                    exact
	                    path="/todos/new"
	                    render={props => (
	                    	<div>
			                    <NewTodoForm {...props} addTodo={this.handleAdd} />
		                    </div>
	                   )}
	                />
	                <Route 
	                    exact
                        path="/todos/:id"
			            render={getSingleTodo}
			         />
	                <Route 
	                    exact 
	                    path="/todos" 
	                    render={() => 
	         	            <div>
	         	                {todoList}
	         	            </div>} 
	                 />
	                 <Route
	                    exact
	                    path="/todos/:id/edit"
	                    //it needs to be a function here!!!
	                    render={ routeParams => {
	                    	const foundTodo = this.state.todos.find(val => val.id === +routeParams.match.params.id)
	                    	console.log("route params is " + routeParams.match.params.id);
	                    	return (
		                    		<EditTodoForm todo={foundTodo} edit={this.handleEdit.bind(this, foundTodo.id)} {...routeParams} />
	                    		)
		                    }}
	                />
			         <Redirect to="/todos" />
                </Switch>
            </div>
	    );
	}
}
//component did update when using
export default withRouter(TodoList);

