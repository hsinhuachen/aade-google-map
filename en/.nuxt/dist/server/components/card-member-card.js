exports.ids = [21];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=card-member-card.js.map