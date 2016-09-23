import { combineReducers } from 'redux';
import stargazers from './stargazers';
import firebase from './firebase'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  stargazers,
  routing: routerReducer,
  firebase: firebase
});

export default rootReducer;
