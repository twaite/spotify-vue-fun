import axios from 'axios';

function parseParams(str) {
  const pieces = str.split('&');
  const data = {};
  let i;
  let parts;
  // process each query pair
  for (i = 0; i < pieces.length; i++) {
    parts = pieces[i].split('=');
    if (parts.length < 2) {
      parts.push('');
    }
    data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }
  return data;
}

export function redirectForLogin() {
  const authUrl = 'https://accounts.spotify.com/authorize';
  const clientId = 'dbc7aa206bf44549a9ab788d013f4682';
  const redirectUri = encodeURIComponent('http://localhost:8080/auth');
  const url = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
  window.location = url;
}

export function loginFromUrl(hash) {
  const hashParams = parseParams(hash.replace(/^#/g, ''));
  const storage = window.localStorage;

  if (hashParams.access_token) {
    const expired = new Date();
    expired.setSeconds(expired.getSeconds() + hashParams.expires_in);
    storage.setItem('token', hashParams.access_token);
    storage.setItem('expiresAt', expired);
    storage.setItem('tokenType', hashParams.token_type);
    setRequestHeaders();
  }

  // TODO handle error here
}

export function setRequestHeaders() {
  if (!axios.defaults.headers.common['Authorization']) {
    const storage = window.localStorage;
    const token = storage.getItem('token');
    const tokenType = storage.getItem('tokenType');
    axios.defaults.headers.common['Authorization'] = `${tokenType} ${token}`;
  }
}

export function isLoggedIn() {
  const storage = window.localStorage;
  return storage.getItem('token')
    && new Date(storage.getItem('expiresAt')) > new Date();
}

export function logout() {
  window.localStorage.clear();
  delete axios.defaults.headers.common['Authorization'];
}
