/** 处理cookie */
/**
 * server 端cookie 处理
 * https://github.com/pillarjs/cookies
 */
import cookie from 'js-cookie';
const clientCookie = {
  config: {
    path: '/', // cookie 路径, 默认是'/'
    domain: location.port ? '' : '.netyali.cn', // cookie 域名
    expires: 1,
  },
  /**
   * @param key
   * @param value
   * @param expires 天
   */
  set(key: string, value: string, expires?: number) {
    if (expires) {
      this.config.expires = expires;
    }
    cookie.set(key, value, this.config);
  },
  get(key: string) {
    const val = cookie.get(key);
    return val || '';
  },
  remove(key: string) {
    cookie.remove(key);
  },
};
export default clientCookie;
