import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ModalEditCategory from '../components/Modals/ModalEditCategory';
import { actionEditCategory } from '../store/category';

export default function ModalEditCategoryContainer(props) {
  const categories = useSelector((state) => state.category);
  const todos = useSelector((state) => state.task);
  const findCategory = categories.category.find((item) => item.id === props.id);
  const [value, setValue] = useState(findCategory.title);
  const [todoID, setTodoId] = useState(findCategory.todoID);
  const dispatch = useDispatch();

  const handlerChangeInput = (e) => {
    setValue(e.target.value);
  }

  const handlerChangeTodo = (e) => {
    setTodoId(+e.target.value);
  }

  const handlerEditCategory = () => {
    const data = {
      title: value,
      taskId: props.id,
      todoId: todoID
    }
    dispatch(actionEditCategory(data));
    props.handlerHideModal();
  }

  return <ModalEditCategory {...props} todos={todos} todoID={todoID} category={findCategory} value={value} handlerChangeInput={handlerChangeInput} handlerEditTask={handlerEditCategory} handlerChangeTodo={handlerChangeTodo} />
}
