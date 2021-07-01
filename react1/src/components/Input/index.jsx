
import {forwardRef, React} from "react";
import PropTypes from 'prop-types';

function Input({placeholder = '', value = '', onChange = (e) => void 0}, ref){
  return (
    <input ref={ref} className="form-control" type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e)} />
  )
}

export default forwardRef(Input);

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};