import React from 'react';
import PropTypes from 'prop-types';
import { Router, Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './FadeTransitionRouter.scss';

const transitionTimeout = 200;

const FadeTransitionRouter = (props) => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="fade-transition-router">
        <CSSTransition key={location.key} classNames="fade" timeout={transitionTimeout}>
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);

FadeTransitionRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FadeTransitionRouter;
