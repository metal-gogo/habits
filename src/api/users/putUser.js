import firebase, { firebaseDB } from 'dependencies/firebase';

import collectionKeys from 'api/collectionKeys';

import composeUserData from './utils/composeUserData';

const putUser = async (userId, firebaseUser) => {
  try {
    const user = composeUserData({
      ...firebaseUser,
      updatedAt: firebase.firestore.Timestamp.now(),
    });
    await firebaseDB
      .collection(collectionKeys.users)
      .doc(userId)
      .update(user);
    return user;
  } catch (error) {
    console.error('Error saving user document: ', error);
  }
  return null;
};

export default putUser;
