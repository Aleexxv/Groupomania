import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe55ffe2 = () => interopDefault(import('../pages/enter.vue' /* webpackChunkName: "pages/enter" */))
const _7615f7cc = () => interopDefault(import('../pages/forum9gag.vue' /* webpackChunkName: "pages/forum9gag" */))
const _0f060554 = () => interopDefault(import('../pages/forumReddit.vue' /* webpackChunkName: "pages/forumReddit" */))
const _e91b57d6 = () => interopDefault(import('../pages/profil.vue' /* webpackChunkName: "pages/profil" */))
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
    path: "/enter",
    component: _fe55ffe2,
    name: "enter"
  }, {
    path: "/forum9gag",
    component: _7615f7cc,
    name: "forum9gag"
  }, {
    path: "/forumReddit",
    component: _0f060554,
    name: "forumReddit"
  }, {
    path: "/profil",
    component: _e91b57d6,
    name: "profil"
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
