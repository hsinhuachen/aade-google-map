exports.ids = [36,5,9,10,17,18];
exports.modules = {

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2b06289c", content, true, context)
};

/***/ }),

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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("8d05ffe0", content, true, context)
};

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDYgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNSA2TDEgMTEiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4K"

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_21d5390a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_21d5390a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_21d5390a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_21d5390a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_21d5390a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".breadcrumb[data-v-21d5390a]{display:flex;align-items:flex-end}.breadcrumb__item[data-v-21d5390a]{display:flex;align-items:center;color:#333;margin-bottom:12px;opacity:1;transition:opacity .5s}@media(min-width:1200px){.breadcrumb__item[data-v-21d5390a]{margin-bottom:16px}}.breadcrumb__item-arrow[data-v-21d5390a]{margin:auto 10px}.breadcrumb__item[data-v-21d5390a]:not(:last-child){opacity:.5;transition:opacity .5s}.breadcrumb__item[data-v-21d5390a]:not(:last-child):hover{opacity:1}.breadcrumb__item:last-child .breadcrumb__item-arrow[data-v-21d5390a]{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/BreadCrumb.vue?vue&type=template&id=21d5390a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"breadcrumb"},[_vm._ssrNode((_vm._ssrList((_vm.data),function(item){return ("<li class=\"breadcrumb__item\" data-v-21d5390a><a"+(_vm._ssrAttr("href",item.url))+" data-v-21d5390a>"+_vm._ssrEscape(_vm._s(item.title))+"</a> <img"+(_vm._ssrAttr("src",__webpack_require__(133)))+" alt=\"箭頭\" class=\"breadcrumb__item-arrow\" data-v-21d5390a></li>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blocks/BreadCrumb.vue?vue&type=template&id=21d5390a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/BreadCrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BreadCrumbvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Array,

      default() {
        return [];
      }

    }
  }
});
// CONCATENATED MODULE: ./components/Blocks/BreadCrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blocks_BreadCrumbvue_type_script_lang_js_ = (BreadCrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blocks/BreadCrumb.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blocks_BreadCrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "21d5390a",
  "9893bf22"
  
)

/* harmony default export */ var BreadCrumb = __webpack_exports__["default"] = (component.exports);

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

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuxtLinkButton_vue_vue_type_style_index_0_id_c4decc54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuxtLinkButton_vue_vue_type_style_index_0_id_c4decc54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuxtLinkButton_vue_vue_type_style_index_0_id_c4decc54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuxtLinkButton_vue_vue_type_style_index_0_id_c4decc54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuxtLinkButton_vue_vue_type_style_index_0_id_c4decc54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".button[data-v-c4decc54]{padding:12px 72px;opacity:1;transition:opacity .5s}.button[data-v-c4decc54]:hover{opacity:.5}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button/NuxtLinkButton.vue?vue&type=template&id=c4decc54&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.external ? 'a' : 'nuxt-link',{tag:"component",staticClass:"button",style:({color: _vm.color, backgroundColor: _vm.backgroundColor}),attrs:{"to":_vm.external ? _vm.link : ("/projects/" + _vm.link),"href":_vm.external ? _vm.link : ("/projects/" + _vm.link),"title":"READ","target":_vm.external ? '_blank' : null}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Button/NuxtLinkButton.vue?vue&type=template&id=c4decc54&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button/NuxtLinkButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NuxtLinkButtonvue_type_script_lang_js_ = ({
  props: {
    link: {
      type: String,

      default() {
        return null;
      }

    },
    color: {
      type: String,

      default() {
        return null;
      }

    },
    backgroundColor: {
      type: String,

      default() {
        return null;
      }

    },
    external: {
      type: Boolean,

      default() {
        return false;
      }

    }
  }
});
// CONCATENATED MODULE: ./components/Button/NuxtLinkButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_NuxtLinkButtonvue_type_script_lang_js_ = (NuxtLinkButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Button/NuxtLinkButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(140)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Button_NuxtLinkButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c4decc54",
  "65a3ea8f"
  
)

