
const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY);

router.post('/search', async (req, res) => {
    const results = await client.search(req.body);
    return res.json(results.jsonBody.businesses);
})

router.get('/:id/reviews', async (req, res) => {
    const results = await client.reviews(req.params.id);
    return res.json(results.jsonBody.reviews);
})

module.exports = router;

