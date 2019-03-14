import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
// import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  errors: errorReducer
  // streams: streamReducer
});
