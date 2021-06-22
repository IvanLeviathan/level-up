import {React, useState} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { actionCheckCategory, actionCreateCategory, actionDelCategory} from '../store/category';
import Category from '../components/Category';
import { useRouteMatch } from "react-router-dom";


export default function CategoryContainer(){
  const categories = useSelector((state) => state.category);
  const match = useRouteMatch('/todos/:id');
  const todoID = +match.params.id;
  const dispatch = useDispatch();
  const [change, setChange] = useState('');

  const handlerChangeInput = (e) => {
    setChange(e.target.value);
  }

  const handlerAddToDo = () => {
    const data = {
      title: change,
      id: Date.now(),
      checked: false,
      todoID
    }
    dispatch(actionCreateCategory(data));
    setChange('');
  }

  const handlerDelToDo = (id) => {
    dispatch(actionDelCategory(id));
  }

  const handlerCheckToDo = (event, id) => {
    dispatch(actionCheckCategory(event.target.checked, id));
  }

  return (
    <Category
      inputValue = {change}
      onChangeInput = {handlerChangeInput}
      onAdd = {handlerAddToDo}
      categories={{category:categories.category.filter((item) => item.todoID === todoID)}}
      onCheck = {handlerCheckToDo}
      onDel = {handlerDelToDo}
    />
  )
}