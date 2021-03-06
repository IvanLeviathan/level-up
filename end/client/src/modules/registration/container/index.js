import React, { useEffect, useState } from "react";
import Registration from "../component";
import validate from "../../../utils/validations/index";
import { authRegistration } from "../../../store/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addAlert } from "../../../utils/alerts";

export default function RegistrationContainer(props){
  const [name, changeName] = useState('');
  const [surname, changeSurName] = useState('');
  const [age, changeAge] = useState('');
  const [sex, changeSex] = useState('');
  const [phone, changePhone] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [confirmPassword, changeConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { isLoading, success, message } = useSelector((state) => state.authReducer);

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
      label: "Пароль",
      placeholder: "Введите пароль",
      type: "password",
      value: password,
      onChange: changePassword,
      required: true
    },
    {
      id: "confirmPassword",
      label: "Подтверждение пароля",
      placeholder: "Повторите пароль",
      type: "password",
      value: confirmPassword,
      onChange: changeConfirmPassword,
      required: true
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


  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {name, surname, age, sex, phone, email, password, confirmPassword};
    dispatch(authRegistration(formData));
  }

  return (
    <Registration
      errors = {errors}
      items = {formItemsDefault}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  )
}