import firebase from './firebase';
import config from './config';

// Initialize Firebase
// Check if we have already initialized an app
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

const firebaseAuth = firebase.auth;
const firebaseDB = firebase.firestore();

export { firebaseApp, firebaseAuth, firebaseDB };
export default firebase;
