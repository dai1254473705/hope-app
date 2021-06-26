import { defineConfig } from 'umi';

export default defineConfig({
  base: '/server/hope-app/dist',
  favicon: '/assets/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home' },
    // { path: '/home', component: '@/pages/Home' },
  ],
  fastRefresh: {},
});
