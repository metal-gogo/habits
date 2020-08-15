import React, { useEffect, useState } from 'react';
import { firebaseAuth } from 'dependencies/firebase';

import * as UsersApi from 'api/users';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unregisterAuthObserver = firebaseAuth().onAuthStateChanged(async (firebaseUser) => {
      try {
        let applicationUser = null;
        if (firebaseUser) {
          const userId = firebaseUser.uid;
          const dbUser = await UsersApi.getUser(userId);
          if (dbUser) {
            applicationUser = await UsersApi.putUser(userId, firebaseUser);
          } else {
            applicationUser = await UsersApi.postUser(userId, firebaseUser);
          }
        }
        setUser(applicationUser);
      } catch (e) {
        setUser(null);
      }
    });

    return unregisterAuthObserver;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        logout: () => firebaseAuth().signOut(),
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
