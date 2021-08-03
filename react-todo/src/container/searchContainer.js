import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

export default function SearchContainer() {
  const history = useHistory();
  const url = new URL(window.location.href);
  const urlParams = new URLSearchParams(window.location.search);
  const [value, setValue] = useState(urlParams.get('search'));

  const handlerSetUrlValue = (e) => {
    setValue(e.target.value);
  };

  const searchButtonClick = (e) => {
    e.preventDefault();
    const setUrlValue = url.searchParams.set("search", `${value}`);
    history.replace(url.search.replace(setUrlValue));
  }

  return <form>
    <Input
      value={value}
      placeholder="Введите название"
      onChange={handlerSetUrlValue}
      name="search"
      required={true}
    />
    <Button
      text="Поиск"
      onClick={searchButtonClick}
    />
  </form>
}
