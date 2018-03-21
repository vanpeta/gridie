import { combineReducers } from 'redux';

import reducer_links_images from './reducer_links_images';
import selectSite from './reducer_site_opened';

const rootReducer = combineReducers({
  sites: selectSite,
  newImagesAndLinks: reducer_links_images
});

export default rootReducer;