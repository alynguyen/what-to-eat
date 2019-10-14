import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBarC.css';

const NavBarC = (props) => {
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
        <Navbar.Brand>
          <Link to='/' className="Navbar-Brand link"><p className="Navbar-Logo">Hanger Games</p></Link>
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

export default NavBarC;
