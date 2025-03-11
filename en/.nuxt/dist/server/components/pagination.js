exports.ids = [25];
exports.modules = {

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("09c3f1d8", content, true, context)
};

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pagination{display:flex;justify-content:center;color:color(\"Gray/Light Gray\")}.pagination__link,.pagination__main{display:flex;align-items:center}.pagination__link{position:relative;padding:0 12px;transition:color .3s;cursor:pointer}@media(hover:hover){.pagination__link:hover{color:color(\"Gray/White\")}}.pagination__link a{position:absolute;top:0;left:0;opacity:0;width:100%;height:100%}.pagination__link:after,.pagination__link:before{pointer-events:none}.pagination__link.-head{margin-right:12px;padding-right:0}.pagination__link.-head:after{content:\"...\";display:block;padding-left:12px}.pagination__link.-end{margin-left:12px;padding-left:0}.pagination__link.-end:before{content:\"...\";display:block;padding-right:12px}.pagination__link.-disable{pointer-events:none}.pagination__link.-active{text-decoration:underline;color:color(\"Gray/White\");text-underline-offset:6px}.pagination__prev{margin-right:10px;padding:0 10px}.pagination__next{margin-left:10px;padding:0 10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=template&id=7e731cb4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pagination"},[_vm._ssrNode("<div"+(_vm._ssrClass("pagination__prev pagination__link",{'-disable': _vm.now === 1}))+">","</div>",[_c('svg-icon',{attrs:{"name":"left"}}),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":{query: _vm.pageRouteQuery(_vm.now - 1)}}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pagination__main\">","</div>",_vm._l((_vm.list),function(item,index){return _vm._ssrNode("<div"+(_vm._ssrClass("pagination__link",{
                '-active': item === _vm.now,
                '-head': index === 0 && _vm.list[1] > 2,
                '-end': index + 1 === _vm.list.length && _vm.list[index - 1] < item - 1
            }))+">","</div>",[_vm._ssrNode(_vm._ssrEscape("\n            "+_vm._s(item)+"\n            ")),_c('nuxt-link',{attrs:{"to":{query: _vm.pageRouteQuery(item)}}})],2)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("pagination__next pagination__link",{'-disable': _vm.now === _vm.list[_vm.list.length - 1]}))+">","</div>",[_c('svg-icon',{attrs:{"name":"right"}}),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":{query: _vm.pageRouteQuery(_vm.now + 1)}}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=template&id=7e731cb4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  props: {
    max: {
      type: Number,
      default: 1
    },
    now: {
      type: Number,
      default: 1
    }
  },
  computed: {
    list() {
      const MAX = Math.max(this.max, 1);
      let indexList = [this.now - 1, this.now, this.now + 1]; // min max

      indexList.push(1);
      indexList.push(MAX); // filter the same

      indexList = indexList.filter((v, i) => indexList.indexOf(v) === i); // clamp min max

      indexList = indexList.filter(v => v > 0 && v <= MAX);
      return indexList.sort((a, b) => a - b);
    }

  },

  mounted() {},

  methods: {
    pageRouteQuery(page) {
      return { ...this.$route.query,
        page
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Pagination.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2a85b3e7"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pagination.js.map