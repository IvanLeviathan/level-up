import React from 'react'
import { useDispatch } from 'react-redux'
import { actionHideModal } from '../../../store/modals';
import Button from '../../Button'
import PropTypes from 'prop-types';

export default function ModalDelete(props) {
  const dispatch = useDispatch();
  const handlerDelete = () => {
    dispatch(actionHideModal());
    dispatch(props.deleteFunc(props.id))
  }
  const handlerHideModal = () => {
    dispatch(actionHideModal());
  }
  return (
    <div className="modal fade show" style={{opacity:1, display:"block"}} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.modalTitle ? props.modalTitle : 'Удаление'}</h5>
            <button type="button" className="close" aria-label="Close" onClick={handlerHideModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" >
            <p dangerouslySetInnerHTML={{__html: props.modalText ? props.modalText : 'Вы действительно хотите удалить элемент?'}}/>
          </div>
          <div className="modal-footer">
          <Button
            name="Удалить"
            clickHandle={handlerDelete}
            className="btn btn-danger"
            disabled=''
          />
          <Button
            name="Закрыть"
            clickHandle={handlerHideModal}
            className="btn btn-secondary"
            disabled=''
          />
          </div>
        </div>
      </div>
    </div>
  )
}


ModalDelete.propTypes = {
  modalTitle: PropTypes.string,
  modalText: PropTypes.string,
  deleteFunc: PropTypes.func
}