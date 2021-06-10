import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  return (
  <div className="form-check">
    <input className="form-check-input" type="checkbox" checked={props.checked ? 'checked': ''} value="checked" id={props.id} onChange={props.onchangeHandler} />
    <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
  </div>
  )
}

export default Checkbox;


Checkbox.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string,
  onchangeHandler: PropTypes.func,
  label: PropTypes.string
};