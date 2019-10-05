const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY);

router.get('/search', (req, res, next) => {
  client.search({
    term: 'Four Barrel Coffee',
    location: 'san francisco, ca',
  }).then(response => {
    console.log(response.jsonBody.businesses[0].name);
  }).catch(e => {
    console.log(e);
  });
})

