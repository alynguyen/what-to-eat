import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import Navbar from '../../components/Navbar/Navbar';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import './MainPage.css'
import { Container } from 'react-bootstrap';

const MainPage = (props) => {

  return (
    <>
      <Navbar 
        handleLogout={props.handleLogout}
        user={props.user}
      />
      <header className="MainPage-Header">
      </header>
        <SearchBar 
          handleSearch={props.handleSearch}
        />
      <div className="flex">
        {props.results.map((results, idx) => (
          <BusinessCard
            idx={idx}
            id={results.id}
            name={results.name}
            image={results.image_url}
            location={results.location.display_address[0]}
            rating={results.rating}
            reviewCount={results.review_count}
            price={results.price}
            stars={props.stars}
            cats={results.categories}
          />
          ))}
      </div>
    </>
  );
}

export default MainPage;
