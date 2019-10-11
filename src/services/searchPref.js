const BASE_URL = '/api/users/pref/';

export default {
  create,
  getPref,
  delPref
};

function create(pref) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(pref)
  };
  return fetch(`${BASE_URL}`, options).then(res => res.json());
}

function getPref(user) {
  console.log('user ID', user)
  return fetch(BASE_URL + user)
    .then((res) => res.json());
}

function delPref(id, user) {
  console.log('Delete', id, user);
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      user: user
    })
  };
  return fetch(`${BASE_URL}delete`, options).then(res => res.json());
}