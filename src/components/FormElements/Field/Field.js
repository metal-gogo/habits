import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import './Field.scss';

const Field = forwardRef(({
  id,
  labelTitle,
  name,
  className,
  isRequired,
  onChange,
  onFocus,
  onKeyPress,
  placeholder,
  type,
  errorMessage,
  ...props
}, ref) => {
  console.log('errorMessage', errorMessage);
  console.log('errorMessage.length', errorMessage.length);
  console.log('errorMessage.length > 0', errorMessage.length > 0);
  const hasError = errorMessage.length > 0;
  const fieldValidationClass = hasError ? 'field__input--invalid' : 'field__input--valid';

  return (
    <div className="field">
      <input
        id={id}
        type={type}
        name={name}
        required={isRequired}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        className={`field__input ${fieldValidationClass} ${className}`}
        ref={ref}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      <label htmlFor={id} className="field__label">
        {labelTitle}
      </label>
      { hasError ? (
        <p className="field__error-message">{ errorMessage }</p>
      ) : null }
    </div>
  );
});

Field.propTypes = {
  id: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
};

Field.defaultProps = {
  className: '',
  isRequired: false,
  onChange: () => {},
  onFocus: () => {},
  onKeyPress: () => {},
  placeholder: '',
  type: 'text',
  errorMessage: '',
};

export default Field;
