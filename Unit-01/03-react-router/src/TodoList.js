import React, { Component } from "react";
import { Route } from "react-router-dom";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentWillMount() {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let latestId = +JSON.parse(localStorage.getItem("latestId")) || 0;
    this.setState({ todos, latestId });
  }

  handleAdd(newTodo) {
    var newId = this.state.latestId + 1;
    this.setState(
      {
        latestId: newId,
        todos: [{ ...newTodo, id: newId }, ...this.state.todos]
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
        localStorage.setItem("latestId", this.state.latestId);
        this.props.history.push("/todos");
      }
    );
  }

  handleEdit(id, updatedTodo) {
    let newTodos = this.state.todos.map(todo => {
      if (id === todo.id) {
        todo = Object.assign({}, todo, updatedTodo, {
          isShowingEditForm: false
        });
      }
      return todo;
    });
    this.setState({ todos: newTodos }, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
      this.props.history.push("/todos");
    });
  }

  handleDelete(id) {
    let newTodos = this.state.todos.filter(t => t.id !== id);
    this.setState({ todos: newTodos }, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
      this.props.history.push("/todos");
    });
  }

  toggle(id) {
    let newTodos = this.state.todos.map(todo => {
      if (id === todo.id) {
        todo = Object.assign({}, todo, { isComplete: !todo.isComplete });
      }
      return todo;
    });
    this.setState({ todos: newTodos }, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        description={todo.description}
        handleDelete={this.handleDelete.bind(this, todo.id)}
        handleEdit={this.handleEdit.bind(this, todo.id)}
        toggleComplete={this.toggle.bind(this, todo.id)}
        isComplete={todo.isComplete}
      />
    ));

    return (
      <div>
        <Route
          path="/todos/new"
          component={props => (
            <TodoForm {...props} handleSubmit={this.handleAdd} />
          )}
        />
        <Route
          exact
          path="/todos/:id"
          component={props =>
            todos.find(t => t.props.id === +props.match.params.id) || null}
        />
        <Route
          exact
          path="/todos/:id/edit"
          component={props => {
            let todo =
              todos.find(t => t.props.id === +props.match.params.id) || null;
            return (
              <TodoForm
                {...props}
                handleSubmit={this.handleEdit.bind(this, todo.props.id)}
                title={todo.props.title}
                description={todo.props.description}
              />
            );
          }}
        />
        <Route exact path="/todos" component={() => <div>{todos}</div>} />
      </div>
    );
  }
}

export default TodoList;
