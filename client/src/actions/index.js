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

export const CLEAN_URL = "CLEAN_URL";

export function cleanUrl (data) {
	data = ""
	return {
		type: CLEAN_URL,
		payload: data
	}
}

export const UPDATE_TITLE_COPY = "UPDATE_TITLE_COPY";

export function updateTitleCopy (titleCopy) {
	console.log("ACTION=",titleCopy )
	return {
		type: UPDATE_TITLE_COPY,
		payload: titleCopy
	}
}

export const UPDATE_CTA_COPY = "UPDATE_CTA_COPY";

export function updateCTACopy (CTACopy) {
	console.log("ACTION=",CTACopy )
	return {
		type: UPDATE_CTA_COPY,
		payload: CTACopy
	}
}

export const SELECT_CATEGORY = "SELECT_CATEGORY";

export function selectCategory (url) {
	console.log("ACTION=",url )
	return {
		type: SELECT_CATEGORY,
		payload: url
	}
}

