import React from 'react'
import PropTypes from 'prop-types';
import './style.css';

export default function Input({value = '', placeholder='', onChange = (e) => void 0, required=false, classes="", name=""}) {
  return <input
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e)}
    required={required}
    className={classes}
    name={name}
  />
}

Input.propTypes = {
  value: PropTypes.string,
  classes: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string
};