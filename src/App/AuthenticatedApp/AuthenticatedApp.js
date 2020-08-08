import React from 'react';

import Router from 'router/Router';

import Dashboard from 'pages/Dashboard';

const UnauthenticatedApp = () => (
  <section className="unauthenticated-app">
    <Router hasFadeTransition>
      <Dashboard default />
    </Router>
  </section>
);

export default UnauthenticatedApp;
