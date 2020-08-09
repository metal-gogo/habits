import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import './AreaField.scss';

const AreaField = forwardRef(({
  id,
  labelTitle,
  name,
  className,
  isRequired,
  isValid,
  onChange,
  onFocus,
  onKeyPress,
  placeholder,
  ...props
}, ref) => {
  const isValidClass = isValid ? 'area-field__textarea--valid' : 'area-field__textarea--invalid';

  return (
    <div className="area-field">
      <textarea
        id={id}
        name={name}
        required={isRequired}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        className={`area-field__textarea ${isValidClass} ${className}`}
        ref={ref}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      <label htmlFor={id} className="area-field__label">
        {labelTitle}
      </label>
    </div>
  );
});

AreaField.propTypes = {
  id: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
};

AreaField.defaultProps = {
  className: '',
  isRequired: false,
  isValid: true,
  onChange: () => {},
  onFocus: () => {},
  onKeyPress: () => {},
  placeholder: '',
};

export default AreaField;
