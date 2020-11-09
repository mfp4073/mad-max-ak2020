import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, backgroundColor, color, size, label, ...props }) => {
  const mode = primary ? 'fishman-button--primary' : 'fishman-button--secondary';
  return (
    <button
      type="button"
      className={['fishman-button', `fishman-button--${size}`, mode].join(' ')}
      style={
        backgroundColor && { backgroundColor }, color && { color }}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'large',
  onClick: undefined,
};


export default Button;