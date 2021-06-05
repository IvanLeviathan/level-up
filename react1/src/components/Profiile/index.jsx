import {React, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreateTodo, actionDelTodo } from '../../store/todos';
import "bootstrap-icons/font/bootstrap-icons.css";

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
      id: Date.now()
    }
    dispatch(actionCreateTodo(data));
    setChange('');
  }

  const handlerDelToDo = (id) => {
    dispatch(actionDelTodo(id));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3 mt-3">
            <input className="form-control" type="text" placeholder="Добавить задачу" value={change} onChange={(e) => handlerChangeInput(e)} />
            <div className="input-group-append">
              <button onClick={handlerAddToDo} className="btn btn-outline-secondary" type="button">Добавить</button>
            </div>
          </div>
            
            <div className="card">
              <div className="card-header">
                Задачи
              </div>
              <ul className="list-group list-group-flush">
                {todos.task.length ? (
                  todos.task.map((todo) => <li key={todo.id} className="list-group-item">
                    <div className="row">
                      <div className="col-11">
                        {todo.title}
                      </div>
                      <div className="col-1 text-center">
                        <button className="btn btn-danger" title="Удалить задачу" onClick={() => handlerDelToDo(todo.id)}>
                          <i className="bi bi-trash"></i>
                        </button>
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