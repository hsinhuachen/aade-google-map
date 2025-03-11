exports.ids = [37,18];
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

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6d409563", content, true, context)
};

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_22b20c29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_22b20c29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_22b20c29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_22b20c29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_22b20c29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".article-card[data-v-22b20c29]{display:flex;width:100%;color:#333}@media(min-width:768px){.article-card[data-v-22b20c29]{display:block}}.article-card__image-link[data-v-22b20c29]{margin-right:16px;width:112px;height:112px}@media(min-width:768px){.article-card__image-link[data-v-22b20c29]{position:relative;display:block;margin-right:0;margin-bottom:12px;padding-bottom:100%;width:100%}}.article-card__image-img[data-v-22b20c29]{width:100%;height:100%;opacity:1;transition:opacity .5s;-o-object-fit:cover;object-fit:cover}@media(min-width:768px){.article-card__image-img[data-v-22b20c29]{position:absolute;top:0;left:0}}.article-card__image-img[data-v-22b20c29]:hover{opacity:.5}.article-card__text[data-v-22b20c29]{flex:1 0 0}.article-card__data[data-v-22b20c29]{display:flex;opacity:.6;margin-bottom:8px}.article-card__data-item[data-v-22b20c29]:not(:last-child):after{content:\"|\";display:inline-block;margin-right:8px;margin-left:8px}.article-card__title[data-v-22b20c29]{font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px;margin-bottom:8px;opacity:1;transition:opacity .5s}@media(min-width:1200px){.article-card__title[data-v-22b20c29]{margin-bottom:12px}}.article-card__title[data-v-22b20c29]:hover{opacity:.5}.article-card__content[data-v-22b20c29]{display:none}@media(min-width:1200px){.article-card__content[data-v-22b20c29]{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:3;font-weight:400;text-overflow:ellipsis;opacity:.8}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card/ArticleCard.vue?vue&type=template&id=22b20c29&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-card"},[_c('nuxt-link',{staticClass:"article-card__image-link",attrs:{"to":("/" + (_vm.data.post_url)),"title":"READ"}},[_c('img',{staticClass:"article-card__image-img",attrs:{"src":_vm.data.post_image.url,"alt":_vm.data.post_title}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"article-card__text\" data-v-22b20c29>","</div>",[_vm._ssrNode("<ul class=\"article-card__data\" data-v-22b20c29>"+(_vm._ssrList((_vm.data.post_category),function(cat){return ("<li class=\"article-card__data-item\" data-v-22b20c29><span data-v-22b20c29>"+_vm._ssrEscape(_vm._s(_vm.capitalizeFirstLetter(cat.slug)))+"</span></li>")}))+"</ul> "),_vm._ssrNode("<h3 class=\"article-card__title\" data-v-22b20c29>","</h3>",[_c('nuxt-link',{attrs:{"to":("/" + (_vm.data.post_url)),"title":_vm.data.post_title}},[_vm._v("\n                "+_vm._s(_vm.data.post_title)+"\n            ")])],1),_vm._ssrNode(" <div class=\"article-card__content\" data-v-22b20c29>"+(_vm._s(_vm.data.post_content))+"</div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Card/ArticleCard.vue?vue&type=template&id=22b20c29&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card/ArticleCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ArticleCardvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,

      default() {
        return {};
      }

    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      return (string === null || string === void 0 ? void 0 : string.toLowerCase().charAt(0).toUpperCase()) + (string === null || string === void 0 ? void 0 : string.slice(1));
    }

  }
});
// CONCATENATED MODULE: ./components/Card/ArticleCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_ArticleCardvue_type_script_lang_js_ = (ArticleCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Card/ArticleCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_ArticleCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "22b20c29",
  "6b0e5a94"
  
)

/* harmony default export */ var ArticleCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNSA2LjVIMTIuNVY1LjVIMC41VjYuNVpNNyAxMlYwSDZWMTJIN1oiIGZpbGw9IiMzMzMzMzMiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(250);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2d5b39a0", content, true, context)
};

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(211);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".search{padding-top:118px}.search__info{margin-bottom:40px;display:flex;align-items:flex-end}.search__info__title{margin-right:40px;font-size:32px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.search__info__title{font-size:48px}}.search__info__keyword{padding-bottom:9px;font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.search__info__keyword{font-size:18px}}.search__info__keyword span{color:rgba(51,51,51,.6)}@media(min-width:1200px){.search{padding-top:73px}}.search__articles{display:flex;flex-wrap:wrap;margin:0 -12px}.search__articles-item{margin-bottom:72px;width:100%}@media(min-width:1200px){.search__articles-item{padding:0 12px;width:25%}}.search__button{text-align:center;opacity:.5;margin-bottom:80px}@media(min-width:1200px){.search__button{margin-bottom:160px}}.search__button.disable{opacity:0;pointer-events:none;transition:opacity .3s}.search .button{font-size:14px;font-weight:500;line-height:1.5;padding:12px 72px;color:rgba(51,51,51,.5);background-color:#f0f0f0;opacity:1;transition:opacity .5s;letter-spacing:.5px}.search .button:hover{opacity:.5}.search .button img{margin-bottom:4px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=template&id=0bb8431e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_vm._ssrNode("<div class=\"search__info container\"><h1 class=\"search__info__title\">\n            Search Results\n        </h1> <h4 class=\"search__info__keyword\">"+((_vm.$route.query.s)?("<span>\n                Keyword:\n            </span>"):"<!---->")+_vm._ssrEscape("\n            "+_vm._s(_vm.$route.query.s || 'Please enter keyword.')+"\n        ")+"</h4></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[(_vm.currentPosts.length>0)?_vm._ssrNode("<ul class=\"search__articles\">","</ul>",_vm._l((_vm.currentPosts),function(item){return _vm._ssrNode("<li class=\"search__articles-item\">","</li>",[_c('ArticleCard',{attrs:{"data":item}})],1)}),0):_vm._ssrNode(("<p class=\"search__none-result\">\n            No search result.\n        </p>")),_vm._ssrNode(" <div"+(_vm._ssrClass("search__button",{disable: _vm.currentPosts.length === _vm.totalPosts.length}))+"><button type=\"button\" class=\"button\">\n                SEE MORE <img"+(_vm._ssrAttr("src",__webpack_require__(151)))+" alt=\"SEE MORE\"></button></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/search.vue?vue&type=template&id=0bb8431e&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(10);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(7);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./components/Card/ArticleCard.vue + 4 modules
var ArticleCard = __webpack_require__(139);

// EXTERNAL MODULE: ./compositions/functions.js
var functions = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const {
  loadImage
} = Object(functions["a" /* default */])();
/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  components: {
    ArticleCard: ArticleCard["default"]
  },

  async asyncData({
    $config,
    $axios,
    route
  }) {
    const {
      data
    } = await $axios.$get(`${$config.APP_BACKEND_API}/wp-json/api/search?s=${route.query.s}`);
    const totalPosts = data;
    const currentPosts = totalPosts.slice(0, 12);
    const totalPage = Math.ceil(data.length / 12);
    return {
      data,
      currentPosts,
      totalPosts,
      totalPage
    };
  },

  data() {
    return {
      currentPosts: [],
      totalPosts: [],
      currentPage: 1,
      totalPage: 0
    };
  },

  head() {
    return {
      title: this.$route.query.s ? this.$route.query.s : 'Search'
    };
  },

  watch: {
    $route() {
      this.reSearch();
    }

  },

  mounted() {
    this.$store.dispatch('ADD_LOADING_STACK', loadImage());
    this.$store.dispatch('WAIT_LOADING');
    this.gsapInit();
  },

  methods: {
    updatePage() {
      this.currentPage += 1;
      const prevPostsLength = this.currentPosts.length;
      const newPosts = this.totalPosts.slice((this.currentPage - 1) * 12, (this.currentPage - 1) * 12 + 12);
      this.currentPosts.push(...newPosts);
      this.$nextTick(function () {
        const els = external_gsap_default.a.utils.toArray('.search__articles-item').slice(prevPostsLength);
        external_gsap_default.a.fromTo(els, {
          y: 30,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          stagger: 0.2
        });
      });
    },

    gsapInit() {
      external_gsap_default.a.fromTo('.search__info', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.search__none-result', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.search__articles-item', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.2
      }).delay(1.3);
    },

    async reSearch() {
      const res = await external_axios_default.a.get(`${this.$config.APP_BACKEND_API}/wp-json/api/search?s=${this.$route.query.s}`);
      const data = res.data.data;
      this.totalPosts = data;
      this.currentPosts = this.totalPosts.slice(0, 12);
      this.totalPage = Math.ceil(data.length / 12);
      this.$nextTick(function () {
        const els = external_gsap_default.a.utils.toArray('.search__articles-item');
        external_gsap_default.a.fromTo(els, {
          y: 30,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          stagger: 0.2
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/search.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(249)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "47e90522"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=search.js.map