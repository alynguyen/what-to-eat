import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Navbar from '../../components/Navbar/Navbar';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import './MainPage.css'

const MainPage = (props) => {

  let main = props.results
    ? <div className="flex">
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
    : <div>No Results</div>

  return (
    <>
      <Navbar 
        handleLogout={props.handleLogout}
        user={props.user}
      />
      <header className="MainPage-Header">
      </header>
        <SearchBar 
          handleSignupOrLogin={props.handleSignupOrLogin}
          handleSearch={props.handleSearch}
          user={props.user}
          preferences={props.preferences}
          handleGetPref={props.handleGetPref}
          handleRandom={props.handleRandom}
          handleTerms={props.handleTerms}
        />
      {main}
    </>
  );
}

export default MainPage;
