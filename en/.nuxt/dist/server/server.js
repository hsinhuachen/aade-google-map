module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/blocks-article-author","2":"components/blocks-article-big-image","3":"components/blocks-article-big-nav","4":"components/blocks-article-intro","5":"components/blocks-article-nav","6":"components/blocks-article-photo-wall","7":"components/blocks-article-text-block","8":"components/blocks-article-video","9":"components/blocks-bread-crumb","10":"components/blocks-featured-article","11":"components/blocks-gallery-slide","12":"components/blocks-google-map","13":"components/blocks-parallax-gallery","14":"components/blocks-slide-show","15":"components/button-dark","16":"components/button-light","17":"components/button-nuxt-link-button","18":"components/card-article-card","19":"components/card-image","20":"components/card-info","21":"components/card-member-card","22":"components/drop-down","23":"components/loading-animation","24":"components/logo","25":"components/pagination","26":"pages/about","27":"pages/contact","28":"pages/courses/_slug","29":"pages/courses/index","30":"pages/index","31":"pages/introduction","32":"pages/news/_slug","33":"pages/news/index","34":"pages/privacy-policy","35":"pages/projects/_slug","36":"pages/projects/index","37":"pages/search"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(78);

__webpack_require__(25);

__webpack_require__(26);

__webpack_require__(27);

__webpack_require__(28);

__webpack_require__(29);

__webpack_require__(30);

__webpack_require__(31);

__webpack_require__(32);

__webpack_require__(33);

__webpack_require__(34);

__webpack_require__(35);

__webpack_require__(36);

__webpack_require__(37);

__webpack_require__(79);

__webpack_require__(80);

__webpack_require__(81);

__webpack_require__(82);

__webpack_require__(83);

__webpack_require__(84);

__webpack_require__(85);

__webpack_require__(86);

__webpack_require__(87);

__webpack_require__(88);

__webpack_require__(89);

__webpack_require__(90);

__webpack_require__(91);

__webpack_require__(92);

__webpack_require__(93);

__webpack_require__(94);

Object.defineProperty(exports, '__esModule', {
  value: true
});

const Vue = __webpack_require__(0);

const CompositionApi = __webpack_require__(13);

const globals = __webpack_require__(95);

const defu = __webpack_require__(14);

const ufo = __webpack_require__(2);

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    default: e
  };
}

const Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

const CompositionApi__default = /*#__PURE__*/_interopDefaultLegacy(CompositionApi);

const defu__default = /*#__PURE__*/_interopDefaultLegacy(defu);

function validateKey(key) {
  if (!key) {
    throw new Error("You must provide a key. You can have it generated automatically by adding '@nuxtjs/composition-api/dist/babel-plugin' to your Babel plugins.");
  }
}

function getCurrentInstance() {
  const vm = CompositionApi.getCurrentInstance();
  if (!vm) return;
  return vm.proxy;
}

function getValue(value) {
  if (value instanceof Function) return value();
  return value;
}

let globalRefs = {};

function setSSRContext(app) {
  globalRefs = Object.assign({}, {});
  app.context.ssrContext.nuxt.globalRefs = globalRefs;
}

const useServerData = () => {
  let type = 'globalRefs';
  const vm = getCurrentInstance();

  if (vm) {
    type = 'ssrRefs';

    if (true) {
      const {
        ssrContext
      } = (vm[globals.globalNuxt] || vm.$options).context;
      ssrContext.nuxt.ssrRefs = ssrContext.nuxt.ssrRefs || {};
    }
  }

  const setData = (key, val) => {
    switch (type) {
      case 'globalRefs':
        globalRefs[key] = sanitise(val);
        break;

      case 'ssrRefs':
        vm[globals.globalNuxt].context.ssrContext.nuxt.ssrRefs[key] = sanitise(val);
    }
  };

  return {
    type,
    setData
  };
};

const isProxyable = val => !!val && typeof val === 'object';

const sanitise = val => val && JSON.parse(JSON.stringify(val)) || val;

const ssrValue = (value, key, type = 'globalRefs') => {
  var _a, _b, _c, _d;

  if (false) {}

  return getValue(value);
};

const ssrRef = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  let val = ssrValue(value, key, type);
  if (false) {}
  if (value instanceof Function) setData(key, val);

  const getProxy = (track, trigger, observable) => new Proxy(observable, {
    get(target, prop) {
      track();
      if (isProxyable(target[prop])) return getProxy(track, trigger, target[prop]);
      return Reflect.get(target, prop);
    },

    set(obj, prop, newVal) {
      const result = Reflect.set(obj, prop, newVal);
      setData(key, val);
      trigger();
      return result;
    }

  });

  const proxy = CompositionApi.customRef((track, trigger) => ({
    get: () => {
      track();
      if (isProxyable(val)) return getProxy(track, trigger, val);
      return val;
    },
    set: v => {
      setData(key, v);
      val = v;
      trigger();
    }
  }));
  return proxy;
};

const shallowSsrRef = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  if (false) {}

  const _val = getValue(value);

  if (value instanceof Function) {
    setData(key, _val);
  }

  return CompositionApi.customRef((track, trigger) => ({
    get() {
      track();
      return _val;
    },

    set(newValue) {
      setData(key, newValue);
      value = newValue;
      trigger();
    }

  }));
};

const ssrPromise = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  const val = ssrValue(value, key, type);
  if (false) {}
  CompositionApi.onServerPrefetch(async () => {
    setData(key, await val);
  });
  return val;
};

const useAsync = (cb, key) => {
  var _a;

  validateKey(key);

  const _ref = CompositionApi.isRef(key) ? key : ssrRef(null, key);

  if (!_ref.value ||  false && (false)) {
    const p = Promise.resolve(cb());

    if (true) {
      CompositionApi.onServerPrefetch(async () => {
        _ref.value = await p;
      });
    } else {}
  }

  return _ref;
};

function createEmptyMeta() {
  return {
    titleTemplate: null,
    __dangerouslyDisableSanitizers: [],
    __dangerouslyDisableSanitizersByTagID: {},
    title: void 0,
    htmlAttrs: {},
    headAttrs: {},
    bodyAttrs: {},
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: [],
    changed: void 0,
    afterNavigation: void 0
  };
}

const getHeadOptions = options => {
  const head = function () {
    const optionHead = options.head instanceof Function ? options.head.call(this) : options.head;
    if (!this._computedHead) return optionHead;

    const computedHead = this._computedHead.map(h => {
      if (CompositionApi.isReactive(h)) return CompositionApi.toRaw(h);
      if (CompositionApi.isRef(h)) return h.value;
      return h;
    });

    return defu__default['default']({}, ...computedHead.reverse(), optionHead);
  };

  return {
    head
  };
};

const useMeta = init => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('useMeta must be called within a component.');
  if (!('head' in vm.$options)) throw new Error('In order to enable `useMeta`, please make sure you include `head: {}` within your component definition, and you are using the `defineComponent` exported from @nuxtjs/composition-api.');

  const refreshMeta = () => vm.$meta().refresh();

  if (!vm._computedHead) {
    const metaRefs = CompositionApi.reactive(createEmptyMeta());
    vm._computedHead = [metaRefs];
    vm._metaRefs = CompositionApi.toRefs(metaRefs);

    if (false) {}
  }

  if (init) {
    const initRef = init instanceof Function ? CompositionApi.computed(init) : CompositionApi.ref(init);

    vm._computedHead.push(initRef);

    if (false) {}
  }

  return vm._metaRefs;
};

const defineComponent = options => {
  if (!('head' in options)) return options;
  return { ...options,
    ...getHeadOptions(options)
  };
};

const withContext = callback => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  callback((vm[globals.globalNuxt] || vm.$options).context);
};

const useContext = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  return { ...(vm[globals.globalNuxt] || vm.$options).context,
    route: CompositionApi.computed(() => vm.$route),
    query: CompositionApi.computed(() => vm.$route.query),
    from: CompositionApi.computed(() => (vm[globals.globalNuxt] || vm.$options).context.from),
    params: CompositionApi.computed(() => vm.$route.params)
  };
};

const defineNuxtPlugin = plugin => plugin;

const defineNuxtMiddleware = middleware => middleware;

const nuxtState =  false && false;

function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === void 0) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}

const fetches = new WeakMap();
const fetchPromises = new Map();

const isSsrHydration = vm => {
  var _a, _b, _c;

  return (_c = (_b = (_a = vm.$vnode) == null ? void 0 : _a.elm) == null ? void 0 : _b.dataset) == null ? void 0 : _c.fetchKey;
};

function registerCallback(vm, callback) {
  const callbacks = fetches.get(vm) || [];
  fetches.set(vm, [...callbacks, callback]);
}

async function callFetches() {
  const fetchesToCall = fetches.get(this);
  if (!fetchesToCall) return;
  this[globals.globalNuxt].nbFetching++;
  this.$fetchState.pending = true;
  this.$fetchState.error = null;
  this._hydrated = false;
  let error = null;
  const startTime = Date.now();

  try {
    await Promise.all(fetchesToCall.map(fetch => {
      if (fetchPromises.has(fetch)) return fetchPromises.get(fetch);
      const promise = Promise.resolve(fetch(this)).finally(() => fetchPromises.delete(fetch));
      fetchPromises.set(fetch, promise);
      return promise;
    }));
  } catch (err) {
    if (false) {}

    error = normalizeError(err);
  }

  const delayLeft = (this._fetchDelay || 0) - (Date.now() - startTime);

  if (delayLeft > 0) {
    await new Promise(resolve => setTimeout(resolve, delayLeft));
  }

  this.$fetchState.error = error;
  this.$fetchState.pending = false;
  this.$fetchState.timestamp = Date.now();
  this.$nextTick(() => this[globals.globalNuxt].nbFetching--);
}

const setFetchState = vm => {
  vm.$fetchState = vm.$fetchState || CompositionApi.reactive({
    error: null,
    pending: false,
    timestamp: 0
  });
};

const loadFullStatic = vm => {
  vm._fetchKey = getKey(vm);
  const {
    fetchOnServer
  } = vm.$options;
  const fetchedOnServer = typeof fetchOnServer === 'function' ? fetchOnServer.call(vm) !== false : fetchOnServer !== false;
  const nuxt = vm[globals.globalNuxt];

  if (!fetchedOnServer || (nuxt == null ? void 0 : nuxt.isPreview) || !(nuxt == null ? void 0 : nuxt._pagePayload)) {
    return;
  }

  vm._hydrated = true;
  const data = nuxt._pagePayload.fetch[vm._fetchKey];

  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return;
  }

  CompositionApi.onBeforeMount(() => {
    for (const key in data) {
      CompositionApi.set(vm, key, data[key]);
    }
  });
};

async function serverPrefetch(vm) {
  if (!vm._fetchOnServer) return;
  setFetchState(vm);

  try {
    await callFetches.call(vm);
  } catch (err) {
    if (false) {}

    vm.$fetchState.error = normalizeError(err);
  }

  vm.$fetchState.pending = false;
  vm._fetchKey = 'push' in vm.$ssrContext.nuxt.fetch ? vm.$ssrContext.nuxt.fetch.length : vm._fetchKey || vm.$ssrContext.fetchCounters['']++;
  if (!vm.$vnode.data) vm.$vnode.data = {};
  const attrs = vm.$vnode.data.attrs = vm.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = vm._fetchKey;
  const data = { ...vm._data
  };
  Object.entries(vm.__composition_api_state__.rawBindings).forEach(([key, val]) => {
    if (val instanceof Function || val instanceof Promise) return;
    data[key] = CompositionApi.isRef(val) ? val.value : val;
  });
  const content = vm.$fetchState.error ? {
    _error: vm.$fetchState.error
  } : JSON.parse(JSON.stringify(data));

  if ('push' in vm.$ssrContext.nuxt.fetch) {
    vm.$ssrContext.nuxt.fetch.push(content);
  } else {
    vm.$ssrContext.nuxt.fetch[vm._fetchKey] = content;
  }
}

function getKey(vm) {
  const nuxtState2 = vm[globals.globalNuxt];

  if ( true && 'push' in vm.$ssrContext.nuxt.fetch) {
    return void 0;
  } else if (false) {}

  const defaultKey = vm.$options._scopeId || vm.$options.name || '';
  const getCounter = createGetCounter( true ? vm.$ssrContext.fetchCounters : undefined, defaultKey);
  const options = vm.$options;

  if (typeof options.fetchKey === 'function') {
    return options.fetchKey.call(vm, getCounter);
  } else {
    const key = typeof options.fetchKey === 'string' ? options.fetchKey : defaultKey;
    return key ? key + ':' + getCounter(key) : String(getCounter(key));
  }
}

const useFetch = callback => {
  var _a;

  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  registerCallback(vm, callback);

  if (typeof vm.$options.fetchOnServer === 'function') {
    vm._fetchOnServer = vm.$options.fetchOnServer.call(vm) !== false;
  } else {
    vm._fetchOnServer = vm.$options.fetchOnServer !== false;
  }

  if (true) {
    vm._fetchKey = getKey(vm);
  }

  setFetchState(vm);
  CompositionApi.onServerPrefetch(() => serverPrefetch(vm));

  function result() {
    return {
      fetch: vm.$fetch,
      fetchState: vm.$fetchState,
      $fetch: vm.$fetch,
      $fetchState: vm.$fetchState
    };
  }

  vm._fetchDelay = typeof vm.$options.fetchDelay === 'number' ? vm.$options.fetchDelay : 0;
  vm.$fetch = callFetches.bind(vm);
  CompositionApi.onBeforeMount(() => !vm._hydrated && callFetches.call(vm));

  if (true) {
    if (false) {}
    return result();
  }

  vm._hydrated = true;
  vm._fetchKey = ((_a = vm.$vnode.elm) == null ? void 0 : _a.dataset.fetchKey) || getKey(vm);
  const data = nuxtState.fetch[vm._fetchKey];

  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return result();
  }

  CompositionApi.onBeforeMount(() => {
    for (const key in data) {
      try {
        if (key in vm && typeof vm[key] === 'function') {
          continue;
        }

        CompositionApi.set(vm, key, data[key]);
      } catch (e) {
        if (false) {}
      }
    }
  });
  return result();
};

const reqRefs = new Set();

const reqRef = initialValue => {
  const _ref = CompositionApi.ref(initialValue);

  if (true) reqRefs.add(() => _ref.value = initialValue);
  return _ref;
};

const reqSsrRef = (initialValue, key) => {
  const _ref = ssrRef(initialValue, key);

  if (true) reqRefs.add(() => {
    _ref.value = initialValue instanceof Function ? sanitise(initialValue()) : initialValue;
  });
  return _ref;
};

let globalSetup;

const onGlobalSetup = fn => {
  globalSetup.add(fn);
};

const setMetaPlugin = context => {
  const {
    head
  } = context.app;
  Object.assign(context.app, getHeadOptions({
    head
  }));
};

const globalPlugin = context => {
  if (true) {
    reqRefs.forEach(reset => reset());
    setSSRContext(context.app);
  }

  const {
    setup
  } = context.app;
  globalSetup = new Set();

  context.app.setup = function (...args) {
    let result = {};

    if (setup instanceof Function) {
      result = setup(...args) || {};
    }

    for (const fn of globalSetup) {
      result = { ...result,
        ...(fn.call(this, ...args) || {})
      };
    }

    return result;
  };
};

const staticCache = {};

function writeFile(key, value) {
  if (true) return;
  const {
    writeFileSync
  } =  false ? undefined : __webpack_require__(96);
  const {
    join
  } =  false ? undefined : __webpack_require__(97);

  try {
    writeFileSync(join(globals.staticPath, `${key}.json`), value);
  } catch (e) {
    console.log(e);
  }
}

const useStatic = (factory, param = CompositionApi.ref(''), keyBase) => {
  var _a, _b;

  const key = CompositionApi.computed(() => `${keyBase}-${param.value}`);
  const result = ssrRef(null, key.value);
  if (result.value) staticCache[key.value] = result.value;

  if (false) {} else {
    if (key.value in staticCache) {
      result.value = staticCache[key.value];
      return result;
    }

    CompositionApi.onServerPrefetch(async () => {
      const [_key, _param] = [key.value, param.value];
      result.value = await factory(_param, _key);
      staticCache[_key] = result.value;
      writeFile(_key, JSON.stringify(result.value));
    });
  }

  return result;
};

const wrapProperty = (property, makeComputed) => {
  return () => {
    const vm = getCurrentInstance();
    if (!vm) throw new Error('This must be called within a setup function.');
    return makeComputed !== false ? CompositionApi.computed(() => vm[property]) : vm[property];
  };
};

const useRouter = wrapProperty('$router', false);
const useRoute = wrapProperty('$route');

const useStore = key => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  return vm.$store;
};

if (false) {}

