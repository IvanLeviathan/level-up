const Button = (props) => {
  return (
    <button onClick={props.clickHandle} className={props.className} disabled={props.disabled} type="button">{props.name}</button>
  )
}
export default Button;