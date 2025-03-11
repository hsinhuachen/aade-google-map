exports.ids = [3];
exports.modules = {

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("285d3acc", content, true, context)
};

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleBigNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleBigNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleBigNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleBigNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleBigNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".article-big-nav{display:flex;flex-direction:column;padding:24px 16px;width:100%;border-top:1px solid rgba(51,51,51,.3);border-bottom:1px solid rgba(51,51,51,.3)}@media(min-width:768px){.article-big-nav{flex-direction:row;padding:40px 0}}.article-big-nav>a{display:flex;width:100%;transition:opacity .2s}.article-big-nav>a:hover{opacity:.5}@media(max-width:767.98px){.article-big-nav>a.solo{padding:0;border:none}}.article-big-nav>a.disable{display:none;pointer-events:none}@media(min-width:768px){.article-big-nav>a.disable{display:flex}}@media(min-width:768px){.article-big-nav>a{flex:0 1 50%;width:50%}}.article-big-nav h4{margin-bottom:8px;color:rgba(51,51,51,.3);font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.article-big-nav h4{font-size:18px}}@media(min-width:768px){.article-big-nav h4{margin-bottom:16px}}.article-big-nav h3{font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.article-big-nav h3{font-size:24px}}.article-big-nav__prev{display:flex;padding-bottom:24px;border-bottom:1px solid rgba(51,51,51,.3)}@media(min-width:768px){.article-big-nav__prev{padding-bottom:0;border:none}}.article-big-nav__prev__nav{flex:0 1 100%}.article-big-nav__prev__icon{flex:0 0 24px;display:flex;margin-left:32px;order:2}@media(min-width:768px){.article-big-nav__prev__icon{margin-right:32px;margin-left:0;order:0}}.article-big-nav__prev__icon svg{margin:auto;transform:rotate(180deg)}@media(min-width:768px){.article-big-nav__prev__icon svg{transform:rotate(0)}}.article-big-nav__prev__none{margin:auto;font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.article-big-nav__prev__none{font-size:24px}}.article-big-nav__next{display:flex;padding-top:24px}@media(min-width:768px){.article-big-nav__next{padding-top:0}}.article-big-nav__next__nav{flex:0 1 100%}@media(min-width:768px){.article-big-nav__next__nav{text-align:right}}.article-big-nav__next__icon{flex:0 0 24px;display:flex;margin-left:32px}.article-big-nav__next__icon svg{margin:auto}.article-big-nav__next__none{margin:auto;font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.article-big-nav__next__none{font-size:24px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/ArticleBigNav.vue?vue&type=template&id=b45feea4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.data.prev_post || _vm.data.next_post)?_c('div',{staticClass:"article-big-nav"},[_c('NuxtLink',{staticClass:"article-big-nav__prev",class:{disable: !_vm.data.prev_post, solo: !_vm.data.prev_post || !_vm.data.next_post},attrs:{"to":_vm.data.prev_post ? ("/" + (_vm.$route.path.split('/')[1]) + "/" + (_vm.data.prev_post.post_name)) : '/',"title":_vm.data.prev_post ? _vm.data.prev_post.post_title : '沒有上一篇文章'}},[(_vm.data.prev_post)?_c('div',{staticClass:"article-big-nav__prev__icon"},[_c('svg',{attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"https://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15 5L9 12.5L15 20","stroke":"#333333"}})])]):_vm._e(),_vm._v(" "),(_vm.data.prev_post)?_c('div',{staticClass:"article-big-nav__prev__nav"},[_c('h4',[_vm._v("Previous")]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.data.prev_post ? _vm.data.prev_post.post_title : ''))])]):_vm._e(),_vm._v(" "),(!_vm.data.prev_post)?_c('div',[_vm._v("\n            沒有上一篇文章\n        ")]):_vm._e()]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"article-big-nav__next",class:{disable: !_vm.data.next_post, solo: !_vm.data.prev_post || !_vm.data.next_post},attrs:{"to":_vm.data.next_post ? ("/" + (_vm.$route.path.split('/')[1]) + "/" + (_vm.data.next_post.post_name)) : '/',"title":_vm.data.next_post ? _vm.data.next_post.post_title : '沒有下一篇文章'}},[(_vm.data.next_post)?_c('div',{staticClass:"article-big-nav__next__nav"},[_c('h4',[_vm._v("Next")]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.data.next_post ? _vm.data.next_post.post_title : ''))])]):_vm._e(),_vm._v(" "),(_vm.data.next_post)?_c('div',{staticClass:"article-big-nav__next__icon"},[_c('svg',{attrs:{"width":"24","height":"25","viewBox":"0 0 24 25","fill":"none","xmlns":"https://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M9 5.5L15 13L9 20.5","stroke":"#333333"}})])]):_vm._e(),_vm._v(" "),(!_vm.data.next_post)?_c('div',[_vm._v("\n            沒有下一篇文章\n        ")]):_vm._e()])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blocks/ArticleBigNav.vue?vue&type=template&id=b45feea4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/ArticleBigNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ArticleBigNavvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,

      default() {
        return {};
      }

    }
  }
});
// CONCATENATED MODULE: ./components/Blocks/ArticleBigNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blocks_ArticleBigNavvue_type_script_lang_js_ = (ArticleBigNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blocks/ArticleBigNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(167)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blocks_ArticleBigNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7b567ebd"
  
)

/* harmony default export */ var ArticleBigNav = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blocks-article-big-nav.js.map