import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions';

class TodoFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={(e) => {
          e.preventDefault();
          // this.props.dispatch(addTodo(this.state))
          this.props.addTodo(this.state);
          this.props.history.push('/todos');
        }}>
          <div className="form-group">
          <label htmlFor="todo-input">Todo:</label>
          <input style={{margin: "10px"}} onChange={this.handleChange}
                 value={this.state.text}
                 id="todo-input" placeholder="something important"
                 className="form-control" />
          <button style={{margin: "10px"}}
                  type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {addTodo};
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   addTodo: (todo) => {
//     dispatch(addTodo(todo))
//   }
// });

export default connect(undefined,mapDispatchToProps)(TodoFormContainer);
