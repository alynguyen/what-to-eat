import React, { Component } from 'react';
import { Marker, Map, GoogleApiWrapper } from 'google-maps-react';
import mapOptions from './HeaderOptions.json';
import './GoogleMap.css';
 
const mapStyles = {
  width: '100%',
  height: '25rem',
  padding: '5px'
};

const defaultMapOptions = {
  styles: mapOptions
};

class GoogleMap extends Component {
 
  render() {
    return (
        <Map
          className="GoogleMapHead"
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          defaultOptions={defaultMapOptions}
          initialCenter={{lat: this.props.lat, lng: this.props.lng}}
          >
          {this.props.results.map((result, idx) => (
            <Marker 
              key={idx}
              position={{lat: result.coordinates.latitude, lng: result.coordinates.longitude}}
            />
          ))}
        </Map>
    );
  }
}
 

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD5GgwFABHAaCBcvqOtn0jJMbTEHAVIhik'
})(GoogleMap);