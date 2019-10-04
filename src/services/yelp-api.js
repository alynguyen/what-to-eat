
const url = 'https://api.yelp.com/v3/businesses/search'
const api_key = '_8ME4F4nLgn_pD2vBb1_ewdU4dljPP0uXB611K_RvHXOVQtiN6ZARi3SV6dNarb6oMGmJxsL6v3ePvtSdjKfmmpPZJuESfNfm-I8R9QbsqHUebAbNO1p54IsKtKWXXYx'

export function getAllYelp() {
  return fetch(
    url, {
      json: true,
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${api_key}`
      },
      params: {
        location: 'San Francisco'
      },
    })
    .then((res) => console.log(res.json()))
}