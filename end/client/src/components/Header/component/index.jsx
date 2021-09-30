import React from 'react';
import './style.scss';
import { Button } from 'react-bootstrap'

export default function Header(props) {
  const {userInfo, logout} = props;
  return (
    <div className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap">
          <div className="row w-100">
            <div className="col-12 col-lg-3">
              {!!userInfo && (
                <span className="navbar-brand col-sm-3 col-md-2 mr-0">Привет, {userInfo.user.name} {userInfo.user.surname}</span>
              )}
            </div>
            <div className="col-12 col-lg-6">
              <input className="form-control form-control-dark w-100" type="text" placeholder="Поиск" aria-label="Search"/>
            </div>
            <div className="col-12 col-lg-3 text-end">
              <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                  <Button variant="danger" onClick={logout}>Выйти</Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
