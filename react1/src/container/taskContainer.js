import {React, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { actionCheckTodo, actionCreateTodo, actionDelTodo } from '../store/todos';
import Task from '../components/Task';


export default function TaskContainer(){
  const todos = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const [change, setChange] = useState('');

  const handlerChangeInput = (e) => {
    setChange(e.target.value);
  }

  const handlerAddToDo = () => {
    const data = {
      title: change,
      id: Date.now(),
      checked: false
    }
    dispatch(actionCreateTodo(data));
    setChange('');
  }

  const handlerDelToDo = (id) => {
    dispatch(actionDelTodo(id));
  }

  const handlerCheckToDo = (event, id) => {
    dispatch(actionCheckTodo(event.target.checked, id));
  }

  return (
    <Task
      inputValue = {change}
      onChangeInput = {handlerChangeInput}
      onAdd = {handlerAddToDo}
      todos={todos}
      onCheck = {handlerCheckToDo}
      onDel = {handlerDelToDo}
    />
  )
}