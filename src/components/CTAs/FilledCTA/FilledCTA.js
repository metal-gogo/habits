import React from 'react';
import PropTypes from 'prop-types';

import './FilledCTA.scss';

import DefaultCTA from 'components/CTAs/DefaultCTA';

/* eslint-disable react/jsx-props-no-spreading */
const FilledCTA = ({
  onClick, className, type, children, ...props
}) => (
  <DefaultCTA
    className={`filled-cta ${className}`}
    type={type}
    onClick={onClick}
    {...props}
  >
    {children}
  </DefaultCTA>
);
/* eslint-enable react/jsx-props-no-spreading */

FilledCTA.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

FilledCTA.defaultProps = {
  onClick: () => {},
  className: '',
};

export default FilledCTA;
