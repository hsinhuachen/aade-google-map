exports.ids = [33,25];
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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("09c3f1d8", content, true, context)
};

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pagination{display:flex;justify-content:center;color:color(\"Gray/Light Gray\")}.pagination__link,.pagination__main{display:flex;align-items:center}.pagination__link{position:relative;padding:0 12px;transition:color .3s;cursor:pointer}@media(hover:hover){.pagination__link:hover{color:color(\"Gray/White\")}}.pagination__link a{position:absolute;top:0;left:0;opacity:0;width:100%;height:100%}.pagination__link:after,.pagination__link:before{pointer-events:none}.pagination__link.-head{margin-right:12px;padding-right:0}.pagination__link.-head:after{content:\"...\";display:block;padding-left:12px}.pagination__link.-end{margin-left:12px;padding-left:0}.pagination__link.-end:before{content:\"...\";display:block;padding-right:12px}.pagination__link.-disable{pointer-events:none}.pagination__link.-active{text-decoration:underline;color:color(\"Gray/White\");text-underline-offset:6px}.pagination__prev{margin-right:10px;padding:0 10px}.pagination__next{margin-left:10px;padding:0 10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(243);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("38972932", content, true, context)
};

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=template&id=7e731cb4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pagination"},[_vm._ssrNode("<div"+(_vm._ssrClass("pagination__prev pagination__link",{'-disable': _vm.now === 1}))+">","</div>",[_c('svg-icon',{attrs:{"name":"left"}}),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":{query: _vm.pageRouteQuery(_vm.now - 1)}}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pagination__main\">","</div>",_vm._l((_vm.list),function(item,index){return _vm._ssrNode("<div"+(_vm._ssrClass("pagination__link",{
                '-active': item === _vm.now,
                '-head': index === 0 && _vm.list[1] > 2,
                '-end': index + 1 === _vm.list.length && _vm.list[index - 1] < item - 1
            }))+">","</div>",[_vm._ssrNode(_vm._ssrEscape("\n            "+_vm._s(item)+"\n            ")),_c('nuxt-link',{attrs:{"to":{query: _vm.pageRouteQuery(item)}}})],2)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("pagination__next pagination__link",{'-disable': _vm.now === _vm.list[_vm.list.length - 1]}))+">","</div>",[_c('svg-icon',{attrs:{"name":"right"}}),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":{query: _vm.pageRouteQuery(_vm.now + 1)}}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=template&id=7e731cb4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  props: {
    max: {
      type: Number,
      default: 1
    },
    now: {
      type: Number,
      default: 1
    }
  },
  computed: {
    list() {
      const MAX = Math.max(this.max, 1);
      let indexList = [this.now - 1, this.now, this.now + 1]; // min max

      indexList.push(1);
      indexList.push(MAX); // filter the same

      indexList = indexList.filter((v, i) => indexList.indexOf(v) === i); // clamp min max

      indexList = indexList.filter(v => v > 0 && v <= MAX);
      return indexList.sort((a, b) => a - b);
    }

  },

  mounted() {},

  methods: {
    pageRouteQuery(page) {
      return { ...this.$route.query,
        page
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Pagination.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2a85b3e7"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-news{display:grid;width:100%;height:100vh;align-items:center;justify-items:center;place-items:center}.page-news .container{text-align:center}.page-news__card{display:block;margin:auto;max-width:360px}.page-news__card-image{margin-bottom:15px}.page-news__card-image:before{content:\"\";display:block;padding-bottom:56.25%}.page-news ul{margin-bottom:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/index.vue?vue&type=template&id=584af589&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-news"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul class=\"page-news__cards\">","</ul>",[_vm._ssrNode("<li>","</li>",_vm._l((_vm.posts),function(post){return _c('nuxt-link',{key:post.id,staticClass:"page-news__card",attrs:{"to":_vm.localePath({ name: 'news-slug', params: { slug: post.slug } }, _vm.$i18n.locale)}},[_c('div',{directives:[{name:"bg",rawName:"v-bg",value:(post.acf.seo.thumb),expression:"post.acf.seo.thumb"}],staticClass:"page-news__card-image"}),_vm._v("\n                    "+_vm._s(post.title.rendered)+"\n                ")])}),1)]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"button--grey",attrs:{"to":_vm.localePath('/', _vm.$i18n.locale)}},[_vm._v("\n            Back\n        ")]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",_vm._l((_vm.category),function(cat){return _c('nuxt-link',{key:cat.id,attrs:{"to":_vm.localePath({params: {'cat-news': cat.slug }})}},[_vm._v("\n                "+_vm._s(cat.name)+" / "+_vm._s(cat.slug)+"\n            ")])}),1),_vm._ssrNode(" "),(_vm.posts && _vm.posts._paging)?_c('Pagination',{attrs:{"max":_vm.posts._paging.totalPages,"now":_vm.page}}):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/news/index.vue?vue&type=template&id=584af589&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.js
var runtime = __webpack_require__(3);

// EXTERNAL MODULE: ./compositions/functions.js
var functions = __webpack_require__(130);

// EXTERNAL MODULE: ./compositions/wp.js
var wp = __webpack_require__(149);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const perPage = 2;
/* harmony default export */ var newsvue_type_script_lang_js_ = ({
  name: 'ArchiveNews',

  setup() {
    const route = Object(runtime["useRoute"])();
    const store = Object(runtime["useStore"])();
    const queryPage = Object(runtime["ref"])('');
    const fields = Object(runtime["ref"])('');
    const posts = Object(runtime["ref"])('');
    const category = Object(runtime["ref"])('');
    const {
      page: firstQueryPage = 1
    } = route.value.query; // fetch 需要重置

    const {
      loadImage
    } = Object(functions["a" /* default */])();
    queryPage.value = firstQueryPage;
    const {
      $wp,
      i18n
    } = Object(runtime["useContext"])();
    const {
      getArchiveFields,
      getPosts,
      getCategoryNews
    } = Object(wp["a" /* useWpApi */])({
      wp: $wp,
      lang: i18n.locale
    });
    const {
      fetch
    } = Object(runtime["useFetch"])(async () => {
      // 需要在 fetch 取 query
      const {
        page = 1,
        'cat-news': catNews
      } = route.value.query;
      fields.value = await getArchiveFields('news');
      posts.value = await getPosts('news', {
        page,
        perPage,
        catNews
      });
      category.value = await getCategoryNews();
      queryPage.value = +page; // refresh pagination
    });
    fetch();
    Object(runtime["onMounted"])(() => {
      store.dispatch('ADD_LOADING_STACK', loadImage());
    });
    return {
      fields,
      posts,
      category,
      page: queryPage
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

  computed: {},
  watch: {
    '$route.query': '$fetch'
  }
});
// CONCATENATED MODULE: ./pages/news/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_newsvue_type_script_lang_js_ = (newsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/news/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(242)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_newsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9382e046"
  
)

/* harmony default export */ var news = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Pagination: __webpack_require__(228).default})


/***/ })

};;
//# sourceMappingURL=index.js.map