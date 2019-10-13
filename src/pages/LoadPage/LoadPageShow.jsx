import React from 'react';
import ReactLoading from 'react-loading';
import NavBarC from '../../components/NavBarC/NavBarC'
import './LoadPage.css'



const LoadPageShow = (props) => {
  return (
    <div>
      <NavBarC />
      <div className="LoadPageShow">
        <ReactLoading 
          type={'spinningBubbles'} 
          color={'grey'} 
          height={'5%'} 
          width={'5%'}
          />
      </div>
    </div>
  );
}

export default LoadPageShow;
