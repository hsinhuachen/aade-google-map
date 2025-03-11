exports.ids = [22];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=drop-down.js.map