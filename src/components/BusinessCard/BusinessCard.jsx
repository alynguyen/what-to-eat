import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Columns } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './BusinessCard.css';


const BusinessCard = (props) => {
  return (
      <Card
        className="column is-one-quarter"
      >
        <Link to={`/${props.idx}`}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.image} alt={props.name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h3 className="card-header-title">{props.name}</h3>
            <p>{props.location}</p>
          </div>
        </div>
        </Link>
      </Card>
  );
}

export default BusinessCard;
