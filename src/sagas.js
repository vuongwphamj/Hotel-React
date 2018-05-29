import "regenerator-runtime/runtime"
import { put, takeEvery} from 'redux-saga/effects'
// import { resolve } from "url"
import callApi, { callApiRequireAuth, callApiRequireAuthFileUp, callApiRequireAuthFileDown, showFile} from "./util/apiCaller"
// import { history } from 'react-router'
// import createBrowserHistory from "history/createBrowserHistory"
// const history = createBrowserHistory();
import download from 'download.js'; // eslint-disable-line

// function pause(delay) {
//   return new Promise(resolve => {
//     setTimeout(_ => {
//       resolve()
//     }, delay)
//   })
// }
function* Login(action){
  let body ={
    email:action.payload.email,
    password:action.payload.password
  };
  var res= yield callApi('auth/login', 'post', body);
  if(res.token)
  {
    localStorage.setItem('token', res.token);
    // yield call(pause, 2000);
    yield put({type:'LOGIN_SUCCESS'});
    action.payload.history.push('/home');
  }
  else{
    // yield call(pause, 2000);
    yield put({type:'LOGIN_FAIL'})
  }
}
function* SignUp(action){
    let body = {
      email: action.payload.mail,
      password: action.payload.pass,
      username: action.payload.username
    };
    var res = yield callApi('/auth/signup','post',body);
    if(res.code === 200){
      alert(res.message)
      yield put({type:'SIGNUP_SUCCESS'});
      action.payload.history.push('/');
    }
    else
    { 
      // yield call(pause,2000);
      yield put({type:'SIGNUP_FAIL',res})
    }
}
function* SignOut(action){
  let token = localStorage.getItem('token');
  // alert(token);
  let res = yield callApiRequireAuth('/auth/logout', 'get', null,token);
  alert(res.message);
  if(res.code === 200){
    localStorage.removeItem('token');
    action.history.push('/');
  }
  if(res.code === 100){
    localStorage.removeItem('token');
    action.history.push('/');
  }
}
function* GetUserInf(action){
  try {
    let token = localStorage.getItem('token');
    const link = 'user/';
    let res = yield callApiRequireAuth(link, 'get', null, token);
    // let res = yield callApi('/user/5ad45b826c9cb32ef09e14eb', 'get');
    // alert(res.message);
    if(res.code === 100){
      localStorage.removeItem('token');
      action.history.push('/');
    }
    if(res.code === 200){
      let data = res.data;
      yield put({type:'GET_USER_INF_SUCCESS', data})
    }
  } catch (error) {

  }
}
function* GetListModel(action) {
  let token = localStorage.getItem('token');
  // alert('test Get List Model')
  const link = 'model3d/viewmodel';
  let res = yield callApiRequireAuth(link, 'get', null, token);
  // console.log(res);
  if(res.code === 100){
    localStorage.removeItem('token');
    action.history.push('/');
  } else {
    yield put({type:'GET_LIST_MODEL_SUCCESS', data: res});
  }
}

function* UpdateModel(action){
  // console.log(action.data);
  // alert(action.data)
  let token = localStorage.getItem('token');
  let body = action.data;
  const link = 'model3d/update/' + action.modelId;
  let res = yield callApiRequireAuth(link, 'post', body, token);
  if(res.code === 100){
    localStorage.removeItem('token');
    action.history.push('/');
  }
  if(res.code === 200){
    alert('Update Model3D Success');
    action.history.push('/home/listmodel');
  }
}

function* DeleteModel(action){
  let token = localStorage.getItem('token');
  console.log('test delete');
  console.log(action.modelId);
  const link = 'model3d/delete/' + action.modelId;
  let res = yield callApiRequireAuth(link, 'delete', null, token);
  if(res.code === 100){
    localStorage.removeItem('token');
    action.history.push('/');
  }
  if(res.code === 200){
    alert('Delete Model3D Success');
    action.history.push('/home/listmodel');
  }
}
function* DownLoadModel(action){
  let token = localStorage.getItem('token');
  console.log('test download');
  console.log(action.modelId);
  // let filename = action.modelId + '.zip';
  const link = 'model3d/download/' + action.modelId;
  let res = yield callApiRequireAuthFileDown(link, 'get', null, token);
  // download(res, filename, "zip" );
  if(res.code === 100){
    localStorage.removeItem('token');
    action.history.push('/');
  } else {
    showFile(res);
  }
}
function* UpLoadModel(action){
  let token = localStorage.getItem('token');
  // console.log('test download');
  // let body = action.data;
  let data = new FormData();
  data.append("file", action.data.file);
  data.append('name', action.data.name);
  data.append('description', action.data.description);
  const link = 'model3d/upload';
  let res = yield callApiRequireAuthFileUp(link, 'post', data, token);
  if(res.code === 100){
    localStorage.removeItem('token');
    action.history.push('/');
  }
  else if (res.code === 404){
    alert(res.message);
  }
  else if(res.code === 200){
    alert('Upload Model3D Success');
    action.history.push('/home');
  }

}

export default function* rootSaga() {
    yield takeEvery('LOGIN', Login);
    yield takeEvery('SIGNUP', SignUp);
    yield takeEvery('SIGNOUT', SignOut);
    yield takeEvery('GET_USER_INF', GetUserInf);
    yield takeEvery('GET_LIST_MODEL', GetListModel);
    yield takeEvery('UPDATE_MODEL', UpdateModel);
    yield takeEvery('DELETE_MODEL', DeleteModel);
    yield takeEvery('DOWNLOAD_MODEL', DownLoadModel);
    yield takeEvery('UPLOAD_MODEL', UpLoadModel);
}

