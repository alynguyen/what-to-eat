import React from 'react';
import ReactLoading from 'react-loading';
import Navbar from '../../components/Navbar/Navbar'
import './LoadPage.css'



const LoadPageShow = (props) => {
  return (
    <div>
      <Navbar />
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
