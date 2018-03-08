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