Object.defineProperty(exports, 'computed', {
  enumerable: true,
  get: function () {
    return CompositionApi.computed;
  }
});
Object.defineProperty(exports, 'createApp', {
  enumerable: true,
  get: function () {
    return CompositionApi.createApp;
  }
});
Object.defineProperty(exports, 'createRef', {
  enumerable: true,
  get: function () {
    return CompositionApi.createRef;
  }
});
Object.defineProperty(exports, 'customRef', {
  enumerable: true,
  get: function () {
    return CompositionApi.customRef;
  }
});
Object.defineProperty(exports, 'defineAsyncComponent', {
  enumerable: true,
  get: function () {
    return CompositionApi.defineAsyncComponent;
  }
});
Object.defineProperty(exports, 'del', {
  enumerable: true,
  get: function () {
    return CompositionApi.del;
  }
});
Object.defineProperty(exports, 'getCurrentInstance', {
  enumerable: true,
  get: function () {
    return CompositionApi.getCurrentInstance;
  }
});
Object.defineProperty(exports, 'h', {
  enumerable: true,
  get: function () {
    return CompositionApi.h;
  }
});
Object.defineProperty(exports, 'inject', {
  enumerable: true,
  get: function () {
    return CompositionApi.inject;
  }
});
Object.defineProperty(exports, 'isRaw', {
  enumerable: true,
  get: function () {
    return CompositionApi.isRaw;
  }
});
Object.defineProperty(exports, 'isReactive', {
  enumerable: true,
  get: function () {
    return CompositionApi.isReactive;
  }
});
Object.defineProperty(exports, 'isReadonly', {
  enumerable: true,
  get: function () {
    return CompositionApi.isReadonly;
  }
});
Object.defineProperty(exports, 'isRef', {
  enumerable: true,
  get: function () {
    return CompositionApi.isRef;
  }
});
Object.defineProperty(exports, 'markRaw', {
  enumerable: true,
  get: function () {
    return CompositionApi.markRaw;
  }
});
Object.defineProperty(exports, 'nextTick', {
  enumerable: true,
  get: function () {
    return CompositionApi.nextTick;
  }
});
Object.defineProperty(exports, 'onActivated', {
  enumerable: true,
  get: function () {
    return CompositionApi.onActivated;
  }
});
Object.defineProperty(exports, 'onBeforeMount', {
  enumerable: true,
  get: function () {
    return CompositionApi.onBeforeMount;
  }
});
Object.defineProperty(exports, 'onBeforeUnmount', {
  enumerable: true,
  get: function () {
    return CompositionApi.onBeforeUnmount;
  }
});
Object.defineProperty(exports, 'onBeforeUpdate', {
  enumerable: true,
  get: function () {
    return CompositionApi.onBeforeUpdate;
  }
});
Object.defineProperty(exports, 'onDeactivated', {
  enumerable: true,
  get: function () {
    return CompositionApi.onDeactivated;
  }
});
Object.defineProperty(exports, 'onErrorCaptured', {
  enumerable: true,
  get: function () {
    return CompositionApi.onErrorCaptured;
  }
});
Object.defineProperty(exports, 'onMounted', {
  enumerable: true,
  get: function () {
    return CompositionApi.onMounted;
  }
});
Object.defineProperty(exports, 'onServerPrefetch', {
  enumerable: true,
  get: function () {
    return CompositionApi.onServerPrefetch;
  }
});
Object.defineProperty(exports, 'onUnmounted', {
  enumerable: true,
  get: function () {
    return CompositionApi.onUnmounted;
  }
});
Object.defineProperty(exports, 'onUpdated', {
  enumerable: true,
  get: function () {
    return CompositionApi.onUpdated;
  }
});
Object.defineProperty(exports, 'provide', {
  enumerable: true,
  get: function () {
    return CompositionApi.provide;
  }
});
Object.defineProperty(exports, 'proxyRefs', {
  enumerable: true,
  get: function () {
    return CompositionApi.proxyRefs;
  }
});
Object.defineProperty(exports, 'reactive', {
  enumerable: true,
  get: function () {
    return CompositionApi.reactive;
  }
});
Object.defineProperty(exports, 'readonly', {
  enumerable: true,
  get: function () {
    return CompositionApi.readonly;
  }
});
Object.defineProperty(exports, 'ref', {
  enumerable: true,
  get: function () {
    return CompositionApi.ref;
  }
});
Object.defineProperty(exports, 'set', {
  enumerable: true,
  get: function () {
    return CompositionApi.set;
  }
});
Object.defineProperty(exports, 'shallowReactive', {
  enumerable: true,
  get: function () {
    return CompositionApi.shallowReactive;
  }
});
Object.defineProperty(exports, 'shallowReadonly', {
  enumerable: true,
  get: function () {
    return CompositionApi.shallowReadonly;
  }
});
Object.defineProperty(exports, 'shallowRef', {
  enumerable: true,
  get: function () {
    return CompositionApi.shallowRef;
  }
});
Object.defineProperty(exports, 'toRaw', {
  enumerable: true,
  get: function () {
    return CompositionApi.toRaw;
  }
});
Object.defineProperty(exports, 'toRef', {
  enumerable: true,
  get: function () {
    return CompositionApi.toRef;
  }
});
Object.defineProperty(exports, 'toRefs', {
  enumerable: true,
  get: function () {
    return CompositionApi.toRefs;
  }
});
Object.defineProperty(exports, 'triggerRef', {
  enumerable: true,
  get: function () {
    return CompositionApi.triggerRef;
  }
});
Object.defineProperty(exports, 'unref', {
  enumerable: true,
  get: function () {
    return CompositionApi.unref;
  }
});
Object.defineProperty(exports, 'useCSSModule', {
  enumerable: true,
  get: function () {
    return CompositionApi.useCSSModule;
  }
});
Object.defineProperty(exports, 'useCssModule', {
  enumerable: true,
  get: function () {
    return CompositionApi.useCssModule;
  }
});
Object.defineProperty(exports, 'version', {
  enumerable: true,
  get: function () {
    return CompositionApi.version;
  }
});
Object.defineProperty(exports, 'warn', {
  enumerable: true,
  get: function () {
    return CompositionApi.warn;
  }
});
Object.defineProperty(exports, 'watch', {
  enumerable: true,
  get: function () {
    return CompositionApi.watch;
  }
});
Object.defineProperty(exports, 'watchEffect', {
  enumerable: true,
  get: function () {
    return CompositionApi.watchEffect;
  }
});
exports.defineComponent = defineComponent;
exports.defineNuxtMiddleware = defineNuxtMiddleware;
exports.defineNuxtPlugin = defineNuxtPlugin;
exports.globalPlugin = globalPlugin;
exports.onGlobalSetup = onGlobalSetup;
exports.reqRef = reqRef;
exports.reqSsrRef = reqSsrRef;
exports.setMetaPlugin = setMetaPlugin;
exports.setSSRContext = setSSRContext;
exports.shallowSsrRef = shallowSsrRef;
exports.ssrPromise = ssrPromise;
exports.ssrRef = ssrRef;
exports.useAsync = useAsync;
exports.useContext = useContext;
exports.useFetch = useFetch;
exports.useMeta = useMeta;
exports.useRoute = useRoute;
exports.useRouter = useRouter;
exports.useStatic = useStatic;
exports.useStore = useStore;
exports.withContext = withContext;
exports.wrapProperty = wrapProperty;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MainMenu.vue?vue&type=template&id=1dc2cdd0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"main-menu"},[_vm._ssrNode("<li class=\"main-menu__item\" data-v-1dc2cdd0>","</li>",[_c('nuxt-link',{staticClass:"main-menu__item-link",attrs:{"to":"/introduction","title":"Introduction"}},[_vm._v("\n            "+_vm._s(_vm.data.introduction.show_name)+"\n        ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"main-menu__item\" data-v-1dc2cdd0>","</li>",[_c('nuxt-link',{staticClass:"main-menu__item-link",attrs:{"to":"/projects","title":"Education Projects"}},[_vm._v("\n            "+_vm._s(_vm.data.projects.show_name)+"\n        ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"main-menu__item\" data-v-1dc2cdd0>","</li>",[_c('nuxt-link',{staticClass:"main-menu__item-link",attrs:{"to":"/courses","title":"Selected Courses"}},[_vm._v("\n            "+_vm._s(_vm.data.courses.show_name)+"\n        ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"main-menu__item\" data-v-1dc2cdd0>","</li>",[_c('nuxt-link',{staticClass:"main-menu__item-link",attrs:{"to":"/contact","title":"Contact Us"}},[_vm._v("\n            "+_vm._s(_vm.data.contact.show_name)+"\n        ")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MainMenu.vue?vue&type=template&id=1dc2cdd0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MainMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MainMenuvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,

      default() {
        return {};
      }

    }
  }
});
// CONCATENATED MODULE: ./components/MainMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MainMenuvue_type_script_lang_js_ = (MainMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/MainMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(102)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MainMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1dc2cdd0",
  "7641f145"
  
)

/* harmony default export */ var MainMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@vue/composition-api");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("detect-browser");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("756a519d", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("56b15182", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ccdad308", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("20e935b2", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.delete-all.js");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.every.js");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.filter.js");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find.js");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find-key.js");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.includes.js");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.key-of.js");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-keys.js");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-values.js");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.merge.js");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.reduce.js");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.some.js");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.update.js");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("298636ec", content, true, context)
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDYiIHZpZXdCb3g9IjAgMCA0MSA0NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjMwNTkgMjIuNTcyOEwzOC4yMjgyIDEuNjM2ODRWMjIuNTcyOCIgc3Ryb2tlPSIjNzE3MTcxIi8+CjxwYXRoIGQ9Ik0xLjE0NzIyIDEyLjEwNDlINDAuNzk0MSIgc3Ryb2tlPSIjNzE3MTcxIi8+CjxwYXRoIGQ9Ik0xOS4wNzAzIDIyLjU3MjhWMS42MzY4NEwxLjE0NjQ4IDIyLjU3MjgiIHN0cm9rZT0iIzcxNzE3MSIvPgo8cGF0aCBkPSJNMTkuMDcwMyAzNC40ODM0SDQwLjc5NDIiIHN0cm9rZT0iIzcxNzE3MSIvPgo8cGF0aCBkPSJNNDAuNzk0MiA0NC45NDhIMTkuMDcwM1YyNC4wMTY2SDQwLjc5NDIiIHN0cm9rZT0iIzcxNzE3MSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuMTQ2NzMgNDQuOTUxSDQuNzIwMTlWMjQuMDE2NkgxLjE0NjczVjQ0Ljk1MVoiIGZpbGw9IiM1OTU3NTciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01Ljk4OTQ0IDI0LjAxNjZINS40MDEzN1Y0NC45NTFINS45ODk0NEMxMi41Mjk0IDQ0Ljk1MSAxNy44MzE0IDQwLjI2MzMgMTcuODMxNCAzNC40ODMyQzE3LjgzMTQgMjguNzAyOCAxMi41Mjk0IDI0LjAxNjYgNS45ODk0NCAyNC4wMTY2WiIgZmlsbD0iIzU5NTc1NyIvPgo8L3N2Zz4K"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEwIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDguNUw5IDAuNU05IDAuNUg1TTkgMC41TDkgNC41IiBzdHJva2U9IiMzMzMzMzMiLz4KPC9zdmc+Cg=="

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjYzODA5IDEwLjU2MThDNC42MzgwOSA3LjU2NjM3IDcuMDY2MzcgNS4xMzgwOSAxMC4wNjE4IDUuMTM4MDlDMTMuMDU3MyA1LjEzODA5IDE1LjQ4NTUgNy41NjYzNyAxNS40ODU1IDEwLjU2MThDMTUuNDg1NSAxMy41NTczIDEzLjA1NzMgMTUuOTg1NSAxMC4wNjE4IDE1Ljk4NTVDNy4wNjYzNyAxNS45ODU1IDQuNjM4MDkgMTMuNTU3MyA0LjYzODA5IDEwLjU2MThaTTEwLjA2MTggNC41QzYuNzEzOTcgNC41IDQgNy4yMTM5NyA0IDEwLjU2MThDNCAxMy45MDk3IDYuNzEzOTcgMTYuNjIzNiAxMC4wNjE4IDE2LjYyMzZDMTEuNjIwOSAxNi42MjM2IDEzLjA0MjYgMTYuMDM1IDE0LjExNjYgMTUuMDY3OUwxOS40NTUzIDIwLjQwNjVDMTkuNTc5OSAyMC41MzExIDE5Ljc4MTkgMjAuNTMxMSAxOS45MDY1IDIwLjQwNjVDMjAuMDMxMSAyMC4yODIgMjAuMDMxMSAyMC4wNzk5IDE5LjkwNjUgMTkuOTU1NEwxNC41Njc4IDE0LjYxNjdDMTUuNTM1IDEzLjU0MjYgMTYuMTIzNiAxMi4xMjA5IDE2LjEyMzYgMTAuNTYxOEMxNi4xMjM2IDcuMjEzOTcgMTMuNDA5NyA0LjUgMTAuMDYxOCA0LjVaIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo="

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b2678098", content, true, context)
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("737e6e7e", content, true, context)
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("427673ae", content, true, context)
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5ec9e21a", content, true, context)
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("wpapi");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("portal-vue");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("vue-functional-data-merge");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/deco_text01B_middle.106f474.jpeg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(54);
module.exports = __webpack_require__(119);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (() => {});

/***/ }),
/* 54 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  app,
  route,
  store,
  ...context
}) {// await app.$setLocaleData(app.getRouteBaseName(route), route)
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-error .container{display:flex;align-items:center;justify-content:center;height:100vh;text-align:center}.page-error__message{margin:auto}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("06238e1e", content, true)

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(20);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(60);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(61);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(62);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(63);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(64);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(65);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___, { hash: "#fontello" });
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var{margin:0;padding:0;font-size:100%;border:0;font:inherit;vertical-align:baseline}:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type=search]{-webkit-appearance:none;-moz-appearance:none}audio,canvas{display:inline-block;*display:inline;*zoom:1;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:thin dotted}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic}figure,form{margin:0}fieldset{margin:0 2px;padding:.35em .625em .75em;border:1px solid silver}legend{*margin-left:-7px;padding:0;white-space:normal;border:0}button,input,select,textarea{margin:0;font-size:100%;vertical-align:baseline;*vertical-align:middle}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer;*overflow:visible}button[disabled],html input[disabled]{cursor:default}button{outline:none;border:none}input[type=checkbox],input[type=radio]{padding:0;*width:13px;*height:13px;box-sizing:border-box}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}button,html,input,select,textarea{color:#000}img{vertical-align:middle}fieldset{margin:0;padding:0;border:0}textarea{resize:vertical}.chromeframe{margin:.2em 0;padding:.2em 0;color:#000;background:#ccc}.page-enter{opacity:0}.page-enter-active{transition:opacity .5s}.page-leave-to{opacity:0}.page-leave-active{transition:opacity .5s}.layout-enter{opacity:0}.layout-enter-active{transition:opacity .5s}.layout-leave-to{opacity:0}.layout-leave-active{transition:opacity .5s}.fade-enter{opacity:0}.fade-enter-active{transition:opacity .5s}.fade-leave-to{opacity:0}.fade-leave-active{transition:opacity .5s}.loading-leave-to{opacity:0}.loading-leave-active{transition:opacity .6s}:root{--vh:1vh}::-moz-selection{color:#fff;background:#000}::selection{color:#fff;background:#000}.container,.container-desktop,.container-fluid,.container-large,.container-medium,.container-mobile,.container-tablet{margin:auto;width:90%}@media(min-width:1200px){.container,.container-desktop,.container-fluid,.container-large,.container-medium,.container-mobile,.container-tablet{width:1200px}}@media(min-width:640){.container-mobile{max-width:100%}}@media(min-width:768px){.container-mobile,.container-tablet{max-width:100%}}@media(min-width:1024px){.container-medium,.container-mobile,.container-tablet{max-width:100%}}@media(min-width:1200px){.container-desktop,.container-medium,.container-mobile,.container-tablet{max-width:1280px}}@media(min-width:1920px){.container-desktop,.container-large,.container-medium,.container-mobile,.container-tablet{max-width:1280px}}.row{display:flex;margin-right:-12.5px;margin-left:-12.5px;flex-wrap:wrap}.row>*{padding-right:12.5px;padding-left:12.5px;width:100%;max-width:100%;flex-shrink:0}@media(min-width:640){.col-mobile{flex:1 0 0%}.row-cols-mobile-auto>*{flex:0 0 auto;width:auto}.row-cols-mobile-1>*{flex:0 0 auto;width:100%}.row-cols-mobile-2>*{flex:0 0 auto;width:50%}.row-cols-mobile-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-mobile-4>*{flex:0 0 auto;width:25%}.row-cols-mobile-5>*{flex:0 0 auto;width:20%}.row-cols-mobile-6>*{flex:0 0 auto;width:16.6666666667%}.col-mobile-auto{flex:0 0 auto;width:auto}.col-mobile-1{flex:0 0 auto;width:8.3333333333%}.col-mobile-2{flex:0 0 auto;width:16.6666666667%}.col-mobile-3{flex:0 0 auto;width:25%}.col-mobile-4{flex:0 0 auto;width:33.3333333333%}.col-mobile-5{flex:0 0 auto;width:41.6666666667%}.col-mobile-6{flex:0 0 auto;width:50%}.col-mobile-7{flex:0 0 auto;width:58.3333333333%}.col-mobile-8{flex:0 0 auto;width:66.6666666667%}.col-mobile-9{flex:0 0 auto;width:75%}.col-mobile-10{flex:0 0 auto;width:83.3333333333%}.col-mobile-11{flex:0 0 auto;width:91.6666666667%}.col-mobile-12{flex:0 0 auto;width:100%}.offset-mobile-0{margin-left:0}.offset-mobile-1{margin-left:8.3333333333%}.offset-mobile-2{margin-left:16.6666666667%}.offset-mobile-3{margin-left:25%}.offset-mobile-4{margin-left:33.3333333333%}.offset-mobile-5{margin-left:41.6666666667%}.offset-mobile-6{margin-left:50%}.offset-mobile-7{margin-left:58.3333333333%}.offset-mobile-8{margin-left:66.6666666667%}.offset-mobile-9{margin-left:75%}.offset-mobile-10{margin-left:83.3333333333%}.offset-mobile-11{margin-left:91.6666666667%}}@media(min-width:768px){.col-tablet{flex:1 0 0%}.row-cols-tablet-auto>*{flex:0 0 auto;width:auto}.row-cols-tablet-1>*{flex:0 0 auto;width:100%}.row-cols-tablet-2>*{flex:0 0 auto;width:50%}.row-cols-tablet-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-tablet-4>*{flex:0 0 auto;width:25%}.row-cols-tablet-5>*{flex:0 0 auto;width:20%}.row-cols-tablet-6>*{flex:0 0 auto;width:16.6666666667%}.col-tablet-auto{flex:0 0 auto;width:auto}.col-tablet-1{flex:0 0 auto;width:8.3333333333%}.col-tablet-2{flex:0 0 auto;width:16.6666666667%}.col-tablet-3{flex:0 0 auto;width:25%}.col-tablet-4{flex:0 0 auto;width:33.3333333333%}.col-tablet-5{flex:0 0 auto;width:41.6666666667%}.col-tablet-6{flex:0 0 auto;width:50%}.col-tablet-7{flex:0 0 auto;width:58.3333333333%}.col-tablet-8{flex:0 0 auto;width:66.6666666667%}.col-tablet-9{flex:0 0 auto;width:75%}.col-tablet-10{flex:0 0 auto;width:83.3333333333%}.col-tablet-11{flex:0 0 auto;width:91.6666666667%}.col-tablet-12{flex:0 0 auto;width:100%}.offset-tablet-0{margin-left:0}.offset-tablet-1{margin-left:8.3333333333%}.offset-tablet-2{margin-left:16.6666666667%}.offset-tablet-3{margin-left:25%}.offset-tablet-4{margin-left:33.3333333333%}.offset-tablet-5{margin-left:41.6666666667%}.offset-tablet-6{margin-left:50%}.offset-tablet-7{margin-left:58.3333333333%}.offset-tablet-8{margin-left:66.6666666667%}.offset-tablet-9{margin-left:75%}.offset-tablet-10{margin-left:83.3333333333%}.offset-tablet-11{margin-left:91.6666666667%}}@media(min-width:1024px){.col-medium{flex:1 0 0%}.row-cols-medium-auto>*{flex:0 0 auto;width:auto}.row-cols-medium-1>*{flex:0 0 auto;width:100%}.row-cols-medium-2>*{flex:0 0 auto;width:50%}.row-cols-medium-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-medium-4>*{flex:0 0 auto;width:25%}.row-cols-medium-5>*{flex:0 0 auto;width:20%}.row-cols-medium-6>*{flex:0 0 auto;width:16.6666666667%}.col-medium-auto{flex:0 0 auto;width:auto}.col-medium-1{flex:0 0 auto;width:8.3333333333%}.col-medium-2{flex:0 0 auto;width:16.6666666667%}.col-medium-3{flex:0 0 auto;width:25%}.col-medium-4{flex:0 0 auto;width:33.3333333333%}.col-medium-5{flex:0 0 auto;width:41.6666666667%}.col-medium-6{flex:0 0 auto;width:50%}.col-medium-7{flex:0 0 auto;width:58.3333333333%}.col-medium-8{flex:0 0 auto;width:66.6666666667%}.col-medium-9{flex:0 0 auto;width:75%}.col-medium-10{flex:0 0 auto;width:83.3333333333%}.col-medium-11{flex:0 0 auto;width:91.6666666667%}.col-medium-12{flex:0 0 auto;width:100%}.offset-medium-0{margin-left:0}.offset-medium-1{margin-left:8.3333333333%}.offset-medium-2{margin-left:16.6666666667%}.offset-medium-3{margin-left:25%}.offset-medium-4{margin-left:33.3333333333%}.offset-medium-5{margin-left:41.6666666667%}.offset-medium-6{margin-left:50%}.offset-medium-7{margin-left:58.3333333333%}.offset-medium-8{margin-left:66.6666666667%}.offset-medium-9{margin-left:75%}.offset-medium-10{margin-left:83.3333333333%}.offset-medium-11{margin-left:91.6666666667%}}@media(min-width:1200px){.col-desktop{flex:1 0 0%}.row-cols-desktop-auto>*{flex:0 0 auto;width:auto}.row-cols-desktop-1>*{flex:0 0 auto;width:100%}.row-cols-desktop-2>*{flex:0 0 auto;width:50%}.row-cols-desktop-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-desktop-4>*{flex:0 0 auto;width:25%}.row-cols-desktop-5>*{flex:0 0 auto;width:20%}.row-cols-desktop-6>*{flex:0 0 auto;width:16.6666666667%}.col-desktop-auto{flex:0 0 auto;width:auto}.col-desktop-1{flex:0 0 auto;width:8.3333333333%}.col-desktop-2{flex:0 0 auto;width:16.6666666667%}.col-desktop-3{flex:0 0 auto;width:25%}.col-desktop-4{flex:0 0 auto;width:33.3333333333%}.col-desktop-5{flex:0 0 auto;width:41.6666666667%}.col-desktop-6{flex:0 0 auto;width:50%}.col-desktop-7{flex:0 0 auto;width:58.3333333333%}.col-desktop-8{flex:0 0 auto;width:66.6666666667%}.col-desktop-9{flex:0 0 auto;width:75%}.col-desktop-10{flex:0 0 auto;width:83.3333333333%}.col-desktop-11{flex:0 0 auto;width:91.6666666667%}.col-desktop-12{flex:0 0 auto;width:100%}.offset-desktop-0{margin-left:0}.offset-desktop-1{margin-left:8.3333333333%}.offset-desktop-2{margin-left:16.6666666667%}.offset-desktop-3{margin-left:25%}.offset-desktop-4{margin-left:33.3333333333%}.offset-desktop-5{margin-left:41.6666666667%}.offset-desktop-6{margin-left:50%}.offset-desktop-7{margin-left:58.3333333333%}.offset-desktop-8{margin-left:66.6666666667%}.offset-desktop-9{margin-left:75%}.offset-desktop-10{margin-left:83.3333333333%}.offset-desktop-11{margin-left:91.6666666667%}}@media(min-width:1920px){.col-large{flex:1 0 0%}.row-cols-large-auto>*{flex:0 0 auto;width:auto}.row-cols-large-1>*{flex:0 0 auto;width:100%}.row-cols-large-2>*{flex:0 0 auto;width:50%}.row-cols-large-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-large-4>*{flex:0 0 auto;width:25%}.row-cols-large-5>*{flex:0 0 auto;width:20%}.row-cols-large-6>*{flex:0 0 auto;width:16.6666666667%}.col-large-auto{flex:0 0 auto;width:auto}.col-large-1{flex:0 0 auto;width:8.3333333333%}.col-large-2{flex:0 0 auto;width:16.6666666667%}.col-large-3{flex:0 0 auto;width:25%}.col-large-4{flex:0 0 auto;width:33.3333333333%}.col-large-5{flex:0 0 auto;width:41.6666666667%}.col-large-6{flex:0 0 auto;width:50%}.col-large-7{flex:0 0 auto;width:58.3333333333%}.col-large-8{flex:0 0 auto;width:66.6666666667%}.col-large-9{flex:0 0 auto;width:75%}.col-large-10{flex:0 0 auto;width:83.3333333333%}.col-large-11{flex:0 0 auto;width:91.6666666667%}.col-large-12{flex:0 0 auto;width:100%}.offset-large-0{margin-left:0}.offset-large-1{margin-left:8.3333333333%}.offset-large-2{margin-left:16.6666666667%}.offset-large-3{margin-left:25%}.offset-large-4{margin-left:33.3333333333%}.offset-large-5{margin-left:41.6666666667%}.offset-large-6{margin-left:50%}.offset-large-7{margin-left:58.3333333333%}.offset-large-8{margin-left:66.6666666667%}.offset-large-9{margin-left:75%}.offset-large-10{margin-left:83.3333333333%}.offset-large-11{margin-left:91.6666666667%}}*{margin:0;padding:0;box-sizing:border-box}body,button,html,input,textarea{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body,button,html,input,textarea{font-family:Inter,Noto Sans TC,Microsoft YaHei UI,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,sans-serif}body,html{font-size:15px;font-weight:400;line-height:1.7;min-width:320px;-ms-scroll-chaining:none;overscroll-behavior:none;background-color:#f8f8f8}@media(min-width:1200px){body,html{font-size:16px}}input,textarea{font-size:15px;font-weight:400;line-height:1.7;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media(min-width:1200px){input,textarea{font-size:16px}}pre{white-space:pre-line}a{text-decoration:none;color:inherit}a:active,a:focus,a:hover{outline:0}button{font-size:16px;font-weight:400;line-height:normal;letter-spacing:2px;background-color:transparent}.svg-icons{width:1rem;height:1rem;fill:currentColor}[lazy=loading]{background-color:#000}.container{width:100%;padding-left:24px;padding-right:24px}@media(min-width:768px){.container{max-width:750px}}@media(min-width:992px){.container{max-width:960px}}@media(min-width:1280px){.container{max-width:1050px}}@media(min-width:1440px){.container{max-width:1290px}}.a-rect-link{position:relative;width:100%;height:50px;background-color:#000;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;line-height:1.57;letter-spacing:1px;text-align:center;color:#fff;margin:0 auto}@media(min-width:1200px){.a-rect-link{transition:opacity .3s ease}.a-rect-link:hover{opacity:.6}}@media(max-width:1199px){.a-rect-link{height:40px}}.a-news-text-card{display:block;text-align:left}.a-news-text-card__date{display:block;font-size:12px;font-weight:400;line-height:normal;letter-spacing:1px;color:#333}.a-news-text-card__title{display:block;font-size:18px;font-weight:500;line-height:normal;letter-spacing:normal;color:#000}.a-news-text-card__content{display:block;font-size:14px;font-weight:300;line-height:1.71;letter-spacing:.5px;color:#333;max-height:47.88px;overflow:hidden}.a-case-card{display:block}@media(min-width:1200px){.a-case-card:hover .a-case-card__img{opacity:.45}}.a-case-card__img{display:block;margin-bottom:15px;transition:opacity .3s ease}.a-case-card__img:before{content:\"\";display:block;width:100%;padding-bottom:100%}.a-case-card__taxonomy{font-size:12px;font-weight:300;line-height:normal;letter-spacing:1px;color:#333;margin-bottom:4px}.a-case-card__split{display:inline-block;margin-left:10px;margin-right:10px}.a-case-card__split:before{content:\"\";display:block;width:1px;height:12px;background-color:#ddd}.a-case-card__title{display:block;font-size:18px;font-weight:500;line-height:normal;letter-spacing:normal;color:#000}.m-case-list{position:relative}.m-case-list.-multiple{padding:37px}.m-case-list.-multiple .m-case-list__main{position:relative;display:flex;flex-wrap:wrap}.m-case-list.-multiple .m-case-list__item{position:relative}.m-case-list.-single{padding-top:37px}@font-face{font-family:\"fontello\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\");font-weight:400;font-style:normal}[class*=\" icon-\"]:before,[class^=icon-]:before{font-family:\"fontello\";font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-arrow-down-2:before{content:\"\"}.icon-arrow-down:before{content:\"\"}.icon-arrow-left-2:before{content:\"\"}.icon-arrow-left:before{content:\"\"}.icon-arrow-right-2:before{content:\"\"}.icon-arrow-right:before{content:\"\"}.icon-arrow-up-2:before{content:\"\"}.icon-arrow-up:before{content:\"\"}.icon-cart:before{content:\"\"}.icon-close:before{content:\"\"}.icon-fb-1:before{content:\"\"}.icon-hamburger:before{content:\"\"}.icon-ig:before{content:\"\"}.icon-play:before{content:\"\"}.icon-search:before{content:\"\"}.icon-play-2:before{content:\"\"}.icon-check:before{content:\"\"}.icon-tw-1:before{content:\"\"}.icon-play-1:before{content:\"\"}.icon-icon-gp-full:before{content:\"\"}.icon-weibo:before{content:\"\"}.icon-plus:before{content:\"\"}.icon-out:before{content:\"\"}.icon-fb:before{content:\"\"}.icon-gp:before{content:\"\"}.icon-tw:before{content:\"\"}.icon-gp_uppercase-1:before{content:\"\"}.icon-map:before{content:\"\"}.icon-down:before{content:\"\"}.icon-mail:before{content:\"\"}.icon-twitter-1:before{content:\"\"}.icon-line:before{content:\"\"}.icon-youtube-play-1:before{content:\"\"}.icon-arrow-next:before{content:\"\"}.icon-arrow-prev:before{content:\"\"}.icon-circle:before{content:\"\"}.icon-star:before{content:\"\"}.icon-twitter:before{content:\"\"}.icon-facebook:before{content:\"\"}.icon-youtube-play:before{content:\"\"}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontello.836c119.eot";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontello.836c119.eot";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontello.fab04f4.woff2";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontello.0648ddc.woff";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontello.334eef0.ttf";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fontello.ee6b372.svg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("36180598", content, true)

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:swiper-icons;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;width:calc(var(--swiper-navigation-size)/44*27);height:44px;height:var(--swiper-navigation-size);margin-top:-22px;margin-top:calc(-1*var(--swiper-navigation-size)/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;-moz-font-feature-settings:normal,;font-feature-settings:normal,;font-variant:normal;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s linear infinite;box-sizing:border-box;border-left:4px solid var(--swiper-theme-color);border-bottom:4px solid var(--swiper-theme-color);border-right:4px solid var(--swiper-theme-color);border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".noscroll{overflow-y:hidden}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_id_1ec199cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_id_1ec199cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_id_1ec199cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_id_1ec199cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_id_1ec199cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu[data-v-1ec199cb]{transition:all .5s}.menu-enter[data-v-1ec199cb]{opacity:0}.menu-enter-to[data-v-1ec199cb],.menu-leave[data-v-1ec199cb]{opacity:1}.menu-leave-to[data-v-1ec199cb]{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOSIgaGVpZ2h0PSIyMiI+PHBhdGggZmlsbD0iIzU5NTc1NyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAyMlYwaDE4Ljg1TDAgMjJ6bTIwLjE0OSAwVjBIMzlMMjAuMTQ5IDIyeiIvPjwvc3ZnPg=="

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI0NSI+PHBhdGggZmlsbD0iIzU5NTc1NyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAxMWgxMFYwSDB2MTF6bTAgMTdoMTBWMTdIMHYxMXptMCAxN2gxMFYzNEgwdjExeiIvPjwvc3ZnPg=="

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyOCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Ljk5OTA5IDEyLjUwMDJMMTMuOTk5NSAwSDE0VjI1SDBMNi45OTkwOSAxMi41MDAyWk0xNCAyNUgyOFYwTDIwLjk5OTUgMTIuNTAwMkwxNCAyNVoiIGZpbGw9IiM1OTU3NTciLz4KPC9zdmc+Cg=="

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ajax_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ajax_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ajax_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ajax_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ajax_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(20);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(51);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(77);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-ajax{position:fixed;top:0;left:0;overflow:hidden;width:100%;height:100%;background-color:#333;z-index:9999}.o-index-opening__bg{position:absolute;top:0;left:0;width:100%;height:1328px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") top/auto 1328px no-repeat,url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") 0 0/auto 1328px repeat-x;z-index:0}.o-index-opening__main{position:absolute;top:50%;left:50%;width:1050px;height:600px;transform:translate(-50%,-50%)}@media(max-width:1199px){.o-index-opening__main{transform:translate(-50%,-50%) scale(.67)}}@media(max-width:767px){.o-index-opening__main{transform:translate(-50%,-50%) scale(.26)}}.o-index-opening__poly{position:relative;margin:0 auto;width:522px;height:602px}.o-index-opening__full-poly{position:absolute;top:0;left:0;width:100%;height:100%}.o-index-opening__half-poly__right{position:absolute;top:0;right:0}.o-index-opening__half-poly.-left{position:absolute;top:12px;left:0;width:258px;height:588px;background-color:#fff;transform-origin:right bottom;-webkit-clip-path:polygon(100% 100%,100% 100%,100% 100%,100% 100%,100% 100%);clip-path:polygon(100% 100%,100% 100%,100% 100%,100% 100%,100% 100%)}.o-index-opening__half-poly.-right{position:absolute;top:0;right:0;width:259px;height:594px}.o-index-opening__back{position:absolute;top:0;left:50%;width:1px;height:50%;opacity:0}.o-index-opening__back__line-1,.o-index-opening__back__line-2{position:absolute;top:0;width:1px;height:100%;background-color:#fff;transform:translate(-50%);transform-origin:bottom}.o-index-opening__deco{position:absolute}.o-index-opening__deco__deco-1{position:absolute;top:35%;left:90px}@media(max-width:1199px){.o-index-opening__deco__deco-1{top:40%;left:30px;width:32px}}@media(max-width:767px){.o-index-opening__deco__deco-1{top:30%;left:7px;width:22px}}.o-index-opening__deco__deco-2{position:absolute;top:40%;right:225px}@media(max-width:1199px){.o-index-opening__deco__deco-2{top:20%;right:84px;width:7px}}@media(max-width:767px){.o-index-opening__deco__deco-2{top:40%;right:16px;width:5px}}.o-index-opening__deco__deco-3{position:absolute;top:72%;left:750px}@media(max-width:1199px){.o-index-opening__deco__deco-3{top:40%;left:30px;width:32px}}@media(max-width:767px){.o-index-opening__deco__deco-3{top:30%;left:7px;width:22px}}.start-animation .o-index-opening .o-index-opening__half-poly.-left{transform:rotate(-25deg);transform-origin:right bottom;-webkit-animation-name:poly-left;animation-name:poly-left;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}.start-animation .o-index-opening .o-index-opening__back{opacity:1;transition:opacity .1s linear .5s}.start-animation .o-index-opening .o-index-opening__back__line-1{transform:translate(-50%) rotate(-5.65deg) scaleY(.95);transition:transform .3s ease-out .8s}.start-animation .o-index-opening .o-index-opening__back__line-2{transform:translate(-50%) rotate(-11.19deg) scaleY(.91);transition:transform .25s ease-out .8s}@-webkit-keyframes poly-left{0%{-webkit-clip-path:polygon(100% 100%,100% 100%,100% 100%,100% 100%,100% 100%);clip-path:polygon(100% 100%,100% 100%,100% 100%,100% 100%,100% 100%);transform:rotate(0deg)}15.25%{-webkit-clip-path:polygon(100% 74.92%,100% 100%,0 74.92%,0 74.92%,0 74.92%);clip-path:polygon(100% 74.92%,100% 100%,0 74.92%,0 74.92%,0 74.92%);transform:rotate(0deg)}44.95%{-webkit-clip-path:polygon(100% 25.42%,100% 100%,0 74.92%,0 25.42%,0 25.42%);clip-path:polygon(100% 25.42%,100% 100%,0 74.92%,0 25.42%,0 25.42%);transform:rotate(0deg)}60%{-webkit-clip-path:polygon(100% 0,100% 100%,0 74.92%,0 25.42%,100% 0);clip-path:polygon(100% 0,100% 100%,0 74.92%,0 25.42%,100% 0);transform:rotate(0deg)}to{-webkit-clip-path:polygon(100% 0,100% 100%,0 74.92%,0 25.42%,100% 0);clip-path:polygon(100% 0,100% 100%,0 74.92%,0 25.42%,100% 0);transform:rotate(-25deg)}}@keyframes poly-left{0%{-webkit-clip-path:polygon(100% 100%,100% 100%,100% 100%,100% 100%,100% 100%);clip-path:polygon(100% 100%,100% 100%,100% 100%,100% 100%,100% 100%);transform:rotate(0deg)}15.25%{-webkit-clip-path:polygon(100% 74.92%,100% 100%,0 74.92%,0 74.92%,0 74.92%);clip-path:polygon(100% 74.92%,100% 100%,0 74.92%,0 74.92%,0 74.92%);transform:rotate(0deg)}44.95%{-webkit-clip-path:polygon(100% 25.42%,100% 100%,0 74.92%,0 25.42%,0 25.42%);clip-path:polygon(100% 25.42%,100% 100%,0 74.92%,0 25.42%,0 25.42%);transform:rotate(0deg)}60%{-webkit-clip-path:polygon(100% 0,100% 100%,0 74.92%,0 25.42%,100% 0);clip-path:polygon(100% 0,100% 100%,0 74.92%,0 25.42%,100% 0);transform:rotate(0deg)}to{-webkit-clip-path:polygon(100% 0,100% 100%,0 74.92%,0 25.42%,100% 0);clip-path:polygon(100% 0,100% 100%,0 74.92%,0 25.42%,100% 0);transform:rotate(-25deg)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wCEAAEBAQEBAQIBAQIDAgICAwQDAwMDBAUEBAQEBAUGBQUFBQUFBgYGBgYGBgYHBwcHBwcICAgICAkJCQkJCQkJCQkBAQEBAgICBAICBAkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCf/CABEICk4ABgMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAABgr/2gAIAQEAAAAAzLgAAAAAAAAAAAAUU6AAAAAAAAAAAAAACjnAAAAAAAAAAAAAAAAAAAAAAAAAAFF//8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//EACMQAAACCQUAAAAAAAAAAAAAABVgAAIDBAUmVFWjZHCS0eH/2gAIAQEAAT8AJ4bALlhX7LY+woHbh7s/Kerxp//EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQIBAT8AJf/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8AJf/Z"

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.weak-map.delete-all.js");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.add-all.js");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.delete-all.js");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.difference.js");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.every.js");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.filter.js");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.find.js");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.intersection.js");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-disjoint-from.js");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-subset-of.js");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-superset-of.js");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.join.js");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.map.js");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.reduce.js");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.some.js");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.symmetric-difference.js");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.union.js");

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullStatic", function() { return isFullStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticPath", function() { return staticPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicPath", function() { return publicPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalContext", function() { return globalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalNuxt", function() { return globalNuxt; });
const isFullStatic = false;
const staticPath = "/Users/gui/Desktop/case-2022-aade_en/nuxt/.nuxt/static-json";
const publicPath = "/";
const globalContext = "__NUXT__";
const globalNuxt = "$nuxt";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("upath");

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-default{position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:#fff;z-index:9999;transition:opacity .3s ease}.loading-default,.loading-default>*{pointer-events:none}body.start-animation .o-loading{opacity:0}.o-loading__icon{position:relative;display:inline-block;box-sizing:border-box;padding:0;width:60px;height:60px}.o-loading__icon-line{position:absolute;top:50%;width:60px;height:1px;background:#000;-webkit-animation:spin 1.5s ease infinite;animation:spin 1.5s ease infinite}.o-loading__icon-line:nth-of-type(2){-webkit-animation-delay:.1s;animation-delay:.1s}.o-loading__icon-line:nth-of-type(3){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-long.45a0172.png";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMiA0LjVIMlY1LjVIMjJWNC41Wk0yMiAxMi41SDJWMTMuNUgyMlYxMi41Wk0yIDIwLjVIMjJWMjEuNUgyVjIwLjVaIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo="

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_style_index_0_id_1dc2cdd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_style_index_0_id_1dc2cdd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_style_index_0_id_1dc2cdd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_style_index_0_id_1dc2cdd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_style_index_0_id_1dc2cdd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-menu[data-v-1dc2cdd0]{display:flex;align-items:center}.main-menu__item[data-v-1dc2cdd0]{margin-right:32px}.main-menu__item[data-v-1dc2cdd0]:last-child{margin-right:0}.main-menu__item-link[data-v-1dc2cdd0]{opacity:1;transition:opacity .2s}.main-menu__item-link[data-v-1dc2cdd0]:after{width:0;height:1px;content:\"\";display:block;margin-top:2px;background-color:#333;opacity:.3;transition:width .2s}.main-menu__item-link[data-v-1dc2cdd0]:hover{opacity:.5}.main-menu__item-link[data-v-1dc2cdd0]:hover:after{width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header{position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:space-between;padding:16px 24px;width:100%;z-index:100;transition:background-color .2s}.header.header-bg{background-color:#f8f8f8}@media(min-width:1200px){.header{padding:20px}}.header__logo{opacity:1;transition:opacity .5s}.header__logo:hover{opacity:.5}.header__logo img{width:29px;height:auto}@media(min-width:1200px){.header__logo img{width:320px}}.header__logo img:first-child{display:none}@media(min-width:1200px){.header__logo img:first-child{display:block}}@media(min-width:1200px){.header__logo img:last-child{display:none}}@media(max-width:1199.98px){.header__logo.hidden{opacity:0;pointer-events:none}}.header__nav{display:none;flex:1 0 auto;font-size:14px}@media(min-width:1200px){.header__nav{display:flex;align-items:center;justify-content:flex-end}}.header__nav-back-top{display:flex;align-items:center;margin-right:32px;opacity:1;transition:opacity .5s}.header__nav-back-top:hover{opacity:.5}.header__nav-main{margin-right:25px}.header__nav-external{display:flex;align-items:center}.header__nav-external-item{margin-right:32px}.header__nav-external-item:last-child{margin-right:25px}@media(min-width:1200px){.header__nav-external:before,.header__nav-search:before{width:1px;height:16px;content:\"\";display:block;margin-right:25px;background-color:#333;opacity:.3}}.header__nav-menu-button,.header__nav-search{display:flex;align-items:center}.header__nav-search{margin-right:25px}.header__nav-search-icon{opacity:1;transition:opacity .5s}.header__nav-search-icon:hover{opacity:.5}.header__nav-search-icon:active{outline:2px dashed #f8b50b}.header__nav-search-field{border-bottom:1px solid rgba(51,51,51,.3);position:relative;left:8px;padding:8px 4px;background-color:#f8f8f8;transition:all .5s}.header__nav-search-field-enter{width:0}.header__nav-search-field-enter-to,.header__nav-search-field-leave{width:160px}.header__nav-search-field-leave-to{width:0}.header__nav-menu-button{opacity:1;transition:opacity .5s}.header__nav-menu-button:before{width:1px;height:16px;content:\"\";display:block;margin-right:25px;background-color:#333;opacity:.3}.header__nav-menu-button:hover{opacity:.5}.header__nav-menu-button:active .header__nav-menu-button-icon{outline:2px dashed #f8b50b}.header__nav-link{opacity:1;transition:opacity .2s}.header__nav-link:after{width:0;height:1px;content:\"\";display:block;margin-top:2px;background-color:#333;opacity:.3;transition:width .2s}.header__nav-link:hover{opacity:.5}.header__nav-link:hover:after{width:100%}.header__btn-group{display:flex}.header__btn-group .header__nav-search{position:absolute;top:11px;left:100%;margin-right:0;height:43px;transform:translateX(calc(-100% + -94px));transition:1s}.header__btn-group .header__nav-search:before{content:\"\";display:inline-block;margin-right:20px;width:1px;height:16px;background-color:rgba(51,51,51,.3)}@media(min-width:1200px){.header__btn-group .header__nav-search{display:none}}.header__btn-group .header__nav-search.active{right:unset;left:24px;transform:translateX(0)}.header__btn-group .header__nav-search.active:before{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_2225f2a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_2225f2a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_2225f2a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_2225f2a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_2225f2a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu[data-v-2225f2a5]{position:fixed;top:0;bottom:0;right:0;left:0;overflow-y:hidden;background-color:#fff;z-index:101}@media(min-width:768px){.menu[data-v-2225f2a5]{display:flex;flex-direction:column;justify-content:space-between}}.menu>.container[data-v-2225f2a5]{margin-top:104px}@media(min-width:768px){.menu>.container[data-v-2225f2a5]{margin-top:auto}}.menu__close-button[data-v-2225f2a5]{width:20px;height:20px;position:absolute;top:30px;right:26px;opacity:1;transition:opacity .5s}.menu__close-button[data-v-2225f2a5]:hover{opacity:.5}.menu__close-button[data-v-2225f2a5]:active{outline:2px dashed #f8b50b}@media(min-width:1200px){.menu__close-button[data-v-2225f2a5]{width:24px;height:24px;top:32px}}.menu__nav[data-v-2225f2a5]{flex:1;display:flex;justify-content:center;margin-left:24px}@media(min-width:1200px){.menu__nav[data-v-2225f2a5]{margin:auto;width:1200px}}.menu__main[data-v-2225f2a5]{margin-bottom:88px;font-size:18px;font-weight:500;line-height:1.5;letter-spacing:.5px}@media(min-width:768px){.menu__main[data-v-2225f2a5]{font-size:14px;font-size:18px;font-weight:500;line-height:1.5;letter-spacing:.5px}}.menu__main-item[data-v-2225f2a5]{margin-bottom:32px}.menu__main-item-link[data-v-2225f2a5]{position:relative;font-weight:700;color:#333}.menu__main-item-link[data-v-2225f2a5]:after{position:absolute;bottom:-4px;left:0}.menu__main-item-link[data-v-2225f2a5]:hover:after{width:100%}@media(min-width:1200px){.menu__main[data-v-2225f2a5]{display:flex;justify-content:space-between;flex-wrap:wrap;margin-bottom:0}.menu__main-item[data-v-2225f2a5]{width:20%;text-align:center}.menu__main-item-link[data-v-2225f2a5]:hover{opacity:.5}.menu__main-item-link[data-v-2225f2a5]:hover:after{width:100%}}.menu__external[data-v-2225f2a5]{display:flex}.menu__external-item[data-v-2225f2a5]{margin-right:24px}.menu__external-item-link[data-v-2225f2a5]:hover{opacity:.5}.menu__external-item-link[data-v-2225f2a5]:hover:after{width:100%}@media(min-width:1200px){.menu__external[data-v-2225f2a5]{display:none}}.menu__external-item-link[data-v-2225f2a5],.menu__main-item-link[data-v-2225f2a5]{opacity:1;transition:all .5s}.menu__external-item-link[data-v-2225f2a5]:after,.menu__main-item-link[data-v-2225f2a5]:after{width:0;height:1px;content:\"\";display:block;margin-top:8px;background-color:#333;opacity:.3;transition:all .2s}.menu__footer[data-v-2225f2a5]{position:absolute;bottom:0;left:0;padding:32px 24px}@media(min-width:1200px){.menu__footer[data-v-2225f2a5]{padding:48px 56px}}.menu__footer-item[data-v-2225f2a5]:not(:last-child){margin-bottom:4px}.menu__footer-item-label[data-v-2225f2a5]{margin-right:8px;color:#717171}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4wODMzIDcuNjIzODVIMTEuNjQ5OFY1LjM0MDQ2QzExLjY0OTggNC40ODI5NCAxMi4yMDk5IDQuMjgzMDIgMTIuNjA0MyA0LjI4MzAySDE1LjAyNzZWMC41MTM2NjJMMTEuNjkwMiAwLjVDNy45ODUyOSAwLjUgNy4xNDIxNyAzLjMxMTY1IDcuMTQyMTcgNS4xMTA5NFY3LjYyMzg1SDVWMTEuNTA4SDcuMTQyMTdWMjIuNUgxMS42NDk4VjExLjUwOEgxNS4wODMzVjcuNjIzODVaIiBmaWxsPSIjNEE0QTRBIi8+Cjwvc3ZnPgo="

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMiAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC43NDE3IDMuNzk4MDhDMTkuODYzOCAzLjkyNDA0IDIwLjc5NTkgNC43Njg0MiAyMS4wNTgzIDUuOTEyOTNDMjEuNDI4NiA3LjUyOTU0IDIxLjQyODYgOS4yOTMwMSAyMS40Mjg2IDEwLjk1OTFWMTEuMDAwMUMyMS40Mjg2IDEyLjY3OCAyMS40MjcyIDE0LjQ1NyAyMS4wNTM2IDE2LjA4NjhDMjAuNzkxMyAxNy4yMzE0IDE5Ljg1ODkgMTguMDc1NyAxOC43Mzc1IDE4LjIwMTdDMTYuMDgwNyAxOC40OTk4IDEzLjM5MTYgMTguNTAxNCAxMC43MTM1IDE4LjQ5OThDOC4wMzU5MSAxOC41MDE0IDUuMzQ2MTQgMTguNDk5OCAyLjY4OTExIDE4LjIwMTdDMS41NjY5NyAxOC4wNzU1IDAuNjM1MjgxIDE3LjIzMTEgMC4zNzMzODIgMTYuMDg2OEMwIDE0LjQ1NzIgMCAxMi42NzgyIDAgMTEuMDAwMUMwIDkuMzIyMDEgMC4wMDQyMDI3NyA3LjU0MjgzIDAuMzc3NTg1IDUuOTEyOTNDMC42Mzk5MjYgNC43Njg0MiAxLjU3MTM5IDMuOTI0MDQgMi42OTI4NyAzLjc5ODA4QzUuMzUwMTIgMy41MDAxOCA4LjA0MDExIDMuNDk4NjMgMTAuNzE3NyAzLjUwMDE4QzEzLjM5NDkgMy40OTg2MyAxNi4wODQ0IDMuNTAwMTggMTguNzQxNyAzLjc5ODA4Wk03Ljk1MDIgNy4yMjMzNlYxNC4zNDAzQzguOTA2NDcgMTMuODQyMyA5Ljg1OTIyIDEzLjM0NjIgMTAuODExNSAxMi44NTA0QzEyLjEyNjggMTIuMTY1NSAxMy40NDExIDExLjQ4MTIgMTQuNzYyNyAxMC43OTI4TDcuOTUwMiA3LjIyMzM2WiIgZmlsbD0iIzRBNEE0QSIvPgo8L3N2Zz4K"

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer{position:relative;width:100%;font-size:14px;background-color:#fff;border-top:1px solid #ddd;z-index:1}.footer__mobile{padding:40px 24px 16px}.footer__mobile-title{margin-bottom:16px;font-size:14px;font-weight:400;line-height:1.5;letter-spacing:.5px;font-family:\"Noto Sans TC\",\"Inter\",\"Microsoft YaHei UI\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",sans-serif}.footer__mobile-info-item{line-height:20px;margin-bottom:4px;font-size:12px;font-weight:400;line-height:1.7}.footer__mobile-info-item-label{color:#717171}.footer__mobile-info-item.address{font-size:12px;font-weight:400;line-height:1.7;letter-spacing:.5px;font-family:\"Noto Sans TC\",\"Inter\",\"Microsoft YaHei UI\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",sans-serif;white-space:pre-wrap}.footer__mobile-hr{position:relative;left:calc(50% - 50vw);margin:40px 0;width:100vw;border:none;border-top:1px solid #ddd}.footer__mobile__btn-group{display:flex;align-items:center;margin-bottom:24px}.footer__mobile__btn-group .footer__fb{display:flex;margin-right:20px;width:24px;height:24px}.footer__mobile__btn-group .footer__fb>svg{margin:auto}.footer__mobile__btn-group .footer__yt{display:flex;width:24px;height:24px}.footer__mobile__btn-group .footer__yt>svg{margin:auto}.footer__mobile__btn-group .footer__back-top{margin-left:auto}.footer__mobile__btn-hidden-text{display:none}.footer__mobile-copyright{text-align:center;font-size:12px;font-weight:400;line-height:1.7}@media(min-width:1200px){.footer__mobile{display:none}}.footer__bottom,.footer__top{display:none}@media(min-width:1200px){.footer__bottom,.footer__top{display:flex;padding:30px 40px}}.footer__bottom{align-items:center;border-top:1px solid #ddd}.footer__logo{width:70px;height:72px;margin-right:24px}.footer__info-title{margin-bottom:16px;white-space:pre-wrap;font-size:14px;font-weight:400;line-height:1.5;letter-spacing:.5px;font-family:\"Noto Sans TC\",\"Inter\",\"Microsoft YaHei UI\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",sans-serif}.footer__info-list-item{margin-bottom:4px;font-size:12px;font-weight:400;line-height:1.7}.footer__info-list-item-label{color:#717171}.footer__info-list-item span{margin-right:8px}.footer__info-list-item.address{font-size:12px;font-weight:400;line-height:1.7;letter-spacing:.5px;font-family:\"Noto Sans TC\",\"Inter\",\"Microsoft YaHei UI\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",sans-serif;font-family:Inter,Noto Sans TC,Microsoft YaHei UI,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,sans-serif;white-space:pre-wrap}.footer__menu{display:flex;align-items:center;justify-content:flex-end;flex:1 0 auto}.footer__menu-item{margin-right:32px}.footer__menu-item:last-child{margin-right:0}.footer__menu .main-menu__item{font-size:14px;font-weight:500;line-height:1.5}.footer__menu .main-menu__item-link:after{display:none}.footer__social-link{display:flex;align-items:center}.footer__social-link-item{margin-right:24px;opacity:1;transition:opacity .5s}.footer__social-link-item:hover{opacity:.5}.footer__social-link-item-hidden-text{display:none}.footer__copyright{margin-right:24px;text-align:right;flex:1 0 auto}.footer__back-top{width:45px;height:45px;display:flex;align-items:center;justify-content:center;color:pink;background-color:#f0f0f0;transition:all .2s}.footer__back-top-icon{transition:all .4s}.footer__back-top-icon path{transition:all .2s;stroke:#333}.footer__back-top:hover{background-color:#4a4a4a}.footer__back-top:hover .footer__back-top-icon{margin-bottom:8px}.footer__back-top:hover .footer__back-top-icon path{stroke:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const LOADING = Object.freeze({
  MIN_LOAD_TIME: 500,
  LOADING_TYPE_DEFAULT: 'default',
  LOADING_TYPE_AJAX: 'ajax'
});
const state = () => ({
  loadingConfig: {
    minTime: LOADING.MIN_LOAD_TIME,
    type: LOADING.LOADING_TYPE_AJAX
  },
  loadingStack: [new Promise(resolve => {
    resolve();
  })],
  globalOptions: null,
  menu: null,
  pageList: null,
  lang: null
});
const getters = {
  isLoading(state) {
    return !!state.loadingStack.length;
  }

};
const mutations = {
  CHANGE_LOADING_TYPE(state, payload) {
    const type = LOADING[payload];

    if (type && typeof type === 'string') {
      state.loadingConfig.type = type;
    }
  },

  SET_LOADING_STACK(state, payload) {
    state.loadingStack.push(payload);
  },

  DEL_LOADING_STACK(state, payload) {
    state.loadingStack.shift();
  },

  SET_LANG(state, payload) {
    state.lang = payload;
  },

  SET_GLOBAL_OPTIONS(state, payload) {
    state.globalOptions = payload;
  },

  SET_MENU(state, payload) {
    state.menu = payload;
  },

  SET_PAGE_LIST(state, payload) {
    state.pageList = payload;
  }

};
const actions = {
  async nuxtServerInit({
    commit
  }) {
    const resGlobalOptions = await this.$axios.$get(`${this.$config.APP_BACKEND_API}/wp-json/api/global_options`);
    const data = { ...resGlobalOptions.data
    };
    commit('SET_GLOBAL_OPTIONS', data);
  },

  // async nuxtServerInit ({ dispatch }) {
  //     await Promise.all([
  //         dispatch('GET_LANG'),
  //         dispatch('GET_GLOBAL_OPTIONS'),
  //         dispatch('GET_MENU'),
  //         dispatch('GET_PAGE_LIST'),
  //     ])
  // },
  // async GET_LANG ({ commit }) {
  //     try {
  //         const langs = await this.$wp.lang().get()
  //         commit('SET_LANG', langs)
  //     } catch (e) {
  //         console.error(e)
  //     }
  // },
  // async GET_PAGE_LIST ({ commit }) {
  //     try {
  //         const lang = this.$i18n.locale
  //         const pageList = await this.$wp.pages().param('lang', lang).get()
  //         const pages = {}
  //         pageList.forEach((page) => {
  //             const { id, slug, parent, title: { rendered: title } } = page
  //             pages[slug] = { id, slug, parent, title }
  //         })
  //         commit('SET_PAGE_LIST', pages)
  //     } catch (e) {
  //         console.error(e)
  //     }
  // },
  // async GET_GLOBAL_OPTIONS ({ commit }) {
  //     try {
  //         const lang = this.$i18n.locale
  //         const options = await this.$wp.fields().param('lang', lang).s('options')
  //         commit('SET_GLOBAL_OPTIONS', options?.global_options)
  //     } catch (e) {
  //         console.error(e)
  //     }
  // },
  // async GET_MENU ({ commit }) {
  //     try {
  //         const lang = this.$i18n.locale
  //         const req = await this.$wp.fields().param('lang', lang).s('menu')
  //         commit('SET_MENU', req.menu)
  //     } catch (e) {
  //         console.error(e)
  //     }
  // },
  AJAX(context, options) {
    return new Promise((resolve, reject) => {
      this.$axios({ ...options
      }).then(({
        data,
        ...res
      }) => {
        resolve(data);
      }).catch(e => {
        reject(e);
      });
    });
  },

  ADD_LOADING_STACK({
    state,
    commit
  }, payload) {
    if (Array.isArray(payload)) {
      const promise = Promise.all(payload.filter(p => p instanceof Promise));
      commit('SET_LOADING_STACK', promise);
      return promise;
    }

    if (payload instanceof Promise) {
      commit('SET_LOADING_STACK', payload);
      return payload;
    }
  },

  WAIT_LOADING({
    state,
    commit
  }) {
    const startTime = Date.now();
    return Promise.all(state.loadingStack).then(results => {
      const endTime = Date.now();
      setTimeout(() => {
        results.forEach(result => commit('DEL_LOADING_STACK'));
      }, state.loadingConfig.minTime - (endTime - startTime));
    });
  }

};

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

const state = () => ({
  messages: {}
});
const mutations = {
  SET_MESSAGE(state, {
    locale,
    key,
    payload
  }) {
    if (!state.messages[locale]) {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(state.messages, locale, {});
    }

    state.messages[locale][key] = payload;
  }

};

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icons.svg": 116,
	"./index.svg": 117,
	"./loading.svg": 118
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 115;

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "47d47a7111485fc4641d47f1884d651a.svg");

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c50c3b6c01b2734f572105384a38f89f.svg");

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c4d927ad7ee7024710e04da76151db03.svg");

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(46);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['routerMiddleware'] = __webpack_require__(55);
middleware['routerMiddleware'] = middleware['routerMiddleware'].default || middleware['routerMiddleware'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(9);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(15);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(12);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(16);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else if (to.hash) {
    return {
      selector: to.hash
    };
  }

  return {
    x: 0,
    y: 0
  };
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _0b19076f = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 26).then(__webpack_require__.bind(null, 290)));

const _a91c87fc = () => interopDefault(__webpack_require__.e(/* import() | pages/contact */ 27).then(__webpack_require__.bind(null, 291)));

const _14c71a9d = () => interopDefault(__webpack_require__.e(/* import() | pages/courses/index */ 29).then(__webpack_require__.bind(null, 292)));

const _772236a8 = () => interopDefault(__webpack_require__.e(/* import() | pages/introduction */ 31).then(__webpack_require__.bind(null, 293)));

const _c87456b8 = () => interopDefault(__webpack_require__.e(/* import() | pages/news/index */ 33).then(__webpack_require__.bind(null, 294)));

const _7e21d4b6 = () => interopDefault(__webpack_require__.e(/* import() | pages/privacy-policy */ 34).then(__webpack_require__.bind(null, 295)));

const _35f7928b = () => interopDefault(__webpack_require__.e(/* import() | pages/projects/index */ 36).then(__webpack_require__.bind(null, 296)));

const _49eb8494 = () => interopDefault(__webpack_require__.e(/* import() | pages/search */ 37).then(__webpack_require__.bind(null, 297)));

const _13107955 = () => interopDefault(__webpack_require__.e(/* import() | pages/courses/_slug */ 28).then(__webpack_require__.bind(null, 298)));

const _cbe19948 = () => interopDefault(__webpack_require__.e(/* import() | pages/news/_slug */ 32).then(__webpack_require__.bind(null, 299)));

const _3440f143 = () => interopDefault(__webpack_require__.e(/* import() | pages/projects/_slug */ 35).then(__webpack_require__.bind(null, 300)));

const _2ad0e234 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 30).then(__webpack_require__.bind(null, 301)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _0b19076f,
    meta: {
      "name": "PageAbout",
      "computed": {},
      "loading": true
    },
    name: "about_en"
  }, {
    path: "/contact",
    component: _a91c87fc,
    meta: {
      "components": {},
      "methods": {}
    },
    name: "contact_en"
  }, {
    path: "/courses",
    component: _14c71a9d,
    meta: {
      "components": {},
      "methods": {}
    },
    name: "courses_en"
  }, {
    path: "/introduction",
    component: _772236a8,
    meta: {
      "components": {},
      "methods": {}
    },
    name: "introduction_en"
  }, {
    path: "/news",
    component: _c87456b8,
    meta: {
      "name": "ArchiveNews",
      "computed": {},
      "watch": {
        "undefined": "$fetch"
      }
    },
    name: "news_en"
  }, {
    path: "/privacy-policy",
    component: _7e21d4b6,
    meta: {
      "name": "PagePrivacyPolicy",
      "computed": {},
      "loading": true
    },
    name: "privacy-policy_en"
  }, {
    path: "/projects",
    component: _35f7928b,
    meta: {
      "components": {},
      "methods": {}
    },
    name: "projects_en"
  }, {
    path: "/search",
    component: _49eb8494,
    meta: {
      "components": {},
      "watch": {},
      "methods": {}
    },
    name: "search_en"
  }, {
    path: "/courses/:slug",
    component: _13107955,
    meta: {
      "components": {},
      "methods": {}
    },
    name: "courses-slug_en"
  }, {
    path: "/news/:slug",
    component: _cbe19948,
    meta: {
      "name": "SingleNew",
      "computed": {}
    },
    name: "news-slug_en"
  }, {
    path: "/projects/:slug",
    component: _3440f143,
    meta: {
      "components": {},
      "methods": {}
    },
    name: "projects-slug_en"
  }, {
    path: "/",
    component: _2ad0e234,
    meta: {
      "name": "PageIndex",
      "components": {},
      "computed": {},
      "methods": {},
      "loading": true
    },
    name: "index_en"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=0b96611b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-error"},[_vm._ssrNode("<div class=\"container\"><p class=\"page-error__message\">\n            404\n        </p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=0b96611b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  name: 'Error',
  props: {
    error: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      backRoute: '/'
    };
  },

  mounted() {
    this.$refs.container.style.height = window.innerHeight - 277 + 'px';
  }

});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "695c7f16"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns




