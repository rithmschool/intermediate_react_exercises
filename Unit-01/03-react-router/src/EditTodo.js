import React, { Component, PropTypes } from 'react';
import "./EditTodo.css"

class EditTodo extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      isCompleted: false
    }
  }

  componentWillMount() {
    this.state = {
      updatedTodo: this.props.todo
    }
  }

  handleChange(e) {
    this.setState({updatedTodo: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleEdit(this.state.updatedTodo)
    this.props.toggleEdit();
    this.context.router.push('/todos')
  }

  render() {
    return (
      <form className="EditTodo" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.updatedTodo}
          onChange={this.handleChange}
        />
        <button type="submit">Edit this todo!</button>
      </form>
    )
  }
}



export default EditTodo;