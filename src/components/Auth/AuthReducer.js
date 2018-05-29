// import {LOGIN,SIGNUP} from './AuthActions'
// import createHistory from "history/createBrowserHistory"
// const history = createHistory()
// import {browserHistory} from 'react-router'
// Initial State

const initialState = { isSignUp:false, isLogged:false, isLoading:false , token:'', user:''};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLoading:true,
      };
    case'LOGIN_SUCCESS':
    {
      return{
          isLoading:false,
          isLogged: true,
          user: action.user
      }
    }
    case'LOGIN_FAIL':
      {
        alert('login failed');
        return{
          isLoading:false,
          isLogged:false,
        }
      }
    case 'SIGNUP':
    	return {
        isLoading:true,
        isSignUp:true,
      };
    case 'SIGNUP_SUCCESS':
    {
      // history.push('/login')
      return{
        isLoading:false,
      }
    }
    case'SIGNUP_FAIL':
      {
        alert(action.res.message);
        return{
        isLoading:false,
        isSignUp:false
      }}
    default:
  		return state;
  }
};

// Export Reducer
export default AuthReducer;
