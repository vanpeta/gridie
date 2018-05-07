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

export const UPDATE_TITLE = "UPDATE_TITLE";

export function updateTitleCopy (title) {
	return {
		type: UPDATE_TITLE,
		payload: title
	}
}

export const UPDATE_PARAGRAPH_COPY = "UPDATE_PARAGRAPH_COPY";

export function updateParagraphCopy (paragraphCopy) {
	return {
		type: UPDATE_PARAGRAPH_COPY,
		payload: paragraphCopy
	}
}


export const UPDATE_CTA_COPY = "UPDATE_CTA_COPY";

export function updateCTACopy (CTACopy) {
	return {
		type: UPDATE_CTA_COPY,
		payload: CTACopy
	}
}

export const UPDATE_TOP_CTA_COPY = "UPDATE_TOP_CTA_COPY";

export function updateTopCTACopy (TopCTACopy) {
	return {
		type: UPDATE_TOP_CTA_COPY,
		payload: TopCTACopy
	}
}

export const SELECT_CATEGORY = "SELECT_CATEGORY";

export function selectCategory (url) {
	return {
		type: SELECT_CATEGORY,
		payload: url
	}
}

export const ENABLE_NAME = "ENABLE_NAME";

export function nameEnable (boolean) {
	return {
		type: ENABLE_NAME,
		payload: boolean
	}
}

export const ENABLE_PRICE = "ENABLE_PRICE";

export function priceEnable (boolean) {
	return {
		type: ENABLE_PRICE,
		payload: boolean
	}
}

export const ENABLE_HERO = "ENABLE_HERO";

export function heroEnable (boolean) {
	return {
		type: ENABLE_HERO,
		payload: boolean
	}
}

export const UPDATE_CODE = "UPDATE_CODE";

export function updateCode (code) {
	return {
		type: UPDATE_CODE,
		payload: code
	}
}