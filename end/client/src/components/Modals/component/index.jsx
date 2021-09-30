import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function ModalMarkup(props) {
  const {show, handleClose, modalSettings} = props;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
        <Modal.Header closeButton>
          <Modal.Title>{modalSettings.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalSettings.body}
        </Modal.Body>
        <Modal.Footer>
          {modalSettings.footer}
          
        </Modal.Footer>
      </Modal>
  )
}
