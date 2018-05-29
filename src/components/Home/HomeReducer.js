// import {LOGIN,SIGNUP} from './HomeActions'
// import {browserHistory} from 'react-router'

// Initial State

const initialState = { user: '', listmodel: []};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_INF_SUCCESS':
      // alert(action);
      // console.log(action);
      return {
        ...state,
        user: action.data
      };
    case 'GET_LIST_MODEL_SUCCESS':
      // console.log(action.data)
      return{
        ...state,
        listmodel: action.data
      };
    default:
  		return state;
  }
};

// Export Reducer
export default HomeReducer;
