import React from 'react'
import PropTypes from 'prop-types';
import "./style.css";

export default function Button({text = '', onClick = (e) => void 0, classes= '', type="button"}) {
  return (
    <button
      type={type}
      onClick={onClick}
      dangerouslySetInnerHTML={{__html: text}}
      className={classes}
    />
  )
}


Button.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};