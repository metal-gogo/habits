import React, { useEffect } from 'react';

import Router from 'router/Router';

import setVH100 from 'utils/setVH100/setVH100';

import './AuthenticatedApp.scss';

import Dashboard from 'pages/Dashboard';
import NewCommitment from 'pages/NewCommitment';

import TheHeader from 'components/TheHeader';

const AuthenticatedApp = () => {
  useEffect(() => {
    setVH100();
  }, []);

  return (
    <section className="authenticated-app">
      <TheHeader />
      <Router hasFadeTransition className="authenticated-app__router">
        <Dashboard default />
        <NewCommitment path="new-commitment" />
      </Router>
    </section>
  );
};

export default AuthenticatedApp;
