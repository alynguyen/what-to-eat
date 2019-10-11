import React from 'react';
import { Media } from 'react-bootstrap';
import './Reviews.css';
import Moment from 'react-moment';

const Reviews = (props) => {
  return (
    <ul className="Reviews">
      <h1>Reviews</h1>
      {props.reviews.map((review, idx) => (
        <Media as="li" key={idx}>
          <img
            width={64}
            height={64}
            className="mr-3 Reviews-ProfileImg"
            src={review.user.image_url}
            alt={review.user.name}
            onClick={() => window.open(review.user.profile_url, "_blank")}
            />
          <Media.Body>
              <div className="Reviews-Name">
                <h5>{review.user.name}</h5>
                <Moment format="MM/DD/YYYY">
                  {review.time_created}
                </Moment>
              </div>
              <img className="Reviews-Img" src={props.stars[review.rating]} alt={review.rating} />
            <p
              className="Reviews-P"
              onClick={() => window.open(review.url, "_blank")}
            >{review.text}</p>
          </Media.Body>
        </Media>
      ))}
    </ul>
  );
}

export default Reviews;
