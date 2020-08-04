import { firebaseAuth } from '../firebase';

const config = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful.
  // Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebaseAuth.EmailAuthProvider.PROVIDER_ID,
    firebaseAuth.GoogleAuthProvider.PROVIDER_ID,
    firebaseAuth.PhoneAuthProvider.PROVIDER_ID,
  ],
};

export default config;
