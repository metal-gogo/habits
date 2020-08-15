import { firebaseDB } from 'dependencies/firebase';

import collectionKeys from 'api/collectionKeys';

const getRealtimeCommitments = (userId, callback) => firebaseDB
  .collection(collectionKeys.commitments)
  .where('userId', '==', userId)
  .onSnapshot(callback);

export default getRealtimeCommitments;
