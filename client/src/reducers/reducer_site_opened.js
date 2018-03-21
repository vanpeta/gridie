import sites2 from './sites2';

export default function (state = sites2, action) {
	
	switch (action.type) {
    case "SITE_SELECTED":
      return action.payload;
    default:
  };
	return state
}