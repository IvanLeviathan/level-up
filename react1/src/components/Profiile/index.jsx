import {React, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCheckTodo, actionCreateTodo, actionDelTodo } from '../../store/todos';
import "bootstrap-icons/font/bootstrap-icons.css";
import Deletebutton from '../Deletebutton';
import Checkbox from '../Checkbox';
import Button from '../Button';

export const Profile = () => {
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
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3 mt-3">
            <input className="form-control" type="text" placeholder="Добавить задачу" value={change} onChange={(e) => handlerChangeInput(e)} />
            <div className="input-group-append">
              <Button name="Добавить" clickHandle={handlerAddToDo} className={change.length ? "btn btn-info" : "btn btn-info disabled"} disabled={change.length ? '' : 'disabled'} />
            </div>
          </div>
            
            <div className="card">
              <div className="card-header">
                Задачи
              </div>
              <ul className="list-group list-group-flush">
                {todos.task.length ? (
                  todos.task.map((todo) => <li key={todo.id} className={todo.checked ? 'list-group-item bg-info text-light' : 'list-group-item'}>
                    <div className="row align-items-center">
                      <div className="col-9">
                        {todo.title}
                      </div>
                      <div className="col-2">
                        <Checkbox checked={todo.checked} id={"checkbox"+todo.id} onchangeHandler={(e) => handlerCheckToDo(e, todo.id)} label="Выполнено"/>
                      </div>
                      <div className="col-1 text-center">
                        <Deletebutton title="Удалить задачу" clickHandle={() => handlerDelToDo(todo.id)} />
                      </div>
                    </div>
                  </li>)
                ) : (
                  <li className="list-group-item">Задач нет</li>
                )}
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
};