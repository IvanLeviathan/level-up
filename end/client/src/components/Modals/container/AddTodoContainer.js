import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../../context/AuthContext';
import { createTodo, getAllTodos } from '../../../store/todo';
import { addAlert } from '../../../utils/alerts';
import AddTodo from '../component/AddTodo';


export default function AddTodoContainer(props) {

  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [desc, setDesc] = useState('');
  const { token, userId } = useContext(AuthContext);
  const dispatch = useDispatch();

  const {success, message} = useSelector(state => state.todoReducer);

  const saveTodo = () => {
    if(!title.length)
      return setTitleError('Поле не может быть пустым');
    const data = {title, desc, date: new Date(), owner: userId};
    dispatch(createTodo(data, token));
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

  return <AddTodo
    show = {true}
    hideModal = {props.hideModal}
    formTitle = {props.formTitle}
    saveTodo = {saveTodo}
    hideText = 'Закрыть'
    saveText = 'Добавить'
    title={title}
    titleError={titleError}
    desc={desc}
    titleChange={changeTitle}
    descChange={(e) => setDesc(e.target.value)}
  />
}