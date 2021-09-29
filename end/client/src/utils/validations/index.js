function validate(values){
  let password;
  let errors = {};
  for(let key in values){
    let obj = values[key];
    
    switch (obj.id) {
      case 'email':
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(obj.value) && obj.value.length){
          errors.email = 'Введите корректный e-mail';
        }
      break;
      case 'password':
        password = obj.value;
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(obj.value) && obj.value.length){
          errors.password = 'Слишком простой пароль';
        }
      break;
      case 'confirmPassword':
        if(obj.value.length && obj.value !== password){
          errors.confirmPassword = 'Пароли не совпадают';
        }
      break;
      default:
        break;
    }
  }
  return errors;
}

export default validate;