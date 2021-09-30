import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actionHideModal, actionShowModal } from '../../../store/modals';
import TodoList from '../component'

export default function TodoListContainer() {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDesc, setTodoDesc] = useState('');
  const dispatch = useDispatch();


  const changeTodoTitle = (e) => {
    console.log(e.target.value);
    setTodoTitle(e.target.value);
  }

  useEffect(() => {
    setTodoTitle('test 123');
  }, [])

  const modalBody = () => {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label className="fw-bold">Заголовок задачи</Form.Label>
          <Form.Control type="text" placeholder="Введите заголовок" onChange={changeTodoTitle} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="desc">
          <Form.Label className="fw-bold">Описание задачи</Form.Label>
          <Form.Control type="text" placeholder="Введите описание" onChange={(e) => setTodoDesc(e.target.value)} required  />
        </Form.Group>
      </Form>
    )
  }

  const hideModal = () => {
    dispatch(actionHideModal());
  }

  const saveTodo = () => {
    console.log(todoTitle);
    console.log(todoDesc);
  }

  const modalFooter = () => {
    return <>
      <Button variant="secondary" onClick={hideModal}>
        Закрыть
      </Button>
      <Button variant="primary" onClick={saveTodo}>
        Добавить
      </Button>
    </>
  }

  const addTodoClick = () => {
    dispatch(actionShowModal({
      title: 'Добавить новую задачу',
      body: modalBody(),
      footer: modalFooter()
    }));
  }

  return (
    <TodoList
      addTodoClick ={addTodoClick}
    />
  )
}
