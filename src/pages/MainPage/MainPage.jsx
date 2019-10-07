import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Navbar from '../../components/Navbar/Navbar';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';
import './MainPage.css'

const MainPage = (props) => {
  return (
    <div className="container">
      <Navbar 
        handleLogout={props.handleLogout}
        user={props.user}
        />
      <SearchBar 
        handleSearch={props.handleSearch}
        />
      <Columns>
      {props.results.map((results, idx) => (
        <BusinessCard
        key={idx}
        name={results.name}
        image={results.image_url}
        location={results.location.display_address[0]}
        />
        ))}
      </Columns>
    </div> 
  );
}

export default MainPage;
