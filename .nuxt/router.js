import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _56393eea = () => interopDefault(import('../pages/blogText/index.vue' /* webpackChunkName: "pages/blogText/index" */))
const _b4a0349a = () => interopDefault(import('../pages/blogVideo/index.vue' /* webpackChunkName: "pages/blogVideo/index" */))
const _006db2ba = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _b7da9250 = () => interopDefault(import('../pages/profil/index.vue' /* webpackChunkName: "pages/profil/index" */))
const _43268923 = () => interopDefault(import('../pages/login/admin/index.vue' /* webpackChunkName: "pages/login/admin/index" */))
const _0678144f = () => interopDefault(import('../pages/profil/updateProfil.vue' /* webpackChunkName: "pages/profil/updateProfil" */))
const _f850d5ee = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blogText",
    component: _56393eea,
    name: "blogText"
  }, {
    path: "/blogVideo",
    component: _b4a0349a,
    name: "blogVideo"
  }, {
    path: "/login",
    component: _006db2ba,
    name: "login"
  }, {
    path: "/profil",
    component: _b7da9250,
    name: "profil"
  }, {
    path: "/login/admin",
    component: _43268923,
    name: "login-admin"
  }, {
    path: "/profil/updateProfil",
    component: _0678144f,
    name: "profil-updateProfil"
  }, {
    path: "/",
    component: _f850d5ee,
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
