const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY);

router.post('/search',  (req, res) => {
  console.log(req.body);
  client.search(req.body).then(res => {
    console.log(res.jsonBody);
  }).catch(e => {
    console.log(e);
  });
})

module.exports = router;

