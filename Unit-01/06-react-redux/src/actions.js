export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    todo
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}
