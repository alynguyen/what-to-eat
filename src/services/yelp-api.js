
export function getAllYelp(lat, lng, terms) {
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
        term: `food, restaurants, ${terms}`,
        radius: 5000,
        limit: 50
      })
    })
    .then((res) => res.json());
}

export function getReviews(id) {
  return fetch(`api/yelp/${id}/reviews`)
    .then((res) => res.json());
}
