import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import NavBarC from '../../components/NavBarC/NavBarC';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import Welcome from '../../components/Welcome/Welcome';
import GoogleMapHead from '../../components/GoogleMap/GoogleMapHead';
import LoadPage from '../../pages/LoadPage/LoadPage';
import './MainPage.css'

const MainPage = (props) => {

  let main = props.total
    ? 
      <div className="flex">
        {props.results.map((results, idx) => (
          <BusinessCard
            key={idx}
            idx={idx}
            stars={props.stars}
            id={results.id}
            name={results.name}
            image={results.image_url}
            location={results.location.display_address[0]}
            rating={results.rating}
            reviewCount={results.review_count}
            price={results.price}
            cats={results.categories}
          />
        ))}
      </div>
    : 
      props.location ?
      <div className="MainPage-Load"><LoadPage total={props.total} /></div>
    :
      <Welcome 
        handleLocation={props.handleLocation}
      />

  return (
    <>
      <NavBarC 
        handleLogout={props.handleLogout}
        user={props.user}
      />
      <header className="MainPage-Header">
        <GoogleMapHead 
          location={props.location}
        />
      </header>
        <SearchBar 
          handleSignupOrLogin={props.handleSignupOrLogin}
          handleSearch={props.handleSearch}
          user={props.user}
          preferences={props.preferences}
          handleGetPref={props.handleGetPref}
          handleRandom={props.handleRandom}
          handleTerms={props.handleTerms}
          total={props.total}
        />
      {main}
    </>
  );
}

export default MainPage;
