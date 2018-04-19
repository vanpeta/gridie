import sites from './sites';

export default function (state = sites, action) {
	
	switch (action.type) {
    case "SITE_SELECTED":
      return action.payload;
    default:
  };
	return state
}