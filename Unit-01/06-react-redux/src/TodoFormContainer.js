import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addTodo, updateTodo } from './actions';
import TodoForm from './TodoForm';

class TodoFormContainer extends React.Component {

  state = {
    redirect: false
  }

  saveTodo = ({id, task }) => {
    if (id) {
      this.props.updateTodo({ id, task })
    } else {
      this.props.addTodo({ task })
    }

    this.setState({ redirect: true })
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/todos" /> :
          <TodoForm
            todo={this.props.todo}
            saveTodo={this.saveTodo}
          />
        }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { match } = props;
  if (match.params.id) {
    return {
      todo: state.todos.find(todo => todo.id === +match.params.id)
    }
  }
  return { todo: null };
}

export default connect(mapStateToProps, { addTodo, updateTodo })(TodoFormContainer);
