import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actionHideModal } from '../../store/modals';
import ModalAddTodoContainer from '../../container/modalAddTodoContainer';
import ModalEditTodoContainer from '../../container/modalEditTodoContainer';
import ModalDeleteTodoContainer from '../../container/modalDeleteTodoContainer';

import './style.css';

const modalCollections = {
  ModalAddTodoContainer,
  ModalEditTodoContainer,
  ModalDeleteTodoContainer
};


export default function Modals() {
  const modal = useSelector(state => state.modalsReducer);
  const dispatch = useDispatch();

  const titleMaxLength = 30;

  if(!modal.length)
    return null;
  
  const handlerHideModal = () => {
    dispatch(actionHideModal());
  }

  return (
    modal.map((item) => {
      const CurrentModal = modalCollections[item.name];
      return <CurrentModal {...item} handlerHideModal={handlerHideModal} key={item.name} titleMaxLength={titleMaxLength}/>;
    })
  )
}