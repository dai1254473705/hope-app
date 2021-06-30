import { defineConfig } from 'umi';
import routes from './config/routes';
export default defineConfig({
  // publicPath: '/static/',
  favicon: '/static/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  metas: [
    {
      name: 'keywords',
      content: '前端小喵,前端技术博客,前端面试题,摄影作品,摄影博客',
    },
    {
      name: 'description',
      content:
        '记录前端相关技术以及日常摄影作品，热爱生活，发现身边的美好事物。',
    },
  ],
  fastRefresh: {},
  dynamicImport: {},
  devtool: false,
  proxy: {
    '/hope': {
      target: 'http://api.netyali.cn/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
