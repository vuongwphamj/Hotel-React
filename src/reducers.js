/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './components/App/AppReducer';
// import posts from './modules/Post/PostReducer';
// import intl from './modules/Intl/IntlReducer';
import auth from './components/Auth/AuthReducer';
import home from './components/Home/HomeReducer';
// Combine all reducers into one root reducer

export default combineReducers({
  app,
  auth,
  home
});
