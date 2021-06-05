import React from 'react';

const Deletebutton = ({title = 'удалить', clickHandle}) => {
  return (
    <button className="btn btn-danger" title={title} onClick={clickHandle}>
      <i className="bi bi-trash"></i>
    </button>
  )
}

export default Deletebutton;