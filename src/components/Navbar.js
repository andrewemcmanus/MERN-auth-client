import React from 'react';
import { Navlink, Link } from 'react-router-dom';

const NavBar = (props) =< {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MERN Auth</Link>
        <button className="navbar-toggle" type="button" data-toggle="#navbarsExample07" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-label="Toggle Navigation">
          <span className="navbar-toggle"></span>
        </button>
        <div className="collapse navbar-collapse" id="#navbarsExample07">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
