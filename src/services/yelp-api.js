

export function getAllYelp() {
  return fetch(
    '/yelp/search', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
    .then((res) => console.log(res.json()))
}