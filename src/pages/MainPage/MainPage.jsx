import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import BusinessCard from '../../components/BusinessCard/BusinessCard';

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
      {/* {props.results.map((results, idx) => (
        <BusinessCard
          key={idx}
          name={results.name}
        />
      ))} */}
    </div> 
  );
}

export default MainPage;
