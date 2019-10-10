const express = require('express');
const router = express.Router();
const prefCtrl = require('../../controllers/preferences');

router.post('/', prefCtrl.create);

module.exports = router;