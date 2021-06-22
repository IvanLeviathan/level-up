import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Deletebutton from '../Deletebutton';
import Checkbox from '../Checkbox';
import Button from '../Button';
import PropTypes from 'prop-types';

export default function Category({inputValue = '', onChangeInput, onAdd, categories, onCheck, onDel}){
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3 mt-3">
            <input className="form-control" type="text" placeholder="Добавить категорию" value={inputValue} onChange={(e) => onChangeInput(e)} />
            <div className="input-group-append">
              <Button name="Добавить" clickHandle={onAdd} className={inputValue.length ? "btn btn-info" : "btn btn-info disabled"} disabled={inputValue.length ? '' : 'disabled'} />
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Категории
            </div>
            <ul className="list-group list-group-flush">
              {categories.category.length ? (
                categories.category.map((category) => <li key={category.id} className={category.checked ? 'list-group-item bg-info text-light' : 'list-group-item'}>
                    <div className="row align-items-center">
                      <div className="col-6">
                        {category.title}
                      </div>
                      <div className="col-4">
                        <Checkbox checked={category.checked} id={"checkbox"+category.id} onchangeHandler={(e) => onCheck(e, category.id)} label="Выполнено"/>
                      </div>
                      <div className="col-2 text-center">
                        <Deletebutton title="Удалить категорию" clickHandle={() => onDel(category.id)} />
                      </div>
                    </div>
                </li>
                )
              ) : (
                <li className="list-group-item">Категорий нет</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

Category.propTypes = {
  inputValue: PropTypes.string,
  onChangeInput: PropTypes.func,
  onAdd: PropTypes.func,
  categories: PropTypes.object,
  onCheck: PropTypes.func,
  onDel: PropTypes.func
};