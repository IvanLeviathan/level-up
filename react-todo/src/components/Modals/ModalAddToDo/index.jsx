import React from 'react'
import Button from '../../Button'
import Input from '../../Input'
import Textarea from '../../Textarea'
import PropTypes from 'prop-types';

export default function ModalAddToDo({title = '', titleText="Введите заголовок", descriptionText = "Введите описание", saveText="Отправить", cancelText="Закрыть", formTitle="", description = '', onChangeTitle = (e) => void 0, onChangeDescription = (e) => void 0, onSubmit = (e) => void 0, onCloseClick = (e) => void 0, titleMaxLength=100}) {
  return (
    <div className="popup-bg">
      <div className="popup-bg-inner">
        {formTitle.length ? <h2>{formTitle}</h2> : null}

        <form action="" onSubmit={onSubmit}>
          <div>
            <Input
              value={title}
              placeholder={titleText}
              onChange={onChangeTitle}
              required={true}
              classes="bordered"
            />
            {
              title.length ? 
              <div className="title-counter">{title.length}/{titleMaxLength}</div>
              :
              null
            }
            
          </div>
          <div>
            <Textarea
              value={description}
              placeholder={descriptionText}
              onChange={onChangeDescription}
              classes="bordered"
            />
          </div>
          <div className="buttons">
            <Button
              text={saveText}
              type="submit"
            />
            <Button
              text={cancelText}
              onClick={onCloseClick}
            />
          </div>
        </form>
      </div>
    </div>
  )
}


ModalAddToDo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onChangeTitle: PropTypes.func,
  onChangeDescription: PropTypes.func,
  onSubmit: PropTypes.func,
  onCloseClick: PropTypes.func,
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  saveText: PropTypes.string,
  cancelText: PropTypes.string,
  titleMaxLength: PropTypes.number
};