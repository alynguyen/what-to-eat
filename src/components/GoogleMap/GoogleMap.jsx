import React, { Component } from 'react';
import { Marker, Map, GoogleApiWrapper } from 'google-maps-react';
 
const mapStyles = {
  width: '40%',
  height: '40%'
};

class GoogleMap extends Component {
 
  render() {
    return (
      <Map
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