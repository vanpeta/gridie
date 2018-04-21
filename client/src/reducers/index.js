import { combineReducers } from 'redux';

import linkAndImages from './reducer_links_images';
import selectSite from './reducer_site_opened';
import numberOfProducts from './reducer_number_of_products';
import titleCopy from "./reducer_title_copy";
import paragraphCopy from "./reducer_paragraph_copy";
import CTACopy from "./reducer_CTA_copy";
import selectCategory from "./reducer_select_category";
import priceEnable from "./reducer_price_enable";
import nameEnable from "./reducer_name_enable";
import heroEnable from "./reducer_hero_enable";

const rootReducer = combineReducers({
  sites: selectSite,
  newImagesAndLinks: linkAndImages,
  numberOfProducts: numberOfProducts,
  titleCopy: titleCopy,
  paragraphCopy: paragraphCopy,
  CTACopy: CTACopy,
  selectCategory: selectCategory,
  isPriceEnable: priceEnable,
  isNameEnable: nameEnable,
  isHeroEnable: heroEnable
});

export default rootReducer;