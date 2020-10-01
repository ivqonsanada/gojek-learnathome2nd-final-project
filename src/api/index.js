import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar'
loadProgressBar()


const ROOT_URL = 'https://developers.zomato.com/api/v2.1';

export const getCities = city =>
  axios.get(`${ROOT_URL}/cities?q=${city}`, {
    headers: { 'user-key': '65d41efc8641784ac3f355ed60853848' }
  });

export const searchRestaurants = cityEntityId =>
  axios.get(`${ROOT_URL}/search?entity_id=${cityEntityId}&entity_type=city`, {
    headers: { 'user-key': '65d41efc8641784ac3f355ed60853848' }
  });