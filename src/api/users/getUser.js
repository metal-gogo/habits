import { firebaseDB } from 'dependencies/firebase';

import collectionKeys from 'api/collectionKeys';

const getUser = async (userId) => {
  try {
    const user = await firebaseDB
      .collection(collectionKeys.users)
      .doc(userId)
      .get();
    if (user.exists) {
      return user.data();
    }
  } catch (error) {
    console.log('Error getting user document: ', error);
  }
  return null;
};

export default getUser;
