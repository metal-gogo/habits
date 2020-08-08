import React, { useEffect, useState } from 'react';
import { firebaseAuth } from 'dependencies/firebase';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unregisterAuthObserver = firebaseAuth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unregisterAuthObserver;
  });

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
