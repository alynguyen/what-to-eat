import React, { Component } from 'react';
import { Card, Section } from 'react-bulma-components';
import { Marker, Map, GoogleApiWrapper } from 'google-maps-react';
import './GoogleMap.css'
 
const mapStyles = {
  width: '95%',
  height: '95%',
  padding: '5px'
};

class GoogleMap extends Component {
 
  render() {
    return (
        <Map
          className=""
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{lat: this.props.cords.latitude, lng: this.props.cords.longitude}}
          >
          <Marker position={{lat: this.props.cords.latitude, lng: this.props.cords.longitude}} />
        </Map>
    );
  }
}
 

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD5GgwFABHAaCBcvqOtn0jJMbTEHAVIhik'
})(GoogleMap);