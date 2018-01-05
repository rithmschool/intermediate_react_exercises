// set up store
const store = Redux.createStore(
  moodReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// subscribe renderFace to face changes
const face = document.getElementById('face');
function renderFace() {
  face.innerHTML = store.getState().face;
}
renderFace();
store.subscribe(renderFace);

// listeners for the buttons
document.getElementById('happy').addEventListener('click', e => {
  store.dispatch(happyFace());
});
document.getElementById('sad').addEventListener('click', e => {
  store.dispatch(sadFace());
});
document.getElementById('angry').addEventListener('click', e => {
  store.dispatch(angryFace());
});
document.getElementById('confused').addEventListener('click', e => {
  store.dispatch(confusedFace());
});