/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  null,
  null,
  "75c09581"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./style/_main.scss
var _main = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.min.css
var swiper_min = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=1ec199cb&scoped=true&
var defaultvue_type_template_id_1ec199cb_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.globalStyle)},[(_vm.loadingConfig.type === 'ajax' && _vm.isLoading)?_c('LoadingAjax'):_vm._e(),_vm._ssrNode(" "),(_vm.loadingConfig.type === 'default' && _vm.isLoading)?_c('LoadingDefault'):_vm._e(),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('Header',{on:{"openMenu":_vm.openMenu}}),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"menu"}},[_c('Menu',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOpenMenu),expression:"isOpenMenu"}],staticClass:"menu",on:{"closeMenu":_vm.closeMenu}})],1),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultvue_type_template_id_1ec199cb_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=1ec199cb&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  name: 'DefaultLayout',
  inject: ['viewportInfo'],

  data() {
    return {
      isOpenMenu: false
    };
  },

  computed: {
    globalStyle() {
      const style = {
        '--vh': '1vh'
      };

      if (false) {}

      return style;
    },

    loadingConfig() {
      return this.$store.state.loadingConfig;
    },

    isLoading() {
      return this.$store.getters.isLoading;
    }

  },
  watch: {
    $route: {
      immediate: true,

      async handler(to, from) {
        await this.$parent.$i18n.waitForPendingLocaleChange();

        if (to.meta.name === 'PageIndex') {
          return;
        }

        this.$store.dispatch('WAIT_LOADING');
      }

    }
  },
  methods: {
    openMenu() {
      this.isOpenMenu = true;
      document.querySelector('html').classList.add('noscroll');
    },

    closeMenu() {
      this.isOpenMenu = false;
      document.querySelector('html').classList.remove('noscroll');
    }

  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(70)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_1ec199cb_scoped_true_render,
  defaultvue_type_template_id_1ec199cb_scoped_true_staticRenderFns,
  false,
  default_injectStyles,
  "1ec199cb",
  "23520d62"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {LoadingAjax: __webpack_require__(120).default,LoadingDefault: __webpack_require__(121).default,Header: __webpack_require__(122).default,Menu: __webpack_require__(123).default,Footer: __webpack_require__(124).default})

// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(112), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(113), 'i18n.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/utils.js
// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


const components = {
  DropDown: () => __webpack_require__.e(/* import() | components/drop-down */ 22).then(__webpack_require__.bind(null, 203)).then(c => wrapFunctional(c.default || c)),
  Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 124)).then(c => wrapFunctional(c.default || c)),
  Header: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 122)).then(c => wrapFunctional(c.default || c)),
  Logo: () => __webpack_require__.e(/* import() | components/logo */ 24).then(__webpack_require__.bind(null, 306)).then(c => wrapFunctional(c.default || c)),
  MainMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 11)).then(c => wrapFunctional(c.default || c)),
  Menu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 123)).then(c => wrapFunctional(c.default || c)),
  Pagination: () => __webpack_require__.e(/* import() | components/pagination */ 25).then(__webpack_require__.bind(null, 228)).then(c => wrapFunctional(c.default || c)),
  CardArticleCard: () => __webpack_require__.e(/* import() | components/card-article-card */ 18).then(__webpack_require__.bind(null, 139)).then(c => wrapFunctional(c.default || c)),
  CardImage: () => __webpack_require__.e(/* import() | components/card-image */ 19).then(__webpack_require__.bind(null, 302)).then(c => wrapFunctional(c.default || c)),
  CardInfo: () => __webpack_require__.e(/* import() | components/card-info */ 20).then(__webpack_require__.bind(null, 303)).then(c => wrapFunctional(c.default || c)),
  CardMemberCard: () => __webpack_require__.e(/* import() | components/card-member-card */ 21).then(__webpack_require__.bind(null, 227)).then(c => wrapFunctional(c.default || c)),
  BlocksArticleAuthor: () => __webpack_require__.e(/* import() | components/blocks-article-author */ 1).then(__webpack_require__.bind(null, 231)).then(c => wrapFunctional(c.default || c)),
  BlocksArticleBigImage: () => __webpack_require__.e(/* import() | components/blocks-article-big-image */ 2).then(__webpack_require__.bind(null, 176)).then(c => wrapFunctional(c.default || c)),
  BlocksArticleBigNav: () => __webpack_require__.e(/* import() | components/blocks-article-big-nav */ 3).then(__webpack_require__.bind(null, 177)).then(c => wrapFunctional(c.default || c)),
  BlocksArticleIntro: () => __webpack_require__.e(/* import() | components/blocks-article-intro */ 4).then(__webpack_require__.bind(null, 173)).then(c => wrapFunctional(c.default || c)),
  BlocksArticleNav: () => __webpack_require__.e(/* import() | components/blocks-article-nav */ 5).then(__webpack_require__.bind(null, 230)).then(c => wrapFunctional(c.default || c)),
  BlocksArticlePhotoWall: () => __webpack_require__.e(/* import() | components/blocks-article-photo-wall */ 6).then(__webpack_require__.bind(null, 178)).then(c => wrapFunctional(c.default || c)),
  BlocksArticleTextBlock: () => __webpack_require__.e(/* import() | components/blocks-article-text-block */ 7).then(__webpack_require__.bind(null, 174)).then(c => wrapFunctional(c.default || c)),
  BlocksArticleVideo: () => __webpack_require__.e(/* import() | components/blocks-article-video */ 8).then(__webpack_require__.bind(null, 175)).then(c => wrapFunctional(c.default || c)),
  BlocksBreadCrumb: () => __webpack_require__.e(/* import() | components/blocks-bread-crumb */ 9).then(__webpack_require__.bind(null, 136)).then(c => wrapFunctional(c.default || c)),
  BlocksFeaturedArticle: () => __webpack_require__.e(/* import() | components/blocks-featured-article */ 10).then(__webpack_require__.bind(null, 229)).then(c => wrapFunctional(c.default || c)),
  BlocksGallerySlide: () => __webpack_require__.e(/* import() | components/blocks-gallery-slide */ 11).then(__webpack_require__.bind(null, 232)).then(c => wrapFunctional(c.default || c)),
  BlocksGoogleMap: () => __webpack_require__.e(/* import() | components/blocks-google-map */ 12).then(__webpack_require__.bind(null, 225)).then(c => wrapFunctional(c.default || c)),
  BlocksParallaxGallery: () => __webpack_require__.e(/* import() | components/blocks-parallax-gallery */ 13).then(__webpack_require__.bind(null, 304)).then(c => wrapFunctional(c.default || c)),
  BlocksSlideShow: () => __webpack_require__.e(/* import() | components/blocks-slide-show */ 14).then(__webpack_require__.bind(null, 226)).then(c => wrapFunctional(c.default || c)),
  ButtonDark: () => __webpack_require__.e(/* import() | components/button-dark */ 15).then(__webpack_require__.bind(null, 307)).then(c => wrapFunctional(c.default || c)),
  ButtonLight: () => __webpack_require__.e(/* import() | components/button-light */ 16).then(__webpack_require__.bind(null, 308)).then(c => wrapFunctional(c.default || c)),
  ButtonNuxtLinkButton: () => __webpack_require__.e(/* import() | components/button-nuxt-link-button */ 17).then(__webpack_require__.bind(null, 142)).then(c => wrapFunctional(c.default || c)),
  LoadingAjax: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 120)).then(c => wrapFunctional(c.default || c)),
  LoadingAnimation: () => __webpack_require__.e(/* import() | components/loading-animation */ 23).then(__webpack_require__.bind(null, 305)).then(c => wrapFunctional(c.default || c)),
  LoadingDefault: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 121)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.js
