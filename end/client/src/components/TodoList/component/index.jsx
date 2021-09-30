import React from 'react'
import { Button } from 'react-bootstrap'
import "./style.scss";

export default function TodoList(props) {
  const {addTodoClick} = props;
  return (
    <div className="todolist">
      Todos
      <Button variant="primary rounded-circle add-todo" onClick={addTodoClick} title="Добавить задачу">+</Button>
    </div>
  )
}
