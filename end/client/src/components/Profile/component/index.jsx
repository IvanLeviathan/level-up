import React from 'react'
import { Form, Button, Card, Spinner } from 'react-bootstrap'

export default function Profile(props) {
  const {items, onSubmit, errors, isLoading} = props;
  return (
    <Card className="px-3 py-3 mx-2 my-4">
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
                    return <option  key={option.value} value={option.value}>{option.text}</option>
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
        <Button className="d-block w-100" variant="primary" disabled={Object.keys(errors).length || isLoading} type="submit">{isLoading ? <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/> : null}{isLoading ? "Загрузка..." : "Сохранить изменения"}</Button>
      </Form>
    </Card>
  )
}
