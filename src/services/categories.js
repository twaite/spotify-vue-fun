import axios from 'axios';

export function getCategories() {
  return axios.get(`${process.env.VUE_APP_API}/browse/categories`);
}
