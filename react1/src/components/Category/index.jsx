import {React, useRef} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Checkbox from '../Checkbox';
import Button from '../Button';
import PropTypes from 'prop-types';
import Progressbar from "../ProgressBar";
import Input from "../Input";
import SearchCategory from "../SearchCategory";

export default function Category({inputValue = '', onChangeInput, onAdd, categories, onCheck, onDel, taskPercents, onEdit}){
  const ref = useRef();
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="input-group mb-3 mt-3">
            <Input
              placeholder = "Добавить категорию"
              value = {inputValue}
              onChange = {onChangeInput}
              ref={ref}
            />
            <div className="input-group-append">
              <Button name="Добавить" clickHandle={() => onAdd(ref)} className={inputValue.length ? "btn btn-info" : "btn btn-info disabled"} disabled={inputValue.length ? '' : 'disabled'} />
            </div>
          </div>
          <div className="mb-3">
          <Progressbar
            percent = {taskPercents}
          />

          </div>
          <div className="card">
            <div className="card-header">
              Категории
              <div className="mt-3">
                <SearchCategory/>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              {categories.category.length ? (
                categories.category.map((category) => <li key={category.id} className={category.checked ? 'list-group-item bg-info text-light' : 'list-group-item'}>
                    <div className="row align-items-center">
                      <div className="col-5" title={category.description}>
                        {category.title}
                      </div>
                      <div className="col-4">
                        <Checkbox checked={category.checked} id={"checkbox"+category.id} onchangeHandler={(e) => onCheck(e, category.id)} label="Выполнено"/>
                      </div>
                      <div className="col-3 text-center d-flex justify-content-between">
                        <Button
                            name='<i class="bi bi-pencil"></i>'
                            clickHandle={() => onEdit(category.id)}
                            className={category.checked ? "btn btn-outline-light" :"btn btn-outline-info"}
                        />
                        <Button
                          name='<i class="bi bi-trash"></i>'
                          clickHandle={() => onDel(category.id, category.title)}
                          className="btn btn-danger"
                        />
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
  onDel: PropTypes.func,
  onEdit: PropTypes.func
};