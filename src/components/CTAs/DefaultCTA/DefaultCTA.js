import React from 'react';
import PropTypes from 'prop-types';

import './DefaultCTA.scss';

/* eslint-disable react/jsx-props-no-spreading, react/button-has-type */
const DefaultCTA = ({
  onClick, className, type, children, ...props
}) => (
  <button className={`default-cta ${className}`} type={type} onClick={onClick} {...props}>
    {children}
  </button>
);
/* eslint-enable react/jsx-props-no-spreading, react/button-has-type */

DefaultCTA.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

DefaultCTA.defaultProps = {
  onClick: () => {},
  className: '',
};

export default DefaultCTA;
