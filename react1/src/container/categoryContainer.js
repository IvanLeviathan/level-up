import {React, useCallback, useContext, useMemo, useState} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { actionCheckCategory, actionCreateCategory, actionDelCategory} from '../store/category';
import Category from '../components/Category';
import { Context } from "../contextContext";
import { useLocation } from "react-router-dom";
import { actionShowModal } from "../store/modals";

export default function CategoryContainer(){
  const categories = useSelector((state) => state.category);
  const context = useContext(Context);
  const todoID = context.todoID;
  const dispatch = useDispatch();
  const [change, setChange] = useState('');

  const location = useLocation();
  const getValueSearch = new URLSearchParams(location.search).get('search');


  const handlerChangeInput = (e) => {
    setChange(e.target.value);
  }

  const handlerAddToDo = (ref) => {
    const data = {
      title: change,
      id: Date.now(),
      checked: false,
      todoID
    }
    dispatch(actionCreateCategory(data));
    setChange('');
    // ref.current.focus();
  }

  const handlerDelToDo = (id, title) => {
    dispatch(actionShowModal({name: 'ModalDelete', id: id, modalText: `Вы действительно хотите удалить <b>${title}</b>?`, deleteFunc: actionDelCategory}));
  }

  const handlerCheckToDo = (event, id) => {
    dispatch(actionCheckCategory(event.target.checked, id));
  }

  const taskPercents = useMemo(() => {
    const todoCategory = categories.category.filter((item) => item.todoID === todoID);
    const checkedCategory = todoCategory.filter((item) => item.checked);
    const percent = (100 * checkedCategory.length) / todoCategory.length;
    return !!percent ? percent : 0;
  }, [categories, todoID]);

  const findCurrentCategories = (cats, todoID, valueSearch) => {
    if(valueSearch)
      cats = cats.filter((item) => item.title.toLowerCase().includes(valueSearch.toLowerCase()));

    return cats.filter((item) => item.todoID === todoID)
  }
  
  const getCurrentCategories = useCallback(
    () => {
      return findCurrentCategories(categories.category, todoID, getValueSearch)
    },
    [categories, todoID, getValueSearch]
  );

  return (
    <Category
      inputValue = {change}
      onChangeInput = {handlerChangeInput}
      onAdd = {handlerAddToDo}
      categories={{category:getCurrentCategories()}}
      onCheck = {handlerCheckToDo}
      onDel = {handlerDelToDo}
      taskPercents = {taskPercents}
    />
  )
}