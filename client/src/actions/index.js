import axios from 'axios';
import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => 
	async dispatch => {
		const res = await axios.get("/api/get_products", {
				params: {
					categoryUrl: 'urlHELLO'
				}
			}
		);
    dispatch({ type: FETCH_PRODUCTS, payload: res.data });
	};