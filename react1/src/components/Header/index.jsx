import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'
const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>ToDo App alpha alpha version</p>
          </div>
          {/* <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
            <a class="nav-item nav-link disabled" href="#">Disabled</a>
          </div> */}
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link" activeClassName="active" to="/user">User</NavLink>
                <NavLink className="nav-item nav-link" activeClassName="active" to="/settings">Settings</NavLink>
                <NavLink className="nav-item nav-link" activeClassName="active" to="/profile">Profile</NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
    </header>
  )
}
export default Header;