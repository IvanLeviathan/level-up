import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import ModalAddToDo from '../components/Modals/ModalAddToDo';
import { actionEditTodo } from '../store/todos';

export default function ModalEditTodoContainer(props) {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todosReducer);
  const curToDo = todos.todos.filter((todo) => todo.id === props.id)[0];
  const [title, setTitle] = useState(curToDo.title);
  const [description, setDescription] = useState(curToDo.description);


  const handlerEditToDo = (e) => {
    e.preventDefault();
    dispatch(actionEditTodo({
      id: curToDo.id,
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
    onSubmit={handlerEditToDo}
    onCloseClick={props.handlerHideModal}
    saveText="Изменить"
    cancelText="Отменить"
    formTitle="Изменение"
    titleMaxLength={props.titleMaxLength}
  />
}

ModalEditTodoContainer.propTypes = {
  name: PropTypes.string,
  handlerHideModal: PropTypes.func,
  id: PropTypes.number,
  titleMaxLength: PropTypes.number
};