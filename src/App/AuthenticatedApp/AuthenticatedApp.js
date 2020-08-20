import React from 'react';

import Router from 'router/Router';

import Dashboard from 'pages/Dashboard';
import NewCommitment from 'pages/NewCommitment';

import TheHeader from 'components/TheHeader';

const UnauthenticatedApp = () => (
  <section className="unauthenticated-app">
    <TheHeader />
    <Router hasFadeTransition>
      <Dashboard default />
      <NewCommitment path="new-commitment" />
    </Router>
  </section>
);

export default UnauthenticatedApp;
