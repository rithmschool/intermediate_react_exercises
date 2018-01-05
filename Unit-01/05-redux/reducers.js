const DEFAULT_STATE = {
  face: '┐( ˘_˘ )┌	'
};

function moodReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'happy':
      return { ...state, face: action.payload };
    case 'sad':
      return { ...state, face: action.payload };    
    case 'angry':
      return { ...state, face: action.payload };
    case 'confused':
      return { ...state, face: action.payload };
    default:
      return state;
  }
}