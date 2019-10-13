import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <button
      className="btn-custom Navbar-Login"
      onClick={props.handleLogout}
    >
      Log Out
    </button>
  :
    <div className="Navbar-Login">
      <Link to='/login'>
        <button className="btn-out">Log In</button>
      </Link>
      <Link to='/signup'>
        <button className="btn-custom">Sign Up</button>
      </Link>
    </div>

  const collapseNav = props.user ?
     <div className="hide-link">
       {/* Implementing in the future */}
        {/* <Form inline>
          <FormControl 
            type="text" 
            placeholder="Search" 
            className="mr-sm-2" 
            style={{width: '14rem'}}
          />
            <div className="btn-custom Navbar-ColSearch">
              <i class="fas fa-search"></i>
            </div>
        </Form> */}
        <div
          className="Navbar-ColLink"
          onClick={props.handleLogout}
        >
          Log Out
        </div>
      </div>
    : 
      <div className="hide-link link">
        <div className="Navbar-ColLink"><Link to='/login'>Log In</Link></div>
        <div className="Navbar-ColLink"><Link to='/signup'>Sign Up</Link></div>
      </div>

  return (
    <div className="Navbar">
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Navbar.Brand href="/">
          <p className="Navbar-Logo">What To Eat</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {collapseNav}
        </Nav>
        </Navbar.Collapse>
          {nav}
      </Navbar>
    </div>
  );
}

export default NavBar;
