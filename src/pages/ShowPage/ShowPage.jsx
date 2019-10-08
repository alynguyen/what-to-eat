import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './ShowPage.css'
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import { Card } from 'react-bootstrap';


class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: this.props.data.id,
      reviews: []
    }
  }

  // componentDidMount() {
  //   this.setState({currentId: this.props.data.id })
  // }

  render() {
    return (
      <div className="container">
      <Navbar 
        handleLogout={this.props.handleLogout}
        user={this.props.user}
        />
      <h1 className="title">
        {this.props.data.name}
      </h1>
      <div className="flex-row">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={this.props.data.image_url} />
        </Card>
      <Card style={{ width: '20rem', height: '20rem'}}>
        <GoogleMap 
          cords={this.props.data.coordinates}
          />
        </Card>
        </div>
      </div>
    );
  }
}

export default Show;
