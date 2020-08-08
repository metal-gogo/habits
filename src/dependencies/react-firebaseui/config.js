import { firebaseAuth } from '../firebase';

const config = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to / after sign in is successful.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebaseAuth.EmailAuthProvider.PROVIDER_ID,
    firebaseAuth.GoogleAuthProvider.PROVIDER_ID,
    firebaseAuth.PhoneAuthProvider.PROVIDER_ID,
  ],
};

export default config;
