import React from 'react'
import Button from '../Button';
import "./style.css";
import DeleteIcon from '../../assets/images/delete.svg';
import PropTypes from 'prop-types';

export default function Todos({todos = [], onDelButtonClick = (e) => void 0, onEditButtonClick = (e) => void 0, onSaveTodos = (e) => void 0, onDeleteTodos = (e) => void 0}) {
  return (
    <div className="container">
      {todos.todos.length ? 
        <div className="todos__buttons">
        <Button
          text="Сохранить все задачи"
          onClick={onSaveTodos}
        />
        <Button
          text="Удалить все задачи"
          onClick={onDeleteTodos}
          classes="btn-danger"
        />
      </div>
      :
      null
      }
      
      <div className="todos__list">
        {
          todos.todos.length ? 
            todos.todos.map((todo) => {
              return (
                <div className="todos__list__item" key={todo.id}>
                  <div className="todos__list__item-title" onClick={() => onEditButtonClick(todo.id)}>{todo.title}</div>
                  <div className="todos__list__item-description">
                    <div className="todos__list__item-description-text">{todo.description}</div>
                    <div className="todos__list__item-description-button">
                      <Button
                        text={"<img src='"+ DeleteIcon + "' alt='Delete Todo' />"}
                        onClick={() => onDelButtonClick(todo.id)}
                        classes="delete-button"
                      />
                    </div>
                  </div>
                </div>
              )
            })
          :
          <div className="todos__list__item no-todos">
            Задач нет
          </div>
       }
      </div>
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.object,
  onDelButtonClick: PropTypes.func,
  onEditButtonClick: PropTypes.func,
  onSaveTodos: PropTypes.func,
  onDeleteTodos: PropTypes.func
};