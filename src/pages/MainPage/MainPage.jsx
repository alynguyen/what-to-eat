import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import Navbar from '../../components/Navbar/Navbar';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import './MainPage.css'
import { Container } from 'react-bootstrap';

const MainPage = (props) => {

  return (
    <Container>
    
    <Navbar 
    handleLogout={props.handleLogout}
    user={props.user}
    />
      <SearchBar 
        handleSearch={props.handleSearch}
        />
      <Container className="flex">

      {props.results.map((results, idx) => (
        <BusinessCard
        idx={idx}
        id={results.id}
        name={results.name}
        image={results.image_url}
        location={results.location.display_address[0]}
        />
        ))}
      </Container>
    </Container>
  );
}

export default MainPage;
