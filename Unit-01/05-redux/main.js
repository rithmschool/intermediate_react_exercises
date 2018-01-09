const DEFAULT_STATE = {
  face:"<&_&>"
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'HAPPY': {
      return { ...state,  face: "¯\_(ツ)_/¯"};
    }
    case 'SAD': {
      return { ...state, face: "《〠_〠》"};
    }
    case 'ANGRY': {
      return { ...state, face: "(◡‿◡✿)"};
    }
    case 'CONFUSED': {
      return { ...state, face: "(｡♥‿♥｡)"};
    }
    default: {
      return { ...state };
    }
  }
}

const store = Redux.createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const face = document.getElementById('face');
function render() {
  face.innerText = store.getState().face.toString();
}

render();
store.subscribe(render);

document.getElementById('happy').addEventListener('click', () => {
  store.dispatch({ type: 'HAPPY' });
});
document.getElementById('sad').addEventListener('click', () => {
  store.dispatch({ type: 'SAD' });
});
document.getElementById('angry').addEventListener('click', () => {
  store.dispatch({ type: 'ANGRY' });
});
document.getElementById('confused').addEventListener('click', () => {
  store.dispatch({ type: 'CONFUSED' });
});