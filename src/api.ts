import axios from 'axios';

const API_URL = 'http://fds-deliver.herokuapp.com';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

const fetchProducts = () => axios.get(`${API_URL}/products`);

export const fetchLocalMapBox = (local: string) => axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);

export default fetchProducts;
