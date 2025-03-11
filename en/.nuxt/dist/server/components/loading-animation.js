exports.ids = [23];
exports.modules = {

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(289);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("21816068", content, true, context)
};

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-animation{position:fixed;top:0;left:0;overflow:hidden;width:100%;height:100%;z-index:z-index(loading)}.loading-animation__cover{overflow:hidden;background:color(\"Gray/Black\")}.loading-animation__cover,.loading-animation__cover-bg{position:absolute;top:0;left:0;will-change:transform;width:100%;height:100%}.loading-animation__cover-bg{display:block;background:linear-gradient(180deg,#063ce6 14%,rgba(6,59,226,.8984) 18.35%,rgba(6,56,213,.793) 22.87%,rgba(5,50,193,.6859) 27.45%,rgba(4,43,164,.5776) 32.09%,rgba(3,33,126,.4683) 36.78%,rgba(2,21,80,.3582) 41.49%,rgba(1,7,27,.2495) 46.15%,rgba(0,0,0,.2) 48.27%);opacity:.4;transform-origin:left;transform:skewY(18deg)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading/Animation.vue?vue&type=template&id=0f2ee33b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"loading-animation"},[_vm._ssrNode("<div class=\"loading-animation__cover\"><div class=\"loading-animation__cover-bg\"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Loading/Animation.vue?vue&type=template&id=0f2ee33b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading/Animation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var Animationvue_type_script_lang_js_ = ({
  data: () => ({
    loading: false,
    animation: null
  }),
  methods: {
    start() {
      setTimeout(() => {
        this.$gsap.fromTo(this.$refs.cover, {
          x: '-100%'
        }, {
          x: 0,
          duration: 1,
          ease: 'expo.out'
        });
        this.$gsap.fromTo(this.$refs.background, {
          x: '100%'
        }, {
          x: 0,
          duration: 1,
          ease: 'expo.out'
        });
        this.loading = true;
      }, 0);
    },

    finish() {
      setTimeout(() => {
        this.$gsap.to(this.$refs.cover, {
          x: '100%',
          duration: 0.5,
          ease: 'expo.in',
          overwrite: true
        });
        this.$gsap.to(this.$refs.background, {
          x: '-100%',
          duration: 0.5,
          ease: 'expo.in',
          overwrite: true,
          onComplete: () => {
            this.loading = false;
          }
        });
      }, 200);
    }

  }
});
// CONCATENATED MODULE: ./components/Loading/Animation.vue?vue&type=script&lang=js&
 /* harmony default export */ var Loading_Animationvue_type_script_lang_js_ = (Animationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Loading/Animation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(288)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Loading_Animationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "43b307d8"
  
)

/* harmony default export */ var Animation = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=loading-animation.js.map