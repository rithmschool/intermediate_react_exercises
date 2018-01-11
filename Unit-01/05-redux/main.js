const DEFAULT_STATE = {
	face: 'click a button'
}

function rootReducer(state=DEFAULT_STATE, action){
	switch (action.type){
		case 'HAPPY': {
			return {...state, face: '=]'}
		}
		case 'SAD': {
			return {...state, face: '=['}
		}
		case 'ANGRY': {
			return {...state, face: '>=['}
		}
		case 'CONFUSED': {
			return {...state, face: '@_@'}
		}
		default: {
			return {...state}
		}
	}
}

const store = Redux.createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

$(function(){

	var $face = $('#face')

	function render(){
		$face.text(store.getState().face)
	}

	render()
	store.subscribe(render)

    $("#happy").on("click", function(){
        store.dispatch({type: 'HAPPY'})
    });

    $("#sad").on("click", function(){
        store.dispatch({type: 'SAD'})
    });

    $("#angry").on("click", function(){
        store.dispatch({type: 'ANGRY'})
    });

    $("#confused").on("click", function(){
        store.dispatch({type: 'CONFUSED'})
    });
});