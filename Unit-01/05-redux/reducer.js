const DEFAULT_STATE = {
	face: "?(‘◉⌓◉’)?"
};

function rootReducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case "HAPPY": {
			return { ...state, face: action.payload };
		}
		case "SAD": {
			return { ...state, face: action.payload };
		}
		case "ANGRY": {
			return { ...state, face: action.payload };
		}
		case "CONFUSED": {
			return { ...state, face: action.payload };
		}
		default: {
			return { ...state };
		}
	}
}
