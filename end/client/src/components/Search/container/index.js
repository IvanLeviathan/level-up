import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Search from '../component';

export default function SearchContainer() {
  const [value, setValue] = useState('');
  const history = useHistory();
  const url = new URL(window.location.href);

  const handlerSetUrlValue = (e) => {
    const setUrlValue = url.searchParams.set("search", `${e.target.value}`);
    history.replace(url.search.replace(setUrlValue));
    setValue(e.target.value);
  };

  return (
    <Search
      value={value}
      onChange={handlerSetUrlValue}
    />
  )
}
