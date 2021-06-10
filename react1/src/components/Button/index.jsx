import PropTypes from 'prop-types';
const Button = ({clickHandle, className, disabled = '', name}) => {
  return (
    <button onClick={clickHandle} className={className} disabled={disabled} type="button">{name}</button>
  )
}
export default Button;


Button.propTypes = {
  inputValue: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.string,
  name: PropTypes.string
};