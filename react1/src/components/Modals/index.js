import React from 'react'
import { useSelector } from 'react-redux';
import ModalDelete from './ModalDelete';
import './style.css';

const modalCollections = {
  ModalDelete
};

export default function Modals() {
  const modal = useSelector(state => state.modalsReducer);
  
  if(!modal.length)
    return null;


  return (
    modal.map((item) => {
      const CurrentModal = modalCollections[item.name];
      return <CurrentModal {...item} key={item.name}/>;
    })
  )
}
