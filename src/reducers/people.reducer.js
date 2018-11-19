const initialState = {
  isFatching: false,
  data: []
};

export default (state= initialState, action) => {
  switch(action.type) {
    case 'REQUEST_FETCH_PEOPLE': {
      debugger
      return {...state, isFatching: true};
    }
    case 'RECEIVE_FETCH_PEOPLE': {
      debugger
      return {...state, isFatching: false, data: action.payload}
    }
    default:
      return state;
  }
}