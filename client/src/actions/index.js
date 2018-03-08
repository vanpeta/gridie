export function selectGender (gender) {
	return {
		type: 'GENDER_SELECTED',
		payload: gender
	}
};
export function selectCategory (category) {
	return {
		type: 'CATEGORY_SELECTED',
		payload: category
	}
};
export function newImagesAndLinks (newData) {
	console.log(newData)
	return {
		type: 'UPDATE_LINKS_AND_IMAGES',
		payload: newData
	}
}
export function selectCountry (country) {
	return {
		type: 'COUNTRY_SELECTED',
		payload: country
	}
}
export function selectBrand (brand) {
	return {
		type: 'BRAND_SELECTED',
		payload: brand
	}
}