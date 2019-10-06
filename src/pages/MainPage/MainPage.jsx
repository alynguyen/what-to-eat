import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';

const MainPage = (props) => {
  return (
    <div>
      <NavBar 
        handleLogout={props.handleLogout}
        user={props.user}
      />
      <SearchBar 
        handleSearch={props.handleSearch}
      />
      Main
    </div> 
  );
}

export default MainPage;
