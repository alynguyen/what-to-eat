const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY);

router.get('/search',  (req, res) => {
  client.search({
    params: req.body
  }).then(response => {
    console.log(response.jsonBody);
  }).catch(e => {
    console.log(e);
  });
})

module.exports = router;

