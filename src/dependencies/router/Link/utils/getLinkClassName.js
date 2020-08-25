const getLinkClassName = ({ isActive = false, className = '' } = { isActive: false, className: '' }) => {
  const linkClassName = isActive ? `${className} link link--is-active` : `${className} link`;
  return {
    className: linkClassName,
  };
};

export default getLinkClassName;
