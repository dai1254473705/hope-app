/**
 * https://github.com/pillarjs/path-to-regexp/tree/v1.7.0
 * 路由配置文件
 */
export default [
  { exact: true, path: '/', component: '@/pages/Home', title: '前端小喵' },
  {
    exact: true,
    path: '/editor/:id?',
    component: '@/pages/Editor',
    title: '编辑器',
  },
  { path: '*', redirect: '/' },
];
