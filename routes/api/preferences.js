const express = require('express');
const router = express.Router();
const prefCtrl = require('../../controllers/preferences');

router.post('/', prefCtrl.create);
router.get('/:id', prefCtrl.getPref);
router.delete('/delete', prefCtrl.delPref);


module.exports = router;