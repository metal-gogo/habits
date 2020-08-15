import removeEmptyOrNilValues from 'utils/removeEmptyOrNilValues';

const composeProviderData = (firebaseUserProvider) => removeEmptyOrNilValues({
  displayName: firebaseUserProvider.displayName,
  email: firebaseUserProvider.email,
  phoneNumber: firebaseUserProvider.phoneNumber,
  photoURL: firebaseUserProvider.photoURL,
  providerType: firebaseUserProvider.providerId,
  uid: firebaseUserProvider.uid,
});

export default composeProviderData;
