exports.ids = [5];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=blocks-article-nav.js.map