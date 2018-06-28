import React, {Component} from 'react';
import './TodoList.css';
import Todo from './Todo'
import Todoform from './Todoform'
import {ListGroup, Row, Grid} from 'react-bootstrap'
import {Route, Switch, Link, Redirect, withRouter} from 'react-router-dom'

const Home = () => <h1>This is the home</h1>

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state={
      todos: [
        {
          id: 1,
          title: "Grocery",
          description: "Buy food so I can have dinner",
        },
        {
          id: 2,
          title: "Workout",
          description: "Exercise so I can stop being fat",
        },
        {
          id: 3,
          title: "Learn React",
          description: "Learn react router and redux",
        }
      ],
      nextId: 4
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(newTodo){
    this.setState({
      todos: [{...newTodo, id: this.state.nextId}, ...this.state.todos],
      // todos: this.state.todos.concat({...newTodo, id: this.state.nextId}),
      nextId: this.state.nextId + 1
    })
  }

  handleEdit(id, updatedTodo){
    let newTodos = this.state.todos.map(todo => {
      if(id === todo.id){
        // First assign it all of the old attributes then overwrite it with updated
        todo = Object.assign({}, todo, updatedTodo)
      }
      return todo
    })
    this.setState({todos: newTodos})
  }

  handleDelete(idx){
    var newTodo = this.state.todos.filter(t => t.id !== idx)
    this.setState({todos: newTodo})
  }

  render(){
    const todos = this.state.todos.map(todo => (
      <Todo 
        key={todo.id}
        id={todo.id}
        title={todo.title} 
        description={todo.description}
        deleteTodo={this.handleDelete.bind(this, todo.id)}
      />
    ))

    // const todosProps = routeProps => {
    //   const todo = this.state.todos.map(todo => (
    //     <Todo 
    //       key={todo.id}
    //       id={todo.id}
    //       title={todo.title} 
    //       description={todo.description}
    //       deleteTodo={this.handleDelete.bind(this, todo.id)}
    //       {...routeProps}
    //     />
    //   ))
    //   return <ListGroup>{todo}</ListGroup>
    // }

    const singleTodo = routeProps => {
      
      const id = +routeProps.match.params.id
      const todo = this.state.todos.find(todo => id===todo.id)
      return (<Todo
        key={todo.id}
        id={todo.id}
        title={todo.title} 
        description={todo.description}
        deleteTodo={this.handleDelete.bind(this, todo.id)}
        {...routeProps}
      />)
    }

    const editForm = routeProps => {
      const id = +routeProps.match.params.id
      const todo = todos.find(todo => id===todo.props.id)
      return (<Todoform
        title={todo.props.title}
        description={todo.props.description}
        handleSubmit={this.handleEdit.bind(this, todo.props.id)}
        {...routeProps}
        />)
    }


    return(
      <div className="App">
        <Grid>
          <Row>
            <ul>
              <li>
                <Link className='pointer-link' to='/'>Home</Link>
              </li>
              <li>
                <Link to='/todos'>See todos</Link>
              </li>
              <li>
                <Link to='/todos/new'>Add todo</Link>
              </li>
            </ul>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/todos' exact render={() => <ListGroup>{todos}</ListGroup>} />
              <Route path='/todos/new' exact component={routeProps => <Todoform handleSubmit={this.handleAdd} {...routeProps} />}/>
              <Route path='/todos/:id/edit' component={editForm} />
              <Route path='/todos/:id' render={singleTodo} />
              <Redirect to='/todos' />
            </Switch>

          </Row>
        </Grid>
      </div>
    )
  }
}


export default TodoList;
