import removeEmptyOrNilValues from 'utils/removeEmptyOrNilValues';

import composeProviderData from './composeProviderData';

const composeUserData = (user) => removeEmptyOrNilValues({
  displayName: user.displayName,
  email: user.email,
  hasVerifiedEmail: user.emailVerified,
  phoneNumber: user.phoneNumber,
  photoURL: user.photoURL,
  isAnonymous: user.isAnonymous,
  uid: user.uid,
  providers: user.providerData.map(composeProviderData),
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

export default composeUserData;
