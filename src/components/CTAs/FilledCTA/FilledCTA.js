import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './FilledCTA.scss';

import includePaintWorklet from 'utils/includePaintWorklet';

import DefaultCTA from 'components/CTAs/DefaultCTA';

const FilledCTA = ({
  onClick, className, type, children, ...props
}) => {
  useEffect(() => {
    includePaintWorklet('/bezel.js');
  }, []);

  return (
    <DefaultCTA
      className={`filled-cta ${className}`}
      type={type}
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </DefaultCTA>
  );
};

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
