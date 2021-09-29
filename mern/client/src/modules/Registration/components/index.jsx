import React from 'react'
import { Form, Input, Button } from 'antd'; 
import { validate } from '../../../utils/validate';
import { Link } from 'react-router-dom';
import { auth } from '../../../mock-routes';
import HeaderForm from '../../Login/HeaderForm';


export default function Registration(props) {
  const {values, touched, errors, handleBlur, handleChange, handleSubmit} = props;
  return (
    <div className="login-wrapper">
      <HeaderForm title="Регистрация" description="Пожалуйста, зарегистрируйтесь"/>
      <Form onSubmit={handleSubmit} initialValues={{remember: true}}>
        <Form.Item
          name="email"
          validateStatus={validate('email', touched, errors)}
          help={!touched.email ? null : errors.email}
          hasFeedback>
            <Input
              size="large"
              onBlur={handleBlur}
              value={values.email}
              onChange={handleChange}
              placeholder="E-mail"/>
        </Form.Item>
        <Form.Item
          name="password"
          validateStatus={validate('password', touched, errors)}
          help={!touched.password ? null : errors.password}
          hasFeedback>
            <Input
              size="large"
              type="password"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              placeholder="Password"/>
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          validateStatus={validate('confirmPassword', touched, errors)}
          help={!touched.confirmPassword ? null : errors.confirmPassword}
          hasFeedback>
            <Input
              size="large"
              type="password"
              onBlur={handleBlur}
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" onClick={handleSubmit}>
            Регистрация
          </Button>
          <br/>
          <Link to={auth.login()}>
            Авторизоваться
          </Link>
        </Form.Item>
      </Form>
    </div>
  )
}
