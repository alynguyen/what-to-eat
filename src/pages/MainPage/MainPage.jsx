import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

const MainPage = (props) => {
  return (
    <div>
      <NavBar 
        handleLogout={props.handleLogout}
        user={props.user}
      />
      Main
    </div> 
  );
}

export default MainPage;
