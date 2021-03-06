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

export const UPDATE_TOP_CTA = "UPDATE_TOP_CTA";

export function updateTopCTA (topCta) {
	return {
		type: UPDATE_TOP_CTA,
		payload: topCta
	}
}

export const BOTTOM_CTA = "BOTTOM_CTA";

export function updateBottomCTA(bottomCta) {
	return {
		type: BOTTOM_CTA,
		payload: bottomCta
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

export const ENABLE_AMPSCRIPT = "ENABLE_AMPSCRIPT";

export function ampScriptEnable(boolean) {
	return {
		type: ENABLE_AMPSCRIPT,
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

export const ENABLE_CATEGORY = "ENABLE_CATEGORY";
export function enableCategory (bool) {
	return {
		type: ENABLE_CATEGORY,
		payload: bool
	}
}