var runtime = __webpack_require__(3);

// CONCATENATED MODULE: ./.nuxt/composition-api/plugin.mjs

/* harmony default export */ var composition_api_plugin = (runtime["globalPlugin"]);
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(6);

// EXTERNAL MODULE: external "wpapi"
var external_wpapi_ = __webpack_require__(47);
var external_wpapi_default = /*#__PURE__*/__webpack_require__.n(external_wpapi_);

// CONCATENATED MODULE: ./.nuxt/wp.js

const wp_options = {
  "sitemap": true,
  "endpoint": "http:\u002F\u002Flocalhost:9000\u002Fwp-json",
  "customRoutes": [{
    "extension": "api",
    "route": "field\u002F(?P\u003Cs\u003E)",
    "name": "field"
  }, {
    "extension": "api",
    "route": "fields\u002F(?P\u003Cs\u003E)",
    "name": "fields"
  }, {
    "extension": "api",
    "route": "languages",
    "name": "lang"
  }, {
    "extension": "wp\u002Fv2",
    "route": "news",
    "name": "news"
  }, {
    "extension": "wp\u002Fv2",
    "route": "cat-news",
    "name": "cat-news"
  }]
};
let wp = new external_wpapi_default.a(wp_options);
/* harmony default export */ var _nuxt_wp = (async (ctx, inject) => {
  wp_options.customRoutes.forEach(element => {
    wp[element.name] = wp.registerRoute(element.extension, element.route);
  });
  inject('wp', wp);
});
// EXTERNAL MODULE: external "portal-vue"
var external_portal_vue_ = __webpack_require__(48);
var external_portal_vue_default = /*#__PURE__*/__webpack_require__.n(external_portal_vue_);

// CONCATENATED MODULE: ./.nuxt/portal-vue.js


external_vue_default.a.use(external_portal_vue_default.a);
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js
// @ts-ignore

/** @type {import('@nuxt/types').Middleware} */

const i18nMiddleware = async context => {
  const {
    app,
    isHMR
  } = context;

  if (isHMR) {
    return;
  }

  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);

  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};

_nuxt_middleware.nuxti18n = i18nMiddleware;
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/options.js
const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {
    "PREFIX": "prefix",
    "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
    "PREFIX_AND_DEFAULT": "prefix_and_default",
    "NO_PREFIX": "no_prefix"
  }
};
const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined
};
const options_options = {
  vueI18n: {
    "fallbackLocale": "en"
  },
  vueI18nLoader: true,
  locales: [{
    "code": "en",
    "iso": "en-US"
  }],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "_",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "en",
    "onlyOnNoPrefix": false,
    "onlyOnRoot": true,
    "useCookie": true
  },
  differentDomains: false,
  seo: false,
  baseUrl: "https://aade.blockstudio.tw/en",
  vuex: false,
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: true,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{
    "code": "en",
    "iso": "en-US"
  }],
  localeCodes: ["en"]
};
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(17);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(114);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/utils-common.js


/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Formats a log message, prefixing module's name to it.
 *
 * @param {string} text
 * @return {string}
 */

function formatMessage(text) {
  return `[nuxt-i18n] ${text}`;
}
/**
 * Parses locales provided from browser through `accept-language` header.
 *
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */

function parseAcceptLanguage(input) {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
}
/**
 * Find locale code that best matches provided list of browser locales.
 *
 * @param {ResolvedOptions['normalizedLocales']} appLocales The user-configured locales that are to be matched.
 * @param {readonly string[]} browserLocales The locales to match against configured.
 * @return {string | undefined}
 */

function matchBrowserLocale(appLocales, browserLocales) {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = []; // Normalise appLocales input

  /** @type {{ code: string, iso: string }[]} */

  const normalizedAppLocales = [];

  for (const appLocale of appLocales) {
    const {
      code
    } = appLocale;
    const iso = appLocale.iso || code;
    normalizedAppLocales.push({
      code,
      iso
    });
  } // First pass: match exact locale.


  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.toLowerCase() === browserCode.toLowerCase());

    if (matchedLocale) {
      matchedLocales.push({
        code: matchedLocale.code,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  } // Second pass: match only locale code part of the browser locale (not including country).


  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split('-')[0].toLowerCase();
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.split('-')[0].toLowerCase() === languageCode);

    if (matchedLocale) {
      // Deduct a thousandth for being non-exact match.
      matchedLocales.push({
        code: matchedLocale.code,
        score: 0.999 - index / browserLocales.length
      });
      break;
    }
  } // Sort the list by score (0 - lowest, 1 - highest).


  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }

      return localeB.score - localeA.score;
    });
  }

  return matchedLocales.length ? matchedLocales[0].code : undefined;
}
/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 *
 * @param {string | ((context: import('@nuxt/types').Context) => string)} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @param {import('../../types').Locale} localeCode
 * @param {Pick<ResolvedOptions, 'differentDomains' | 'normalizedLocales'>} options
 * @return {string}
 */

function resolveBaseUrl(baseUrl, context, localeCode, {
  differentDomains,
  normalizedLocales
}) {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }

  if (differentDomains && localeCode) {
    // Lookup the `differentDomain` origin associated with given locale.
    const domain = getDomainFromLocale(localeCode, context.req, {
      normalizedLocales
    });

    if (domain) {
      return domain;
    }
  }

  return baseUrl;
}
/**
 * Gets the `differentDomain` domain from locale.
 *
 * @param {string} localeCode
 * @param {import('http').IncomingMessage | undefined} req
 * @param {Pick<ResolvedOptions, 'normalizedLocales'>} options
 * @return {string | undefined}
 */

function getDomainFromLocale(localeCode, req, {
  normalizedLocales
}) {
  // Lookup the `differentDomain` origin associated with given locale.
  const lang = normalizedLocales.find(locale => locale.code === localeCode);

  if (lang && lang.domain) {
    let protocol;

    if (true) {
      protocol = req && isHTTPS(req) ? 'https' : 'http';
    } else {}

    return `${protocol}://${lang.domain}`;
  } // eslint-disable-next-line no-console


  console.warn(formatMessage(`Could not find domain name for locale ${localeCode}`));
}
/**
 * Determines if a server-side request is using HTTPS.
 *
 * @param {import('http').IncomingMessage} req
 * @param {Boolean} [trustProxy=true]
 * @return {Boolean | undefined}.
 */

