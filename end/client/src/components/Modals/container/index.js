import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionHideModal } from '../../../store/modals';
import AddTodoContainer from "./AddTodoContainer";
import ChangeTodoContainer from './ChangeTodoContainer';
import DeleteTodoContainer from './DeleteTodoContainer';

const modalCollection = {
  AddTodoContainer,
  ChangeTodoContainer,
  DeleteTodoContainer
};

export default function ModalsContainer() {
  const modalWindow = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();

  if (!modalWindow.length) {
    return null;
  }

  const hideModal = () => {
    dispatch(actionHideModal());
  }

  return <>
    {modalWindow.map((modal) => {
      const CurrentModal = modalCollection[modal.name];
      return <CurrentModal {...modal} key={modal.name} hideModal={hideModal} />;
    })}
  </>
}
