import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_29907c58 from 'nuxt_plugin_plugin_29907c58' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_plugin_3d308bbc from 'nuxt_plugin_plugin_3d308bbc' // Source: ./composition-api/plugin.mjs (mode: 'all')
import nuxt_plugin_googlegtag_1b056219 from 'nuxt_plugin_googlegtag_1b056219' // Source: ./google-gtag.js (mode: 'client')
import nuxt_plugin_wp_2701e016 from 'nuxt_plugin_wp_2701e016' // Source: ./wp.js (mode: 'all')
import nuxt_plugin_webfontloader_e358722c from 'nuxt_plugin_webfontloader_e358722c' // Source: ./webfontloader.js (mode: 'client')
import nuxt_plugin_portalvue_1b0fb8ae from 'nuxt_plugin_portalvue_1b0fb8ae' // Source: ./portal-vue.js (mode: 'all')
import nuxt_plugin_pluginrouting_36b9fcc8 from 'nuxt_plugin_pluginrouting_36b9fcc8' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_63d2af53 from 'nuxt_plugin_pluginmain_63d2af53' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtsvgsprite_3f6bc988 from 'nuxt_plugin_nuxtsvgsprite_3f6bc988' // Source: ./nuxt-svg-sprite.js (mode: 'all')
import nuxt_plugin_axios_752f0aea from 'nuxt_plugin_axios_752f0aea' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_index_0c6aaa0a from 'nuxt_plugin_index_0c6aaa0a' // Source: ../plugins/directives/index (mode: 'client')
import nuxt_plugin_index_0c9b5531 from 'nuxt_plugin_index_0c9b5531' // Source: ../plugins/prototype/index (mode: 'client')
import nuxt_plugin_svgSupportIE_b7dee9ca from 'nuxt_plugin_svgSupportIE_b7dee9ca' // Source: ../plugins/svgSupportIE (mode: 'client')
import nuxt_plugin_lazyLoad_0cfa746e from 'nuxt_plugin_lazyLoad_0cfa746e' // Source: ../plugins/lazyLoad (mode: 'client')
import nuxt_plugin_router_3f7e063d from 'nuxt_plugin_router_3f7e063d' // Source: ../plugins/router (mode: 'all')
import nuxt_plugin_globalComposition_152aeada from 'nuxt_plugin_globalComposition_152aeada' // Source: ../plugins/globalComposition (mode: 'all')
import nuxt_plugin_gsap_926babe2 from 'nuxt_plugin_gsap_926babe2' // Source: ../plugins/gsap (mode: 'client')
import nuxt_plugin_meta_480025ce from 'nuxt_plugin_meta_480025ce' // Source: ./composition-api/meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"CRIT-AADE","htmlAttrs":{"lang":"zh"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"http-equiv":"Content-Type","content":"text\u002Fhtml; charset=UTF-8"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"http-equiv":"x-dns-prefetch-control","content":"on"},{"name":"format-detection","content":"telephone=no"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"property":"og:locale","content":"en"},{"property":"og:type","content":"website"},{"hid":"description","name":"description","content":"CRIT-AADE"},{"hid":"og:title","property":"og:title","content":"CRIT-AADE"},{"hid":"og:description","property":"og:description","content":"CRIT-AADE"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Faade.blockstudio.tw\u002Fen"},{"hid":"og:site_name","property":"og:site_name","content":"CRIT-AADE"},{"property":"og:image:width","content":"1200"},{"property":"og:image:height","content":"630"},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Faade.blockstudio.tw\u002Fen\u002Fog_img.jpg"},{"hid":"og:image:alt","property":"og:image:alt","content":"CRIT-AADE"},{"name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:description","name":"twitter:description","content":"CRIT-AADE"},{"hid":"twitter:title","name":"twitter:title","content":"CRIT-AADE"},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Faade.blockstudio.tw\u002Fen\u002Fog_img.jpg"},{"hid":"name","itemprop":"name","content":"CRIT-AADE"},{"itemprop":"description","content":"CRIT-AADE"},{"hid":"image","itemprop":"image","content":"https:\u002F\u002Faade.blockstudio.tw\u002Fen\u002Fog_img.jpg"},{"name":"googlebot","content":"noindex"},{"name":"robots","content":"noindex"}],"script":[{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fmaps.googleapis.com\u002Fmaps\u002Fapi\u002Fjs?key=AIzaSyCgIk4clBMum-qHRyZMX9Z_eU5WHX4fUO0","body":true},{"src":"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=G-RWC5B02HW2","async":true}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"favicon.ico"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_29907c58 === 'function') {
    await nuxt_plugin_plugin_29907c58(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_3d308bbc === 'function') {
    await nuxt_plugin_plugin_3d308bbc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googlegtag_1b056219 === 'function') {
    await nuxt_plugin_googlegtag_1b056219(app.context, inject)
  }

  if (typeof nuxt_plugin_wp_2701e016 === 'function') {
    await nuxt_plugin_wp_2701e016(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_webfontloader_e358722c === 'function') {
    await nuxt_plugin_webfontloader_e358722c(app.context, inject)
  }

  if (typeof nuxt_plugin_portalvue_1b0fb8ae === 'function') {
    await nuxt_plugin_portalvue_1b0fb8ae(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_36b9fcc8 === 'function') {
    await nuxt_plugin_pluginrouting_36b9fcc8(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_63d2af53 === 'function') {
    await nuxt_plugin_pluginmain_63d2af53(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtsvgsprite_3f6bc988 === 'function') {
    await nuxt_plugin_nuxtsvgsprite_3f6bc988(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_752f0aea === 'function') {
    await nuxt_plugin_axios_752f0aea(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_index_0c6aaa0a === 'function') {
    await nuxt_plugin_index_0c6aaa0a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_index_0c9b5531 === 'function') {
    await nuxt_plugin_index_0c9b5531(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_svgSupportIE_b7dee9ca === 'function') {
    await nuxt_plugin_svgSupportIE_b7dee9ca(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_lazyLoad_0cfa746e === 'function') {
    await nuxt_plugin_lazyLoad_0cfa746e(app.context, inject)
  }

  if (typeof nuxt_plugin_router_3f7e063d === 'function') {
    await nuxt_plugin_router_3f7e063d(app.context, inject)
  }

  if (typeof nuxt_plugin_globalComposition_152aeada === 'function') {
    await nuxt_plugin_globalComposition_152aeada(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_gsap_926babe2 === 'function') {
    await nuxt_plugin_gsap_926babe2(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_480025ce === 'function') {
    await nuxt_plugin_meta_480025ce(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
