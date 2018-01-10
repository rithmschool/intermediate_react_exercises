const store = Redux.createStore(
  faces,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function render() {
  const face = document.getElementById('face');
  face.innerHTML = store.getState().face;
};


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.buttons').addEventListener('click', e => {
    e.preventDefault();
    if(e.target.id === 'happy') {store.dispatch(happyFace())}
    if(e.target.id === 'sad') {store.dispatch(sadFace())}
    if(e.target.id === 'confused') {store.dispatch(confusedFace())}
    if(e.target.id === 'angry') {store.dispatch(angryFace())}
    
  });
  render();
  store.subscribe(render);
});