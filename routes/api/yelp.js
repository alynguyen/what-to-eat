const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY);

router.post('/search', async (req, res) => {
    const results = await client.search(req.body);
    return res.json(results.jsonBody.businesses);
})

// router.get('/:id', (req, res) => {
//     return 
// })

module.exports = router;

