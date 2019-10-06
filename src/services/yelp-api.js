
export function getAllYelp(lat, lng) {
  return fetch(
    '/api/yelp/search', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      params: {
        latitude: lat,
        longtitude: lng
      }
    })
    .then((res) => console.log(res.json()))
}