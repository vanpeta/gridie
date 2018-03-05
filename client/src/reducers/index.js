import { combineReducers } from "redux";
import sites from "./sites";

const rootReducer = combineReducers({
	sites: sites
});

export default rootReducer;