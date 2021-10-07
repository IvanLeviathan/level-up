import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../../context/AuthContext';
import { getAllTodos, getTodo, updateTodo } from '../../../store/todo';
import { addAlert } from '../../../utils/alerts';
import AddTodo from '../component/AddTodo';


export default function ChangeTodoContainer(props) {

  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [desc, setDesc] = useState('');
  const { token, userId } = useContext(AuthContext);
  const dispatch = useDispatch();

  const {success, message, currentTodo, isLoading} = useSelector(state => state.todoReducer);

  const saveTodo = () => {
    if(!title.length)
      return setTitleError('Поле не может быть пустым');
    const data = {title, desc, owner: userId, todoId: props.id};
    dispatch(updateTodo(data, token));
  }

  const changeTitle = (e) => {
    if(e.target.value.length <= 30){
      setTitle(e.target.value);
      setTitleError('');
    }else
      setTitleError('Максимальная длина 30 символов');
  }

  useEffect(() => {
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
      setDesc(currentTodo.desc);
    }
  }, [currentTodo])

  return <AddTodo
    show = {true}
    hideModal = {props.hideModal}
    formTitle = {props.formTitle}
    saveTodo = {saveTodo}
    hideText = 'Закрыть'
    saveText = 'Изменить'
    title={title}
    titleError={titleError}
    desc={desc}
    titleChange={changeTitle}
    descChange={(e) => setDesc(e.target.value)}
    isLoading={isLoading}
  />
}