import firebase from 'dependencies/firebase';

import removeEmptyOrNilValues from 'utils/removeEmptyOrNilValues';

import composeProviderData from './composeProviderData';

const composeUserData = (firebaseUser) => removeEmptyOrNilValues({
  displayName: firebaseUser.displayName,
  email: firebaseUser.email,
  emailVerified: firebaseUser.emailVerified,
  phoneNumber: firebaseUser.phoneNumber,
  photoURL: firebaseUser.photoURL,
  isAnonymous: firebaseUser.isAnonymous,
  uid: firebaseUser.uid,
  providers: firebaseUser.providerData.map(composeProviderData),
  createdAt: firebase.firestore.Timestamp.now(),
});

export default composeUserData;
