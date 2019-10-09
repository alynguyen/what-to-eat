import React from 'react';
import { Button } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <div className="SearchBar-Flex">

      <input 
        className="SearchBar-Input"
        type='text'
        />
      <Button 
        variant="danger"
        onClick={() => props.handleSearch()}
        >
        Search
      </Button>
        </div>
    </div>
  );
}

export default SearchBar;
