import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../../context/AuthContext';
import { deleteTodo, getAllTodos, getTodo } from '../../../store/todo';
import { addAlert } from '../../../utils/alerts';
import DeleteTodo from '../component/DeleteTodo';


export default function DeleteTodoContainer(props) {
  const [title, setTitle] = useState('');
  const { token, userId } = useContext(AuthContext);
  const dispatch = useDispatch();

  const {success, message, currentTodo, isLoading} = useSelector(state => state.todoReducer);

  const saveTodo = () => {
    const data = {owner: userId, todoId: props.id};
    dispatch(deleteTodo(data, token));
  }

  useEffect(() => {
    console.log(message);
    if(!!message){
      addAlert(
        dispatch,
        message,
        success ? 'success' : 'danger'
      )
      dispatch(getAllTodos(token));
      if(success)
        props.hideModal();
    }
  }, [message]);

  useEffect(() => {
    dispatch(getTodo(token, props.id));
  }, [])

  useEffect(() => {
    if(!!currentTodo){
      setTitle(currentTodo.title);
    }

  }, [currentTodo])

  return <DeleteTodo
    show = {true}
    hideModal = {props.hideModal}
    formTitle = {props.formTitle}
    saveTodo = {saveTodo}
    title={title}
    hideText = 'Закрыть'
    saveText = 'Удалить'
    isLoading={isLoading}
  />
}