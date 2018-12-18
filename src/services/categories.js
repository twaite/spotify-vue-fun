import axios from 'axios';

export function getCategories() {
  return axios.get('https://api.spotify.com/v1/browse/categories');
}
