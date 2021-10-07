import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import SpinnerMark from '../../Spinner/component';

export default function DeleteTodo(props) {
  const {show, hideModal, saveTodo,  saveText, hideText, title, isLoading} = props;
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
            `Вы действительно хотите удалить задачу "${title}"?`
          )}
          
        </Modal.Body>
        {!isLoading &&  (
          <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
              {hideText ? hideText : "Закрыть"}
            </Button>
            <Button variant="danger" onClick={saveTodo}>
              {saveText ? saveText : 'Ок'}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
  )
}
