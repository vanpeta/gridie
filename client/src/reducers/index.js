import { combineReducers } from "redux";
import activeCategory from './activeCategory';
import sites from "./sites";
import updateImagesAndLinks from './updateImagesAndLinks';

const rootReducer = combineReducers({
  sites: sites,
  activeCategory: activeCategory,
  newLinksAndImages: updateImagesAndLinks
});

export default rootReducer;