function isHTTPS(req, trustProxy = true) {
  // Check x-forwarded-proto header
  const _xForwardedProto = trustProxy && req.headers ? req.headers['x-forwarded-proto'] : undefined;

  const protoCheck = typeof _xForwardedProto === 'string' ? _xForwardedProto.includes('https') : undefined;

  if (protoCheck) {
    return true;
  }

  const socket =
  /** @type {import('tls').TLSSocket} */
  req.socket;

  const _encrypted = socket ? socket.encrypted : undefined;

  const encryptedCheck = _encrypted !== undefined ? _encrypted === true : undefined;

  if (encryptedCheck) {
    return true;
  }

  if (protoCheck === undefined && encryptedCheck === undefined) {
    return undefined;
  }

  return false;
}
/**
 * Get locale code that corresponds to current hostname
 *
 * @param  {ResolvedOptions['normalizedLocales']} locales
 * @param  {import('http').IncomingMessage | undefined} req
 * @return {string} Locale code found if any
 */


function getLocaleDomain(locales, req) {
  /** @type {string | undefined} */
  let host;

  if (false) {} else if (req) {
    const detectedHost = req.headers['x-forwarded-host'] || req.headers.host;
    host = Array.isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }

  if (host) {
    const matchingLocale = locales.find(l => l.domain === host);

    if (matchingLocale) {
      return matchingLocale.code;
    }
  }

  return '';
}
/**
 * Creates a RegExp for route paths
 *
 * @param  {readonly string[]} localeCodes
 * @return {RegExp}
 */

function getLocalesRegex(localeCodes) {
  return new RegExp(`^/(${localeCodes.join('|')})(?:/|$)`, 'i');
}
/**
 * Creates getter for getLocaleFromRoute
 *
 * @param  {readonly string[]} localeCodes
 * @param  {Pick<ResolvedOptions, 'routesNameSeparator' | 'defaultLocaleRouteNameSuffix'>} options
 */

function createLocaleFromRouteGetter(localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i');
  const regexpPath = getLocalesRegex(localeCodes);
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {import('vue-router').Route} route
   * @return {string} Locale code found if any
   */

  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    }

    return '';
  };

  return getLocaleFromRoute;
}
/**
 * @param {import('http').IncomingMessage | undefined} req
 * @param {{ useCookie: boolean, cookieKey: string, localeCodes: readonly string[] }} options
 * @return {string | undefined}
 */

function getLocaleCookie(req, {
  useCookie,
  cookieKey,
  localeCodes
}) {
  if (useCookie) {
    let localeCode;

    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? external_cookie_default.a.parse(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }

    if (localeCode && localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
}
/**
 * @param {string} locale
 * @param {import('http').ServerResponse | undefined} res
 * @param {{ useCookie: boolean, cookieDomain: string | null, cookieKey: string, cookieSecure: boolean, cookieCrossOrigin: boolean}} options
 */

function setLocaleCookie(locale, res, {
  useCookie,
  cookieDomain,
  cookieKey,
  cookieSecure,
  cookieCrossOrigin
}) {
  if (!useCookie) {
    return;
  }

  const date = new Date();
  /** @type {import('cookie').CookieSerializeOptions} */

  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: cookieCrossOrigin ? 'none' : 'lax',
    secure: cookieCrossOrigin || cookieSecure
  };

  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }

  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];

    if (!Array.isArray(headers)) {
      headers = [String(headers)];
    }

    const redirectCookie = external_cookie_default.a.serialize(cookieKey, locale, cookieOptions);
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
}
/**
 * @param {import('vuex').Store<Record<string, boolean>>} store
 * @param {Required<import('../../types').VuexOptions>} vuex
 * @param {readonly string[]} localeCodes
 */

function registerStore(store, vuex, localeCodes) {
  /** @typedef {{
   *    locale?: string
   *    messages?: Record<string, string>
   *    routeParams?: Record<string, Record<string, string>>
   * }} ModuleStore
   *
   * @type {import('vuex').Module<ModuleStore, {}>}
   */
  const storeModule = {
    namespaced: true,
    state: () => ({ ...(vuex.syncLocale ? {
        locale: ''
      } : {}),
      ...(vuex.syncMessages ? {
        messages: {}
      } : {}),
      ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: { ...(vuex.syncLocale ? {
        setLocale({
          commit
        }, locale) {
          commit('setLocale', locale);
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages({
          commit
        }, messages) {
          commit('setMessages', messages);
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}

          commit('setRouteParams', params);
        }

      } : {})
    },
    mutations: { ...(vuex.syncLocale ? {
        setLocale(state, locale) {
          state.locale = locale;
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages(state, messages) {
          state.messages = messages;
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }

      } : {})
    },
    getters: { ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => {
          /** @type {(locale: string) => Record<string, string>} */
          const paramsGetter = locale => routeParams && routeParams[locale] || {};

          return paramsGetter;
        }
      } : {})
    }
  };
  store.registerModule(vuex.moduleName, storeModule, {
    preserveState: !!store.state[vuex.moduleName]
  });
}
/**
 * Dispatch store module actions to keep it in sync with app's locale data
 *
 * @param  {import('vuex').Store<void>} store
 * @param  {string | null} locale The current locale
 * @param  {object | null} messages Current messages
 * @param  {ResolvedOptions['vuex']} vuex
 * @return {Promise<void>}
 */

async function syncVuex(store, locale = null, messages = null, vuex) {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + '/setLocale', locale);
    }

    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + '/setMessages', messages);
    }
  }
}
/**
 * @param {any} value
 * @return {boolean}
 */

const isObject = value => value && !Array.isArray(value) && typeof value === 'object';
/**
 * Validate setRouteParams action's payload
 *
 * @param {object} routeParams The action's payload
 * @param {readonly string[]} localeCodes
 */


function validateRouteParams(routeParams, localeCodes) {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(formatMessage('Route params should be an object'));
    return;
  }

  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(formatMessage(`Trying to set route params for key ${key} which is not a valid locale`));
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(formatMessage(`Trying to set route params for locale ${key} with a non-object value`));
    }
  }
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js




/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localePath']}
 */

function plugin_routing_localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute ? localizedRoute.route.fullPath : '';
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeRoute']}
 */


function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.route : undefined;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeLocation']}
 */


function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.location : undefined;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @param {import('vue-router').RawLocation} route
 * @param {string} [locale]
 * @return {ReturnType<import('vue-router').default['resolve']> | undefined}
 */


function resolveRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }

  const {
    i18n
  } = this;
  locale = locale || i18n.locale;

  if (!locale) {
    return;
  } // If route parameter is a string, check if it's a path or name of route.


  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }

  let localizedRoute = Object.assign({}, route);

  if (localizedRoute.path && !localizedRoute.name) {
    const resolvedRoute = this.router.resolve(localizedRoute).route;
    const resolvedRouteName = this.getRouteBaseName(resolvedRoute);

    if (resolvedRouteName) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, locale),
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
    } else {
      const isDefaultLocale = locale === options_options.defaultLocale; // if route has a path defined but no name, resolve full route using the path

      const isPrefixed = // don't prefix default locale
      !(isDefaultLocale && [Constants.STRATEGIES.PREFIX_EXCEPT_DEFAULT, Constants.STRATEGIES.PREFIX_AND_DEFAULT].includes(options_options.strategy)) && // no prefix for any language
      !(options_options.strategy === Constants.STRATEGIES.NO_PREFIX) && // no prefix for different domains
      !i18n.differentDomains;

      if (isPrefixed) {
        localizedRoute.path = `/${locale}${localizedRoute.path}`;
      }

      localizedRoute.path = localizedRoute.path.replace(/\/+$/, '') + (nuxtOptions.trailingSlash ? '/' : '') || '/';
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = this.getRouteBaseName();
    }

    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;

    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }

  const resolvedRoute = this.router.resolve(localizedRoute);

  if (resolvedRoute.route.name) {
    return resolvedRoute;
  } // If didn't resolve to an existing route then just return resolved route based on original input.


  return this.router.resolve(route);
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['switchLocalePath']}
 */


function switchLocalePath(locale) {
  const name = this.getRouteBaseName();

  if (!name) {
    return '';
  }

  const {
    i18n,
    route,
    store
  } = this;
  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};

  if (options_options.vuex && options_options.vuex.syncRouteParams && store) {
    langSwitchParams = store.getters[`${options_options.vuex.moduleName}/localeRouteParams`](locale);
  }

  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: { ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale); // Handle different domains

  if (i18n.differentDomains) {
    const getDomainOptions = {
      differentDomains: i18n.differentDomains,
      normalizedLocales: options_options.normalizedLocales
    };
    const domain = getDomainFromLocale(locale, this.req, getDomainOptions);

    if (domain) {
      path = domain + path;
    }
  }

  return path;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['getRouteBaseName']}
 */


function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;

  if (!route || !route.name) {
    return;
  }

  return route.name.split(options_options.routesNameSeparator)[0];
}
/**
 * @param {string | undefined} routeName
 * @param {string} locale
 */


function getLocaleRouteName(routeName, locale) {
  let name = routeName + (options_options.strategy === Constants.STRATEGIES.NO_PREFIX ? '' : options_options.routesNameSeparator + locale);

  if (locale === options_options.defaultLocale && options_options.strategy === Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
    name += options_options.routesNameSeparator + options_options.defaultLocaleRouteNameSuffix;
  }

  return name;
}
/**
 * @template {(...args: any[]) => any} T
 * @param {T} targetFunction
 * @return {(this: Vue, ...args: Parameters<T>) => ReturnType<T>}
 */


const VueInstanceProxy = function (targetFunction) {
  return function () {
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      localeRoute: this.localeRoute,
      localeLocation: this.localeLocation,
      req:  true ? this.$ssrContext.req : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
/**
 * @template {(...args: any[]) => any} T
 * @param {import('@nuxt/types').Context} context
 * @param {T} targetFunction
 * @return {(...args: Parameters<T>) => ReturnType<T>}
 */


const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      localeLocation: app.localeLocation,
      localeRoute: app.localeRoute,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
/** @type {import('vue').PluginObject<void>} */


const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(plugin_routing_localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        localeLocation: VueInstanceProxy(localeLocation),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }

};
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app,
    store
  } = context;
  app.localePath = context.localePath = NuxtContextProxy(context, plugin_routing_localePath);
  app.localeRoute = context.localeRoute = NuxtContextProxy(context, localeRoute);
  app.localeLocation = context.localeLocation = NuxtContextProxy(context, localeLocation);
  app.switchLocalePath = context.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = context.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);

  if (store) {
    store.localePath = app.localePath;
    store.localeRoute = app.localeRoute;
    store.localeLocation = app.localeLocation;
    store.switchLocalePath = app.switchLocalePath;
    store.getRouteBaseName = app.getRouteBaseName;
  }
});
// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(18);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(25);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(26);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(27);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(28);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(29);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(30);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(31);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(32);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(33);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(34);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(35);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(36);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(37);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/head-meta.js
















/**
 * @this {import('vue/types/vue').Vue}
 * @return {import('vue-meta').MetaInfo}
 */

function nuxtI18nHead({
  addDirAttribute = true,
  addSeoAttributes = false
} = {}) {
  // Can happen when using from a global mixin.
  if (!this.$i18n) {
    return {};
  }
  /** @type {import('../../types/vue').NuxtI18nMeta} */


  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.localeProperties;
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || options_options.defaultDirection;
  /**
   * Adding Direction Attribute:
   */

  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }
  /**
   * Adding SEO Meta:
   */


  if (addSeoAttributes && ( // @ts-ignore
  external_vue_meta_default.a.hasMetaInfo ? external_vue_meta_default.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales && this.$options[Constants.COMPONENT_OPTIONS_KEY] !== false && // @ts-ignore
  !(this.$options[Constants.COMPONENT_OPTIONS_KEY] && this.$options[Constants.COMPONENT_OPTIONS_KEY].seo === false)) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
    }

    const locales =
    /** @type {import('../../types').LocaleObject[]} */
    this.$i18n.locales;
    addHreflangLinks.bind(this)(locales, this.$i18n.__baseUrl, metaObject.link);
    addCanonicalLinks.bind(this)(this.$i18n.__baseUrl, metaObject.link);
    addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
    addAlternateOgLocales.bind(this)(locales, currentLocaleIso, metaObject.meta);
  }
  /**
   * Internals:
   */

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */


  function addHreflangLinks(locales, baseUrl, link) {
    if (options_options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return;
    }
    /** @type {Map<string, import('../../types').LocaleObject>} */


    const localeMap = new Map();

    for (const locale of locales) {
      const localeIso = locale.iso;

      if (!localeIso) {
        // eslint-disable-next-line no-console
        console.warn(formatMessage('Locale ISO code is required to generate alternate link'));
        continue;
      }

      const [language, region] = localeIso.split('-');

      if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
        localeMap.set(language, locale);
      }

      localeMap.set(localeIso, locale);
    }

    for (const [iso, mapLocale] of localeMap.entries()) {
      const localePath = this.switchLocalePath(mapLocale.code);

      if (localePath) {
        link.push({
          hid: `i18n-alt-${iso}`,
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: iso
        });
      }
    }

    if (options_options.defaultLocale) {
      const localePath = this.switchLocalePath(options_options.defaultLocale);

      if (localePath) {
        link.push({
          hid: 'i18n-xd',
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: 'x-default'
        });
      }
    }
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */


  function addCanonicalLinks(baseUrl, link) {
    const currentRoute = this.localeRoute({ ...this.$route,
      name: this.getRouteBaseName()
    });
    const canonicalPath = currentRoute ? currentRoute.path : null;

    if (canonicalPath) {
      link.push({
        hid: 'i18n-can',
        rel: 'canonical',
        href: toAbsoluteUrl(canonicalPath, baseUrl)
      });
    }
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject} currentLocale
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */


  function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
    const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;

    if (!hasCurrentLocaleAndIso) {
      return;
    }

    meta.push({
      hid: 'i18n-og',
      property: 'og:locale',
      // Replace dash with underscore as defined in spec: language_TERRITORY
      content: hypenToUnderscore(currentLocaleIso)
    });
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */


  function addAlternateOgLocales(locales, currentLocaleIso, meta) {
    const localesWithoutCurrent = locales.filter(locale => {
      const localeIso = locale.iso;
      return localeIso && localeIso !== currentLocaleIso;
    });

    if (localesWithoutCurrent.length) {
      const alternateLocales = localesWithoutCurrent.map(locale => ({
        hid: `i18n-og-alt-${locale.iso}`,
        property: 'og:locale:alternate',
        content: hypenToUnderscore(locale.iso)
      }));
      meta.push(...alternateLocales);
    }
  }
  /**
   * @param {string | undefined} str
   * @return {string}
   */


  function hypenToUnderscore(str) {
    return (str || '').replace(/-/g, '_');
  }
  /**
   * @param {string} urlOrPath
   * @param {string} baseUrl
   */


  function toAbsoluteUrl(urlOrPath, baseUrl) {
    if (urlOrPath.match(/^https?:\/\//)) {
      return urlOrPath;
    }

    return baseUrl + urlOrPath;
  }

  return metaObject;
}
/**
 * @deprecated Use `nuxtI18nHead()` instead.
 * @this {import('vue/types/vue').Vue}
 */

function nuxtI18nSeo() {
  return nuxtI18nHead.call(this, {
    addDirAttribute: false,
    addSeoAttributes: true
  });
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/utils.js


/**
 * Asynchronously load messages from translation files
 *
 * @param {import('@nuxt/types').Context} context
 * @param {string} locale Language code to load
 * @return {Promise<void>}
 */

async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;
  const {
    i18n
  } = app;

  if (!i18n.loadedLanguages) {
    i18n.loadedLanguages = [];
  }

  if (!i18n.loadedLanguages.includes(locale)) {
    const localeObject = options_options.normalizedLocales.find(l => l.code === locale);

    if (localeObject) {
      const {
        file
      } = localeObject;

      if (file) {
        /*  */
      } else {
        console.warn(formatMessage(`Could not find lang file for locale ${locale}`));
      }
    } else {
      console.warn(formatMessage(`Attempted to load messages for non-existant locale code "${locale}"`));
    }
  }
}
// CONCATENATED MODULE: ./node_modules/klona/full/index.mjs
function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js






 // @ts-ignore


