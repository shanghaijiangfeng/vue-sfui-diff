import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home'),
      },
      {
        path: '/case',
        name: 'case',
        component: () => import('@/views/CaseManage/CaseManage'),
      },
      {
        path: '/user1',
        name: 'user1',
        component: () => import('@/views/UserManage/UserManage1'),
      },
      {
        path: '/user2',
        name: 'user2',
        component: () => import('@/views/UserManage/UserManage2'),
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/guess/PageOne'),
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/guess/PageTwo'),
      },
      {
        path: '/flower/page1',
        name: 'flower1',
        component: () => import('@/views/flower/PageOne'),
      },
      {
        path: '/flower/page2',
        name: 'flower2',
        component: () => import('@/views/flower/PageTwo'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
