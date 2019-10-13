import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const NavBar = (props) => {
    let nav = props.user ?
      <button
        className="btn-custom"
        onClick={props.handleLogout}
      >
        Log Out
      </button>
    :
      <div>
        <Link to='/login'>
          <button className="btn-out">Log In</button>
        </Link>
        <Link to='/signup'>
          <button className="btn-custom">Sign Up</button>
        </Link>
       </div>
  return (
    <div className="Navbar">
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">
        <p className="Navbar-Logo">What To Eat</p>
      </Navbar.Brand>
      <Nav className="mr-auto">
      </Nav>
        {nav}
    </Navbar>
    </div>
  );
}

export default NavBar;
