const store = Redux.createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const face = document.getElementById("face");
function render() {
  face.innerHTML = store.getState().face;
}

render();
store.subscribe(render);

document.getElementById("happy").addEventListener("click", () => {
  store.dispatch(happy());
});
document.getElementById("sad").addEventListener("click", () => {
  store.dispatch(sad());
});

document.getElementById("angry").addEventListener("click", () => {
  store.dispatch(angry());
});
document.getElementById("confused").addEventListener("click", () => {
  store.dispatch(confused());
});
