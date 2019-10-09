import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './ShowPage.css'
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import Reviews from '../../components/Reviews/Reviews';
import { Card } from 'react-bootstrap';
import { getReviews } from '../../services/yelp-api';


class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  async componentDidMount() {
    const reviews = await getReviews(this.props.data.id);
    console.log(reviews);
    this.setState({reviews: reviews})
  }


  render() {
    return (
      <>
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
        <Card style={{ width: '70rem'}}>
          <Reviews 
            reviews={this.state.reviews}
            />
          </Card>
        </div>
      </>
    );
  }
}

export default Show;
