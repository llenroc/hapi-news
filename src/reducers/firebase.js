import { CONNECT_FIREBASE } from '../actions/actionTypes';

const initialState = {
	connection: null
};

export default function firebase(state = initialState, action) {
  switch (action.type) {
    case CONNECT_FIREBASE:
      return {...state, connection: action.connection}
    default:
      return state
  }
}
