import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0c76fc96 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _04464266 = () => interopDefault(import('..\\pages\\address\\index.vue' /* webpackChunkName: "pages/address/index" */))
const _65cbe1a8 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _39b800de = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1a4822ed = () => interopDefault(import('..\\pages\\orders.vue' /* webpackChunkName: "pages/orders" */))
const _3ee767ae = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _8e985ca2 = () => interopDefault(import('..\\pages\\placeorder.vue' /* webpackChunkName: "pages/placeorder" */))
const _b561945e = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _7c63e7a0 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _649440c0 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _6b1c3c96 = () => interopDefault(import('..\\pages\\address\\add.vue' /* webpackChunkName: "pages/address/add" */))
const _692da64e = () => interopDefault(import('..\\pages\\address\\_id.vue' /* webpackChunkName: "pages/address/_id" */))
const _061464fe = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _df6eebf2 = () => interopDefault(import('..\\pages\\reviews\\_id.vue' /* webpackChunkName: "pages/reviews/_id" */))
const _197c5c7a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0c76fc96,
    name: "about"
  }, {
    path: "/address",
    component: _04464266,
    name: "address"
  }, {
    path: "/cart",
    component: _65cbe1a8,
    name: "cart"
  }, {
    path: "/login",
    component: _39b800de,
    name: "login"
  }, {
    path: "/orders",
    component: _1a4822ed,
    name: "orders"
  }, {
    path: "/payment",
    component: _3ee767ae,
    name: "payment"
  }, {
    path: "/placeorder",
    component: _8e985ca2,
    name: "placeorder"
  }, {
    path: "/profile",
    component: _b561945e,
    name: "profile"
  }, {
    path: "/search",
    component: _7c63e7a0,
    name: "search"
  }, {
    path: "/signup",
    component: _649440c0,
    name: "signup"
  }, {
    path: "/address/add",
    component: _6b1c3c96,
    name: "address-add"
  }, {
    path: "/address/:id",
    component: _692da64e,
    name: "address-id"
  }, {
    path: "/products/:id?",
    component: _061464fe,
    name: "products-id"
  }, {
    path: "/reviews/:id?",
    component: _df6eebf2,
    name: "reviews-id"
  }, {
    path: "/",
    component: _197c5c7a,
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
