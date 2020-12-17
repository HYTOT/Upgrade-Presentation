import { RouteConfig } from 'vue-router'

export const routes:Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: '/',
    // name: 'Index',
    component: () =>
      import(/* webpackChunkName: "index" */ '../views/index.vue'),
    meta: { index: 0 },
    children: [
      {
        path: '/first',
        name: 'First',
        component: () =>
          import(/* webpackChunkName: "pages" */ '../views/index/first.vue'),
        meta: { index: 1 },
      },
      {
        path: '/second',
        name: 'Second',
        component: () =>
          import(/* webpackChunkName: "pages" */ '../views/index/second.vue'),
        meta: { index: 2 },
      },
      {
        path: '/thrid',
        name: 'Thrid',
        component: () =>
          import(/* webpackChunkName: "pages" */ '../views/index/thrid.vue'),
        meta: { index: 3 },
      },
      {
        path: '/fourth',
        name: 'Fourth',
        component: () =>
          import(/* webpackChunkName: "pages" */ '../views/index/fourth.vue'),
        meta: { index: 4 },
      },
    ]
  },
  {
    path: '*',
    name: '404',
    redirect: '/first',
  },
]