import React, { useEffect, useState } from "react";
import Login from "../component";
import validate from "../../../utils/validations/index";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addAlert } from "../../../utils/alerts";
import { authLogin } from "../../../store/auth/login";

export default function LoginContainer(props){

  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { isLoading, success, error, message } = useSelector((state) => state.authReducer);
  const history = useHistory();

  let formItemsDefault = [
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
      id: "auth-password",
      label: "Пароль",
      placeholder: "Введите пароль",
      type: "password",
      value: password,
      onChange: changePassword,
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
    if(success){
      setTimeout(() => {
        // history.push(auth.login());
      }, 3000);
    }else{
      addAlert(dispatch, message, 'danger');
    }
  }, [isLoading])

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {email, password};
    dispatch(authLogin(formData));
  }

  return (
    <Login
      errors = {errors}
      items = {formItemsDefault}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  )
}