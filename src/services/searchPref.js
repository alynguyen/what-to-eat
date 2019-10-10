const BASE_URL = '/api/users/pref';

export default {
  create
};

function create(pref) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(pref)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}