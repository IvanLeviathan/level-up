import {React, useRef} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Deletebutton from '../Deletebutton';
import Checkbox from '../Checkbox';
import Button from '../Button';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Input from "../Input";

export default function Task({inputValue = '', onChangeInput, onAdd, todos, onCheck, onDel, todoID, onDelAllTasks, actionModalDelete}){

  const ref = useRef();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-2">
          <Button name="Удалить все задачи" clickHandle={onDelAllTasks} className={todos.task.length ? "btn btn-info" : "btn btn-info disabled"} disabled={todos.task.length ? '' : 'disabled'} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3 mt-3">
            <Input
              placeholder = "Добавить задачу"
              value = {inputValue}
              onChange = {onChangeInput}
            />
            <div className="input-group-append">
              <Button name="Добавить" clickHandle={() => onAdd(ref)} className={inputValue.length ? "btn btn-info" : "btn btn-info disabled"} disabled={inputValue.length ? '' : 'disabled'} />
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Задачи
            </div>
            <ul className="list-group list-group-flush">
              {todos.task.length ? (
                todos.task.map((todo) => {
                  let liClass = 'list-group-item';
                  let aClass = 'text-dark';
                  if(todo.checked){
                    liClass = 'list-group-item bg-info text-light';
                    aClass = 'text-white';
                  }

                  if(todo.id === todoID){
                    liClass = 'list-group-item bg-warning text-dark';
                    aClass = 'text-dark';
                  }
                  
                  
                  return (<li key={todo.id} className={liClass}>
                    <div className="row align-items-center">
                      <div className="col-6">
                        <Link to={'/todos/' + todo.id} className={aClass}>
                          {todo.title}
                        </Link>
                      </div>
                      <div className="col-4">
                        <Checkbox checked={todo.checked} id={"checkbox"+todo.id} onchangeHandler={(e) => onCheck(e, todo.id)} label="Выполнено"/>
                      </div>
                      <div className="col-2 text-center">
                        <Deletebutton title="Удалить задачу" clickHandle={() => onDel(todo.id, todo.title)} />
                      </div>
                    </div>
                  </li>
                  )
                })
              ) : (
                <li className="list-group-item">Задач нет</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

Task.propTypes = {
  inputValue: PropTypes.string,
  onChangeInput: PropTypes.func,
  onAdd: PropTypes.func,
  todos: PropTypes.object,
  onCheck: PropTypes.func,
  onDel: PropTypes.func,
  todoID: PropTypes.number,
  onDelAllTasks: PropTypes.func
};

