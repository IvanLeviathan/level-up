import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../../context/AuthContext';
import { updateUser } from '../../../store/auth/login';
import { addAlert } from '../../../utils/alerts';
import validate from '../../../utils/validations';
import Profile from '../component'

export default function ProfileContainer() {
  const [name, changeName] = useState('');
  const [surname, changeSurName] = useState('');
  const [age, changeAge] = useState('');
  const [sex, changeSex] = useState('');
  const [phone, changePhone] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { isLoading, success, message, userInfo } = useSelector((state) => state.authReducer);
  const {token} = useContext(AuthContext);

  let formItemsDefault = [
    {
      id: "name",
      label: "Имя",
      placeholder: "Введите имя",
      type: "text",
      value: name,
      onChange: changeName
    },
    {
      id: "surname",
      label: "Фамилия",
      placeholder: "Введите фамилию",
      type: "text",
      value: surname,
      onChange: changeSurName
    },
    {
      id: "age",
      label: "Возраст",
      placeholder: "Введите возраст",
      type: "number",
      value: age,
      onChange: changeAge
    },
    {
      id: "sex",
      label: "Пол",
      placeholder: "Выберите пол",
      type: "select",
      value: sex,
      onChange: changeSex,
      values: [
        {
          value: 'M',
          text: 'М'
        },
        {
          value: 'F',
          text: 'Ж'
        }
      ]
    },
    {
      id: "phone",
      label: "Телефон",
      placeholder: "Введите телефон",
      type: "text",
      value: phone,
      onChange: changePhone
    },
    {
      id: "email",
      label: "E-mail",
      placeholder: "Введите e-mail",
      type: "email",
      value: email,
      onChange: changeEmail,
      required: true
    },
    {
      id: "password",
      label: "Изменить пароль",
      placeholder: "Введите пароль",
      type: "password",
      value: password,
      onChange: changePassword,
      required: false
    }
  ]

  const setValidateErrors = (newErrors) => {
    if(JSON.stringify(errors) !== JSON.stringify(newErrors))
      setErrors(newErrors);
  }
  useEffect(() => {
    setValidateErrors(validate(formItemsDefault));
  })

  useEffect(() => {
    if(isLoading)
      return;

    addAlert(
      dispatch,
      message,
      success ? 'success' : 'danger'
    );
  }, [isLoading])
  useEffect(() => {
    const user = userInfo.user;
    changeName(user.name||'');
    changeSurName(user.surname||'');
    changeAge(user.age||'');
    changeSex(user.sex||'');
    changePhone(user.phone||'');
    changeEmail(user.email||'');
  }, [])


  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {name, surname, age, sex, phone, email, password, id: userInfo.user._id};
    dispatch(updateUser(formData, token));
  }

  return (
    <Profile
      errors = {errors}
      items = {formItemsDefault}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  )
}
