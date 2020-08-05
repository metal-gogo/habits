import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReachRouterLink } from '@reach/router';

import getLinkClassName from './utils/getLinkClassName';

const Link = ({ isPartialLink, className, ...rest }) => {
  const renderPartialLink = () => (
    <ReachRouterLink
      getProps={({ isPartiallyCurrent }) => getLinkClassName(isPartiallyCurrent, className)}
        // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );

  const renderExactLink = () => (
    <ReachRouterLink
      getProps={({ isCurrent }) => getLinkClassName(isCurrent, className)}
        // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );

  return isPartialLink ? renderPartialLink() : renderExactLink();
};

Link.propTypes = {
  className: PropTypes.string,
  isPartialLink: PropTypes.bool,
};

Link.defaultProps = {
  className: '',
  isPartialLink: false,
};

export default Link;
