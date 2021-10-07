import React from 'react'
import {Form} from 'react-bootstrap';
import "./style.scss";

export default function Search(props) {
  const {value, onChange} = props;
  return (
    <Form.Control className="search-input" type="text" value={value} placeholder="Поиск по задачам" onChange={onChange} />
  )
}
