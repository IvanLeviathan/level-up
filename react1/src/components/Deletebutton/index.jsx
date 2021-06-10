import React from 'react';
import PropTypes from 'prop-types';

const Deletebutton = ({title = 'удалить', clickHandle}) => {
  return (
    <button className="btn btn-danger" title={title} onClick={clickHandle}>
      <i className="bi bi-trash"></i>
    </button>
  )
}

export default Deletebutton;

Deletebutton.propTypes = {
  title: PropTypes.string,
  clickHandle: PropTypes.func
};