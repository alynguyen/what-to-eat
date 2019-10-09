import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

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
          <Button variant="primary-outline">
            Log In
          </Button>
        </Link>
        <Link to='/signup'>
          <Button variant="danger" bsClass="btn-custom">Sign Up</Button>
        </Link>
       </div>
  return (
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
  );
}

export default NavBar;
