import TodoList from './TodoList';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = undefined;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
