/**
 * utils 方法
 */
import cookie from './cookie';
import cookieName from './cookieName';
import session from './session';
import * as request from './request';
import timeFormat from './timeFormat';
import regexp from './regexp';

export default {
  cookieName,
  cookie,
  session,
  request,
  timeFormat,
  regexp,
};

/**
 * 打开浏览器新窗口
 */
export const openNewWindow = (url: string) => {
  const newWindow = window.open('_blank');
  setTimeout(() => {
    newWindow && (newWindow.location.href = url);
  }, 0);
};

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
