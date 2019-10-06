
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
        radius: 2500
      })
    })
    .then((res) => res.json());
}
