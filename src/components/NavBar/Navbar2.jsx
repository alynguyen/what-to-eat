import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar as BulmaNav } from 'react-bulma-components';


const Navbar = (props) => {
    let nav = props.user ?
    <div>
      <Link to=''
        onClick={props.handleLogout}
        >
        Log Out
      </Link>
    </div>
    :
    <div>
      <Link to='/login'>
        Log In
      </Link>
      <Link to='/signup'>
        Sign Up
      </Link>
    </div>
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link className="navbar-item" to=''>
         <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </Link>
        <Link role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
       </div>

       <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link class="navbar-item">
            Home
          </Link>

          <Link class="navbar-item">
            Documentation
          </Link>

        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Link class="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link class="button is-light">
                Log in
              </Link>
              </div>
            </div>
          </div>
      </div>


        <Link to='/'>
          Home
        </Link>
        <Link to='/show'>
          Show
        </Link>
        {nav}
    </nav>
  );
}

export default Navbar;
