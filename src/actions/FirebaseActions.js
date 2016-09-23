import { CONNECT_FIREBASE } from './actionTypes';
import firebase from 'firebase'

export function initializeFirebase() {
  var config = {
    databaseURL: 'https://hacker-news.firebaseio.com/'
  }

  return {
		type: CONNECT_FIREBASE,
    connection: firebase.initializeApp(config)
	}
}
