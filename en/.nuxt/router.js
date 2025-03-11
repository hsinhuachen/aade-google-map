import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b19076f = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _a91c87fc = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _14c71a9d = () => interopDefault(import('../pages/courses/index.vue' /* webpackChunkName: "pages/courses/index" */))
const _772236a8 = () => interopDefault(import('../pages/introduction.vue' /* webpackChunkName: "pages/introduction" */))
const _c87456b8 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _7e21d4b6 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _35f7928b = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _49eb8494 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _13107955 = () => interopDefault(import('../pages/courses/_slug.vue' /* webpackChunkName: "pages/courses/_slug" */))
const _cbe19948 = () => interopDefault(import('../pages/news/_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _3440f143 = () => interopDefault(import('../pages/projects/_slug.vue' /* webpackChunkName: "pages/projects/_slug" */))
const _2ad0e234 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0b19076f,
    meta: {"name":"PageAbout","computed":{},"loading":true},
    name: "about_en"
  }, {
    path: "/contact",
    component: _a91c87fc,
    meta: {"components":{},"methods":{}},
    name: "contact_en"
  }, {
    path: "/courses",
    component: _14c71a9d,
    meta: {"components":{},"methods":{}},
    name: "courses_en"
  }, {
    path: "/introduction",
    component: _772236a8,
    meta: {"components":{},"methods":{}},
    name: "introduction_en"
  }, {
    path: "/news",
    component: _c87456b8,
    meta: {"name":"ArchiveNews","computed":{},"watch":{"undefined":"$fetch"}},
    name: "news_en"
  }, {
    path: "/privacy-policy",
    component: _7e21d4b6,
    meta: {"name":"PagePrivacyPolicy","computed":{},"loading":true},
    name: "privacy-policy_en"
  }, {
    path: "/projects",
    component: _35f7928b,
    meta: {"components":{},"methods":{}},
    name: "projects_en"
  }, {
    path: "/search",
    component: _49eb8494,
    meta: {"components":{},"watch":{},"methods":{}},
    name: "search_en"
  }, {
    path: "/courses/:slug",
    component: _13107955,
    meta: {"components":{},"methods":{}},
    name: "courses-slug_en"
  }, {
    path: "/news/:slug",
    component: _cbe19948,
    meta: {"name":"SingleNew","computed":{}},
    name: "news-slug_en"
  }, {
    path: "/projects/:slug",
    component: _3440f143,
    meta: {"components":{},"methods":{}},
    name: "projects-slug_en"
  }, {
    path: "/",
    component: _2ad0e234,
    meta: {"name":"PageIndex","components":{},"computed":{},"methods":{},"loading":true},
    name: "index_en"
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
