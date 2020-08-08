import React from 'react';
import PropTypes from 'prop-types';
import FirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { firebaseAuth } from '../firebase';

import config from './config';

const StyledFirebaseAuth = ({ className }) => (
  <FirebaseAuth
    uiConfig={config}
    firebaseAuth={firebaseAuth()}
    className={`${className} styled-firebase-auth`}
  />
);

StyledFirebaseAuth.propTypes = {
  className: PropTypes.string,
};

StyledFirebaseAuth.defaultProps = {
  className: '',
};

export default StyledFirebaseAuth;
