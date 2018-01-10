const DEFAULT_TODOS_STATE = {
	face:  '٩(◕‿◕｡)۶'
}

function faces(state=DEFAULT_TODOS_STATE, action){
    switch (action.type) {
    case HAPPY_FACE: {
        return { ...state, face: action.payload }
    }
    case SAD_FACE: {
        return { ...state, face: action.payload }
		}
		case ANGRY_FACE: {
        return { ...state, face: action.payload }
    }
    case CONFUSED_FACE: {
        return { ...state, face: action.payload }
    }
    default:
        // by default return original state
        return { ...state };
    }
}
