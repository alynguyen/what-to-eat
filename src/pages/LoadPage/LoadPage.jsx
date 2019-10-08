import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import './LoadPage.css'


const LoadPage = (props) => {
  return (
    <div>
    <Navbar />
      <div className="LoadPage">
      <ReactLoading 
        type={'spinningBubbles'} 
        color={'grey'} 
        height={'10%'} 
        width={'10%'}
        />
      </div>
    </div>
  );
}

export default LoadPage;
