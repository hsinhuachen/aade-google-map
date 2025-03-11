exports.ids = [29,9,18,22];
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

/***/ 151:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNSA2LjVIMTIuNVY1LjVIMC41VjYuNVpNNyAxMlYwSDZWMTJIN1oiIGZpbGw9IiMzMzMzMzMiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c5ced6f4", content, true, context)
};

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dropdown{position:relative;display:inline-block;width:100%;color:#333}@media(min-width:768px){.dropdown{margin-right:40px;width:205px}}.dropdown__title{position:relative;padding:8px 36px 8px 16px;color:rgba(0,0,0,.5);background-color:#f8f8f8;border:1px solid rgba(51,51,51,.6);z-index:2;transition:background-color .3s;cursor:pointer;font-size:15px;font-weight:400;line-height:1.7}@media(min-width:1200px){.dropdown__title{font-size:16px}}.dropdown__title:active,.dropdown__title:hover{background-color:#eaeaea}.dropdown__title>p{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dropdown__title__icon{position:absolute;top:20px;right:20px}.dropdown__lists{position:absolute;width:100%;background-color:#f8f8f8;border:1px solid rgba(51,51,51,.6);border-top:0 solid rgba(51,51,51,.6);opacity:0;transform:translateY(-8px);z-index:1;transition:.6s;pointer-events:none}.dropdown__lists__list{position:relative;padding:10px 36px 10px 10px;width:100%;border-bottom:1px solid rgba(51,51,51,.3);transition:background-color .3s}.dropdown__lists__list:hover{background-color:#eaeaea}.dropdown__lists__list input{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer}.dropdown.active .dropdown__lists{opacity:1;transform:translateY(0);pointer-events:auto}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DropDown.vue?vue&type=template&id=dc9cfa68&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"dropdown",staticClass:"dropdown",class:{active: _vm.isOpen}},[_vm._ssrNode("<div class=\"dropdown__title\"><p>"+_vm._ssrEscape(_vm._s(_vm.currentName))+"</p> <svg width=\"12\" height=\"6\" viewBox=\"0 0 12 6\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\" class=\"dropdown__title__icon\"><path d=\"M11 0.500001L6 4.5L1 0.5\" stroke=\"black\"></path></svg></div> <ul class=\"dropdown__lists\"><li class=\"dropdown__lists__list\"><input type=\"radio\" value title=\"All\"> <p>All</p></li> "+(_vm._ssrList((_vm.data),function(list){return ("<li class=\"dropdown__lists__list\"><input type=\"radio\""+(_vm._ssrAttr("title",list.slug))+(_vm._ssrAttr("value",list.slug))+"> <p>"+_vm._ssrEscape(_vm._s(list.name))+"</p></li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DropDown.vue?vue&type=template&id=dc9cfa68&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DropDown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DropDownvue_type_script_lang_js_ = ({
  props: {
    name: {
      type: String,

      default() {
        return '';
      }

    },
    data: {
      type: Array,

      default() {
        return [];
      }

    }
  },
  emits: ['changeValue'],

  data() {
    return {
      isOpen: false,
      currentName: '',
      currentSlug: ''
    };
  },

  mounted() {
    const query = this.$route.query['cat-' + this.name];

    if (query) {
      const item = this.data.find(el => el.slug === this.$route.query['cat-' + this.name]);
      this.currentName = item.name;
      this.currentSlug = item.slug;
    } else {
      this.currentName = 'All';
      this.currentSlug = '';
    }

    window.addEventListener('click', this.closeDropdownFromOut);
  },

  beforeDestroy() {
    window.removeEventListener('click', this.closeDropdownFromOut);
  },

  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },

    closeDropDown() {
      this.isOpen = false;
    },

    closeDropdownFromOut(e) {
      if (e.target.closest('.dropdown') !== this.$refs.dropdown) {
        this.isOpen = false;
      }
    },

    select(e) {
      if (e.target.value !== '') {
        this.currentName = this.data.find(el => el.slug === e.target.value).name;
        this.currentSlug = this.data.find(el => el.slug === e.target.value).slug;
      } else {
        this.currentName = 'All';
        this.currentSlug = '';
      }

      this.closeDropDown();
      this.transValue();
    },

    transValue() {
      const obj = {};
      obj[this.name] = this.currentSlug; // obj.name = this.name
      // obj.slug = this.currentSlug

      this.$emit('changeValue', obj);
    }

  }
});
// CONCATENATED MODULE: ./components/DropDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DropDownvue_type_script_lang_js_ = (DropDownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/DropDown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(183)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DropDownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6f813a3e"
  
)

