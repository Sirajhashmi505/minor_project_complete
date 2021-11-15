import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c856087 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _02366474 = () => interopDefault(import('..\\pages\\category.vue' /* webpackChunkName: "pages/category" */))
const _e527a6a6 = () => interopDefault(import('..\\pages\\owner.vue' /* webpackChunkName: "pages/owner" */))
const _4bd61568 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _fd8b5c60 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _5c3d3b4c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3c856087,
    name: "about"
  }, {
    path: "/category",
    component: _02366474,
    name: "category"
  }, {
    path: "/owner",
    component: _e527a6a6,
    name: "owner"
  }, {
    path: "/products",
    component: _4bd61568,
    name: "products"
  }, {
    path: "/products/:id",
    component: _fd8b5c60,
    name: "products-id"
  }, {
    path: "/",
    component: _5c3d3b4c,
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
