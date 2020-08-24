import React from 'react';
import PropTypes from 'prop-types';

import './IconCTA.scss';

import { ReactComponent as IconExit } from 'icons/exit.svg';
import { ReactComponent as IconMenu } from 'icons/menu.svg';
import { ReactComponent as IconClose } from 'icons/close.svg';
import { ReactComponent as IconTrash } from 'icons/trash.svg';

export const ICON_TYPES = ['close', 'exit', 'menu', 'trash'];

/* eslint-disable react/jsx-props-no-spreading */
const IconCTA = ({
  onClick, className, iconName, ...props
}) => {
  const renderIcon = () => {
    const iconsMap = {
      close: <IconClose className="icon-cta__icon" />,
      exit: <IconExit className="icon-cta__icon" />,
      menu: <IconMenu className="icon-cta__icon" />,
      trash: <IconTrash className="icon-cta__icon" />,
    };

    return iconsMap[iconName];
  };

  return (
    <button
      className={`icon-cta ${className}`}
      type="button"
      onClick={onClick}
      {...props}
    >
      {renderIcon()}
    </button>
  );
};
/* eslint-enable react/jsx-props-no-spreading */

IconCTA.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconName: PropTypes.oneOf(ICON_TYPES).isRequired,
};

IconCTA.defaultProps = {
  onClick: () => {},
  className: '',
};

export default IconCTA;
