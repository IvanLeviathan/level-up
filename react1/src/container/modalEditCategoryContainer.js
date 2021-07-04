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
  const [checked, setChecked] = useState(findCategory.checked);
  const [description, setDescription] = useState(findCategory.description);
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
      todoId: todoID,
      checked: checked,
      description: description
    }
    dispatch(actionEditCategory(data));
    props.handlerHideModal();
  }

  const handlerCheckCategory = (event) => {
    setChecked(event.target.checked);
  }

  const handlerChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  return <ModalEditCategory 
    {...props}
    todos={todos}
    todoID={todoID}
    category={findCategory}
    value={value}
    checkboxChecked={checked}
    description={description}
    handlerChangeDescription={handlerChangeDescription}
    handlerOnCheck={handlerCheckCategory}
    handlerChangeInput={handlerChangeInput}
    handlerEditTask={handlerEditCategory}
    handlerChangeTodo={handlerChangeTodo}
  />
}
