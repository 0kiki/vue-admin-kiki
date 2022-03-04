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
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/layout',
    component: Layout,
    children: [{
      path: '/layout',
      name: 'Layout',
      component: () => import('@/views/Layout/index'),
      meta: { title: 'Layout' }
    }]
  },
  {
    path: '/button',
    component: Layout,
    children: [{
      path: '/button',
      name: 'Button',
      component: () => import('@/views/button/index'),
      meta: { title: 'button' }
    }]
  },
  {
    path: '/upload',
    component: Layout,
    children: [{
      path: '/upload',
      name: 'Upload',
      component: () => import('@/views/upload/index'),
      meta: { title: 'upload' }
    }]
  },
  {
    path: '/radio',
    component: Layout,
    children: [{
      path: '/radio',
      name: 'radio',
      component: () => import('@/views/radio/index'),
      meta: { title: 'radio' }
    }]
  },
  {
    path: '/checkbox',
    component: Layout,
    children: [{
      path: '/checkbox',
      name: 'Checkbox',
      component: () => import('@/views/checkbox/index'),
      meta: { title: 'checkbox' }
    }]
  },
  {
    path: '/input',
    component: Layout,
    children: [{
      path: '/input',
      name: 'Input',
      component: () => import('@/views/input/index'),
      meta: { title: 'input' }
    }]
  },
  {
    path: '/select',
    component: Layout,
    children: [{
      path: '/select',
      name: 'Select',
      component: () => import('@/views/select/index'),
      meta: { title: 'select' }
    }]
  },
  {
    path: '/cascader',
    component: Layout,
    children: [{
      path: '/cascader',
      name: 'Cascader',
      component: () => import('@/views/cascader/index'),
      meta: { title: 'cascader' }
    }]
  },
  {
    path: '/form',
    component: Layout,
    children: [{
      path: '/form',
      name: 'Form',
      component: () => import('@/views/form/index'),
      meta: { title: 'form' }
    }]
  }

]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRoutes, ...asyncRoutes]
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
