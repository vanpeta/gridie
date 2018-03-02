import axios from 'axios';
import { FETCH_USER } from './types';

const fetchProducts = () => {
	axios.get('/api/get_products');
};