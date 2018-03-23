import axios from "axios";

export function selectSite(address, data, sites) {
	const newSites = [...sites];
	let siteReference = newSites;
	address.forEach(index => {
		if (siteReference.children) {
			siteReference = siteReference.children[index];
		} else {
			siteReference = siteReference[index];
		}
	})
	siteReference.isOpen = !siteReference.isOpen;
  return {
    type: "SITE_SELECTED",
    payload: newSites
  };
}

export const FETCH_LINKS_IMGS = "FETCH_LINKS_IMGS";

export function fetchImages(action) {
  const request = axios.get("/api/get_products?url=" + action);
  return {
		type: FETCH_LINKS_IMGS,
		payload: request
	}
}

export const NUMBER_OF_PRODUCTS = "NUMBER_OF_PRODUCTS";

export function numberOfProducts(data) {
	return {
		type: NUMBER_OF_PRODUCTS,
		payload: data
	}
}








