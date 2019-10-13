import React from 'react';
import ReactLoading from 'react-loading';
import './LoadPage.css'


const LoadPage = (props) => {

  let loadContent = props.total === null
  ?         
    <ReactLoading 
      type={'spinningBubbles'} 
      color={'grey'} 
      height={'5%'} 
      width={'5%'}
    />
  :
    props.total === 0
    ?
      <div>No results</div>
    : <div></div>

  return (
    <div>
      <div className="LoadPage">
        {loadContent}
      </div>
    </div>
  );
}

export default LoadPage;
