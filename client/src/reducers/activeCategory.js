export default function (state = null, action) {
// eslint-disable-next-line
	switch(action.type) {
		case 'CATEGORY_SELECTED':
		return action.payload;
	};
	return state
}