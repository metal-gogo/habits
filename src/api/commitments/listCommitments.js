import { firebaseDB } from 'dependencies/firebase';

import collectionKeys from 'api/collectionKeys';

const listCommitments = async (userId) => {
  const commitments = [];
  try {
    const commitmentsSnapshot = await firebaseDB
      .collection(collectionKeys.commitments)
      .where('userId', '==', userId)
      .get();
    commitmentsSnapshot.forEach((doc) => {
      commitments.push(doc.data());
    });
  } catch (error) {
    console.log('Error getting user document: ', error);
  }
  return commitments;
};

export default listCommitments;
