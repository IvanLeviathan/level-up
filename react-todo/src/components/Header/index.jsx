import React from 'react'
import SearchContainer from '../../container/searchContainer';
import "./style.css";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="search-wrapper">
          <div className="search-wrapper-inner">
            <SearchContainer/>
          </div>
        </div>
      </div>
    </header>
  )
}
