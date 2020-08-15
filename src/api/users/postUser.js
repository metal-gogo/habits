import { firebaseDB } from 'dependencies/firebase';

import collectionKeys from 'api/collectionKeys';

import composeUserData from './utils/composeUserData';

const postUser = async (userId, firebaseUser) => {
  try {
    const newUser = composeUserData(firebaseUser, true);
    await firebaseDB
      .collection(collectionKeys.users)
      .doc(userId)
      .set(newUser);
    return newUser;
  } catch (error) {
    console.error('Error saving user document: ', error);
  }
  return null;
};

export default postUser;