external_vue_default.a.use(external_vue_i18n_default.a);
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;

  if (options_options.vuex && store) {
    registerStore(store, options_options.vuex, options_options.localeCodes);
  }

  const {
    lazy
  } = options_options;
  const injectInNuxtState = lazy && (lazy === true || lazy.skipNuxtState !== true);

  if ( true && injectInNuxtState) {
    const devalue = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 128, 7))).default;
    context.beforeNuxtRender(({
      nuxtState
    }) => {
      /** @type {Record<string, import('vue-i18n').LocaleMessageObject>} */
      const langs = {};
      const {
        fallbackLocale,
        locale
      } = app.i18n;

      if (locale && locale !== fallbackLocale) {
        // @ts-ignore Using internal API to avoid unnecessary cloning.
        const messages = app.i18n._getMessages()[locale];

        if (messages) {
          try {
            devalue(messages);
            langs[locale] = messages;
          } catch {// Ignore - client-side will load the chunk asynchronously.
          }
        }
      }

      nuxtState.__i18n = {
        langs
      };
    });
  }

  const {
    alwaysRedirect,
    fallbackLocale,
    onlyOnNoPrefix,
    onlyOnRoot,
    useCookie,
    cookieKey,
    cookieDomain,
    cookieSecure,
    cookieCrossOrigin
  } =
  /** @type {Required<import('../../types').DetectBrowserLanguageOptions>} */
  options_options.detectBrowserLanguage;
  /**
   * @param {string | undefined} newLocale
   * @param {{ initialSetup?: boolean }} [options=false]
   */

  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    if (!newLocale) {
      return;
    } // Abort if different domains option enabled


    if (!initialSetup && app.i18n.differentDomains) {
      return;
    }

    const oldLocale = app.i18n.locale;

    if (newLocale === oldLocale) {
      return;
    }

    const localeOverride = app.i18n.onBeforeLanguageSwitch(oldLocale, newLocale, initialSetup, context);

    if (localeOverride && app.i18n.localeCodes.includes(localeOverride)) {
      if (localeOverride === oldLocale) {
        return;
      }

      newLocale = localeOverride;
    }

    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale);
    }

    if (useCookie) {
      app.i18n.setLocaleCookie(newLocale);
    }

    if (options_options.langDir) {
      const i18nFallbackLocale = app.i18n.fallbackLocale;

      if (options_options.lazy) {
        // Load fallback locale(s).
        if (i18nFallbackLocale) {
          /** @type {Promise<void>[]} */
          let localesToLoadPromises = [];

          if (Array.isArray(i18nFallbackLocale)) {
            localesToLoadPromises = i18nFallbackLocale.map(fbLocale => loadLanguageAsync(context, fbLocale));
          } else if (typeof i18nFallbackLocale === 'object') {
            if (i18nFallbackLocale[newLocale]) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale[newLocale].map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }

            if (i18nFallbackLocale.default) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale.default.map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }
          } else if (newLocale !== i18nFallbackLocale) {
            localesToLoadPromises.push(loadLanguageAsync(context, i18nFallbackLocale));
          }

          await Promise.all(localesToLoadPromises);
        }

        await loadLanguageAsync(context, newLocale);
      } else {
        // Load all locales.
        await Promise.all(options_options.localeCodes.map(locale => loadLanguageAsync(context, locale)));
      }
    }

    app.i18n.locale = newLocale; // @ts-ignore

    app.i18n.localeProperties = klona(options_options.locales.find(l => l.code === newLocale) || {
      code: newLocale
    });

    if (options_options.vuex) {
      await syncVuex(store, newLocale, app.i18n.getLocaleMessage(newLocale), options_options.vuex);
    } // Must retrieve from context as it might have changed since plugin initialization.


    const {
      route
    } = context;
    const redirectPath = getRedirectPathForLocale(route, newLocale);

    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);

      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };

  const getLocaleFromRoute = createLocaleFromRouteGetter(options_options.localeCodes, {
    routesNameSeparator: options_options.routesNameSeparator,
    defaultLocaleRouteNameSuffix: options_options.defaultLocaleRouteNameSuffix
  });
  /**
   * Gets the redirect path for locale.
   *
   * @param {import("vue-router").Route} route
   * @param {string | undefined} locale
   * @return {string} The redirect path for locale.
   */

  const getRedirectPathForLocale = (route, locale) => {
    // Redirects are ignored if it is a nuxt generate.
    if (false) {}

    if (!locale || app.i18n.differentDomains || options_options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return '';
    }

    if (getLocaleFromRoute(route) === locale) {
      // If "onlyOnRoot" or "onlyOnNoPrefix" is set and strategy is "prefix_and_default", prefer unprefixed route for
      // default locale.
      if (!(onlyOnRoot || onlyOnNoPrefix) || locale !== options_options.defaultLocale || options_options.strategy !== Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
        return '';
      }
    } // At this point we are left with route that either has no or different locale.


    let redirectPath = app.switchLocalePath(locale);

    if (!redirectPath) {
      // Current route could be 404 in which case attempt to find matching route for given locale.
      redirectPath = app.localePath(route.fullPath, locale);
    }

    if (!redirectPath || redirectPath === route.fullPath || redirectPath.startsWith('//')) {
      return '';
    }

    return redirectPath;
  };
  /**
   * Called by middleware on navigation (also on the initial one).
   *
   * @type {import('../../types/internal').onNavigateInternal}
   */


  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && options_options.rootRedirect) {
      let statusCode = 302;
      let path = options_options.rootRedirect;

      if (typeof options_options.rootRedirect !== 'string') {
        statusCode = options_options.rootRedirect.statusCode;
        path = options_options.rootRedirect.path;
      }

      return [statusCode, `/${path}`,
      /* preserve query */
      true];
    }

    const storedRedirect = app.i18n.__redirect;

    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }

    const resolveBaseUrlOptions = {
      differentDomains: options_options.differentDomains,
      normalizedLocales: options_options.normalizedLocales
    };
    app.i18n.__baseUrl = resolveBaseUrl(options_options.baseUrl, context, app.i18n.locale, resolveBaseUrlOptions);
    const finalLocale = options_options.detectBrowserLanguage && doDetectBrowserLanguage(route) || getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';

    if (options_options.skipSettingLocaleOnNavigate) {
      app.i18n.__pendingLocale = finalLocale;
      app.i18n.__pendingLocalePromise = new Promise(resolve => {
        app.i18n.__resolvePendingLocalePromise = resolve;
      });
    } else {
      await app.i18n.setLocale(finalLocale);
    }

    return [null, null];
  };

  const finalizePendingLocaleChange = async () => {
    if (!app.i18n.__pendingLocale) {
      return;
    }

    await app.i18n.setLocale(app.i18n.__pendingLocale);

    app.i18n.__resolvePendingLocalePromise('');

    app.i18n.__pendingLocale = null;
  };

  const waitForPendingLocaleChange = async () => {
    if (app.i18n.__pendingLocale) {
      await app.i18n.__pendingLocalePromise;
    }
  };

  const getBrowserLocale = () => {
    if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      return matchBrowserLocale(options_options.normalizedLocales, parseAcceptLanguage(req.headers['accept-language']));
    } else {
      return undefined;
    }
  };
  /**
   * @param {import('vue-router').Route} route
   * @return {string} Returns the browser locale that was detected or an empty string otherwise.
   */


  const doDetectBrowserLanguage = route => {
    // Browser detection is ignored if it is a nuxt generate.
    if (false) {}

    if (options_options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      if (onlyOnRoot) {
        if (route.path !== '/') {
          return '';
        }
      } else if (onlyOnNoPrefix) {
        if (!alwaysRedirect && route.path.match(getLocalesRegex(options_options.localeCodes))) {
          return '';
        }
      }
    }

    let matchedLocale;

    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {// Get preferred language from cookie if present and enabled
    } else {
      // Try to get locale from either navigator or header detection
      matchedLocale = getBrowserLocale();
    }

    const finalLocale = matchedLocale || fallbackLocale; // Handle cookie option to prevent multiple redirections

    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      }
    }

    return '';
  };
  /**
   * Extends the newly created vue-i18n instance with nuxt-i18n properties.
   *
   * @param {import('vue-i18n').IVueI18n} i18n
   */


  const extendVueI18nInstance = i18n => {
    i18n.locales = klona(options_options.locales);
    i18n.localeCodes = klona(options_options.localeCodes);
    i18n.localeProperties = klona(options_options.normalizedLocales.find(l => l.code === i18n.locale) || {
      code: i18n.locale
    });
    i18n.defaultLocale = options_options.defaultLocale;
    i18n.differentDomains = options_options.differentDomains;
    i18n.beforeLanguageSwitch = options_options.beforeLanguageSwitch;
    i18n.onBeforeLanguageSwitch = options_options.onBeforeLanguageSwitch;
    i18n.onLanguageSwitched = options_options.onLanguageSwitched;

    i18n.setLocaleCookie = locale => setLocaleCookie(locale, res, {
      useCookie,
      cookieDomain,
      cookieKey,
      cookieSecure,
      cookieCrossOrigin
    });

    i18n.getLocaleCookie = () => getLocaleCookie(req, {
      useCookie,
      cookieKey,
      localeCodes: options_options.localeCodes
    });

    i18n.setLocale = locale => loadAndSetLocale(locale);

    i18n.getBrowserLocale = () => getBrowserLocale();

    i18n.finalizePendingLocaleChange = finalizePendingLocaleChange;
    i18n.waitForPendingLocaleChange = waitForPendingLocaleChange;
    i18n.__baseUrl = app.i18n.__baseUrl;
    i18n.__pendingLocale = app.i18n.__pendingLocale;
    i18n.__pendingLocalePromise = app.i18n.__pendingLocalePromise;
    i18n.__resolvePendingLocalePromise = app.i18n.__resolvePendingLocalePromise;
  }; // Set instance options


  const vueI18nOptions = typeof options_options.vueI18n === 'function' ? await options_options.vueI18n(context) : klona(options_options.vueI18n);
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance; // @ts-ignore

  app.i18n = context.i18n = new external_vue_i18n_default.a(vueI18nOptions); // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey

  app.i18n.locale = '';
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';
  extendVueI18nInstance(app.i18n);
  const resolveBaseUrlOptions = {
    differentDomains: options_options.differentDomains,
    normalizedLocales: options_options.normalizedLocales
  };
  app.i18n.__baseUrl = resolveBaseUrl(options_options.baseUrl, context, '', resolveBaseUrlOptions);
  app.i18n.__onNavigate = onNavigate;
  external_vue_default.a.prototype.$nuxtI18nSeo = nuxtI18nSeo;
  external_vue_default.a.prototype.$nuxtI18nHead = nuxtI18nHead;

  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;

    if (store.state.localeDomains) {
      for (const locale of app.i18n.locales) {
        if (typeof locale === 'string') {
          continue;
        }

        locale.domain = store.state.localeDomains[locale.code];
      }
    }
  }
  /** @type {string | undefined} */


  let finalLocale = options_options.detectBrowserLanguage ? doDetectBrowserLanguage(route) : '';

  if (!finalLocale) {
    const {
      vuex
    } = options_options;

    if (vuex && vuex.syncLocale && store && store.state[vuex.moduleName].locale !== '') {
      finalLocale = store.state[vuex.moduleName].locale;
    } else if (app.i18n.differentDomains) {
      const domainLocale = getLocaleDomain(options_options.normalizedLocales, req);
      finalLocale = domainLocale;
    } else if (options_options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    } else if (useCookie) {
      finalLocale = app.i18n.getLocaleCookie();
    }
  }

  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }

  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });

  if (false) {}
});
// EXTERNAL MODULE: external "vue-functional-data-merge"
var external_vue_functional_data_merge_ = __webpack_require__(49);

// CONCATENATED MODULE: ./.nuxt/nuxt-svg-sprite.js



function generateName(name) {
  return name.toLowerCase().replace(/\.svg$/, '').replace(/[^a-z0-9-]/g, '-');
}
/**
 * Find sprite file name after nuxt build
 * @param {string} sprite Name of a sprite
 */


function getSpritePath(sprite) {
  const module = __webpack_require__(115)("./" + sprite + ".svg");

  if (typeof module === 'string') {
    return module;
  } // nuxt-edge v3.0.0-26398097.20b0379b returns object instead of string


  if (typeof module === 'object' && typeof module.default === 'string') {
    return module.default;
  }

  return '';
}

function getIcon(info) {
  const {
    icon,
    sprite
  } = info;
  return getSpritePath(sprite) + `#i-${generateName(icon)}`;
}

function getInfo(name) {
  let [sprite, icon] = name.split('/');

  if (!icon) {
    icon = sprite;
    sprite = 'icons';
  }

  return {
    icon,
    sprite
  };
} // @vue/component


const SvgIcon = {
  name: 'SvgIcon',
  functional: true,
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    viewBox: {
      type: String,
      default: null,

      validator(value) {
        return value.split(' ').every(v => {
          return !isNaN(parseInt(v));
        });
      }

    }
  },

  render(h, {
    props,
    data
  }) {
    const info = getInfo(props.name);
    const icon = getIcon(info);
    const use = h('use', {
      attrs: {
        // Since SVG 2, the xlink:href attribute is deprecated in favor of simply href.
        href: icon,
        // xlink:href can still be required in practice for cross-browser compatibility.
        'xlink:href': icon
      }
    });
    const title = props.title ? h('title', props.title) : null;
    const desc = props.desc ? h('desc', props.desc) : null;
    const {
      sprite
    } = info;
    const componentData = {
      class: 'icon svg-' + sprite,
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: props.viewBox
      }
    };
    return h('svg', Object(external_vue_functional_data_merge_["mergeData"])(data, componentData), [title, desc, use].filter(Boolean));
  }

};
external_vue_default.a.component(SvgIcon.name, SvgIcon);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(7);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(14);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./plugins/router.js
/* harmony default export */ var plugins_router = (function ({
  app,
  route,
  store,
  ...context
}) {
  app.router.options.scrollBehavior = (to, from, savedPosition) => {
    if (to.meta.loading) {
      store.dispatch('ADD_LOADING_STACK', new Promise(resolve => {
        resolve();
      }));
    } // return savedPosition || { x: 0, y: 0 }

  };

  app.router.afterEach((to, from) => {
    if (false) {}
  });
});
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(50);

// EXTERNAL MODULE: external "detect-browser"
var external_detect_browser_ = __webpack_require__(19);

// CONCATENATED MODULE: ./plugins/functions/mobileInnerHeight.js
const getHeightInfo = () => {
  const dims = {
    w: 0,
    h: 0
  };
  const axis = Math.abs(window.orientation);
  let measuringEl = document.createElement('div');
  measuringEl.style.position = 'fixed';
  measuringEl.style.height = '100vh';
  measuringEl.style.width = 0;
  measuringEl.style.top = 0;
  document.documentElement.appendChild(measuringEl);
  dims.w = axis === 90 ? measuringEl.offsetHeight : window.innerWidth;
  dims.h = axis === 90 ? window.innerWidth : measuringEl.offsetHeight;
  document.documentElement.removeChild(measuringEl);
  measuringEl = null;
  return {
    axis,
    dims
  };
};

/* harmony default export */ var mobileInnerHeight = (() => {
  let {
    axis,
    dims
  } = getHeightInfo();
  return refresh => {
    if (refresh) ({
      axis,
      dims
    } = getHeightInfo());
    if (axis !== 90) return dims.h;
    return dims.w;
  };
});
// CONCATENATED MODULE: ./plugins/functions/viewport.js



let viewport_innerHeight;
const getterKeys = ['vpWidth', 'vpHeight', 'device', 'mediaType', 'isDesktop', 'isTablet', 'isMobile', 'isPc', 'isIE'];

class viewport_Viewport {
  constructor() {
    this.refresh = Object(external_lodash_["debounce"])(() => {
      var _this$onResize;

      this.vpWidth = window.innerWidth;
      this.vpHeight = viewport_innerHeight(true);
      this.device = Object(external_detect_browser_["detect"])();
      (_this$onResize = this.onResize) === null || _this$onResize === void 0 ? void 0 : _this$onResize.call(this);
    }, 200);
    this.information = {
      width: 0,
      height: 0,
      device: Object(external_detect_browser_["detect"])(),
      media: {
        mobile: '(max-width: 767px)',
        tablet: '(max-width: 1199px) and (min-width: 768px)',
        desktop: '(min-width:1200px)'
      }
    };

    if (false) {}
  }

  destroy() {
    window.removeEventListener('resize', this.refresh);
  }

  get info() {
    return getterKeys.reduce((acc, curr) => {
      acc[curr] = this[curr];
      return acc;
    }, {});
  }

  set vpWidth(value) {
    this.information.width = value;
  }

  get vpWidth() {
    return this.information.width;
  }

  set vpHeight(value) {
    this.information.height = value;
  }

  get vpHeight() {
    return this.information.height;
  }

  set device(value) {
    this.information.device = value;
  }

  get device() {
    return this.information.device;
  }

  get mediaType() {
    if (false) {}

    return true;
  }

  get isDesktop() {
    return this.mediaType === 'desktop';
  }

  get isTablet() {
    return this.mediaType === 'tablet';
  }

  get isMobile() {
    return this.mediaType === 'mobile';
  }

  get isPc() {
    if (false) {}

    return true;
  }

  get isIE() {
    if (false) {}

    return true;
  }

}

/* harmony default export */ var viewport = (new viewport_Viewport());
// CONCATENATED MODULE: ./plugins/globalComposition.js


/* harmony default export */ var globalComposition = (function (context, inject) {
  Object(runtime["globalPlugin"])(context, inject);
  Object(runtime["onGlobalSetup"])((props, context) => {
    const vp = Object(runtime["ref"])(viewport);
    const viewportInfo = Object(runtime["computed"])(() => vp.value.info);
    Object(runtime["onBeforeUnmount"])(() => {
      vp.value.destroy();
    });
    Object(runtime["provide"])('viewportInfo', viewportInfo);
  });
});
// CONCATENATED MODULE: ./.nuxt/composition-api/meta.mjs

