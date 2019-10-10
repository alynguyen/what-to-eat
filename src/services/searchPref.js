const BASE_URL = '/api/users/pref/';

export default {
  create,
  getPref
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

// function getPref(user) {
//   const options = {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(user)
//   };
//   return fetch(BASE_URL + user.id, options).then(res => res.json())
// }

function getPref(user) {
  console.log('user ID', user)
  return fetch(BASE_URL + user)
    .then((res) => res.json());
}
