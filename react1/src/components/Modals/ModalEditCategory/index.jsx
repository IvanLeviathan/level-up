import React from 'react'
import Button from '../../Button'
import PropTypes from 'prop-types';
import Input from '../../Input';
import './style.css';

export default function ModalEditCategory(props) {
  return (
    <div className="modal fade show" style={{opacity:1, display:"block"}} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.modalTitle ? props.modalTitle : 'Редактирование'}</h5>
            <button type="button" className="close" aria-label="Close" onClick={props.handlerHideModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" >
            <Input
              placeholder = 'Редактировать'
              value={props.value}
              onChange={props.handlerChangeInput}
            />
            <h5 className="mt-3">Сменить задачу</h5>
            <div className="list-group mt-2">
              {props.todos.task.map((item) => {
                return (
                  <div key={item.id}>
                    <input type="radio" name="category" value={item.id} id={`cat${item.id}`} className="d-none" onChange={props.handlerChangeTodo} checked={item.id === props.todoID ? 'checked' : ''}/>
                    <label htmlFor={`cat${item.id}`} className="list-group-item list-group-item-action mb-0">{item.title}</label>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="modal-footer">
            <Button
              name="Редактировать"
              clickHandle={props.handlerEditTask}
              className="btn btn-info"
              disabled=''
            />
            <Button
              name="Закрыть"
              clickHandle={props.handlerHideModal}
              className="btn btn-secondary"
              disabled=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

ModalEditCategory.propTypes = {
  modalTitle: PropTypes.string,
  modalText: PropTypes.string,
  editFunc: PropTypes.func,
  handlerHideModal: PropTypes.func
}
