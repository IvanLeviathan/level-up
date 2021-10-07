import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import SpinnerMark from '../../Spinner/component';

export default function AddTodo(props) {
  const {show, hideModal, saveTodo, title, desc, titleChange, descChange, titleError, saveText, hideText, isLoading} = props;
  return (
    <Modal
      show={show}
      onHide={hideModal}
      backdrop="static"
      keyboard={false}
    >
        <Modal.Header closeButton>
          <Modal.Title>{props.formTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <SpinnerMark/>
          ) : (
            <Form>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label className="fw-bold">Заголовок задачи</Form.Label>
                <Form.Control type="text" placeholder="Введите заголовок" onChange={titleChange} required value={title}/>
                {titleError.length ? (
                  <Form.Text className="text-danger">
                    {titleError}
                  </Form.Text>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="desc">
                <Form.Label className="fw-bold">Описание задачи</Form.Label>
                <Form.Control as="textarea" rows={3} value={desc} onChange={descChange} placeholder="Введите описание"/>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        {!isLoading &&  (
          <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
              {hideText ? hideText : "Закрыть"}
            </Button>
            <Button variant="primary" onClick={saveTodo} disabled={isLoading}>
              {saveText ? saveText : 'Ок'}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
  )
}
