
export function getAllYelp(lat, lng) {
  console.log(lat, lng)
  return fetch(
    '/api/yelp/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        latitude: lat,
        longitude: lng
      })
    })
    .then((res) => console.log(res.json()))
}
