import React from 'react';
import './Welcome.css'

const Welcome = (props) => {

  return (
    <div className="Welcome">
      <h1>Welcome</h1>
      <button
        onClick={() => props.handleLocation()}
        className="btn-custom"
      >
        <i className="fas fa-globe-americas"></i>Show Nearby
      </button>
    </div>
  );
}

export default Welcome;
