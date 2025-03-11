exports.ids = [10,17];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=blocks-featured-article.js.map