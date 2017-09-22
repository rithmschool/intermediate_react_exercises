const defaultState = {
  todos: [],
  startId: 0
};

export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_TODO":
      let newState = { ...state };
      let newTodo = Object.assign({}, action.payload, {
        id: ++newState.startId
      });
      const newTodos = [...newState.todos, newTodo];
      return Object.assign({}, state, { todos: newTodos });

    case "REMOVE_TODO":
      let updatedTodos = state.todos.filter(
        todo => todo.id !== +action.payload
      );
      return Object.assign({}, state, { todos: updatedTodos });

    default:
      return state;
  }
}
