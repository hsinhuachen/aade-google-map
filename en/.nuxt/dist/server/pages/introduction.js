exports.ids = [31,9,14,21];
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

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2bd64e34", content, true, context)
};

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("85fc60f8", content, true, context)
};

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("439a08f0", content, true, context)
};

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideShow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideShow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideShow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideShow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideShow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-pagination{position:relative;display:flex;align-items:flex-end}.swiper-pagination-bullet{display:block;margin-right:16px;width:32px;height:3px;background-color:#6a6a6a;border-radius:0;opacity:1;transition:height .4s linear}.swiper-pagination-bullet-active{height:5px}.swiper-navigation{display:flex}.swiper-button-prev{left:-50px}.swiper-button-next,.swiper-button-prev{--swiper-navigation-size:24px;position:relative;bottom:0;color:#333}.swiper-button-next{left:-10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideShow_vue_vue_type_style_index_1_id_5fdc2044_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideShow_vue_vue_type_style_index_1_id_5fdc2044_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideShow_vue_vue_type_style_index_1_id_5fdc2044_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideShow_vue_vue_type_style_index_1_id_5fdc2044_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideShow_vue_vue_type_style_index_1_id_5fdc2044_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-container[data-v-5fdc2044]{overflow:hidden}.swiper-slide[data-v-5fdc2044]{width:100%;height:167px;background-position:50%;background-repeat:no-repeat;background-size:cover}@media(min-width:768px){.swiper-slide[data-v-5fdc2044]{height:344px}}@media(min-width:1200px){.swiper-slide[data-v-5fdc2044]{height:644px}}.slide-show__button[data-v-5fdc2044]{display:flex;justify-content:center;margin-top:24px}@media(min-width:1200px){.slide-show__button[data-v-5fdc2044]{justify-content:space-between;margin-top:32px}}.slide-show__navigation[data-v-5fdc2044]{display:none}@media(min-width:1200px){.slide-show__navigation[data-v-5fdc2044]{display:flex}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".member-card{display:flex;align-items:center;width:100%}@media(min-width:1200px){.member-card{display:block}}.member-card__photo{flex:0 0 37.5%;position:relative;margin-right:24px;padding-bottom:37.5%;width:37.5%}@media(min-width:1200px){.member-card__photo{margin-bottom:16px;margin-right:0;padding-bottom:63.02%;width:100%}}.member-card__photo img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.member-card__text{flex:1 0 0}.member-card__text-start{font-size:14px;font-weight:500;line-height:1.5}.member-card__text-end{opacity:.8;font-size:12px;font-weight:400;line-height:1.7}@media(min-width:768px){.member-card__text-end-item{display:inline}}.member-card__text-end-item:not(:last-child):after{display:inline-block;margin:0 4px}@media(min-width:768px){.member-card__text-end-item:not(:last-child):after{content:\"|\"}}.member-card__title{font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px;margin-bottom:8px}@media(min-width:1200px){.member-card__title{font-size:18px;margin-bottom:12px;font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px}}@media(min-width:1200px)and (min-width:1200px){.member-card__title{font-size:24px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("06829df0", content, true, context)
};

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/SlideShow.vue?vue&type=template&id=5fdc2044&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slide-show"},[_vm._ssrNode("<div class=\"swiper-container\" data-v-5fdc2044><div class=\"swiper-wrapper\" data-v-5fdc2044>"+(_vm._ssrList((_vm.data),function(item){return ("<div class=\"swiper-slide\""+(_vm._ssrStyle(null,{backgroundImage: ("url(" + (item.sizes['1536x1536']) + ")")}, null))+" data-v-5fdc2044></div>")}))+"</div> <div class=\"slide-show__button\" data-v-5fdc2044><div class=\"swiper-pagination\" data-v-5fdc2044></div> <div class=\"swiper-navigation slide-show__navigation\" data-v-5fdc2044><div class=\"swiper-button-prev\" data-v-5fdc2044></div> <div class=\"swiper-button-next\" data-v-5fdc2044></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blocks/SlideShow.vue?vue&type=template&id=5fdc2044&scoped=true&

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(126);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/SlideShow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SlideShowvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  mounted() {
    new external_swiper_default.a('.swiper-container', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }

});
// CONCATENATED MODULE: ./components/Blocks/SlideShow.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blocks_SlideShowvue_type_script_lang_js_ = (SlideShowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blocks/SlideShow.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(185)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(187)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blocks_SlideShowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5fdc2044",
  "28eb91f2"
  
)

