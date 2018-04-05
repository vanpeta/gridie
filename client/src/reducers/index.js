import { combineReducers } from 'redux';

import linkAndImages from './reducer_links_images';
import selectSite from './reducer_site_opened';
import numberOfProducts from './reducer_number_of_products';
import titleCopy from "./reducer_title_copy";

const rootReducer = combineReducers({
  sites: selectSite,
  newImagesAndLinks: linkAndImages,
  numberOfProducts: numberOfProducts,
  titleCopy: titleCopy
});

export default rootReducer;