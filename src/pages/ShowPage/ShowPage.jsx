import React from 'react';
import Navbar from '../../components/Navbar/Navbar';


const Show = (props) => {
  return (
    <div className="container">
      <Navbar 
        handleLogout={props.handleLogout}
        user={props.user}
        />
    </div>
  );
}

export default Show;
