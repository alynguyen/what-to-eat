import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    let nav = props.user ?
    <div>
      <Link to=''>
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
    <div>
      <Link to='/'>
        Home
      </Link>
      <Link to='/show'>
        Show
      </Link>
      {nav}
    </div>
  );
}

export default NavBar;
