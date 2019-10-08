import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './ShowPage.css'
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import { Card } from 'react-bootstrap';


const Show = (props) => {
  return (
    <div className="container">
      <Navbar 
        handleLogout={props.handleLogout}
        user={props.data.name}
        />
      <h1 className="title">
        {props.data.name}
      </h1>
    <div className="flex-row">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={props.data.image_url} />
        </Card>
      <Card style={{ width: '20rem', height: '20rem'}}>
        <GoogleMap 
          cords={props.data.coordinates}
          />
        </Card>
        </div>
      </div>
  );
}

export default Show;
