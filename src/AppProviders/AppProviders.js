import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from 'contexts/auth';
import { UserProvider } from 'contexts/user';

const AppProviders = ({ children }) => (
  <AuthProvider>
    <UserProvider>{children}</UserProvider>
  </AuthProvider>
);

AppProviders.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppProviders;
