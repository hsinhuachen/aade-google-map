exports.ids = [26];
exports.modules = {

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (() => {
  const loadImage = () => {
    return new Promise(resolve => {
      new imagesloaded__WEBPACK_IMPORTED_MODULE_0___default.a('#__nuxt', {
        background: true
      }, instance => {
        resolve();
      });
    });
  };

  return {
    loadImage
  };
});

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWpApi; });
// https://www.npmjs.com/package/wp-nuxt
// https://github.com/WP-API/node-wpapi

/**
 * 簡易說明：
 * - 使用 $wp 後會回傳整理好的functions介面
 * - "一定"要先選擇使用要查詢的post type function，才能使用它回傳的functions
 * -- ex. $wp.news().get(), $wp.pages().get()
*/

/**
 * 新增一個 post type
 * 1. 在後台新增一個 post type，設定 name
 * 2. 在 /config/wp-nuxt 新增對應name路由
 * 3. 使用 $wp[name]().perPage().get()
*/

/**
 * Page List 取得所有頁面: 以前的 page_list，以 slug 為 key。</wp-json/wp/v2/pages>
 */
async function getPages() {
  const pageList = await this.wp.pages().param('lang', this.lang).get();
  const pages = {};
  pageList.forEach(page => {
    const {
      id,
      slug,
      parent,
      title: {
        rendered: title
      }
    } = page;
    pages[slug] = {
      id,
      slug,
      parent,
      title
    };
  });
  return pages;
}
/**
 * PHP 的 get_fields：自定義API </fields?s=$QUERY> /config/wp-nuxt.js
 * @param {*} query 查詢參數 https://www.advancedcustomfields.com/resources/get_fields/
 * @returns {Promise}
 */


async function getPageFieldsById(id) {
  return await this.wp.fields().param('lang', this.lang).s(id);
}
/**
 * Archive 頁面 acf ex. get_fields('news_options')
 * @param {*} postType 後台設定的 Post type 內的 name，可取得列表ACF。可翻wp_options發現
 * @returns {Promise}
 */


async function getArchiveFields(postType) {
  return await this.wp.fields().param('lang', this.lang).s(`${postType}_options`);
}
/**
 * News Category 最新消息類別列表
 * @returns {Promise}
 */


async function getCategoryNews() {
  return await this.wp['cat-news']().param('lang', this.lang);
}
/**
 * Archive 取得 Posts
 * @param {*} postType 後台設定的 Post type 內的 name
 * @param {*} query 查詢參數
 * @returns {Promise}
 */


async function getPosts(postType, query = {}) {
  const {
    perPage = 8,
    page = 1 // catNews = null

  } = query; // ex. this.wp.news().get()
  // cat-news 為自訂分類名稱 .param('cat-news', catNews)

  return await this.wp[postType]().param('lang', this.lang).perPage(perPage).page(page);
}
/**
 * 傳入 $wp 與 locale
 * @param {*} context $wp, i18n.locale
 * @returns object functions
 */


function useWpApi(context) {
  return {
    getPages: getPages.bind(context),
    getPageFieldsById: getPageFieldsById.bind(context),
    getArchiveFields: getArchiveFields.bind(context),
    getPosts: getPosts.bind(context),
    getCategoryNews: getCategoryNews.bind(context)
  };
}

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"zh":{"about":"關於我們"},"en":{"about":"About"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("46c868e2", content, true, context)
};

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-about{display:grid;width:100%;height:100vh;align-items:center;justify-items:center;place-items:center}.page-about .container{text-align:center}.page-about__title{font-size:24px;font-weight:700;line-height:normal;letter-spacing:.5px;color:#35495e;margin-bottom:20px}@media(min-width:1200px){.page-about__title{font-size:40px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=5923d15a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-about"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.$t('about')))+"</h1> "),_c('nuxt-link',{staticClass:"button--grey",attrs:{"to":_vm.localePath('/', _vm.$i18n.locale)}},[_vm._v("\n            Back\n        ")])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=5923d15a&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.js
var runtime = __webpack_require__(3);

// EXTERNAL MODULE: ./compositions/functions.js
var functions = __webpack_require__(130);

// EXTERNAL MODULE: ./compositions/wp.js
var wp = __webpack_require__(149);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  name: 'PageAbout',
  meta: {
    loading: true
  },

  setup() {
    const fields = Object(runtime["ref"])('');
    const store = Object(runtime["useStore"])();
    const {
      loadImage
    } = Object(functions["a" /* default */])();

    if (true) {
      // 如果是客戶端，就不用載入資料
      const {
        $wp,
        i18n
      } = Object(runtime["useContext"])();
      const {
        getPageFieldsById
      } = Object(wp["a" /* useWpApi */])({
        wp: $wp,
        lang: i18n.locale
      });
      const {
        fetch
      } = Object(runtime["useFetch"])(async () => {
        fields.value = await getPageFieldsById(store.state.pageList.about.id);
      });
      fetch();
    }

    Object(runtime["onMounted"])(() => {
      store.dispatch('ADD_LOADING_STACK', loadImage());
    });
    return {
      fields
    };
  },

  head() {
    const i18nSeo = this.$nuxtI18nHead({
      addSeoAttributes: true
    });
    const seo = this.fields.seo || {};
    return {
      title: seo === null || seo === void 0 ? void 0 : seo.title,
      htmlAttrs: { ...i18nSeo.htmlAttrs
      },
      meta: [{
        hid: 'og:title',
        property: 'og:title',
        content: seo === null || seo === void 0 ? void 0 : seo.title
      }, {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: seo === null || seo === void 0 ? void 0 : seo.title
      }, {
        hid: 'name',
        itemprop: 'name',
        content: seo === null || seo === void 0 ? void 0 : seo.title
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: seo === null || seo === void 0 ? void 0 : seo.title
      }, {
        hid: 'description',
        name: 'description',
        content: seo === null || seo === void 0 ? void 0 : seo.desc
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: seo === null || seo === void 0 ? void 0 : seo.desc
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: seo === null || seo === void 0 ? void 0 : seo.desc
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.APP_URL}/${this.getRouteBaseName(this.$route)}`
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: seo === null || seo === void 0 ? void 0 : seo.thumb
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: seo === null || seo === void 0 ? void 0 : seo.thumb
      }, {
        hid: 'image',
        itemprop: 'image',
        content: seo === null || seo === void 0 ? void 0 : seo.thumb
      }, ...i18nSeo.meta],
      link: [...i18nSeo.link]
    };
  },

  computed: {
    localeData() {
      return this.$t('about');
    }

  }
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// EXTERNAL MODULE: ./pages/about.vue?vue&type=custom&index=0&blockType=i18n
var aboutvue_type_custom_index_0_blockType_i18n = __webpack_require__(235);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(233)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d0f726d4"
  
)

/* custom blocks */

if (typeof aboutvue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(aboutvue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map