import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    name: '首页',
    ind: '0',
    component: () => import('@/views/home'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: 'news',
        title: 'news',
        name: '工会要闻',
        ind: '1-1',
        component: () => import('@/views/news'),
      },
      {
        path: 'policy',
        title: 'policy',
        name: '政策解读',
        ind: '1-2',
        component: () => import('@/views/policy'),
      },
      {
        path: 'email',
        title: 'email',
        name: '主席信箱',
        ind: '1-3',
        component: () => import('@/views/email'),
      },

      //职工之家

      {
        path: 'member',
        name: '我要入会',
        title: 'member',
        ind: '2-1',
        component: () => import('@/views/member'),
      },
      {
        path: 'create/:index?',
        title: 'create',
        name: '职工创新',
        ind: '2-2',
        component: () => import('@/views/create'),
      },
      {
        path: 'love',
        title: 'love',
        name: '红娘牵线',
        ind: '2-3',
        component: () => import('@/views/love'),
      },
      {
        path: 'service/:index?',
        title: 'service',
        name: '普惠服务',
        ind: '2-4',
        component: () => import('@/views/service'),
      },
      {
        path: 'union/:index?',
        title: 'union',
        name: '工会风采',
        ind: '2-5',
        component: () => import('@/views/union'),
      },
      // 知识社区
      {
        path: 'patentShow',
        title: 'patentShow',
        name: '专利展示',
        ind: '3-1',
        component: () => import('@/views/patentShow'),
      },
      {
        path: 'class',
        title: 'class',
        name: '工匠讲堂',
        ind: '3-2',
        component: () => import('@/views/class'),
      },
      {
        path: 'live',
        title: 'live',
        name: '创新直播',
        ind: '3-3',
        component: () => import('@/views/live'),
      },
      {
        path: 'worksMeeting',
        title: 'worksMeeting',
        name: '职代会',
        ind: '3-4',
        component: () => import('@/views/worksMeeting'),
      },
      {
        path: 'bigEvents',
        title: 'bigEvents',
        name: '大事记',
        ind: '3-5',
        component: () => import('@/views/bigEvents'),
      },
      // 练兵比武
      {
        path: 'kungfu',
        title: 'kungfu',
        name: '闯关练习',
        ind: '4-1',
        redirect: '/kungfu/list',
        component: () => import('@/views/kungfu'),
        children: [

          {
            path: 'list',
            component: () => import('@/views/kungfu/list'),
            name: '列表',
          },
          {
            path: 'startExam/:id',
            // component: () => import('@/views/kungfu/startExam'),
            name: '开始考试',
          },
          {
            path: 'result/:id',
            // component: () => import('@/views/kungfu/result'),
            name: '考试结果',
          },
        ]
      },
      {
        path: 'idea',
        title: 'idea',
        name: '理想信念',
        ind: '4-2',
        component: () => import('@/views/idea'),
      },
      {
        path: 'exam',
        title: 'exam',
        name: '在线考试',
        ind: '4-3',
        redirect: '/exam/list',
        component: () => import('@/views/liveExam'),
        children: [

          {
            path: 'list',
            component: () => import('@/views/liveExam/list'),
            name: '列表',
          },
          {
            path: 'preExam/:examId',
            component: () => import('@/views/liveExam/preExam'),
            name: '准备考试',
          },
          {
            path: 'startExam/:id',
            component: () => import('@/views/liveExam/startExam'),
            name: '开始考试',
          },
          {
            path: 'result/:id',
            component: () => import('@/views/liveExam/result'),
            name: '考试结果',
          },
        ]

      },
      {
        path: 'exams',
        title: 'exams',
        name: '试题征集',
        ind: '4-4',
        component: () => import('@/views/exams'),
      },
      {
        path: 'experts',
        title: 'experts',
        name: '专家问诊',
        ind: '4-5',
        component: () => import('@/views/experts'),
      },


      {
        path: 'sports/:index?',
        title: 'sports',
        name: '运动专场',
        ind: '5',
        component: () => import('@/views/sports'),
      },
      {
        name: '详情',
        path: 'details',
        component: () => import('@/views/Details'),
      },
      {
        name: '职代会详情',
        path: 'workDetails',
        component: () => import('@/views/workDetails'),
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
