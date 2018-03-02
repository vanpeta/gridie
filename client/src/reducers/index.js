import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import categoryReducer from './categoryReducer';

export default combineReducers({
  category: categoryReducer,
  form: reduxForm
});
