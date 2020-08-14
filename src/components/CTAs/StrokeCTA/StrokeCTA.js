import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './StrokeCTA.scss';

import includePaintWorklet from 'utils/includePaintWorklet';

import DefaultCTA from 'components/CTAs/DefaultCTA';

const StrokeCTA = ({
  onClick, className, type, children, ...props
}) => {
  useEffect(() => {
    includePaintWorklet('bezel.js');
  }, []);

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <DefaultCTA
      className={`stroke-cta ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </DefaultCTA>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

StrokeCTA.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

StrokeCTA.defaultProps = {
  onClick: () => {},
  className: '',
};

export default StrokeCTA;
