import React from 'react';
import PropTypes from 'prop-types';

import './DeleteCTA.scss';

import { ReactComponent as IconTrash } from 'icons/trash.svg';

/* eslint-disable react/jsx-props-no-spreading */
const DeleteCTA = ({
  onClick, className, ...props
}) => (
  <button
    className={`delete-cta ${className}`}
    type="button"
    onClick={onClick}
    {...props}
  >
    <IconTrash className="delete-cta__icon" />
  </button>
);
/* eslint-enable react/jsx-props-no-spreading */

DeleteCTA.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

DeleteCTA.defaultProps = {
  onClick: () => {},
  className: '',
};

export default DeleteCTA;
