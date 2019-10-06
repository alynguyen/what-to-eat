const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY);

// router.post('/search', (req, res) => {
//   client.search(req.body)
//   .then(res => {
//     (res => res.json())
//   })
//   .catch(e => {
//     console.log(e);
//   });
// })

router.post('/search', async (req, res) => {
    const results = await client.search(req.body);
    console.log(results.jsonBody.businesses);
    return res.json(results.jsonBody.businesses);
})


module.exports = router;

