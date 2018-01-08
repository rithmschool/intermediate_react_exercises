import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Todoform extends Component {
  constructor(props){
  	super(props)
  	this.state = {
      title: this.props.title,
      description: this.props.description,
      error: false
  	}

    this.handleChange = this.handleChange.bind(this)
  	this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
  	this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()

    if(this.state.title && this.state.description){
      const newTodo = {...this.state}
      this.props.handleSubmit(newTodo)
      
      // Clear out inputs
      this.setState({
        title: '',
        description: '',
        error: false
      })


      this.props.history.push('/todos')
    } else {
      this.setState({error: true})
    }

  }

  render() {
    let buttonLabel = this.props.title ? "Edit this todo" : "Add this todo"
    let error = this.state.error? <p style={{color: 'red'}}>You must enter a title and description</p> : null
    const title = this.props.title ? <h1>Edit this todo</h1> : <h1>Add a todo</h1>
    return (
      <div>
        {title}
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title:</label>
            <input
              className='form-control'
              type='text'
              name='title'
              id='title'
              placeholder='what is your title'
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description:</label>
            <input
              className='form-control'
              type='text'
              name='description'
              id='description'
              placeholder='what is your description'
              onChange={this.handleChange}
              value={this.state.description}
            />
            {error}
          </div>
          <button type = "submit" className='btn btn-primary'>{buttonLabel}</button>
        </form>
      </div>
    );
  }
}

Todoform.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
}

Todoform.defaultProps = {
  title: "",
  description: ""
}

export default Todoform;