exports.ids = [18];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=card-article-card.js.map