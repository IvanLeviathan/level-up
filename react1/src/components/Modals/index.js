import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ModalEditCategoryContainer from '../../container/modalEditCategoryContainer';
import ModalEditTaskContainer from '../../container/modalEditTaskContainer';
import { actionHideModal } from '../../store/modals';
import ModalDelete from './ModalDelete';
import './style.css';

const modalCollections = {
  ModalDelete,
  ModalEditTaskContainer,
  ModalEditCategoryContainer
};


export default function Modals() {
  const modal = useSelector(state => state.modalsReducer);
  const dispatch = useDispatch();

  if(!modal.length)
    return null;
  
  const handlerHideModal = () => {
    dispatch(actionHideModal());
  }

  return (
    modal.map((item) => {
      const CurrentModal = modalCollections[item.name];
      return <CurrentModal {...item} handlerHideModal={handlerHideModal} key={item.name}/>;
    })
  )
}
