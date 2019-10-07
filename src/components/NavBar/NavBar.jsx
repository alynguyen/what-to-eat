import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';


const Navbar = (props) => {
    let nav = props.user ?
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <div
            className="button is-light"
            onClick={props.handleLogout}
            >
            Log Out
          </div>
        </div>
      </div>
    </div>
    :
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to='/login'
            className="button is-light"
            >
            Log In
          </Link>
          <Link to='/signup'
            className="button is-primary"
            >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to='/'>
         <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28" />
        </Link>
        <Link to='' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
       </div>

       <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to='/' className="navbar-item">
            Home
          </Link>

          <Link to='/show' className="navbar-item">
            Show
          </Link>

        </div>
        {nav}
      </div>
    </nav>
  );
}

export default Navbar;
