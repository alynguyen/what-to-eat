import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessCard.css';
import { Card } from 'react-bootstrap';


const BusinessCard = (props) => {
  return (
    <Link to={`/${props.idx}`} className="link">
    <Card className="BusinessCard-Card">
      <Card.Img className="BusinessCard-Img" variant="top" src={props.image} alt={props.name}/>
      <Card.Body style={{ padding: '.5rem .7rem'}} className="BusinessCard-CardBody">
        <Card.Title>
          <div className="BusinessCard-StarsContainer">
            <img src={props.stars[props.rating]} alt={props.rating} />
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


