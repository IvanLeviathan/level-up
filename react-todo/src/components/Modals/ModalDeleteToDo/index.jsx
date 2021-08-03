import React from 'react'
import Button from '../../Button'
import PropTypes from 'prop-types';

export default function ModalAddToDo({saveText="Отправить", cancelText="Закрыть", formTitle="",  onSubmit = (e) => void 0, onCloseClick = (e) => void 0}) {
  return (
    <div className="popup-bg">
      <div className="popup-bg-inner">
        {formTitle.length ? <h2>{formTitle}</h2> : null}

        <form action="" onSubmit={onSubmit}>
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
  cancelText: PropTypes.string
};