import { combineReducers } from 'redux';
import activeCategory from './activeCategory';
import activeGender from './activeGender';
import activeCountry from './activeCountry';
import activeBrand from './activeBrand';
import sites from './sites';
import updateImagesAndLinks from './updateImagesAndLinks';

const rootReducer = combineReducers({
  sites: sites,
  activeCategory: activeCategory,
  activeGender: activeGender,
  activeCountry: activeCountry,
  activeBrand: activeBrand,
  newLinksAndImages: updateImagesAndLinks
});

export default rootReducer;