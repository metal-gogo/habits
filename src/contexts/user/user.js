import React from 'react';
import { useAuth } from 'contexts/auth';

const UserContext = React.createContext();

/* eslint-disable react/jsx-props-no-spreading */
const UserProvider = (props) => (
  <UserContext.Provider value={useAuth().user} {...props} />
);
/* eslint-enable react/jsx-props-no-spreading */

const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };
