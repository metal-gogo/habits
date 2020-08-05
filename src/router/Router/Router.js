import React from 'react';
import PropTypes from 'prop-types';
import { Router as ReachRouter } from '@reach/router';

import FadeTransitionRouter from './FadeTransitionRouter';

const Router = ({ hasFadeTransition, ...rest }) => (
  hasFadeTransition
    /* eslint-disable react/jsx-props-no-spreading */
    ? <FadeTransitionRouter {...rest} />
    : <ReachRouter {...rest} />
    /* eslint-enable react/jsx-props-no-spreading */
);

Router.propTypes = {
  hasFadeTransition: PropTypes.bool,
};

Router.defaultProps = {
  hasFadeTransition: false,
};

export default Router;
