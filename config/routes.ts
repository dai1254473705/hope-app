/**
 * 路由配置文件
 */
export default [
  { exact: true, path: '/', component: '@/pages/Home', title: '首页' },
  { path: '*', redirect: '/' },
];
