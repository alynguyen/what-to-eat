import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns, Card, Section } from 'react-bulma-components';
import './ShowPage.css'
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import GoogleMapReact from 'google-map-react';


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
      <Columns>
      <Columns.Column size="is-3">

      <div className="card">
        <div className="card-header">
          </div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.data.image_url} alt={props.name} />
          </figure>
        </div>
        </div>
        <Card>

        <GoogleMap 
          cords={props.data.coordinates}
          />
        </Card>
        </Columns.Column>
        </Columns>
      </div>
  );
}

export default Show;
