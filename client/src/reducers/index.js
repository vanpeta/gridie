import { combineReducers } from 'redux';

import linkAndImages from './reducer_links_images';
import selectSite from './reducer_site_opened';
import numberOfProducts from './reducer_number_of_products';
import title from "./reducer_title";
import paragraphCopy from "./reducer_paragraph_copy";
import bottomCta from "./reducer_bottom_CTA";
import topCta from "./reducer_top_CTA";
import selectCategory from "./reducer_select_category";
import priceEnable from "./reducer_price_enable";
import nameEnable from "./reducer_name_enable";
import heroEnable from "./reducer_hero_enable";
import updateCode from "./reducer_update_code";
import ampScriptEnable from "./reducer_ampscript_enable";
import enableCategory from "./reducer_enable_category";

const rootReducer = combineReducers({
  sites: selectSite,
  newImagesAndLinks: linkAndImages,
  numberOfProducts: numberOfProducts,
  title: title,
  paragraphCopy: paragraphCopy,
  bottomCta: bottomCta,
  topCta: topCta,
  selectCategory: selectCategory,
  isPriceEnable: priceEnable,
  isNameEnable: nameEnable,
  isHeroEnable: heroEnable,
  isAmpScriptEnable: ampScriptEnable,
  code: updateCode,
  enableCategory: enableCategory
});

export default rootReducer;