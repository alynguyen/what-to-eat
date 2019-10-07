import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Navbar from '../../components/Navbar/Navbar';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import { Navbar } from 'react-bulma-components';

const MainPage = (props) => {
  return (
    <div>
      <Navbar 
        handleLogout={props.handleLogout}
        user={props.user}
      />
      {/* <NavBar 
        handleLogout={props.handleLogout}
        user={props.user}
      /> */}
      <SearchBar 
        handleSearch={props.handleSearch}
      />
      {props.results.map((results, idx) => (
        <BusinessCard
          key={idx}
          name={results.name}
        />
      ))}
    </div> 
  );
}

export default MainPage;
