export function addTodo(todo) {
  return {
    type: "ADD_TODO",
    payload: todo
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    payload: id
  };
}