/* harmony default export */ var DropDown = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(239);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3abd2e0c", content, true, context)
};

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(206);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".courses{overflow:hidden}.courses__container-xs-fluid{position:relative;padding-top:159px}@media(max-width:767.98px){.courses__container-xs-fluid{padding:118px 0 0}}.courses__container-xs-fluid:before{content:\"\";position:absolute;top:0;left:calc(50% - 50vw);width:100vw;height:100%;background-color:#fff}.courses .breadcrumb{padding:0 24px}@media(min-width:1200px){.courses .breadcrumb{padding:0}}.courses__title{padding:0 24px;margin-bottom:64px;font-size:32px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.courses__title{font-size:48px;padding:0;margin-bottom:32px}}.courses__intro{position:relative;display:flex;flex-direction:column}@media(min-width:1200px){.courses__intro{flex-direction:row;margin-bottom:32px}}.courses__intro__image{flex:0 0 100%;order:2;width:100%;height:248px}@media(min-width:1200px){.courses__intro__image{flex:0 0 50%;order:1;width:50%;height:calc(100% - 48px);min-height:535px}}.courses__intro__image img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center}@media(min-width:1200px){.courses__intro__image img{position:relative;left:calc(100% - 50vw);width:50vw}}.courses__intro__content{position:relative;display:flex;align-items:center;flex:0 0 100%;padding:0 24px 48px;width:100%;background-color:#fff}@media(min-width:1200px){.courses__intro__content{flex:0 0 50%;padding-left:64px;width:50%;order:1}}.courses__intro__content:after{content:\"\";position:absolute;top:0;right:0;width:calc(50vw - 100%);height:100%;transform:translateX(100%);background-color:#fff}.courses__intro__content__title{font-size:22px;font-weight:700;line-height:1.3;letter-spacing:.5px;margin-bottom:48px}@media(min-width:1200px){.courses__intro__content__title{font-size:32px}}.courses__intro__content__sub-title{font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px;margin-bottom:24px}@media(min-width:1200px){.courses__intro__content__sub-title{font-size:18px}}.courses__intro__content__desc{font-size:15px;font-weight:400;line-height:1.7;color:rgba(51,51,51,.8)}@media(min-width:1200px){.courses__intro__content__desc{font-size:16px}}.courses__filter{position:relative;display:flex;flex-direction:column;padding-top:80px;z-index:1}@media(min-width:768px){.courses__filter{flex-direction:row}}.courses__filter__item{display:flex;align-items:center;margin-bottom:24px}.courses__filter__item:first-child{z-index:1}.courses__filter__item__name{display:inline-block;margin-right:12px;width:65px;flex:1 0 auto}@media(min-width:768px){.courses__filter__item__name{width:auto;flex-direction:row}}.courses__articles{display:flex;flex-wrap:wrap;margin-bottom:40px;padding:20px 0}@media(min-width:768px){.courses__articles{margin:0 -12px 80px}}.courses__articles-item{margin-bottom:24px;width:100%}@media(min-width:768px){.courses__articles-item{padding:0 12px;margin-bottom:72px;width:25%}}.courses__button{text-align:center;opacity:.5;margin-bottom:80px}@media(min-width:1200px){.courses__button{margin-bottom:160px}}.courses__button.disable{opacity:0!important;pointer-events:none;transition:opacity .3s}.courses .button{font-size:14px;font-weight:500;line-height:1.5;padding:12px 72px;color:rgba(51,51,51,.5);background-color:#f0f0f0;opacity:1;transition:opacity .5s;letter-spacing:.5px}.courses .button:hover{opacity:.5}.courses .button img{margin-bottom:4px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/index.vue?vue&type=template&id=4700d369&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"courses"},[_vm._ssrNode("<div class=\"container courses__container-xs-fluid\">","</div>",[_c('BreadCrumb',{attrs:{"data":_vm.data.breadcrumbs}}),_vm._ssrNode(" <h1 class=\"courses__title\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.data.title)+"\n        ")+"</h1> <div class=\"courses__intro\"><div class=\"courses__intro__image\"><img"+(_vm._ssrAttr("src",_vm.data.pinned_block.image.url))+(_vm._ssrAttr("alt",_vm.data.pinned_block.title))+"></div> <div class=\"courses__intro__content\"><div>"+((_vm.data.pinned_block.title)?("<h2 class=\"courses__intro__content__title\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.data.pinned_block.title)+"\n                    ")+"</h2>"):"<!---->")+" "+((_vm.data.pinned_block.subtitle)?("<h4 class=\"courses__intro__content__sub-title\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.data.pinned_block.subtitle)+"\n                    ")+"</h4>"):"<!---->")+" <div class=\"courses__intro__content__desc\">"+(_vm._s(_vm.data.pinned_block.content))+"</div></div></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"courses__filter\">","</div>",[_vm._ssrNode("<div class=\"courses__filter__item\">","</div>",[_vm._ssrNode("<div class=\"courses__filter__item__name\"><p>Program</p></div> "),_c('DropDown',{attrs:{"name":"program","data":_vm.program},on:{"changeValue":_vm.filterPage}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"courses__filter__item\">","</div>",[_vm._ssrNode("<div class=\"courses__filter__item__name\"><p>Facet</p></div> "),_c('DropDown',{attrs:{"name":"facet","data":_vm.facet},on:{"changeValue":_vm.filterPage}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"courses__articles\">","</ul>",_vm._l((_vm.currentPosts),function(item){return _vm._ssrNode("<li class=\"courses__articles-item\">","</li>",[_c('ArticleCard',{attrs:{"data":item}})],1)}),0),_vm._ssrNode(" <div"+(_vm._ssrClass("courses__button",{disable: _vm.currentPosts.length === _vm.totalPosts.length}))+"><button type=\"button\" class=\"button\">\n                SEE MORE <img"+(_vm._ssrAttr("src",__webpack_require__(151)))+" alt=\"SEE MORE\"></button></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/courses/index.vue?vue&type=template&id=4700d369&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(10);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(7);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./components/Blocks/BreadCrumb.vue + 4 modules
var BreadCrumb = __webpack_require__(136);

// EXTERNAL MODULE: ./components/DropDown.vue + 4 modules
var DropDown = __webpack_require__(203);

// EXTERNAL MODULE: ./components/Card/ArticleCard.vue + 4 modules
var ArticleCard = __webpack_require__(139);

// EXTERNAL MODULE: ./compositions/functions.js
var functions = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var coursesvue_type_script_lang_js_ = ({
  components: {
    BreadCrumb: BreadCrumb["default"],
    DropDown: DropDown["default"],
    ArticleCard: ArticleCard["default"]
  },

  async asyncData({
    $config,
    $axios,
    route,
    error
  }) {
    try {
      const query = route.query;
      let res;
      let data;
      let filter = {
        program: '',
        facet: ''
      };

      if (query['cat-program'] || query['cat-facet']) {
        res = await $axios.$get(`${$config.APP_BACKEND_API}/wp-json/api/courses/filter?cat-program=${query['cat-program']}&cat-facet=${query['cat-facet']}`);
        data = res.data;
        filter = {
          program: query['cat-program'] || '',
          facet: query['cat-facet'] || ''
        };
      } else {
        res = await $axios.$get(`${$config.APP_BACKEND_API}/wp-json/api/courses`);
        data = res.data;
      }

      const seo = data.seo;
      const totalPosts = data.posts;
      const currentPosts = totalPosts.slice(0, 12);
      const totalPage = Math.ceil(totalPosts.length / 12);
      const facet = [];

      for (const prop in data.categories['cat-facet']) {
        facet.push({
          name: data.categories['cat-facet'][prop].name,
          slug: data.categories['cat-facet'][prop].slug
        });
      }

      const program = [];

      for (const prop in data.categories['cat-program']) {
        program.push({
          name: data.categories['cat-program'][prop].name,
          slug: data.categories['cat-program'][prop].slug
        });
      }

      return {
        data,
        seo,
        currentPosts,
        totalPosts,
        totalPage,
        facet,
        program,
        filter
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
        currentPosts: '',
        totalPosts: [],
        totalPage: 0,
        facet: [],
        program: [],
        filter: {
          program: '',
          facet: ''
        }
      };
    }
  },

  data() {
    return {
      currentPosts: [],
      totalPosts: [],
      currentPage: 1,
      totalPage: 0,
      filter: {
        program: '',
        facet: ''
      }
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
    this.resizeIntro();
    window.addEventListener('resize', this.resizeIntro);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeIntro);
  },

  methods: {
    updatePage() {
      this.currentPage += 1;
      const prevPostsLength = this.currentPosts.length;
      const newPosts = this.totalPosts.slice((this.currentPage - 1) * 12, (this.currentPage - 1) * 12 + 12);
      this.currentPosts.push(...newPosts);
      this.$nextTick(function () {
        const els = external_gsap_default.a.utils.toArray('.courses__articles-item').slice(prevPostsLength);
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

    async filterPage(val) {
      this.filter = { ...this.filter,
        ...val
      };
      this.$router.replace({
        path: '/courses',
        query: {
          'cat-program': this.filter.program,
          'cat-facet': this.filter.facet
        }
      });
      const res = await external_axios_default.a.get(`${this.$config.APP_BACKEND_API}/wp-json/api/courses/filter?cat-program=${this.filter.program}&cat-facet=${this.filter.facet}`);
      const data = res.data.data;
      this.totalPosts = data.posts;
      this.currentPosts = data.posts.slice(0, 12);
      this.totalPage = Math.ceil(data.posts.length / 12);
      this.currentPage = 1;
      this.$nextTick(function () {
        const els = external_gsap_default.a.utils.toArray('.courses__articles-item');
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
      external_gsap_default.a.fromTo('.breadcrumb', {
        y: -20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.courses__title', {
        x: 20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.courses__intro__image', {
        opacity: 0
      }, {
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.courses__intro__content', {
        opacity: 0
      }, {
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.courses__intro__content > div', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }).delay(1.3);
      external_gsap_default.a.fromTo('.courses__filter__item', {
        x: 20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.1
      }).delay(1.3);
      const tl = external_gsap_default.a.timeline();
      tl.fromTo('.courses__articles-item', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.2
      }).delay(1.6);
    },

    resizeIntro() {
      this.$refs.intro.style.height = null;

      if (window.innerWidth >= 1200) {
        this.$refs.intro.style.height = this.$refs.introContent.clientHeight + 'px';
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/courses/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_coursesvue_type_script_lang_js_ = (coursesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/courses/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(238)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_coursesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c72b2e78"
  
)

/* harmony default export */ var courses = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DropDown: __webpack_require__(203).default})


/***/ })

};;
//# sourceMappingURL=index.js.map