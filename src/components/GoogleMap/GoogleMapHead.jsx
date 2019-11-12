import React, { Component } from 'react';
import { Marker, Map, GoogleApiWrapper } from 'google-maps-react';
import './GoogleMap.css'
 
const mapStyles = {
  width: '100%',
  height: '25rem',
  padding: '5px'
};

class GoogleMap extends Component {
 
  render() {
    return (
        <Map
          className="GoogleMapHead"
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{lat: this.props.lat, lng: this.props.lng}}
          >
          {/* <Marker position={{lat: this.props.location.lat, lng: this.props.location.lng}} /> */}
        </Map>
    );
  }
}
 

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD5GgwFABHAaCBcvqOtn0jJMbTEHAVIhik'
})(GoogleMap);