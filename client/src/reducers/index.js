import { combineReducers } from 'redux';
// import sites from './sites2';
import updateImagesAndLinks from './updateImagesAndLinks';
import selectSite from './selectedSite';

const rootReducer = combineReducers({
  sites: selectSite,
  newLinksAndImages: updateImagesAndLinks,
  activeSite: selectSite
});

export default rootReducer;