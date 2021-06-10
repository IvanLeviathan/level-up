import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Deletebutton from '../Deletebutton';
import Checkbox from '../Checkbox';
import Button from '../Button';
import PropTypes from 'prop-types';

export default function Task({inputValue = '', onChangeInput, onAdd, todos, onCheck, onDel}){
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3 mt-3">
            <input className="form-control" type="text" placeholder="Добавить задачу" value={inputValue} onChange={(e) => onChangeInput(e)} />
            <div className="input-group-append">
              <Button name="Добавить" clickHandle={onAdd} className={inputValue.length ? "btn btn-info" : "btn btn-info disabled"} disabled={inputValue.length ? '' : 'disabled'} />
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
                      <Checkbox checked={todo.checked} id={"checkbox"+todo.id} onchangeHandler={(e) => onCheck(e, todo.id)} label="Выполнено"/>
                    </div>
                    <div className="col-1 text-center">
                      <Deletebutton title="Удалить задачу" clickHandle={() => onDel(todo.id)} />
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
}

Task.propTypes = {
  inputValue: PropTypes.string,
  onChangeInput: PropTypes.func,
  onAdd: PropTypes.func,
  todos: PropTypes.object,
  onCheck: PropTypes.func,
  onDel: PropTypes.func
};

