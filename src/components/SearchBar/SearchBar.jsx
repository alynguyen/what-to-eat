import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input 
        type='text'
      />
      <button 
        onClick={() => props.handleSearch()}
        value='Search'
      />
    </div>
  );
}

export default SearchBar;
