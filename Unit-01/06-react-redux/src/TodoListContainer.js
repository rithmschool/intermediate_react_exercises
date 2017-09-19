import React from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { deleteTodo } from './actions';

class TodoListContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={this.props.todos} deleteTodo={this.props.deleteTodo} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, { deleteTodo })(TodoListContainer);
