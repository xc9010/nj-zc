import Vue from 'vue'
import Router from 'vue-router'
import EmptyLayout from '@/components/Layout/empty'

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
        path: 'notice',
        title: '通知公告',
        name: 'notice',
        ind: '1-1',
        pid: 1,
        component: EmptyLayout,
        redirect: '/notice/new',
        children: [
          {
            path: 'news',
            title: '工会要闻',
            name: 'news',
            ind: '1-1',
            pid: 1,
            component: () => import('@/views/news')
          },
          {
            path: 'policy',
            title: '政策解读',
            name: 'policy',
            ind: '1-2',
            pid: 1,
            component: () => import('@/views/policy')
          },
          {
            path: 'email',
            title: '主席信箱',
            name: 'email',
            ind: '1-3',
            pid: 1,
            component: () => import('@/views/email')
          }
        ]
      },
      // 职工之家
      {
        path: 'worker',
        name: 'worker',
        title: '职工之家',
        // ind: '2-1',
        pid: 2,
        redirect: '/worker/member',
        component: EmptyLayout,
        children: [
          {
            path: 'member',
            name: 'member',
            title: '我要入会',
            ind: '2-1',
            pid: 2,
            component: () => import('@/views/worker/member')
          },
          {
            path: 'create',
            title: '职工创新',
            name: 'create',
            ind: '2-2',
            pid: 2,
            redirect: '/worker/create/advise',
            component: () => import('@/views/worker/create'),
            children: [
              {
                path: 'advise',
                title: '合理化建议',
                name: 'advise',
                ind: '2-2-1',
                component: () => import('@/views/create/advise')
              }, {
                path: 'operate',
                title: '先进操作法',
                name: 'operate',
                ind: '2-2-2',
                component: () => import('@/views/create/operate')
              }
              , {
                path: 'innovate',
                title: '创新增效',
                name: 'innovate',
                ind: '2-2-3',
                component: () => import('@/views/create/innovate')
              }
            ]
          },
          // {
          //   path: 'love',
          //   title: 'love',
          //   name: '红娘牵线',
          //   ind: '2-3',
          //   pid: 2,
          //   component: () => import('@/views/love'),
          // },
          {
            path: 'service',
            title: '普惠服务',
            name: 'service',
            ind: '2-4',
            pid: 2,
            redirect: '/worker/service/around',
            component: () => import('@/views/service'),
            children: [
              {
                path: 'around',
                title: '工会在身边',
                name: 'around',
                ind: '2-4-1',
                component: () => import('@/views/service/around')
              },{
                path: 'woman',
                title: 'woman',
                name: '女工关怀',
                ind: '2-4-2',
                component: () => import('@/views/service/woman')
              }
              , {
                path: 'birthday',
                title: 'birthday',
                name: '职工生日会',
                ind: '2-4-3',
                component: () => import('@/views/service/birthday')
              }
              , {
                path: 'help',
                title: 'help',
                name: '困难帮扶',
                ind: '2-4-4',
                component: () => import('@/views/service/help')
              }
              , {
                path: 'study',
                title: 'study',
                name: '助学贷款',
                ind: '2-4-5',
                component: () => import('@/views/service/study')
              }
            ]
          },
          {
            path: 'sports',
            title: '运动专场',
            name: 'sports',
            ind: '2-5',
            pid: 2,
            component: () => import('@/views/sports')
          }
        ]
      },
      // 工会风采
      {
        path: 'union',
        title: '工会风采',
        name: 'union',
        ind: '2-5',
        pid: 5,
        redirect: '/union/workers',
        component: () => import('@/views/union'),
        children: [
          {
            path: 'workers',
            title: '基层风采',
            name: 'workers',
            pid: 5,
            ind: '2-5-3',
            component: () => import('@/views/union/workers')
          },
          {
            path: 'model',
            title: '劳模风采',
            name: 'model',
            pid: 5,
            ind: '2-5-1',
            component: () => import('@/views/union/model')
          },
          {
            path: 'craftsman',
            title: '工匠评优',
            name: 'craftsman',
            pid: 5,
            ind: '2-5-1',
            component: () => import('@/views/union/craftsman')
          }, {
            path: 'studio',
            title: '创新工作室',
            name: 'studio',
            pid: 5,
            ind: '2-5-2',
            component: () => import('@/views/union/studio')
          }
        ]
      },
      // 知识社区
      {
        path: 'knowledge',
        title: '知识社区',
        name: 'knowledge',
        ind: '3-1',
        pid: 3,
        redirect: '/knowledge/patent',
        component: EmptyLayout,
        children: [
          {
            path: 'patentShow',
            title: '专利展示',
            name: 'patentShow',
            ind: '3-1',
            pid: 3,
            // redirect: '/knowledge/patentShow/patent',
            component: () => import('@/views/patentShow/patent')
            // children: [
            //   {
            //     path: 'patent',
            //     title: 'patent',
            //     name: '',
            //     ind: '3-1-1',
            //     component: () => import('@/views/patentShow/patent')
            //   }
            // ]
          },
          {
            path: 'ketang',
            title: '工匠讲堂',
            name: 'ketang',
            ind: '3-2',
            pid: 3,
            component: () => import('@/views/class/ketang')
          },
          {
            path: 'live',
            title: '创新直播',
            name: 'live',
            ind: '3-3',
            pid: 3,
            component: () => import('@/views/live')
          },
          {
            path: 'worksMeeting',
            title: '职代会',
            name: 'worksMeeting',
            ind: '3-4',
            pid: 3,
            component: () => import('@/views/worksMeeting/worksMeeting')
          },
          {
            path: 'bigEvents',
            title: '大事记',
            name: 'bigEvents',
            ind: '3-5',
            pid: 3,
            component: () => import('@/views/bigEvents')
          }
        ]
      },
      // 练兵比武
      {
        path: 'kungfu',
        title: '比武练兵',
        name: 'kungfu',
        ind: '4-1',
        pid: 4,
        redirect: '/kungfu/list',
        component: EmptyLayout, // () => import('@/views/kungfu'),
        children: [
          {
            path: 'list',
            pid: 4,
            component: () => import('@/views/kungfu/list'),
            name: '闯关题库',
            title: '闯关题库'
          },
          {
            path: 'chaungguan',
            component: () => import('@/views/kungfu/chuangguan'),
            title: '闯关',
            name: 'chuangguan',
            meta: {
              showInBreadcrumb: false
            }
          },
          // {
          //   path: 'idea',
          //   title: 'idea',
          //   name: '理想信念',
          //   ind: '4-2',
          //   pid: 4,
          //   component: () => import('@/views/idea'),
          // },
          {
            path: 'result/:id',
            component: () => import('@/views/kungfu/result'),
            name: '闯关结果',
            meta: {
              showInBreadcrumb: false
            }
          },
          {
            path: 'getQues',
            title: '试题征集',
            name: 'getQues',
            ind: '4-4',
            pid: 4,
            component: () => import('@/views/getQues'),
          },
          {
            path: 'experts',
            title: '专家问诊',
            name: 'experts',
            ind: '4-5',
            pid: 4,
            component: () => import('@/views/experts'),
          }
          // {
          //   path: 'startExam/:id',
          //   component: () => import('@/views/kungfu/startExam'),
          //   name: '开始闯关',
          // }
        ]
      },
      {
        path: 'exam',
        title: 'exam',
        name: '在线考试',
        ind: '4-3',
        // pid: 4,
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
      // {
      //   name: '详情',
      //   path: 'details',
      //   component: () => import('@/views/Details'),
      // },
      {
        path: 'info/:index?',
        title: 'newsInfo1',
        name: '详情',
        // ind: '1-1-1',
        component: () => import('@/views/info')
      },
      {
        name: '职代会详情',
        path: 'workDetails',
        component: () => import('@/views/workDetails')
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
