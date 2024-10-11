import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const NumberInput = ({ label, name, value, handleChange }) => {
  return (
    <div className="number-input">
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={(e) => e.target.select()} 
    />
    </div>
  );
};

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default NumberInput;
