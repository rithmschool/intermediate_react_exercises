import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions';

const DEFAULT_STATE = {
  todos: [],
  id: 0
};

export default function games(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      action.todo.id = ++state.id;
      return Object.assign({}, state, { todos: [...state.todos, action.todo] });

    case DELETE_TODO:
      const removedTodos = state.todos.filter(todo => todo.id !== action.id);
      return Object.assign({}, state, { todos: removedTodos });

    case UPDATE_TODO:
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.todo.id) {
          todo = action.todo;
        }
        return todo;
      });
      return Object.assign({}, state, { todos: newTodos });

    default:
      return state;
  }
}
