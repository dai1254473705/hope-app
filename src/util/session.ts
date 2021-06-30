/** 登录相关 */
import cookie from './cookie';
import cookieName from './cookieName';
function isAuthenticated() {
  const uid = cookie.get(cookieName.uid);
  if (uid) {
    return true;
  }
  return false;
}
export default {
  isAuthenticated,
};
