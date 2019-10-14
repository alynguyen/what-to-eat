import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './BusinessCard.css';


const BusinessCard = (props) => {
  return (
    <Link to={`/${props.idx}`} className="link">
    <Card className="BusinessCard-Card">
      <Card.Img className="BusinessCard-Img" variant="top" src={props.image} alt={props.name}/>
      <Card.Body className="BusinessCard-CardBody">
        <Card.Title>
          <div className="BusinessCard-StarsContainer">
            <img style={{height: '1em'}} src={props.stars[props.rating]} alt={props.rating} />
            <small className="text-muted">{props.reviewCount} Reviews</small>
          </div>
        </Card.Title>
        <Card.Title>
          <div className="BusinessCard-StarsContainer">
            {props.name}
            <small className="text-muted">{props.price}</small>
          </div>
        </Card.Title>
        <Card.Text><i className="fas fa-map-marker-alt"></i>{props.location}</Card.Text>
        <div className="BusinessCard-CatContainer">
          {props.cats.map((cat, idx) => (
            <div 
              key={idx}
              className="App-Cat"
            >
              {cat.title}
            </div>
          ))}
        </div>
        <div className="BusinessCard-Logo">
          <img style={{width: "4em"}} src="images/yelp.png" alt="Yelp"/>
        </div>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default BusinessCard;


