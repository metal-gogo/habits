import { firebaseDB } from 'dependencies/firebase';

import collectionKeys from 'api/collectionKeys';

const deleteCommitment = async (commitmentId) => {
  try {
    await firebaseDB
      .collection(collectionKeys.commitments)
      .doc(commitmentId)
      .delete();
  } catch (error) {
    console.error('Error deleting commitment document: ', error);
  }
  return null;
};

export default deleteCommitment;
