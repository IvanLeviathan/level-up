import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import ModalDeleteToDo from '../components/Modals/ModalDeleteToDo';
import { actionDeleteTodo } from '../store/todos';

export default function ModalDeleteTodoContainer(props) {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todosReducer);
  const curToDo = todos.todos.filter((todo) => todo.id === props.id)[0];


  const handlerDeleteToDo = (e) => {
    e.preventDefault();
    dispatch(actionDeleteTodo({
      id: curToDo.id
    }));
    props.handlerHideModal();
  }


  return <ModalDeleteToDo
    onSubmit={handlerDeleteToDo}
    onCloseClick={props.handlerHideModal}
    saveText="Удалить"
    cancelText="Отменить"
    formTitle={"Вы действительно хотите удалить задачу \""+curToDo.title+"\""}
  />
}

ModalDeleteTodoContainer.propTypes = {
  name: PropTypes.string,
  handlerHideModal: PropTypes.func,
  id: PropTypes.number
};