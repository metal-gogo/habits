import firebase, { firebaseDB } from 'dependencies/firebase';

import collectionKeys from 'api/collectionKeys';

import composeCommitmentData from './utils/composeCommitmentData';

const postCommitment = async (userId, commitment) => {
  try {
    const newCommitment = composeCommitmentData({
      ...commitment,
      userId,
      createdAt: firebase.firestore.Timestamp.now(),
    });
    await firebaseDB
      .collection(collectionKeys.commitments)
      .add(newCommitment);
    return newCommitment;
  } catch (error) {
    console.error('Error saving commitment document: ', error);
  }
  return null;
};

export default postCommitment;
