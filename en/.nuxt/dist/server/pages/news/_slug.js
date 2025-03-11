exports.ids = [32];
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

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(254);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1b9d3332", content, true, context)
};

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(213);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-new{display:grid;width:100%;height:100vh;align-items:center;justify-items:center;place-items:center}.page-new .container{text-align:center}.page-new__title{font-size:24px;font-weight:700;line-height:normal;letter-spacing:.5px;color:#35495e;margin-bottom:20px}@media(min-width:1200px){.page-new__title{font-size:40px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/_slug.vue?vue&type=template&id=3e445c86&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-new"},[(_vm.fields)?_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"page-new__title\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.fields.acf.seo.title)+"\n        ")+"</div> "),_c('nuxt-link',{staticClass:"button--grey",attrs:{"to":_vm.localePath('/news', _vm.$i18n.locale)}},[_vm._v("\n            Back\n        ")])],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/news/_slug.vue?vue&type=template&id=3e445c86&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.js
var runtime = __webpack_require__(3);

// EXTERNAL MODULE: ./compositions/functions.js
var functions = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: 'SingleNew',

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.route = {
        params: to.params,
        query: to.query
      };
    });
  },

  setup() {
    const route = Object(runtime["useRoute"])();
    const store = Object(runtime["useStore"])();
    const fields = Object(runtime["ref"])('');
    const {
      $wp
    } = Object(runtime["useContext"])();
    const {
      loadImage
    } = Object(functions["a" /* default */])();
    const {
      fetch
    } = Object(runtime["useFetch"])(async () => {
      // search mode
      const posts = await $wp.news().slug(route.value.params.slug);
      fields.value = posts[0];
    });
    fetch();
    Object(runtime["onMounted"])(() => {
      store.dispatch('ADD_LOADING_STACK', loadImage());
    });
    return {
      fields
    };
  },

  data() {
    return {
      route: null
    };
  },

  head() {
    var _this$fields, _this$fields$acf;

    const i18nSeo = this.$nuxtI18nHead({
      addSeoAttributes: true
    });
    const seo = (this === null || this === void 0 ? void 0 : (_this$fields = this.fields) === null || _this$fields === void 0 ? void 0 : (_this$fields$acf = _this$fields.acf) === null || _this$fields$acf === void 0 ? void 0 : _this$fields$acf.seo) || {};
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

  computed: {}
});
// CONCATENATED MODULE: ./pages/news/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var news_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/news/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(253)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "96f022d6"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map