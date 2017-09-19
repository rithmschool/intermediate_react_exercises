import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.todo ? props.todo.id : null,
      task: props.todo ? props.todo.task : ''
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      id: nextProps.todo.id,
      task: nextProps.todo.task
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, task } = this.state;
    this.setState({ loading: true });
    this.props.saveTodo({ id, task });
  };

  render() {
    const form = (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="task">task</label>
          <input
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
            id="task"
          />
        </div>

        <div>
          <button>Save</button>
        </div>
      </form>
    );
    return <div>{form}</div>;
  }
}

export default TodoForm;