/* harmony default export */ var NuxtLinkButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNSA2LjVIMTIuNVY1LjVIMC41VjYuNVpNNyAxMlYwSDZWMTJIN1oiIGZpbGw9IiMzMzMzMzMiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4ef2a099", content, true, context)
};

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5421a2cb", content, true, context)
};

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedArticle_vue_vue_type_style_index_0_id_b8eb7442_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedArticle_vue_vue_type_style_index_0_id_b8eb7442_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedArticle_vue_vue_type_style_index_0_id_b8eb7442_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedArticle_vue_vue_type_style_index_0_id_b8eb7442_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedArticle_vue_vue_type_style_index_0_id_b8eb7442_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".feature-article[data-v-b8eb7442]{padding-top:48px;background-color:#fff}@media(min-width:1200px){.feature-article[data-v-b8eb7442]{background-color:unset}}.feature-article__blocks[data-v-b8eb7442]{background-color:#fff}@media(min-width:1200px){.feature-article__blocks[data-v-b8eb7442]{display:flex;height:100%}}@media(min-width:1200px){.feature-article__blocks-block[data-v-b8eb7442]{width:50%}}@media(min-width:1200px){.feature-article__blocks-block-text[data-v-b8eb7442]{padding:72px 80px}}.feature-article__data[data-v-b8eb7442]{display:flex;color:rgba(51,51,51,.6)}.feature-article__data-item[data-v-b8eb7442]:not(:last-child):after{content:\"|\";display:inline-block;margin-right:12px;margin-left:10px}.feature-article__title[data-v-b8eb7442]{color:#000;font-size:22px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.feature-article__title[data-v-b8eb7442]{font-size:32px}}.feature-article__content[data-v-b8eb7442]{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:4;max-height:100px;font-size:15px;text-overflow:ellipsis;color:rgba(51,51,51,.8)}.feature-article__content[data-v-b8eb7442],.feature-article__data[data-v-b8eb7442],.feature-article__title[data-v-b8eb7442]{margin-bottom:16px}@media(min-width:1200px){.feature-article__content[data-v-b8eb7442],.feature-article__data[data-v-b8eb7442],.feature-article__title[data-v-b8eb7442]{margin-bottom:24px}}.feature-article__button[data-v-b8eb7442]{margin:48px auto;text-align:center}@media(min-width:1200px){.feature-article__button[data-v-b8eb7442]{text-align:left;margin-bottom:0}}.feature-article__image[data-v-b8eb7442]{width:100%;height:auto}.feature-article img[data-v-b8eb7442]{height:100%;-o-object-fit:cover;object-fit:cover}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleNav_vue_vue_type_style_index_0_id_5c49d1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleNav_vue_vue_type_style_index_0_id_5c49d1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleNav_vue_vue_type_style_index_0_id_5c49d1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleNav_vue_vue_type_style_index_0_id_5c49d1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleNav_vue_vue_type_style_index_0_id_5c49d1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".article-nav[data-v-5c49d1aa]{position:relative;display:flex;font-size:14px;line-height:1.5}.article-nav[data-v-5c49d1aa]::-webkit-scrollbar{display:none}.article-nav[data-v-5c49d1aa]:after{content:\"\";position:absolute;right:0;width:24px;height:100%;background:linear-gradient(270deg,#f7f8f8,rgba(247,248,248,0))}@media(min-width:1200px){.article-nav[data-v-5c49d1aa]:after{display:none}}.article-nav__title[data-v-5c49d1aa]{margin-right:56px;color:rgba(51,51,51,.3);font-size:14px;font-weight:500;line-height:1.5}.article-nav__menu[data-v-5c49d1aa]{display:flex;overflow-x:scroll;overflow-y:hidden;overflow:scroll hidden;-ms-overflow-style:none;scrollbar-width:none}.article-nav__menu[data-v-5c49d1aa]::-webkit-scrollbar{display:none}@media(min-width:1200px){.article-nav__menu[data-v-5c49d1aa]{margin-right:40px;flex-wrap:wrap}}.article-nav__menu-item[data-v-5c49d1aa]{margin-right:16px;white-space:nowrap;color:#333}@media(min-width:1200px){.article-nav__menu-item[data-v-5c49d1aa]{margin-bottom:20px}}.article-nav__menu-item.active .article-nav__menu-item-link[data-v-5c49d1aa]{opacity:1}.article-nav__menu-item.active .article-nav__menu-item-link[data-v-5c49d1aa]:after{content:\"\";display:block;margin-top:8px;width:calc(100% + 14px);height:1px;background-color:#000;transform:translateX(-7px)}.article-nav__menu-item-link[data-v-5c49d1aa]{display:block;margin:0 7px;opacity:.3;transition:all .5s;letter-spacing:0;font-size:14px;font-weight:500;line-height:1.5}.article-nav__menu-item-link[data-v-5c49d1aa]:after{content:\"\";display:block;margin-top:8px;width:0;height:1px;background-color:#000;transition:all .5s;transform:translateX(-7px)}.article-nav__menu-item-link[data-v-5c49d1aa]:hover{opacity:1}.article-nav__menu-item-link[data-v-5c49d1aa]:hover:after{width:calc(100% + 14px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("23670fce", content, true, context)
};

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/FeaturedArticle.vue?vue&type=template&id=b8eb7442&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"feature-article"},[_vm._ssrNode("<div class=\"container\" data-v-b8eb7442>","</div>",[_vm._ssrNode("<div class=\"feature-article__blocks\" data-v-b8eb7442>","</div>",[_vm._ssrNode("<div class=\"feature-article__blocks-block\" data-v-b8eb7442>","</div>",[_vm._ssrNode("<div class=\"feature-article__blocks-block-text\" data-v-b8eb7442>","</div>",[_vm._ssrNode(((_vm.data.category)?("<ul class=\"feature-article__data\" data-v-b8eb7442>"+(_vm._ssrList((_vm.data.category),function(cat){return ("<li class=\"feature-article__data-item\" data-v-b8eb7442>"+_vm._ssrEscape("\n                            "+_vm._s(_vm.capitalizeFirstLetter(cat.name))+"\n                        ")+"</li>")}))+"</ul>"):"<!---->")+" <h2 class=\"feature-article__title\" data-v-b8eb7442>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.data.post_data.post_title)+"\n                    ")+"</h2> <div class=\"feature-article__content\" data-v-b8eb7442>"+(_vm._s(_vm.data.first_content))+"</div> "),_vm._ssrNode("<div class=\"feature-article__button\" data-v-b8eb7442>","</div>",[_c('NuxtLinkButton',{attrs:{"link":_vm.data.post_data.post_name,"color":"#ffffff","background-color":"#000000"}},[_vm._v("\n                            READ\n                        ")])],1)],2)]),_vm._ssrNode(" <div class=\"feature-article__blocks-block\""+(_vm._ssrStyle(null,null, { display: (_vm.isDesktop) ? '' : 'none' }))+" data-v-b8eb7442><img"+(_vm._ssrAttr("src",_vm.data.first_image ? _vm.data.first_image.sizes['medium_large'] : ''))+" alt=\"Featured Article\" class=\"feature-article__image\" data-v-b8eb7442></div>")],2)]),_vm._ssrNode(" <div"+(_vm._ssrStyle({"height":"249px"},null, { display: (!_vm.isDesktop) ? '' : 'none' }))+" data-v-b8eb7442><img"+(_vm._ssrAttr("src",_vm.data.first_image ? _vm.data.first_image.sizes['medium_large'] : ''))+" alt=\"Featured Article\" class=\"feature-article__image\" data-v-b8eb7442></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blocks/FeaturedArticle.vue?vue&type=template&id=b8eb7442&scoped=true&

// EXTERNAL MODULE: ./components/Button/NuxtLinkButton.vue + 4 modules
var NuxtLinkButton = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/FeaturedArticle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FeaturedArticlevue_type_script_lang_js_ = ({
  components: {
    NuxtLinkButton: NuxtLinkButton["default"]
  },
  props: {
    data: {
      type: Object,

      default() {
        return {};
      }

    }
  },

  data() {
    return {
      isDesktop: null
    };
  },

  mounted() {
    this.resize();
    window.addEventListener('resize', this.resize);
  },

  methods: {
    resize() {
      this.isDesktop = window.innerWidth >= 1200;
    },

    capitalizeFirstLetter(string) {
      return (string === null || string === void 0 ? void 0 : string.toLowerCase().charAt(0).toUpperCase()) + (string === null || string === void 0 ? void 0 : string.slice(1));
    }

  }
});
// CONCATENATED MODULE: ./components/Blocks/FeaturedArticle.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blocks_FeaturedArticlevue_type_script_lang_js_ = (FeaturedArticlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blocks/FeaturedArticle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(194)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blocks_FeaturedArticlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b8eb7442",
  "57c2c08c"
  
)

/* harmony default export */ var FeaturedArticle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/ArticleNav.vue?vue&type=template&id=5c49d1aa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-nav"},[_vm._ssrNode("<p class=\"article-nav__title\" data-v-5c49d1aa>\n        Sort\n    </p> <ul class=\"article-nav__menu\" data-v-5c49d1aa><li class=\"article-nav__menu-item active\" data-v-5c49d1aa><button type=\"button\" class=\"article-nav__menu-item-link\" data-v-5c49d1aa>\n                All\n            </button></li> "+(_vm._ssrList((_vm.data),function(item,key){return ("<li class=\"article-nav__menu-item\" data-v-5c49d1aa><button type=\"button\" class=\"article-nav__menu-item-link\" data-v-5c49d1aa>"+_vm._ssrEscape("\n                "+_vm._s(item.name)+"\n            ")+"</button></li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blocks/ArticleNav.vue?vue&type=template&id=5c49d1aa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/ArticleNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ArticleNavvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  mounted() {
    const key = this.data.findIndex(el => el.slug === this.$route.query.category);

    if (key >= 0) {
      this.updateCategory(null, key + 1);
    }
  },

  methods: {
    updateCategory(category, key) {
      if (category === this.$route.query.category) {
        return;
      }

      if (category) {
        this.$emit('category', category);
      }

      Object.keys(this.$refs).forEach((item, index) => {
        if (index !== 0) {
          this.setActive(this.$refs[item][0], index, key);
        } else {
          this.setActive(this.$refs[item], index, key);
        }
      });
    },

    setActive(item, index, key) {
      if (item.classList[1] === 'active') {
        item.classList.remove('active');
      }

      if (index === key) {
        item.classList.add('active');
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Blocks/ArticleNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blocks_ArticleNavvue_type_script_lang_js_ = (ArticleNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blocks/ArticleNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blocks_ArticleNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c49d1aa",
  "4e3053d9"
  
)

/* harmony default export */ var ArticleNav = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container-nav{padding-right:0}.projects{overflow:hidden;padding-top:118px}@media(min-width:1200px){.projects{padding-top:159px}}.projects__title{font-size:32px;font-weight:700;line-height:1.3;letter-spacing:.5px;margin-bottom:64px}@media(min-width:1200px){.projects__title{font-size:48px;margin-bottom:32px}}.projects__featured-article{margin-bottom:56px}@media(min-width:1200px){.projects__featured-article{margin-bottom:106px}}.projects__article-nav{margin-bottom:40px}@media(min-width:1200px){.projects__article-nav{margin-bottom:48px}}.projects__articles{display:flex;flex-wrap:wrap;margin-bottom:40px;padding:20px 0}@media(min-width:768px){.projects__articles{margin:0 -12px 80px}}.projects__articles-item{margin-bottom:24px;width:100%}@media(min-width:768px){.projects__articles-item{padding:0 12px;margin-bottom:72px;width:25%}}.projects__button{text-align:center;opacity:.5;margin-bottom:80px}@media(min-width:1200px){.projects__button{margin-bottom:160px}}.projects__button.disable{opacity:0!important;pointer-events:none;transition:opacity .3s}.projects .button{font-size:14px;font-weight:500;line-height:1.5;padding:12px 72px;color:rgba(51,51,51,.5);background-color:#f0f0f0;opacity:1;transition:opacity .5s;letter-spacing:.5px}.projects .button:hover{opacity:.5}.projects .button img{margin-bottom:4px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/index.vue?vue&type=template&id=f4cd9c68&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"projects"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('BreadCrumb',{attrs:{"data":_vm.data.breadcrumbs}}),_vm._ssrNode(" <h1 class=\"projects__title\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.data.title)+"\n        ")+"</h1>")],2),_vm._ssrNode(" "),_c('FeaturedArticle',{staticClass:"projects__featured-article",attrs:{"data":_vm.data.featured_article[0]}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container container-nav\">","</div>",[_c('ArticleNav',{staticClass:"projects__article-nav",attrs:{"data":_vm.data.categories},on:{"category":_vm.updateCategory}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul class=\"projects__articles\">","</ul>",_vm._l((_vm.currentPosts),function(item){return _vm._ssrNode("<li class=\"projects__articles-item\">","</li>",[_c('ArticleCard',{attrs:{"data":item}})],1)}),0),_vm._ssrNode(" <div"+(_vm._ssrClass("projects__button",{disable: _vm.currentPosts.length === _vm.totalPosts.length}))+"><button type=\"button\" class=\"button\">\n                SEE MORE <img"+(_vm._ssrAttr("src",__webpack_require__(151)))+" alt=\"SEE MORE\"></button></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/projects/index.vue?vue&type=template&id=f4cd9c68&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(10);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// EXTERNAL MODULE: ./components/Blocks/BreadCrumb.vue + 4 modules
var BreadCrumb = __webpack_require__(136);

// EXTERNAL MODULE: ./components/Blocks/FeaturedArticle.vue + 4 modules
var FeaturedArticle = __webpack_require__(229);

// EXTERNAL MODULE: ./components/Card/ArticleCard.vue + 4 modules
var ArticleCard = __webpack_require__(139);

// EXTERNAL MODULE: ./components/Blocks/ArticleNav.vue + 4 modules
var ArticleNav = __webpack_require__(230);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(7);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./compositions/functions.js
var functions = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var projectsvue_type_script_lang_js_ = ({
  components: {
    BreadCrumb: BreadCrumb["default"],
    FeaturedArticle: FeaturedArticle["default"],
    ArticleCard: ArticleCard["default"],
    ArticleNav: ArticleNav["default"]
  },

  async asyncData({
    $config,
    $axios,
    query,
    error
  }) {
    try {
      const res = await $axios.$get(`${$config.APP_BACKEND_API}/wp-json/api/projects/filter/?category=${query.category || ''}`);
      const data = res.data;
      const seo = data.seo;
      const totalPosts = data.posts;
      const currentPosts = totalPosts.slice(0, 12);
      const totalPage = Math.ceil(totalPosts.length / 12);
      return {
        data,
        seo,
        totalPosts,
        currentPosts,
        totalPage
      };
    } catch (e) {
      console.log(e);
      error({
        statusCode: 404,
        message: 'Post not found'
      });
      return {
        data: {},
        seo: {},
        totalPosts: 0,
        currentPosts: '',
        totalPage: 0
      };
    }
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
    var _this$seo, _this$seo2, _this$seo3, _this$seo4, _this$seo5, _this$seo6, _this$seo7, _this$seo8, _this$seo9, _this$seo10, _this$seo11, _this$seo12;

    return {
      title: (_this$seo = this.seo) === null || _this$seo === void 0 ? void 0 : _this$seo.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: (_this$seo2 = this.seo) === null || _this$seo2 === void 0 ? void 0 : _this$seo2.desc
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: (_this$seo3 = this.seo) === null || _this$seo3 === void 0 ? void 0 : _this$seo3.title
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: (_this$seo4 = this.seo) === null || _this$seo4 === void 0 ? void 0 : _this$seo4.desc
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.APP_URL}`
      }, {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: (_this$seo5 = this.seo) === null || _this$seo5 === void 0 ? void 0 : _this$seo5.title
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: (_this$seo6 = this.seo) !== null && _this$seo6 !== void 0 && _this$seo6.thumb ? (_this$seo7 = this.seo) === null || _this$seo7 === void 0 ? void 0 : _this$seo7.thumb : `${process.env.APP_URL}/og_img.jpg`
      }, {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: (_this$seo8 = this.seo) === null || _this$seo8 === void 0 ? void 0 : _this$seo8.desc
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: (_this$seo9 = this.seo) === null || _this$seo9 === void 0 ? void 0 : _this$seo9.desc
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: (_this$seo10 = this.seo) === null || _this$seo10 === void 0 ? void 0 : _this$seo10.title
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: (_this$seo11 = this.seo) !== null && _this$seo11 !== void 0 && _this$seo11.thumb ? (_this$seo12 = this.seo) === null || _this$seo12 === void 0 ? void 0 : _this$seo12.thumb : `${process.env.APP_URL}/og_img.jpg`
      }]
    };
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
        const els = external_gsap_default.a.utils.toArray('.projects__articles-item').slice(prevPostsLength);
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

    updateCategory(category) {
      this.currentPage = 1;
      this.$router.replace({
        path: '/projects',
        query: {
          category
        }
      });
      external_axios_default.a.get(`${this.$config.APP_BACKEND_API}/wp-json/api/projects/filter/?category=${category || ''}`).then(res => {
        this.totalPosts = res.data.data.posts;
        this.currentPosts = this.totalPosts.slice(0, 12);
        this.totalPage = Math.ceil(this.totalPosts.length / 12);
        this.$nextTick(function () {
          const els = external_gsap_default.a.utils.toArray('.projects__articles-item');
          external_gsap_default.a.fromTo(els, {
            y: 30,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.2
          });
        });
      }).catch(() => {});
    },

    gsapInit() {
      external_gsap_default.a.fromTo('.breadcrumb', {
        y: -20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.projects__title', {
        x: 20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.projects__featured-article', {
        opacity: 0
      }, {
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.projects__featured-article .feature-article__blocks-block:first-child', {
        x: -20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      }).delay(1.5);
      external_gsap_default.a.fromTo('.projects__featured-article .feature-article__blocks-block:last-child', {
        opacity: 0
      }, {
        opacity: 1
      }).delay(1.5);
      external_gsap_default.a.fromTo('.article-nav__menu-item', {
        x: 10,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.2
      }).delay(1.5);
      const tl = external_gsap_default.a.timeline();
      tl.fromTo('.projects__articles-item', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.2
      }).fromTo('.projects__button', {
        opacity: 0
      }, {
        opacity: 1
      }).delay(1.7);
    }

  }
});
// CONCATENATED MODULE: ./pages/projects/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_projectsvue_type_script_lang_js_ = (projectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/projects/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(247)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ba83ed78"
  
)

/* harmony default export */ var projects = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map