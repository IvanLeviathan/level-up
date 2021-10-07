import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function SpinnerMark() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Загрузка...</span>
    </Spinner>
  )
}
