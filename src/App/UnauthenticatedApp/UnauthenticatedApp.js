import React from 'react';

import Router from 'router/Router';

import Home from 'pages/Home';

const UnauthenticatedApp = () => (
  <section className="unauthenticated-app">
    <Router hasFadeTransition>
      <Home default />
    </Router>
  </section>
);

export default UnauthenticatedApp;
