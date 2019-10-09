import React from 'react';
import { Button } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <input 
        className="SearchBar-Input"
        type='text'
      />
      <Button 
        onClick={() => props.handleSearch()}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
