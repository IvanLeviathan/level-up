import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { AuthContext } from '../../../context/AuthContext';
import {actionShowModal } from '../../../store/modals';
import { getAllTodos } from '../../../store/todo';
import TodoList from '../component'

export default function TodoListContainer() {

  const { todos } = useSelector((state) => state.todoReducer);
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const location = useLocation();
  const getValueSearch = new URLSearchParams(location.search).get('search');

  const addTodoClick = () => {
    dispatch(actionShowModal({
      name: 'AddTodoContainer',
      formTitle: 'Добавить новую задачу'
    }));
  }

  const changeTodoClick = (id) => {
    dispatch(actionShowModal({
      name: 'ChangeTodoContainer',
      formTitle: 'Изменить задачу',
      id
    }));
  }

  const deleteTodoClick = (id) => {
    dispatch(actionShowModal({
      name: 'DeleteTodoContainer',
      formTitle: 'Удалить задачу',
      id
    }));
  }

  useEffect(() => {
    dispatch(getAllTodos(token));
  }, []);

  const filteredTodos = (todos, getValueSearch) => {
    if(!getValueSearch | !todos)
      return todos;
    
    return todos.filter((todo) => todo.title.toLowerCase().includes(getValueSearch.toLowerCase()));
  }
  return (
    <TodoList
      list = {filteredTodos(todos, getValueSearch)}
      addTodoClick ={addTodoClick}
      changeTodoClick={changeTodoClick}
      deleteTodoClick={deleteTodoClick}
    />
  )
}
