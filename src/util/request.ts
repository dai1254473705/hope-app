/** 封装fetch请求 */
import fetch from 'cross-fetch';
import Utils from '../util';

function parseJSON(response: any) {
  return response.json();
}

function checkStatus(response: any) {
  if (response.status === 200) {
    return response;
  }
  const error: any = new Error(response.statusText);
  error.response = response;
  console.error(error);
  return {
    code: 500,
    data: '',
    message: '网络异常',
  };
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url: string, options: object) {
  const baseOptions = {
    method: 'GET', // 默认请求方式
  };
  const requestOptions = Object.assign({}, baseOptions, options);
  return fetch(url, requestOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}

/**
 * post
 */
export const post = (url: string, data = {}) => {
  // 默认请求参数
  const baseOptions = {
    token: Utils.cookie.get(Utils.cookieName.token) || '',
  };
  // 请求参数
  const requestOptions = {
    method: 'POST', // 默认请求方式
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json;charset=UTF-8',
      token: Utils.cookie.get(Utils.cookieName.token) || '',
    },
    body: JSON.stringify(Object.assign({}, baseOptions, data)),
  };
  return fetch(url, requestOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => data)
    .catch((err) => err);
};
