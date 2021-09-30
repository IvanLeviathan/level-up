import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionHideModal } from '../../../store/modals';
import ModalMarkup from '../component';

export default function ModalsContainer() {
  const modal = useSelector(state => state.modalsReducer);
  const dispatch = useDispatch();
  if(!modal.length)
    return null;
  
  const handlerHideModal = () => {
    dispatch(actionHideModal());
  }

  return (
    <ModalMarkup
      show = {modal.length}
      modalSettings = {modal[modal.length - 1]}
      handleClose = {handlerHideModal}
    />
  )
}
