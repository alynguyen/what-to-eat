import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessCard.css';
import { Container, Card } from 'react-bootstrap';


const BusinessCard = (props) => {
  return (
    <Link to={`/${props.idx}`} className="link">
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.location}</Card.Text>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default BusinessCard;


