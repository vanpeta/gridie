import sites2 from './sites2';

export default function (state = sites2(), action) {
	console.log('REDUCER IS RUNNING! state =', state, 'action =', action)
	// eslint-disable-next-line
	switch(action.type) {
		case 'SITE_SELECTED':
			console.log("zzzzzzzzz");
			console.log("action.payload =", action.payload);
			console.log('zzzzzzzzz')
			return action.payload;
	};
	return state
}