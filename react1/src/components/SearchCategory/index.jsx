import {React, useState} from 'react'
import { useHistory } from 'react-router-dom';
import Input from '../Input'

export default function SearchCategory() {
  const [value, setValue] = useState('');
  const history = useHistory();
  const url = new URL(window.location.href);
  const urlParams = new URLSearchParams(window.location.search);

  const handlerSetUrlValue = (e) => {
    const setUrlValue = url.searchParams.set("search", `${e.target.value}`);
    history.replace(url.search.replace(setUrlValue));
    setValue(e.target.value);
  };

  return (
    <Input
      placeholder = 'Поиск...'
      value = {value ? value : urlParams.get('search') ? urlParams.get('search') : ''}
      onChange = {handlerSetUrlValue}
    />
  )
}
