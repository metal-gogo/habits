import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import './Field.scss';

const Field = forwardRef(({
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
  type,
  ...props
}, ref) => {
  const isValidClass = isValid ? 'field__input--valid' : 'field__input--invalid';

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
        className={`field__input ${isValidClass} ${className}`}
        ref={ref}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      <label htmlFor={id} className="field__label">
        {labelTitle}
      </label>
    </div>
  );
});

Field.propTypes = {
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
  type: PropTypes.string,
};

Field.defaultProps = {
  className: '',
  isRequired: false,
  isValid: true,
  onChange: () => {},
  onFocus: () => {},
  onKeyPress: () => {},
  placeholder: '',
  type: 'text',
};

export default Field;