/* harmony default export */ var meta = (runtime["setMetaPlugin"]);
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./composition-api/plugin.mjs (mode: 'all')

 // Source: ./google-gtag.js (mode: 'client')

 // Source: ./wp.js (mode: 'all')

 // Source: ./webfontloader.js (mode: 'client')

 // Source: ./portal-vue.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')

 // Source: ./nuxt-svg-sprite.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ../plugins/directives/index (mode: 'client')

 // Source: ../plugins/prototype/index (mode: 'client')

 // Source: ../plugins/svgSupportIE (mode: 'client')

 // Source: ../plugins/lazyLoad (mode: 'client')

 // Source: ../plugins/router (mode: 'all')

 // Source: ../plugins/globalComposition (mode: 'all')

 // Source: ../plugins/gsap (mode: 'client')

 // Source: ./composition-api/meta.mjs (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "CRIT-AADE",
      "htmlAttrs": {
        "lang": "zh"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "http-equiv": "Content-Type",
        "content": "text\u002Fhtml; charset=UTF-8"
      }, {
        "http-equiv": "X-UA-Compatible",
        "content": "IE=edge"
      }, {
        "http-equiv": "x-dns-prefetch-control",
        "content": "on"
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }, {
        "name": "apple-mobile-web-app-capable",
        "content": "yes"
      }, {
        "property": "og:locale",
        "content": "en"
      }, {
        "property": "og:type",
        "content": "website"
      }, {
        "hid": "description",
        "name": "description",
        "content": "CRIT-AADE"
      }, {
        "hid": "og:title",
        "property": "og:title",
        "content": "CRIT-AADE"
      }, {
        "hid": "og:description",
        "property": "og:description",
        "content": "CRIT-AADE"
      }, {
        "hid": "og:url",
        "property": "og:url",
        "content": "https:\u002F\u002Faade.blockstudio.tw\u002Fen"
      }, {
        "hid": "og:site_name",
        "property": "og:site_name",
        "content": "CRIT-AADE"
      }, {
        "property": "og:image:width",
        "content": "1200"
      }, {
        "property": "og:image:height",
        "content": "630"
      }, {
        "hid": "og:image",
        "property": "og:image",
        "content": "https:\u002F\u002Faade.blockstudio.tw\u002Fen\u002Fog_img.jpg"
      }, {
        "hid": "og:image:alt",
        "property": "og:image:alt",
        "content": "CRIT-AADE"
      }, {
        "name": "twitter:card",
        "content": "summary_large_image"
      }, {
        "hid": "twitter:description",
        "name": "twitter:description",
        "content": "CRIT-AADE"
      }, {
        "hid": "twitter:title",
        "name": "twitter:title",
        "content": "CRIT-AADE"
      }, {
        "hid": "twitter:image",
        "name": "twitter:image",
        "content": "https:\u002F\u002Faade.blockstudio.tw\u002Fen\u002Fog_img.jpg"
      }, {
        "hid": "name",
        "itemprop": "name",
        "content": "CRIT-AADE"
      }, {
        "itemprop": "description",
        "content": "CRIT-AADE"
      }, {
        "hid": "image",
        "itemprop": "image",
        "content": "https:\u002F\u002Faade.blockstudio.tw\u002Fen\u002Fog_img.jpg"
      }, {
        "name": "googlebot",
        "content": "noindex"
      }, {
        "name": "robots",
        "content": "noindex"
      }],
      "script": [{
        "type": "text\u002Fjavascript",
        "src": "https:\u002F\u002Fmaps.googleapis.com\u002Fmaps\u002Fapi\u002Fjs?key=AIzaSyCgIk4clBMum-qHRyZMX9Z_eU5WHX4fUO0",
        "body": true
      }, {
        "src": "https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=G-RWC5B02HW2",
        "async": true
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "favicon.ico"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


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
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof composition_api_plugin === 'function') {
    await composition_api_plugin(app.context, inject);
  }

  if (false) {}

  if (typeof _nuxt_wp === 'function') {
    await _nuxt_wp(app.context, inject);
  }

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/portal-vue.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/portal-vue.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }

  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-svg-sprite.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-svg-sprite.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (false) {}

  if (false) {}

  if (typeof plugins_router === 'function') {
    await plugins_router(app.context, inject);
  }

  if (typeof globalComposition === 'function') {
    await globalComposition(app.context, inject);
  }

  if (false) {}

  if (typeof meta === 'function') {
    await meta(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = ["nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading/Ajax.vue?vue&type=template&id=c7e82e92&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"loading"},on:{"afterLeave":_vm.loadingDone}},[_c('div',{directives:[{name:"lock",rawName:"v-lock",value:(_vm.loadingConfig.type === 'ajax' && _vm.isLoading),expression:"loadingConfig.type === 'ajax' && isLoading"}],ref:"ajax",staticClass:"loading-ajax"},[_c('div',{staticClass:"o-index-opening"},[_c('div',{staticClass:"o-index-opening__bg"}),_vm._v(" "),_c('div',{staticClass:"o-index-opening__deco__deco-1"},[_c('img',{attrs:{"src":__webpack_require__(72),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"o-index-opening__deco__deco-2"},[_c('img',{attrs:{"src":__webpack_require__(73),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"o-index-opening__deco__deco-3"},[_c('img',{attrs:{"src":__webpack_require__(74),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"o-index-opening__main"},[_c('div',{staticClass:"o-index-opening__poly"},[_c('svg',{staticClass:"o-index-opening__full-poly",attrs:{"width":"522","height":"602","viewBox":"0 0 522 602","fill":"none","xmlns":"https://www.w3.org/2000/svg"}},[_c('polygon',{staticClass:"o-index-opening__full-poly__full",attrs:{"opacity":"1","points":"261,3 519,153 519,451 261,599 3,451 3,153","stroke":"white","stroke-width":"6"}}),_vm._v(" "),_c('polygon',{staticClass:"o-index-opening__full-poly__right",attrs:{"opacity":"0","points":"261,3 519,153 519,451 261,599","stroke":"white","stroke-width":"6"}}),_vm._v(" "),_c('polyline',{staticClass:"o-index-opening__full-poly__left",attrs:{"points":"261,0 3,153 3,451 261,602","stroke":"white","stroke-width":"1"}}),_vm._v(" "),_c('line',{staticClass:"o-index-opening__full-poly__center",attrs:{"x1":"261","x2":"261","y1":"3","y2":"5","stroke":"white","stroke-width":"6"}})]),_vm._v(" "),_c('div',{staticClass:"o-index-opening__half-poly -left"}),_vm._v(" "),_c('div',{staticClass:"o-index-opening__back"},[_c('div',{staticClass:"o-index-opening__back__line-1"}),_vm._v(" "),_c('div',{staticClass:"o-index-opening__back__line-2"})])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Loading/Ajax.vue?vue&type=template&id=c7e82e92&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(10);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading/Ajax.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Ajaxvue_type_script_lang_js_ = ({
  name: 'LoadingAjax',
  computed: {
    loadingConfig() {
      return this.$store.state.loadingConfig;
    },

    isLoading() {
      return this.$store.getters.isLoading;
    }

  },

  created() {
    this.$store.commit('CHANGE_LOADING_TYPE', 'LOADING_TYPE_AJAX');
  },

  mounted() {
    this.$refs.ajax.classList.add('start-animation');
    external_gsap_default.a.fromTo('.o-index-opening__full-poly line', {
      attr: {
        y2: 5
      }
    }, {
      attr: {
        y2: 595
      }
    });
    external_gsap_default.a.set('.o-index-opening__full-poly__full', {
      attr: {
        opacity: 0
      },
      delay: 0.8
    });
    external_gsap_default.a.set('.o-index-opening__full-poly__right', {
      attr: {
        opacity: 1
      },
      delay: 0.8
    });
    setTimeout(() => {
      this.$store.dispatch('WAIT_LOADING');
    }, 800);
  },

  methods: {
    loadingDone() {
      this.$store.commit('CHANGE_LOADING_TYPE', 'LOADING_TYPE_DEFAULT');
    }

  }
});
// CONCATENATED MODULE: ./components/Loading/Ajax.vue?vue&type=script&lang=js&
 /* harmony default export */ var Loading_Ajaxvue_type_script_lang_js_ = (Ajaxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Loading/Ajax.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Loading_Ajaxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "52bc29c0"
  
)

/* harmony default export */ var Ajax = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading/Default.vue?vue&type=template&id=56bc2d7c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"loading"},on:{"afterLeave":_vm.loadingDone}},[_c('div',{directives:[{name:"lock",rawName:"v-lock",value:(_vm.loadingConfig.type === 'default' && _vm.isLoading),expression:"loadingConfig.type === 'default' && isLoading"}],staticClass:"loading-default"},[_c('div',{staticClass:"o-loading"},[_c('div',{staticClass:"o-loading__icon"},[_c('div',{staticClass:"o-loading__icon-line"}),_vm._v(" "),_c('div',{staticClass:"o-loading__icon-line"}),_vm._v(" "),_c('div',{staticClass:"o-loading__icon-line"})])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Loading/Default.vue?vue&type=template&id=56bc2d7c&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.js
var runtime = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading/Default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Defaultvue_type_script_lang_js_ = ({
  name: 'LoadingDefault',

  setup(props, context) {
    const store = Object(runtime["useStore"])();
    const loadingConfig = Object(runtime["computed"])(() => store.state.loadingConfig);
    const isLoading = Object(runtime["computed"])(() => store.getters.isLoading);

    const loadingDone = () => {};

    return {
      loadingConfig,
      isLoading,
      loadingDone
    };
  }

});
// CONCATENATED MODULE: ./components/Loading/Default.vue?vue&type=script&lang=js&
 /* harmony default export */ var Loading_Defaultvue_type_script_lang_js_ = (Defaultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Loading/Default.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Loading_Defaultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1abd2e51"
  
)

/* harmony default export */ var Default = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=2c317556&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"header",staticClass:"header"},[_vm._ssrNode("<div"+(_vm._ssrClass("header__logo",{hidden : _vm.hiddenLogo}))+">","</div>",[_c('nuxt-link',{attrs:{"to":"/","title":"美感教育"}},[_c('img',{attrs:{"src":__webpack_require__(100),"alt":"美感教育 Logo"}}),_vm._v(" "),_c('img',{attrs:{"src":__webpack_require__(39),"alt":"美感教育 Logo"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<nav class=\"header__nav\">","</nav>",[_c('MainMenu',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showSearchField),expression:"!showSearchField"}],staticClass:"header__nav-main",attrs:{"data":_vm.main_menu}}),_vm._ssrNode(" <ul class=\"header__nav-external\"><li class=\"header__nav-external-item\"><a href=\"https://aade.project.edu.tw/annetimes/\" target=\"_blank\" title=\"The Anne Times\" class=\"header__nav-link\">\n                    The Anne Times\n                    <img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt=\"Go To The Anne Times\" class=\"back-top__icon\"></a></li> <li class=\"header__nav-external-item\"><a href=\"https://aade.project.edu.tw/\" target=\"_blank\" title=\"中文版\" class=\"header__nav-link\">\n                    中文版\n                </a></li></ul> "),_vm._ssrNode("<div class=\"header__nav-search\">","</div>",[_vm._ssrNode("<button type=\"button\"><img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt=\"搜尋\" class=\"header__nav-search-icon\"></button> "),_c('transition',{attrs:{"name":"header__nav-search-field"}},[_c('input',{directives:[{name:"show",rawName:"v-show",value:(_vm.showSearchField),expression:"showSearchField"},{name:"model",rawName:"v-model",value:(_vm.searchValue),expression:"searchValue"}],staticClass:"header__nav-search-field",attrs:{"type":"text","placeholder":"search here","title":"Search"},domProps:{"value":(_vm.searchValue)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.sendSearch($event)},"input":function($event){if($event.target.composing){ return; }_vm.searchValue=$event.target.value}}})])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"header__btn-group\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("header__nav-search",{ active: _vm.showSearchField }))+">","</div>",[_vm._ssrNode("<button type=\"button\"><img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt=\"搜尋\" class=\"header__nav-search-icon\"></button> "),_c('transition',{attrs:{"name":"header__nav-search-field"}},[_c('input',{directives:[{name:"show",rawName:"v-show",value:(_vm.showSearchField),expression:"showSearchField"},{name:"model",rawName:"v-model",value:(_vm.searchValue),expression:"searchValue"}],staticClass:"header__nav-search-field",attrs:{"type":"text","placeholder":"search here","title":"Search"},domProps:{"value":(_vm.searchValue)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.sendSearch($event)},"input":function($event){if($event.target.composing){ return; }_vm.searchValue=$event.target.value}}})])],2),_vm._ssrNode(" <button type=\"button\" class=\"header__nav-menu-button\"><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt=\"麵包選單\" class=\"header__nav-menu-button-icon\"></button>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=2c317556&

// EXTERNAL MODULE: ./components/MainMenu.vue + 4 modules
var MainMenu = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: 'Header',
  components: {
    MainMenu: MainMenu["default"]
  },

  data() {
    return {
      showSearchField: false,
      searchValue: null,
      main_menu: this.$store.state.globalOptions.main_menu
    };
  },

  computed: {
    hiddenLogo() {
      if (false) {}

      return false;
    }

  },

  mounted() {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 80) {
        this.$refs.header.classList.add('header-bg');
      } else {
        this.$refs.header.classList.remove('header-bg');
      }
    });
  },

  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },

    sendSearch() {
      if (this.searchValue) this.$router.push(`/search?s=${this.searchValue}`);
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(104)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5c7e4fda"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MainMenu: __webpack_require__(11).default})


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Menu.vue?vue&type=template&id=2225f2a5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"menu"},[_vm._ssrNode("<button type=\"button\" aria-label=\"Close Menu\" class=\"menu__close-button\" data-v-2225f2a5><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\" data-v-2225f2a5><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.1465 11.8536L3 3.70711L3.70711 3L11.8536 11.1465L19.9706 3.02944L20.6777 3.73654L12.5607 11.8536L20.6777 19.9706L19.9706 20.6777L11.8536 12.5607L3.70718 20.7071L3.00008 20L11.1465 11.8536Z\" fill=\"#333333\" fill-opacity=\"0.5\" data-v-2225f2a5></path></svg></button> "),_vm._ssrNode("<div class=\"container\" data-v-2225f2a5>","</div>",[_vm._ssrNode("<ul class=\"menu__main\" data-v-2225f2a5>","</ul>",[_vm._ssrNode("<li class=\"menu__main-item\" data-v-2225f2a5>","</li>",[_c('nuxt-link',{staticClass:"menu__main-item-link",attrs:{"to":"/introduction"},nativeOn:{"click":function($event){return _vm.closeMenuLater($event)}}},[_vm._v("\n                    Introduction\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu__main-item\" data-v-2225f2a5>","</li>",[_c('nuxt-link',{staticClass:"menu__main-item-link",attrs:{"to":"/projects"},nativeOn:{"click":function($event){return _vm.closeMenuLater($event)}}},[_vm._v("\n                    Education Projects\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu__main-item\" data-v-2225f2a5>","</li>",[_c('nuxt-link',{staticClass:"menu__main-item-link",attrs:{"to":"/courses"},nativeOn:{"click":function($event){return _vm.closeMenuLater($event)}}},[_vm._v("\n                    Selected Courses\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu__main-item\" data-v-2225f2a5>","</li>",[_c('nuxt-link',{staticClass:"menu__main-item-link",attrs:{"to":"/contact"},nativeOn:{"click":function($event){return _vm.closeMenuLater($event)}}},[_vm._v("\n                    Contact Us\n                ")])],1)],2),_vm._ssrNode(" <ul class=\"menu__external\" data-v-2225f2a5><li class=\"menu__external-item\" data-v-2225f2a5><a href=\"https://anne-time.blockstudio.tw/\" target=\"_blank\" title=\"The Anne Times\" class=\"menu__external-item-link\" data-v-2225f2a5>\n                    The Anne Times\n                    <img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt=\"Go To The Anne Times\" class=\"back-top__icon\" data-v-2225f2a5></a></li> <li class=\"menu__external-item\" data-v-2225f2a5><a href=\"https://www.aade.org.tw/\" target=\"_blank\" title=\"中文版\" class=\"menu__external-item-link\" data-v-2225f2a5>\n                    中文版\n                </a></li></ul>")],2),_vm._ssrNode(" <ul class=\"menu__footer\" data-v-2225f2a5><li class=\"menu__footer-item\" data-v-2225f2a5><span class=\"menu__footer-item-label\" data-v-2225f2a5>Tel</span>"+_vm._ssrEscape("\n            "+_vm._s(_vm.options.contact.tel)+"\n        ")+"</li> <li class=\"menu__footer-item\" data-v-2225f2a5><span class=\"menu__footer-item-label\" data-v-2225f2a5>E-mail</span>"+_vm._ssrEscape("\n            "+_vm._s(_vm.options.contact.email)+"\n        ")+"</li></ul>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Menu.vue?vue&type=template&id=2225f2a5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Menu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Menuvue_type_script_lang_js_ = ({
  data() {
    return this.$store.state.globalOptions;
  },

  methods: {
    closeMenuLater() {
      setTimeout(() => {
        this.$emit('closeMenu');
      }, 600);
    }

  }
});
// CONCATENATED MODULE: ./components/Menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Menuvue_type_script_lang_js_ = (Menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Menu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(106)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2225f2a5",
  "673d92ec"
  
)

/* harmony default export */ var Menu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=439ecac8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_vm._ssrNode("<div class=\"footer__mobile\"><h5 class=\"footer__mobile-title\"><span>"+_vm._ssrEscape(_vm._s(_vm.options.contact.plan_name))+"</span></h5> <ul class=\"footer__mobile-info\"><li class=\"footer__mobile-info-item\"><span class=\"footer__mobile-info-item-label\">Tel</span>"+_vm._ssrEscape("\n                "+_vm._s(_vm.options.contact.tel)+"\n            ")+"</li> <li class=\"footer__mobile-info-item\"><span class=\"footer__mobile-info-item-label\">E-mail</span>"+_vm._ssrEscape("\n                "+_vm._s(_vm.options.contact.email)+"\n            ")+"</li> <li class=\"footer__mobile-info-item address\"><span>"+_vm._ssrEscape(_vm._s(_vm.options.contact.address))+"</span></li></ul> <hr class=\"footer__mobile-hr\"> <div class=\"footer__mobile__btn-group\"><a"+(_vm._ssrAttr("href",_vm.options.social_link.facebook))+" title=\"[另開新視窗]美感教育粉絲專頁頁連結\" target=\"_blank\" class=\"footer__fb\"><span class=\"footer__mobile__btn-hidden-text\">[另開新視窗]美感教育粉絲專頁頁連結</span> <svg width=\"11\" height=\"23\" viewBox=\"0 0 11 23\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.0833 7.61604H6.64975V5.33265C6.64975 4.47513 7.20989 4.27521 7.60428 4.27521H10.0276V0.50585L6.69018 0.492188C2.98529 0.492188 2.14217 3.30384 2.14217 5.10313V7.61604H0V11.5002H2.14217V22.4922H6.64975V11.5002H10.0833V7.61604Z\" fill=\"#4A4A4A\"></path></svg></a> <a"+(_vm._ssrAttr("href",_vm.options.social_link.youtube))+" title=\"[另開新視窗]美感教育YouTube影片連結\" target=\"_blank\" class=\"footer__yt\"><span class=\"footer__mobile__btn-hidden-text\">[另開新視窗]美感教育YouTube影片連結</span> <svg width=\"22\" height=\"16\" viewBox=\"0 0 22 16\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.7417 0.790271C19.8638 0.916229 20.7959 1.76061 21.0583 2.90512C21.4286 4.52173 21.4286 6.2852 21.4286 7.95124V7.9923C21.4286 9.67018 21.4272 11.4491 21.0536 13.079C20.7913 14.2235 19.8589 15.0679 18.7375 15.1939C16.0807 15.492 13.3916 15.4936 10.7135 15.492C8.03591 15.4936 5.34614 15.492 2.68911 15.1939C1.56697 15.0677 0.635281 14.2233 0.373382 13.079C0 11.4494 0 9.6704 0 7.9923C0 6.3142 0.00420277 4.53501 0.377585 2.90512C0.639926 1.76061 1.57139 0.916229 2.69287 0.790271C5.35012 0.492371 8.04011 0.490816 10.7177 0.492371C13.3949 0.490816 16.0844 0.492371 18.7417 0.790271ZM7.9502 4.21555V11.3325C8.90647 10.8345 9.85922 10.3384 10.8115 9.84255C12.1268 9.15772 13.4411 8.47335 14.7627 7.78501L7.9502 4.21555Z\" fill=\"#4A4A4A\"></path></svg></a> <button type=\"button\" aria-label=\"goTop\" class=\"footer__back-top\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\" class=\"footer__back-top-icon\"><path d=\"M19.5 15.5L12 9.5L4.5 15.5\" stroke=\"#333333\"></path></svg></button></div> <p class=\"footer__mobile-copyright\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.options.copyright)+"\n        ")+"</p></div> "),_vm._ssrNode("<div class=\"footer__top\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt=\"美感教育 Logo\" class=\"footer__logo\"> <div class=\"footer__info\"><h2 class=\"footer__info-title\"><span>"+_vm._ssrEscape(_vm._s(_vm.options.contact.plan_name))+"</span></h2> <ul class=\"footer__info-list\"><li class=\"footer__info-list-item\"><span class=\"footer__info-list-item-label\">Tel</span>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.options.contact.tel)+"\n                ")+"</li> <li class=\"footer__info-list-item\"><span class=\"footer__info-list-item-label\">E-mail</span>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.options.contact.email)+"\n                ")+"</li> <li class=\"footer__info-list-item address\"><span>"+_vm._ssrEscape(_vm._s(_vm.options.contact.address))+"</span></li></ul></div> "),_c('MainMenu',{staticClass:"footer__menu",attrs:{"data":_vm.main_menu}})],2),_vm._ssrNode(" <div class=\"footer__bottom\"><ul class=\"footer__social-link\"><li class=\"footer__social-link-item\"><a"+(_vm._ssrAttr("href",_vm.options.social_link.facebook))+" title=\"[另開新視窗]美感教育粉絲專頁頁連結\" target=\"_blank\"><span class=\"footer__social-link-item-hidden-text\">[另開新視窗]美感教育粉絲專頁頁連結</span> <img"+(_vm._ssrAttr("src",__webpack_require__(108)))+" alt=\"Facebook\"></a></li> <li class=\"footer__social-link-item\"><a"+(_vm._ssrAttr("href",_vm.options.social_link.youtube))+" title=\"[另開新視窗]美感教育YouTube影片連結\" target=\"_blank\"><span class=\"footer__social-link-item-hidden-text\">[另開新視窗]美感教育YouTube影片連結</span> <img"+(_vm._ssrAttr("src",__webpack_require__(109)))+" alt=\"YouTube\"></a></li></ul> <p class=\"footer__copyright\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.options.copyright)+"\n        ")+"</p> <button type=\"button\" aria-label=\"goTop\" class=\"footer__back-top\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\" class=\"footer__back-top-icon\"><path d=\"M19.5 15.5L12 9.5L4.5 15.5\" stroke=\"#333333\"></path></svg></button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=439ecac8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: 'Footer',

  data() {
    return this.$store.state.globalOptions;
  },

  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(110)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3b4bebe8"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MainMenu: __webpack_require__(11).default})


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("imagesloaded");

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("devalue");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map