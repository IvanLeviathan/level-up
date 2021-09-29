import { Form, Button, Card } from 'react-bootstrap'
import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../../mock-routes';

export default function Registration(props) {
  const {items, onSubmit, errors, isLoading} = props;
  return (
    <div className="auth-wrapper bg-primary bg-opacity-50">
      <Card className="px-3 py-3 mx-2 my-4" style={{ maxWidth: '30rem', width: '100%' }}>
        <Card.Title className="mb-3 fs-2 text-center">Регистрация</Card.Title>
        <Form onSubmit={onSubmit}>
          {items.map(item => {
            return (
              <Form.Group className="mb-3" controlId={item.id} key={item.id}>
                {!!item.label && (
                  <Form.Label className="fw-bold">{item.label}{item.required ? " *" : null}</Form.Label>
                )}
                {item.type === 'select' && (
                  <Form.Select aria-label={item.placeholder} onChange={(e) => item.onChange(e.target.value)} value={item.value}>
                    <option>{item.placeholder}</option>
                    {item.values.map(option => {
                      return <option key={option.value} value={option.value}>{option.text}</option>
                    })}
                  </Form.Select>
                )}
                {item.type !== 'select' && (
                  <Form.Control type={item.type} placeholder={item.placeholder} onChange={(e) => item.onChange(e.target.value)} required={!!item.required} value={item.value} />
                )}

                {!!errors[item.id] && (
                  <Form.Text className="text-danger">
                    {errors[item.id]}
                  </Form.Text>
                )}

              </Form.Group>
            )
          })}
          <Button className="d-block w-100" variant="primary" disabled={Object.keys(errors).length || isLoading} type="submit">{isLoading ? "Загрузка..." : "Зарегистрироваться"}</Button>
          <Form.Text className="text-muted mt-3 text-end d-block">
            Уже зарегистрированы? <Link to={auth.login()}>Авторизоваться</Link>
          </Form.Text>
        </Form>
      </Card>
    </div>
  )
}
