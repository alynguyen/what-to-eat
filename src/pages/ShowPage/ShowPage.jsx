import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import Reviews from '../../components/Reviews/Reviews';
import { Card } from 'react-bootstrap';
import { getReviews } from '../../services/yelp-api';
import { Link } from 'react-router-dom';
import './ShowPage.css'



class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.handleReviews();
  }

  async handleReviews() {
    const reviews = await getReviews(this.props.data.id);
    this.setState({reviews: reviews})
  
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.handleReviews();
    }
  }

  render() {
    return (
      <>
      <Navbar 
        handleLogout={this.props.handleLogout}
        user={this.props.user}
        />
      <div className="CardPage">
        <Card className="ShowPage-CardDetails" style={{ width: '20rem' }}>
          <div className="ShowPage-CardTitle">{this.props.data.name}</div>
          <small className="ShowPage-TextPrice">{this.props.data.price}</small>
          <div className="BusinessCard-StarsContainer">
            <img src={this.props.stars[this.props.data.rating]} alt={this.props.data.rating} />
            <small className="ShowPage-TextMuted">{this.props.data.review_count} Reviews</small>
          </div>
          <div className="ShowPage-CatContainer">
            {this.props.data.categories.map((cat, idx) => (
              <li 
                key={idx}
                className="ShowPage-Cat"
              >
                {cat.title}
              </li>
            ))}
          </div>
          <div className="flex-row">
            <i className="fas fa-map-marker-alt ShowPage-Marker"></i>
            <div className="ShowPage-TextAddress">
              <span>{this.props.data.location.display_address[0]}</span>
              <span>{this.props.data.location.display_address[1]}</span>
            </div>
          </div>
          <div className="ShowPage-Logo">
              <img style={{height: "2em"}} src="images/yelp.png" alt="Yelp" onClick={() => window.open(this.props.data.url, "_blank")}/>
          </div>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img className="ShowPage-Img" variant="top" src={this.props.data.image_url} />
          </Card>
        <Card
          className="ShowPage-Map"
          style={{ width: '20rem', height: '20rem'}}>
          <GoogleMap 
            cords={this.props.data.coordinates}
            />
          </Card>
        <Card className="ShowPage-ReviewCard">
          <Reviews 
            reviews={this.state.reviews}
            stars={this.props.starsRg}
            />
          </Card>
          <div className="ShowPage-BtnNext">
            <Link to={`/${this.props.handleRandom()}`}>
                <button 
                  className="SearchBar-Btn btn-custom"
                  onClick={() => this.handleReviews()}
                  >
                  Choose Another!
                </button>
              </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Show;
