import React from 'react'
import PropTypes from 'prop-types';
export default function Textarea({value = '', onChangeHandler=(e) => void 0}) {
  return (
    <textarea className="form-control" rows="3" onChange={onChangeHandler} value={value}/>
  )
}

Textarea.propTypes = {
  value: PropTypes.string,
  onChangeHandler: PropTypes.func
}