/* harmony default export */ var SlideShow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card/MemberCard.vue?vue&type=template&id=240fb2b4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"member-card"},[_vm._ssrNode("<div class=\"member-card__photo\"><img"+(_vm._ssrAttr("src",_vm.data.photo.sizes['large']))+(_vm._ssrAttr("alt",_vm.data.name))+"></div> <div class=\"member-card__text\"><h3 class=\"member-card__title\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.data.name)+"\n        ")+"</h3> <p class=\"member-card__text-start\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.data.school)+"\n        ")+"</p> <ul class=\"member-card__text-end\"><li class=\"member-card__text-end-item\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.department)+"\n            ")+"</li> <li class=\"member-card__text-end-item\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.job_title)+"\n            ")+"</li></ul></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Card/MemberCard.vue?vue&type=template&id=240fb2b4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card/MemberCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MemberCardvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,

      default() {
        return {};
      }

    }
  }
});
// CONCATENATED MODULE: ./components/Card/MemberCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_MemberCardvue_type_script_lang_js_ = (MemberCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Card/MemberCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(189)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_MemberCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "22bdedcc"
  
)

/* harmony default export */ var MemberCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_introduction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_introduction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_introduction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_introduction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_introduction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".introduction{padding-top:118px;transition:all 1s}.introduction>.container:first-child{margin-bottom:52px}@media(min-width:768px){.introduction>.container:first-child{margin-bottom:0}}.introduction .swiper-container{padding-bottom:12px}@media(min-width:1200px){.introduction{padding-top:159px}}.introduction__title{font-size:32px;font-weight:700;line-height:1.3;letter-spacing:.5px;margin-bottom:64px}@media(min-width:1200px){.introduction__title{font-size:48px;margin-bottom:32px}}.introduction__block{padding-bottom:24px}@media(min-width:1200px){.introduction__block{padding-top:160px}}@media(min-width:1200px){.introduction__block-text{padding-bottom:24px}}.introduction__block-text-start{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}@media(min-width:1200px){.introduction__block-text-start{align-items:start}}@media(min-width:1200px){.introduction__block-text{display:flex;justify-content:space-between;padding-bottom:80px}.introduction__block-text-end{width:690px}}.introduction__block-toggle{width:24px;height:29px}@media(min-width:1200px){.introduction__block-toggle{display:none}}.introduction__block-toggle button{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.introduction__block-toggle path{transition:fill .3s}.introduction__block-title{font-size:22px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.introduction__block-title{font-size:32px}}@media(min-width:768px){.introduction__block-title{font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px}}@media(min-width:768px)and (min-width:1200px){.introduction__block-title{font-size:24px}}.introduction__block-line{width:100%;height:1px;background-color:#ddd}.introduction__block-subtitle{font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px;margin-bottom:1.7rem}@media(min-width:1200px){.introduction__block-subtitle{font-size:18px}}.introduction__block-content{font-size:16px;font-weight:400;line-height:1.7;color:#333;opacity:.8;margin-bottom:1.7rem;transition:color 1s}.introduction__block-list{margin-bottom:32px;counter-reset:num 0}.introduction__block-list-item{font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px;display:flex;align-items:center;margin-bottom:32px}.introduction__block-list-item:before{width:64px;height:64px;counter-increment:num 1;content:counter(num);display:flex;align-items:center;justify-content:center;margin-right:32px;font-size:26px;line-height:1.2;border:1px solid #000;border-radius:100%;flex-shrink:0}.introduction__block-image{width:100%;height:200px;background-position:50%;background-repeat:no-repeat;background-size:cover}@media(min-width:1200px){.introduction__block-image{height:360px;background-attachment:fixed}}.introduction__block-photo_wall{display:flex;justify-content:space-between;width:100%;margin-bottom:32px}@media(min-width:1200px){.introduction__block-photo_wall{margin-bottom:72px}}.introduction__block-photo_wall-item{width:33.33333333%}.introduction__block-photo_wall-box{position:relative;padding-bottom:87.2%;width:100%}.introduction__block-photo_wall-photo{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.introduction__teachers{margin-top:40px;padding:72px 0;transition:background-color .5s linear}@media(min-width:1200px){.introduction__teachers{margin-top:0;padding:120px 0}}@media(min-width:1200px){.introduction__teachers-list{display:flex;justify-content:space-between;flex-wrap:wrap}}.introduction__teachers-item{display:flex;align-items:center;margin-bottom:32px}@media(min-width:1200px){.introduction__teachers-item{display:block;width:32%;margin-bottom:72px}}.-bg{background-color:#4a4a4a}.-bg,.-bg .introduction__block-content{color:#fff}.-bg .introduction__block-toggle path{fill:#fff}.-bg-darker{background-color:#333}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/introduction.vue?vue&type=template&id=6dbf9ec3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"introduction"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('BreadCrumb',{attrs:{"data":_vm.data.breadcrumbs}}),_vm._ssrNode(" <h1 class=\"introduction__title\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.data.page_title)+"\n        ")+"</h1> "),_c('SlideShow',{attrs:{"data":_vm.data.fields.banner}})],2),_vm._ssrNode(" "+(_vm._ssrList((_vm.data.fields.block),function(block,key){return ("<div class=\"introduction__block\"><div class=\"container\"><div class=\"introduction__block-text\"><div class=\"introduction__block-text-start\"><h2 class=\"introduction__block-title\">"+_vm._ssrEscape("\n                        "+_vm._s(block.title)+"\n                    ")+"</h2> <div class=\"introduction__block-toggle\"><button type=\"button\" aria-label=\"open\""+(_vm._ssrStyle(null,null, { display: (!_vm.isOpen[("block_" + key)]) ? '' : 'none' }))+"><svg width=\"13\" height=\"12\" viewBox=\"0 0 13 12\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\"><path d=\"M0.5 6.5H12.5V5.5H0.5V6.5ZM7 12V0H6V12H7Z\" fill=\"#333333\"></path></svg></button> <button type=\"button\" aria-label=\"close\""+(_vm._ssrStyle(null,null, { display: (_vm.isOpen[("block_" + key)]) ? '' : 'none' }))+"><svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\"><path d=\"M6 12.6273H18V11.6273H6V12.6273Z\" fill=\"#333333\"></path></svg></button></div></div> <div class=\"introduction__block-line\""+(_vm._ssrStyle(null,null, { display: (!_vm.isDesktop && !_vm.isOpen[("block_" + key)]) ? '' : 'none' }))+"></div> <div class=\"introduction__block-text-end\""+(_vm._ssrStyle(null,null, { display: (_vm.isDesktop || _vm.isOpen[("block_" + key)]) ? '' : 'none' }))+">"+((block.subtitle)?("<h3 class=\"introduction__block-subtitle\">"+_vm._ssrEscape("\n                        "+_vm._s(block.subtitle)+"\n                    ")+"</h3>"):"<!---->")+" "+(_vm._ssrList((block.components),function(component,index){return ("<div>"+((component.acf_fc_layout === 'content')?("<div><div class=\"introduction__block-content\">"+(_vm._s(component.data))+"</div></div>"):(component.acf_fc_layout === 'column_point_list')?("<div><ol class=\"introduction__block-list\">"+(_vm._ssrList((component.data),function(item){return ("<li class=\"introduction__block-list-item\">"+_vm._ssrEscape("\n                                    "+_vm._s(item.text)+"\n                                ")+"</li>")}))+"</ol></div>"):"<!---->")+"</div>")}))+"</div></div></div> "+(_vm._ssrList((block.components),function(component,index){return ("<div>"+((component.acf_fc_layout === 'picture')?("<div><div class=\"introduction__block-image\""+(_vm._ssrStyle(null,{backgroundImage: ("url(" + (component.data.sizes['large']) + ")")}, { display: (_vm.isDesktop || _vm.isOpen[("block_" + key)]) ? '' : 'none' }))+"></div></div>"):(component.acf_fc_layout === 'photo_wall')?("<div><div class=\"container\"><ul class=\"introduction__block-photo_wall\""+(_vm._ssrStyle(null,null, { display: (_vm.isDesktop || _vm.isOpen[("block_" + key)]) ? '' : 'none' }))+">"+(_vm._ssrList((component.data),function(item){return ("<li class=\"introduction__block-photo_wall-item\"><div class=\"introduction__block-photo_wall-box\"><img"+(_vm._ssrAttr("src",item.sizes['large']))+(_vm._ssrAttr("alt",item.alt))+" class=\"introduction__block-photo_wall-photo\"></div></li>")}))+"</ul></div></div>"):"<!---->")+"</div>")}))+"</div>")}))+" "),_vm._ssrNode("<div class=\"introduction__teachers\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul class=\"introduction__teachers-list\">","</ul>",_vm._l((_vm.data.fields.member_list),function(item,key){return _vm._ssrNode("<li class=\"introduction__teachers-item\">","</li>",[_c('MemberCard',{attrs:{"data":item}})],1)}),0)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/introduction.vue?vue&type=template&id=6dbf9ec3&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(10);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// EXTERNAL MODULE: ./components/Blocks/BreadCrumb.vue + 4 modules
var BreadCrumb = __webpack_require__(136);

