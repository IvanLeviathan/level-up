import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import Todos from "../components/Todos";
import { actionShowModal } from '../store/modals';
import { actionDeleteTodos, actionSaveTodos } from '../store/todos';

export default function TodosContainer() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todosReducer);

  const onDelButtonClick = (id) => {
    dispatch(actionShowModal({name: 'ModalDeleteTodoContainer', id: id}));
  };
  const onEditButtonClick = (id) => {
    dispatch(actionShowModal({name: 'ModalEditTodoContainer', id: id}));
  };

  const onSaveTodosClick = () => {
    dispatch(actionSaveTodos());
  }
  const onDeleteTodosClick = () => {
    dispatch(actionDeleteTodos());
  }
  const location = useLocation();
  const getValueSearch = new URLSearchParams(location.search).get('search') ? new URLSearchParams(location.search).get('search') : '';

  const searchTodos = useMemo(() => {
    const filteredTodos = todos.todos.filter((todo) => todo.title.toLowerCase().includes(getValueSearch.toLowerCase()));
    return {todos: filteredTodos};
  }, [todos, getValueSearch]);

  return <Todos
    todos={searchTodos}
    onDelButtonClick={onDelButtonClick}
    onEditButtonClick={onEditButtonClick}
    onSaveTodos={onSaveTodosClick}
    onDeleteTodos={onDeleteTodosClick}
  />
}

