export function selectCategory (category) {
	console.log("category selected = ", category);
	return {
		type: 'CATEGORY_SELECTED',
		category: category
	}
};