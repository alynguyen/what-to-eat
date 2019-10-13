const User = require('../models/user');

module.exports = {
  create,
  getPref,
  delPref
};

async function create(req, res) {
  try { 
    if (!req.body.preference) return res.status(400).send('No input');
    let user = await User.findById(req.body.user);
    user.preferences.push(req.body);
    user.save();
    return res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getPref(req, res) {
  try {
    let user = await User.findById(req.params.id);
    return res.json(user.preferences);
  } catch(err) {
    console.log(err);
    return res.status(500).send('Error with request');
  }
}

async function delPref(req, res) {
  try {
    let user = await User.findById(req.body.user);
    user.preferences.pull(req.body.id);
    user.save();
    return res.json(user);
  } catch(err) {
    console.log(err);
    return res.status(500).send('Error with delete');
  }
}