// EXTERNAL MODULE: ./components/Blocks/SlideShow.vue + 4 modules
var SlideShow = __webpack_require__(226);

// EXTERNAL MODULE: ./components/Card/MemberCard.vue + 4 modules
var MemberCard = __webpack_require__(227);

// EXTERNAL MODULE: ./compositions/functions.js
var functions = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/introduction.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var introductionvue_type_script_lang_js_ = ({
  components: {
    BreadCrumb: BreadCrumb["default"],
    SlideShow: SlideShow["default"],
    MemberCard: MemberCard["default"]
  },

  async asyncData({
    $config,
    $axios,
    error
  }) {
    try {
      const {
        data
      } = await $axios.$get(`${$config.APP_BACKEND_API}/wp-json/api/introduction`);
      const isOpen = {};
      data.fields.block.forEach((item, key) => {
        isOpen[`block_${key}`] = false;
      });
      const seo = data.fields.seo;
      return {
        data,
        isOpen,
        seo
      };
    } catch (e) {
      console.log(e);
      error({
        statusCode: 404,
        message: 'Post not found'
      });
      return {
        data: {},
        isOpen: {},
        seo: {}
      };
    }
  },

  data() {
    return {
      isDesktop: null
    };
  },

  head() {
    return {
      title: this.seo.title + ' | ' + this.$config.APP_TITLE_TEMPLATE,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.seo.desc
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: this.seo.title
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: this.seo.desc
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.APP_URL}${this.$route.fullPath}`
      }, {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: this.seo.title
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.seo.thumb ? this.seo.thumb : `${process.env.APP_URL}/og_img.jpg`
      }, {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: this.seo.desc
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: this.seo.desc
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.seo.title
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: this.seo.thumb ? this.seo.thumb : `${process.env.APP_URL}/og_img.jpg`
      }]
    };
  },

  mounted() {
    this.$store.dispatch('ADD_LOADING_STACK', loadImage());
    this.$store.dispatch('WAIT_LOADING');
    this.resize();
    window.addEventListener('resize', this.resize);
    window.addEventListener('scroll', this.scroll);
    this.gsapInit();
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('scroll', this.scroll);
  },

  methods: {
    resize() {
      this.isDesktop = window.innerWidth >= 1200;
    },

    scroll() {
      var _introductionBlock$, _introductionBlock$2;

      const introduction = document.querySelector('.introduction');
      const introductionBlock = document.querySelectorAll('.introduction__block');
      const teachers = this.$refs.teachers; // if ((window.pageYOffset >= this.$refs.block_3[0].offsetTop && !this.isDesktop) && (this.isOpen.block_3 || this.isOpen.block_4 || this.isOpen.block_5)) {
      //     introduction.classList.add('-bg')
      // } else if ((window.pageYOffset >= this.$refs.block_3[0].offsetTop) && this.isDesktop) {
      //     introduction.classList.add('-bg')
      // } else {
      //     introduction.classList.remove('-bg')
      // }

      if (window.pageYOffset >= ((_introductionBlock$ = introductionBlock[2]) === null || _introductionBlock$ === void 0 ? void 0 : _introductionBlock$.offsetTop) && this.isDesktop) {
        introduction.classList.add('-bg');
      } else if (window.pageYOffset >= ((_introductionBlock$2 = introductionBlock[0]) === null || _introductionBlock$2 === void 0 ? void 0 : _introductionBlock$2.offsetTop) / 3 && !this.isDesktop) {
        introduction.classList.add('-bg');
      } else {
        introduction.classList.remove('-bg');
      }

      if (window.pageYOffset >= teachers.offsetTop - teachers.clientHeight + window.innerHeight * 0.2 && this.isDesktop) {
        introduction.classList.add('-bg-darker');
      } else if (window.pageYOffset >= teachers.offsetTop - window.innerHeight / 1.5 && !this.isDesktop) {
        introduction.classList.add('-bg-darker');
      } else {
        introduction.classList.remove('-bg-darker');
      }
    },

    toggle(key) {
      this.isOpen[`block_${key}`] = !this.isOpen[`block_${key}`];
    },

    gsapInit() {
      external_gsap_default.a.fromTo('.breadcrumb', {
        y: -20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.introduction__title', {
        x: 20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.slide-show', {
        opacity: 0
      }, {
        opacity: 1
      }).delay(1);
      external_gsap_default.a.utils.toArray('.introduction__block').forEach(el => {
        const tl = external_gsap_default.a.timeline({
          scrollTrigger: {
            trigger: el,
            start: window.innerWidth >= 768 ? 'top bottom-=25%' : 'top bottom-=5%',
            toggleActions: 'play none none reverse'
          }
        });
        tl.fromTo(el, {
          marginTop: 30,
          opacity: 0
        }, {
          marginTop: 0,
          opacity: 1
        });
      });
      const tl = external_gsap_default.a.timeline({
        scrollTrigger: {
          trigger: '.introduction__teachers-list',
          start: window.innerWidth >= 768 ? 'top center' : 'top bottom-=15%',
          toggleActions: 'play none none reverse'
        }
      });
      tl.fromTo('.introduction__teachers-item', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.2
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/introduction.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_introductionvue_type_script_lang_js_ = (introductionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/introduction.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(240)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_introductionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "534df0be"
  
)

/* harmony default export */ var introduction = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=introduction.js.map