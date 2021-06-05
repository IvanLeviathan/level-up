import React from 'react';

const Checkbox = (props) => {
  return (
  <div className="form-check">
    <input className="form-check-input" type="checkbox" checked={props.checked ? 'checked': ''} value="checked" id={props.id} onChange={props.onchangeHandler} />
    <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
  </div>
  )
}

export default Checkbox;