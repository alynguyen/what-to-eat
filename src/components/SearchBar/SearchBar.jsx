import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input 
        type='text'
      />
      <button 
        onClick={() => props.handleSearch()}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
