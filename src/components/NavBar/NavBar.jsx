import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css';

const NavBar = (props) => {
    let nav = props.user ?
      <Button
        variant="danger"
        onClick={props.handleLogout}
      >
        Log Out
      </Button>
    :
      <div>
        <Link to='/login'>
          <button className="btn-out">Log In</button>
        </Link>
        <Link to='/signup'>
          {/* <Button variant="danger">Sign Up</Button> */}
          <button className="btn-custom">Sign Up</button>
        </Link>
       </div>
  return (
    <div className="Navbar">
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">What To Eat</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link to='/' className="navbar-item">
            Home
            </Nav.Link>
            <Nav.Link to='/show' className="navbar-item">
            Show
          </Nav.Link> */}
        </Nav>
        {nav}
    </Navbar>
    </div>
  );
}

export default NavBar;
