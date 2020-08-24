import React, { useEffect } from 'react';

import Router from 'router/Router';

import setVH100 from 'utils/setVH100/setVH100';

import './UnauthenticatedApp.scss';

import Home from 'pages/Home';

const UnauthenticatedApp = () => {
  useEffect(() => {
    setVH100();
  }, []);

  return (
    <section className="unauthenticated-app">
      <Router hasFadeTransition className="unauthenticated-app__router">
        <Home default />
      </Router>
    </section>
  );
};

export default UnauthenticatedApp;
