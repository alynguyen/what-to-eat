const User = require('../models/user');

module.exports = {
  create,
  getPref,
  delPref
};

async function create(req, res) {
  // console.log(req.body);
  try { 
    if (!req.body.preference) return res.status(400).send('No input');
    let user = await User.findById(req.body.user);
    user.preferences.push(req.body);
    // console.log('body.user', user.preferences);
    user.save();
    return res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getPref(req, res) {
  console.log(req.body);
  try {
    let user = await User.findById(req.params.id);
    // if (!user) return res.status(404).json({error: 'No user found.'});
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
    console.log('user', user);
    // let pref = await user.findOne({ 'preferences._id': req.body.id});
    // pref.delete();
    // console.log(pref);
    return res.json(user);
  } catch(err) {
    console.log(err);
    return res.status(500).send('Error with delete');
  }
}


