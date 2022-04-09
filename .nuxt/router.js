import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b2a2fe4 = () => interopDefault(import('..\\pages\\AllTodos.vue' /* webpackChunkName: "pages/AllTodos" */))
const _ddf7dbf8 = () => interopDefault(import('..\\pages\\Createtodo.vue' /* webpackChunkName: "pages/Createtodo" */))
const _f629e3d2 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _d8248136 = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _a21146e8 = () => interopDefault(import('..\\pages\\UserHome.vue' /* webpackChunkName: "pages/UserHome" */))
const _43d14b20 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AllTodos",
    component: _3b2a2fe4,
    name: "AllTodos"
  }, {
    path: "/Createtodo",
    component: _ddf7dbf8,
    name: "Createtodo"
  }, {
    path: "/Login",
    component: _f629e3d2,
    name: "Login"
  }, {
    path: "/Register",
    component: _d8248136,
    name: "Register"
  }, {
    path: "/UserHome",
    component: _a21146e8,
    name: "UserHome"
  }, {
    path: "/",
    component: _43d14b20,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
