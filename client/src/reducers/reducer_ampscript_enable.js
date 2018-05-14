export default function (state = false, action) {
	switch (action.type) {
		case "ENABLE_AMPSCRIPT":
			return action.payload;
		default:
	}
	return state;
}