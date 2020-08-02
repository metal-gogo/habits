import firebase from './firebase';
import firebaseConfig from './config';

// Initialize Firebase
// Check if we have already initialized an app
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const firebaseDB = firebase.firestore();

export { firebaseApp, firebaseDB };
export default firebase;
