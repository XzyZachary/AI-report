import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: '我的报告',
    },
    name: 'Report',
    path: '/reports',
    children: [
      {
        meta: {
          title: '预定义报告',
        },
        name: 'MyReport',
        path: '/MyReport',
        component: () => import('#/views/report/index.vue'),
      },
      {
        meta: {
          title: '自定义报告',
        },
        name: 'CustomReport',
        path: '/CustomReport',
        component: () => import('#/views/report/customreport.vue'),
      },
    ],
  },
];

export default routes;
