import removeEmptyOrNilValues from 'utils/removeEmptyOrNilValues';

const composeProviderData = (provider) => removeEmptyOrNilValues({
  displayName: provider.displayName,
  email: provider.email,
  phoneNumber: provider.phoneNumber,
  photoURL: provider.photoURL,
  providerType: provider.providerId,
  uid: provider.uid,
});

export default composeProviderData;
