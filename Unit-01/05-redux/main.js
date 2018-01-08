const DEFAULT_STATE = {
	emoji: ''
};


function rootReducer(state = DEFAULT_STATE, action){
	switch (action.type){
		case 'HAPPY': {
			return {...state, emoji: "o(〃＾▽＾〃)o"};
		}
		case 'SAD': {
			return {...state, emoji: "(๑´╹‸╹`๑)"};
		}
		case 'ANGRY': {
			return {...state, emoji: "⋌༼ •̀ ⌂ •́ ༽⋋"};
		}
		case 'CONFUSED': {
			return {...state, emoji: "〈(゜。゜)"}
		}
		default: {
			return {...state};
		}
	}
}

const store = Redux.createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const face = document.getElementById('face');

function render(){
	face.innerText = store.getState().emoji
}

render();
store.subscribe(render)

document.getElementById('happy').addEventListener('click', () => {
  store.dispatch({type: 'HAPPY' });
});

document.getElementById('sad').addEventListener('click', () => {
  store.dispatch({type: 'SAD' });
});

document.getElementById('angry').addEventListener('click', () => {
  store.dispatch({type: 'ANGRY' });
});

document.getElementById('confused').addEventListener('click', () => {
  store.dispatch({type: 'CONFUSED' });
});