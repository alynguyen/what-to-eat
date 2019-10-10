const User = require('../models/user');

module.exports = {
  create
};

async function create(req, res) {
  console.log(req.body);
  try { 
    if (!req.body.preference) return res.status(400).send('No input');
    let user = await User.findById(req.body.user);
    console.log('body.user', req.body.user);
    user.preferences.push(req.body);
    user.save();
    return res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}
