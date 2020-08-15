import firebase from 'dependencies/firebase';

import removeEmptyOrNilValues from 'utils/removeEmptyOrNilValues';

import composeProviderData from './composeProviderData';

const composeUserData = (firebaseUser, isNewUser = true) => {
  const user = {
    displayName: firebaseUser.displayName,
    email: firebaseUser.email,
    emailVerified: firebaseUser.emailVerified,
    phoneNumber: firebaseUser.phoneNumber,
    photoURL: firebaseUser.photoURL,
    isAnonymous: firebaseUser.isAnonymous,
    uid: firebaseUser.uid,
    providers: firebaseUser.providerData.map(composeProviderData),
  };
  if (isNewUser) {
    user.createdAt = firebase.firestore.Timestamp.now();
  } else {
    user.updatedAt = firebase.firestore.Timestamp.now();
  }
  return removeEmptyOrNilValues(user);
};

export default composeUserData;
