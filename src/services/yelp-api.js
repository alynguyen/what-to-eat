
export function getAllYelp(lat, lng) {
  return fetch(
    '/api/yelp/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        latitude: lat,
        longitude: lng,
        term: 'food, restaurants',
        radius: 500,
        limit: 50
      })
    })
    .then((res) => res.json());
}

export function getReviews(id) {
  return fetch(`api/yelp/${id}/reviews`)
    .then((res) => res.json());
}
