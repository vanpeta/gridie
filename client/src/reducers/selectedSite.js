

export default function (state = null, action) {
	console.log('action ', action, 'state =', state);
	// eslint-disable-next-line
	switch(action.type) {
		case 'SITE_SELECTED':
			return action.payload;
	};
	return state
}