import axios from 'axios';
import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => {
	return function(dispatch) {
		axios
      .get("/api/get_products")
      .then(res => dispatch({ type: FETCH_PRODUCTS, payload: res }));
	};
};