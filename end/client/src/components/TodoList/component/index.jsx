import React from 'react'
import { Button, Table } from 'react-bootstrap'
import "./style.scss";

export default function TodoList(props) {
  const {addTodoClick, list, changeTodoClick, deleteTodoClick} = props;
  return (
    <div className="todolist">
      {list.length ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Заголовок</th>
              <th>Описание</th>
              <th>Дата добавления</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {list.map((todo,idx) => {
                return (
                  <tr key={todo._id}>
                    <td>{idx + 1}</td>
                    <td>{todo.title}</td>
                    <td>{todo.desc}</td>
                    <td>{new Date(todo.date).toLocaleString()}</td>
                    <td>
                      <Button className="d-block w-100 mb-2" variant="outline-info" onClick={() => changeTodoClick(todo._id)}>Изменить</Button>
                      <Button className="d-block w-100" variant="danger" onClick={() => deleteTodoClick(todo._id)}>Удалить</Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
        </Table>
      ) : (
        'Задачи не найдены'
      )}
      <Button variant="primary rounded-circle add-todo" onClick={addTodoClick} title="Добавить задачу">+</Button>
    </div>
  )
}
