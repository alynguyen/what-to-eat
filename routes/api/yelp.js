const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY);

router.post('/search', (req, res) => {
  client.search(req.body).then(res => {
    // console.log(res.jsonBody.businesses);
    (res => res.json())
  }).catch(e => {
    console.log(e);
  });
})

// router.post('/search', async (req, res) => {
//   try {
//     const res = await client.search(req.body);
//     console.log(res.jsonBody.businesses);
//     return (res => res.json()); 
//   } catch (err) {
//     console.log(err);
//   }
// })

module.exports = router;

