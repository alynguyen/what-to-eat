const express = require('express');
const router = express.Router();
const prefCtrl = require('../../controllers/preferences');

router.get('/:id', prefCtrl.getPref);

/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));

router.post('/', checkAuth, prefCtrl.create);
router.delete('/delete', checkAuth, prefCtrl.delPref);

/*---------- Save for later maybe on something else ----------*/
function checkAuth(req, res, next) {
  if (req.body.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;