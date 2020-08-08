import React from 'react';
import { useAuth } from 'contexts/auth';

const UserContext = React.createContext();

const UserProvider = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <UserContext.Provider value={useAuth().user} {...props} />
);

const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };
