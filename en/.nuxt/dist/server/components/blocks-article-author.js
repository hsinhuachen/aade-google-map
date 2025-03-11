exports.ids = [1];
exports.modules = {

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("8fefacac", content, true, context)
};

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleAuthor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleAuthor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleAuthor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleAuthor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleAuthor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".article-author{padding:48px 24px;background-color:#fff}@media(min-width:768px){.article-author{display:flex;padding:72px 64px}}.article-author__title{position:relative;border-bottom:1px solid rgba(51,51,51,.5);padding-bottom:40px;margin-bottom:40px;font-size:22px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.article-author__title{font-size:32px}}@media(min-width:768px){.article-author__title{margin-right:48px;margin-bottom:0;padding:72px 64px;width:calc(41.66667% - 48px);border-bottom:none;border-right:1px solid rgba(51,51,51,.5)}}.article-author__content{width:100%}@media(min-width:768px){.article-author__content{width:58.333333%}}.article-author__content__top{margin-bottom:30px}@media(min-width:768px){.article-author__content__top{display:flex}}.article-author__content__top__image{position:relative;padding-bottom:75%;width:100%;margin-bottom:32px}@media(min-width:768px){.article-author__content__top__image{margin-bottom:0;padding-bottom:37.5%;flex:0 0 50%;width:50%}}.article-author__content__top__image img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center}.article-author__content__top__desc{display:flex;flex-direction:column;justify-content:flex-end;width:100%}@media(min-width:768px){.article-author__content__top__desc{padding-left:24px;flex:0 0 50%;width:50%}}.article-author__content__top__desc__name{margin-bottom:12px;font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.article-author__content__top__desc__name{font-size:24px}}.article-author__content__top__desc__school{font-size:14px;font-weight:500;line-height:1.5}.article-author__content__top__desc__position{color:rgba(51,51,51,.6);font-size:12px;font-weight:400;line-height:1.7}.article-author__content__top__desc__position__seperate{display:inline-block;margin:0 12px;width:1px;height:8px;background-color:rgba(51,51,51,.3)}.article-author__content__bottom{color:rgba(51,51,51,.8);font-size:15px;font-weight:400;line-height:1.7}@media(min-width:1200px){.article-author__content__bottom{font-size:16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/ArticleAuthor.vue?vue&type=template&id=48935472&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-author"},[_vm._ssrNode("<h2 class=\"article-author__title\">\n        Author\n    </h2> <div class=\"article-author__content\"><div class=\"article-author__content__top\"><div class=\"article-author__content__top__image\"><img"+(_vm._ssrAttr("src",_vm.data.photo.url))+(_vm._ssrAttr("alt",_vm.data.name))+"></div> <div class=\"article-author__content__top__desc\"><h3 class=\"article-author__content__top__desc__name\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.data.name)+"\n                ")+"</h3> <h6 class=\"article-author__content__top__desc__school\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.data.school)+"\n                ")+"</h6> <div class=\"article-author__content__top__desc__position\"><span class=\"article-author__content__top__desc__position__department\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.data.department)+"\n                    ")+"</span> "+((_vm.data.department)?("<span class=\"article-author__content__top__desc__position__seperate\"></span>"):"<!---->")+" <span class=\"article-author__content__top__desc__position__job\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.data.job_title)+"\n                    ")+"</span></div></div></div> <div class=\"article-author__content__bottom\">"+(_vm._s(_vm.data.description))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blocks/ArticleAuthor.vue?vue&type=template&id=48935472&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/ArticleAuthor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ArticleAuthorvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,

      default() {
        return Object;
      }

    }
  }
});
// CONCATENATED MODULE: ./components/Blocks/ArticleAuthor.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blocks_ArticleAuthorvue_type_script_lang_js_ = (ArticleAuthorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blocks/ArticleAuthor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(198)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blocks_ArticleAuthorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "37bf0845"
  
)

/* harmony default export */ var ArticleAuthor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blocks-article-author.js.map