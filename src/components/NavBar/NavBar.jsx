import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar as BulmaNav } from 'react-bulma-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <BulmaNav>
      <div className="navbar">
        <div className="navbar-brand">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        <Link role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">

        <div className="navbar-start">
          <Link className="navbar-item">
            Home
          </Link>

          <Link className="navbar-item">
            Documentation
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link class="button is-light">
                Log in
              </Link>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </BulmaNav>
  );
}

export default Navbar;