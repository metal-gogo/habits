import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseAuth } from '../firebase';

import config from './config';

export default () => (
  <StyledFirebaseAuth uiConfig={config} firebaseAuth={firebaseAuth()} />
);
