import React from 'react';
import { Card, Columns } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './BusinessCard.css';


const BusinessCard = (props) => {
  return (
      <Card
        className="column is-one-quarter"
      >
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.image} alt={props.name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h3 className="card-header-title">{props.name}</h3>
            <p>{props.location}</p>
            {/* <a href="#">#css</a> <a href="#">#responsive</a>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
          </div>
        </div>
      </Card>
  );
}

export default BusinessCard;
