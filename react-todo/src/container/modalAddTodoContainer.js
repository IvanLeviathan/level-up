import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import ModalAddToDo from '../components/Modals/ModalAddToDo';
import { actionCreateTodo } from '../store/todos';

export default function ModalAddTodoContainer(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handlerAddToDo = (e) => {
    e.preventDefault();
    dispatch(actionCreateTodo({
      id: new Date().getTime(),
      title,
      description
    }));
    props.handlerHideModal();
  }
  const handlerChangeTitle = (e) => {
    if(e.target.value.length <= props.titleMaxLength)
      setTitle(e.target.value);
  }
  const handlerChangeDescription= (e) => {
    setDescription(e.target.value);
  }

  return <ModalAddToDo
    title={title}
    description={description}
    onChangeTitle={handlerChangeTitle}
    onChangeDescription={handlerChangeDescription}
    onSubmit={handlerAddToDo}
    onCloseClick={props.handlerHideModal}
    formTitle="Добавление"
    titleMaxLength={props.titleMaxLength}
  />
}

ModalAddTodoContainer.propTypes = {
  name: PropTypes.string,
  handlerHideModal: PropTypes.func,
  titleMaxLength: PropTypes.number
};