import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import './AreaField.scss';

const AreaField = forwardRef(({
  id,
  labelTitle,
  name,
  className,
  isRequired,
  onChange,
  onFocus,
  onKeyPress,
  placeholder,
  errorMessage,
  ...props
}, ref) => {
  const hasError = errorMessage.length > 0;
  const fieldValidationClass = hasError ? 'area-field__input--invalid' : 'area-field__input--valid';

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
        className={`area-field__textarea ${fieldValidationClass} ${className}`}
        ref={ref}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      <label htmlFor={id} className="area-field__label">
        {labelTitle}
      </label>
      { hasError ? (
        <p className="field__error-message">{ errorMessage }</p>
      ) : null }
    </div>
  );
});

AreaField.propTypes = {
  id: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
};

AreaField.defaultProps = {
  className: '',
  isRequired: false,
  onChange: () => {},
  onFocus: () => {},
  onKeyPress: () => {},
  placeholder: '',
  errorMessage: '',
};

export default AreaField;
