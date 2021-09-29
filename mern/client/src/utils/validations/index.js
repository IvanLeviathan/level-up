const validate = ({values, errors}) => {
  const rules = {
    email: value => {
      if(!value){
        errors.email = 'Введите E-mail'
      } else if((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))){
        errors.email = 'Неверный E-mail'
      }
    },
    password: value => {
      if(!value){
        errors.password = 'Введите пароль'
      }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)){
        errors.password = 'Слишком легкий пароль'
      }
    },
    confirmPassword: (value) => {
      if(!value){
        errors.confirmPassword = 'Поле не должно быть пустым'
      }
      if(value !== values.password){
        errors.confirmPassword = 'Пароли не совпадают'
      }
    }
  }
  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
}
export default validate;