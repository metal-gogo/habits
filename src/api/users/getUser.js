import { firebaseDB } from 'dependencies/firebase';

import collectionKeys from 'api/collectionKeys';

const getUser = async (userToken) => {
  try {
    const user = await firebaseDB
      .collection(collectionKeys.users)
      .doc(userToken)
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
