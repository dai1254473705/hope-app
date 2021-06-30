/**!
 * 时间格式化
 */
import moment from 'moment';
/**!
 * @param {String} timestr '1569897541328' || '2019-10-01T10:42:26+08:00' || ''
 * @param {String} formatStr 'YYYY MM DD hh mm ss'
 */
export default (timestr: string, formatStr: string) => {
  // 判断是否存在时间戳
  if (!timestr) {
    return moment().format(formatStr);
  }

  // 判断是不是全是数字
  if (/^\d+$/g.test(timestr)) {
    return moment(parseInt(timestr)).format(formatStr);
  }

  return moment(timestr).format(formatStr);
};
