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
          import(/* webpackChunkName: "pages" */ '../views/EM4/first.vue'),
        meta: { index: 1 },
      },
      {
        path: '/second',
        name: 'Second',
        component: () =>
          import(/* webpackChunkName: "pages" */ '../views/EM4/second.vue'),
        meta: { index: 2 },
      },
      {
        path: '/third',
        name: 'Third',
        component: () =>
          import(/* webpackChunkName: "pages" */ '../views/EM4/third.vue'),
        meta: { index: 3 },
      },
      {
        path: '/fourth',
        name: 'Fourth',
        component: () =>
          import(/* webpackChunkName: "pages" */ '../views/EM4/fourth.vue'),
        meta: { index: 4 },
      },
      {
        path: '/fifth',
        name: 'Fifth',
        component: () =>
          import(/* webpackChunkName: "pages" */ '../views/EM4/fifth.vue'),
        meta: { index: 5 },
      },
    ]
  },
  {
    path: '*',
    name: '404',
    redirect: '/first',
  },
]