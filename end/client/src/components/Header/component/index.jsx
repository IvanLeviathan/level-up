import React from 'react';
import './style.scss';
import { Button } from 'react-bootstrap'
import SearchContainer from '../../Search/container';
import { Link } from 'react-router-dom';
import { common } from '../../../mock-routes';

export default function Header(props) {
  const {userInfo, logout, todoPage} = props;
  return (
    <div className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-dark sticky-top bg-dark">
          <div className="row w-100 align-items-center">
            <div className="col-12 col-lg-3 mb-3 mb-lg-0">
              {!!userInfo && (
                <span className="navbar-brand col-sm-3 col-md-2 mr-0">{userInfo.user.name} {userInfo.user.surname}</span>
              )}
            </div>
            <div className="col-12 col-lg-6 mb-3 mb-lg-0">
              {!!todoPage ? (
                <SearchContainer/>
              ): (
                <Link className="btn btn-outline-light me-3 d-inline-block" to={common.todo()}>На главную</Link>
              )}
            </div>
            <div className="col-12 col-lg-3 text-end mb-3 mb-lg-0">
              <ul className="navbar-nav ">
                <li className="nav-item text-nowrap">
                  <Link className="btn btn-outline-light me-3 d-inline-block" to={common.profile()}>Мой профиль</Link>
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
