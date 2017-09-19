import rootReducer from "./reducers.js";
import { addTodo, removeTodo } from "./actions.js";

const store = Redux.createStore(
  rootReducer,
  Redux.compose(
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

document.addEventListener("DOMContentLoaded", () => {
  let todoList = document.querySelector("ul");
  let startId = 1;

  todoList.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON") {
      store.dispatch(removeTodo(event.target.dataset.id));
      event.target.parentElement.remove();
    }
  });

  function createTodo(newTodo) {
    let newLi = document.createElement("li");
    let newHTML = `
      <span>${newTodo.title} - ${newTodo.description}</span>
      <button data-id=${newTodo.id}>X</button>
    `;
    newLi.innerHTML = newHTML;
    todoList.append(newLi);
  }

  function displayTodos() {
    let currentState = store.getState();
    currentState.todos.forEach(createTodo);
  }

  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let newTodo = {
      title: event.target.title.value,
      description: event.target.description.value
    };
    store.dispatch(addTodo(newTodo));
    let currentState = store.getState();
    let mostRecentTodo = currentState.todos[currentState.todos.length - 1];
    createTodo(mostRecentTodo);
    form.reset();
  });
});
