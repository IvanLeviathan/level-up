import React from 'react'
import PropTypes from 'prop-types';
import './style.css';

export default function Textarea({value = '', placeholder='', onChange = (e) => void 0, required=false, classes=""}) {
  const changeDefaultHandler = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = (e.target.scrollHeight + 2) + "px";
  }
  return <textarea
    type="text"
    placeholder={placeholder}
    onChange={(e) => {onChange(e);changeDefaultHandler(e);}}
    required={required}
    className={classes}
    value={value}
  />
}

Textarea.propTypes = {
  value: PropTypes.string,
  classes: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};