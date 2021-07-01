import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ModalEditTask from '../components/Modals/ModalEditTask'
import { actionEditTask } from '../store/todos';

export default function ModalEditTaskContainer(props) {
  const todos = useSelector((state) => state.task);
  const findTodo = todos.task.find((item) => item.id === props.id);
  const [value, setValue] = useState(findTodo.title);

  const dispatch = useDispatch();

  const handlerChangeInput = (e) => {
    setValue(e.target.value);
  }

  const handlerEditTask = () => {
    const data = {
      title: value,
      taskId: props.id
    }
    dispatch(actionEditTask(data));
    props.handlerHideModal();
  }

  return <ModalEditTask {...props} todo={findTodo} value={value} handlerChangeInput={handlerChangeInput} handlerEditTask={handlerEditTask} />
}
