import fetch from 'isomorphic-fetch';
// import Config from './../server/config';

// export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
//   process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
//   '/api';

export const API_URL = 'http://localhost:8000/api';

export default function callApi(endpoint, method = 'get', body) {
    return fetch(`${API_URL}/${endpoint}`, {
        headers: { 'content-type': 'application/json' },
        method,
        body: JSON.stringify(body),
    })
    .then(response => {
        // console.log(response);
    return response.json().then(json => ({ json, response }))})
    .then(({ json, response }) => {

        if (!response.ok) {
        return Promise.reject(json);
        }
        return  json;
    })
}

export function callApiRequireAuth(endpoint, method = 'get', body, token) {
  let data = {};
  if(body){
    data.body = JSON.stringify(body);
  }
  data.headers = {
    'content-type': 'application/json',
    'authorization': token
  };
  data.method = method

  return fetch(`${API_URL}/${endpoint}`, data)
  .then(response => {
  return response.json().then(json => ({ json, response }))})
  .then(({ json, response }) => {

    if (!response.ok) {
      return Promise.reject(json);
    }
    return  json;
  })
  .catch(err => {
    console.log(err);
  })
}

export function callApiRequireAuthFileUp(endpoint, method = 'get', body, token) {
  let data = {};
  if(body){
    // data.body = JSON.stringify(body);
    data.body = body;
  }
  data.headers = {
    // 'content-type': 'application/json',
    'authorization': token
  };
  data.method = method

  return fetch(`${API_URL}/${endpoint}`, data)
  .then(response => {
    // console.log(response);
  return response.json().then(json => ({ json, response }))})
  .then(({ json, response }) => {

    if (!response.ok) {
      return Promise.reject(json);
    }
    return  json;
  })
  .catch(err => {
    console.log(err);
  })
}

export function callApiRequireAuthFileDown(endpoint, method = 'get', body, token) {
  let data = {};
  if(body){
    data.body = JSON.stringify(body);
  }
  data.headers = {
    'content-type': 'application/json',
    'authorization': token
  };
  data.method = method

  return fetch(`${API_URL}/${endpoint}`, data)
  .then(response => {
    // console.log(response.blob());
    if(response.code === 100){
      return response.json()
      .then(json => json)
    }
    return response.blob();
  })
  .catch(err => {
    console.log(err);
  })
}

export function showFile(blob){
  // It is necessary to create a new blob object with mime-type explicitly set
  // otherwise only Chrome works like it should
  var newBlob = new Blob([blob], {type: "application/zip"})

  // IE doesn't allow using a blob object directly as link href
  // instead it is necessary to use msSaveOrOpenBlob
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(newBlob);
    return;
  }

  // For other browsers:
  // Create a link pointing to the ObjectURL containing the blob.
  const data = window.URL.createObjectURL(newBlob);
  var link = document.createElement('a');
  link.href = data;
  link.download="";
  link.click();
  // For Firefox it is necessary to delay revoking the ObjectURL
  window.URL.revokeObjectURL(data);
}
