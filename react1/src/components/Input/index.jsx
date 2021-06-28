
import {React} from "react";
import PropTypes from 'prop-types';

export default function Input({placeholder = '', value = '', onChange = (e) => void 0}){
  return (
    <input  className="form-control" type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e)} />
  )
}


Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};