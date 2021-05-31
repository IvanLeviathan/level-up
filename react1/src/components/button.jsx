import '../styles/button.css';
const Button = ({name = 'Показать', hideName = 'Скрыть', handleButtonClick, showText = true}) => {
  return (
    <button onClick={handleButtonClick}>{showText ? hideName : name}</button>
  )
}
export default Button;