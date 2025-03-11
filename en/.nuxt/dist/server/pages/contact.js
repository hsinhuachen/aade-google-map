exports.ids = [27,9,12];
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

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("59aa0f2e", content, true, context)
};

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/google-map-dot.383e009.svg";

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".google-map{position:relative;left:calc(50% - 50vw);margin-bottom:40px;width:100vw;height:400px}@media(min-width:1200px){.google-map{left:unset;margin-bottom:50px;width:100%;height:600px}}.google-map__map-container{position:relative;width:100%;height:100%}.google-map__map-container__google-main-map{position:absolute!important;top:0;bottom:0;right:0;left:0;margin:auto;width:100%;height:100%;z-index:0}.google-map__map-container__zoom-box{position:absolute;bottom:20px;right:20px;z-index:10}.google-map__map-container__zoom-box .zoom-button{display:flex;align-items:center;justify-content:center;margin-bottom:5px;width:40px;height:40px;font-size:1rem;color:#fff;background-color:#444;cursor:pointer}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("49ca0508", content, true, context)
};

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/GoogleMap.vue?vue&type=template&id=40dd5742&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"google-map"},[_vm._ssrNode("<div class=\"google-map__map-container\"><div class=\"google-map__map-container__google-main-map\"></div> <div class=\"google-map__map-container__zoom-box\"><div class=\"zoom-in zoom-button\"><i class=\"icon-plus\"></i></div> <div class=\"zoom-out zoom-button\"><i class=\"icon-out\"></i></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blocks/GoogleMap.vue?vue&type=template&id=40dd5742&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/GoogleMap.vue?vue&type=script&lang=js&
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
/* harmony default export */ var GoogleMapvue_type_script_lang_js_ = ({
  props: {
    id: {
      type: undefined,

      default() {
        return null;
      }

    }
  },

  data() {
    return {
      map: null,
      google: null,
      map_start: false,
      mapResizeTimer: null,
      centerMarker1: null,
      map_styles: [{
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#e9e9e9'
        }, {
          lightness: 17
        }]
      }, {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{
          color: '#f5f5f5'
        }, {
          lightness: 20
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#ffffff'
        }, {
          lightness: 17
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#ffffff'
        }, {
          lightness: 29
        }, {
          weight: 0.2
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
          color: '#ffffff'
        }, {
          lightness: 18
        }]
      }, {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{
          color: '#ffffff'
        }, {
          lightness: 16
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          color: '#f5f5f5'
        }, {
          lightness: 21
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
          color: '#dedede'
        }, {
          lightness: 21
        }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          visibility: 'on'
        }, {
          color: '#ffffff'
        }, {
          lightness: 16
        }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          saturation: 36
        }, {
          color: '#333333'
        }, {
          lightness: 40
        }]
      }, {
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#f2f2f2'
        }, {
          lightness: 19
        }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#fefefe'
        }, {
          lightness: 20
        }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#fefefe'
        }, {
          lightness: 17
        }, {
          weight: 1.2
        }]
      }],
      resizeFunc: null
    };
  },

  mounted() {
    this.google = window.google;
    this.start_map();
    this.resizeFunc = this.resize.bind(this);
    window.addEventListener('resize', this.resizeFunc);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeFunc);
  },

  methods: {
    start_map() {
      this.map_start = true;
      const lat = 25.041 + 0.05;
      const lng = 121.5379;
      const mapProp = {
        center: new this.google.maps.LatLng(lat, lng),
        zoom: 10.6,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        scrollwheel: false,
        mapTypeId: this.google.maps.MapTypeId.ROADMAP,
        styles: this.map_styles,
        text: 'off',
        zoomControl: false
      };
      this.zoom = 10.6;
      this.map = new this.google.maps.Map(this.$refs.googleMainMap, mapProp);
      this.restart_icon();
      this.map_start = false;
    },

    clean_map() {
      this.map = null;
    },

    Zoom_out() {
      if (+this.zoom === 1) {
        return;
      }

      this.map.setZoom(this.zoom - 1);
      this.zoom = this.zoom - 1;
      this.restart_icon();
    },

    restart_icon() {
      if (this.centerMarker1) {
        this.centerMarker1.setMap(null);
      }

      const centerIcon = {
        url: __webpack_require__(180),
        size: new this.google.maps.Size(64, 78),
        scaledSize: new this.google.maps.Size(32, 39),
        origin: new this.google.maps.Point(0, 0),
        anchor: new this.google.maps.Point(0, 0)
      };
      this.centerMarker1 = new this.google.maps.Marker({
        position: new this.google.maps.LatLng(25.041, 121.5379),
        map: this.map,
        title: 'mackent',
        icon: centerIcon,
        optimized: false
      });
    },

    Zoom_in() {
      if (+this.zoom === 22) {
        return;
      }

      this.map.setZoom(this.zoom + 1);
      this.zoom = this.zoom + 1;
      this.restart_icon();
    },

    resize() {
      clearTimeout(this.mapResizeTimer);
      this.mapResizeTimer = setTimeout(() => {
        this.start_map();
      }, 200);
    }

  }
});
// CONCATENATED MODULE: ./components/Blocks/GoogleMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blocks_GoogleMapvue_type_script_lang_js_ = (GoogleMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blocks/GoogleMap.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(181)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blocks_GoogleMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1b3a2b87"
  
)

/* harmony default export */ var GoogleMap = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact{overflow:hidden;padding-top:118px}.contact__page-title{margin-bottom:40px}@media(min-width:1200px){.contact__page-title{margin-bottom:80px;display:flex;align-items:center}}.contact__page-title__title{margin-bottom:40px;font-size:32px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.contact__page-title__title{font-size:48px;width:41.666666%;margin-bottom:0}}.contact__page-title__content{color:rgba(51,51,51,.8);font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.contact__page-title__content{font-size:18px;width:58.333333%}}.contact .google-map{margin-bottom:60px}.contact__info{padding-bottom:80px}@media(min-width:1200px){.contact__info{display:flex;justify-content:space-between;padding-bottom:160px}}.contact__info__item{flex:0 0 auto;margin-bottom:24px}@media(min-width:1200px){.contact__info__item{margin-bottom:0}}@media(min-width:1200px){.contact__info__item.address{flex:0 0 41.666666%;width:41.666666%}}.contact__info__item__title{margin-bottom:8px;color:rgba(51,51,51,.6);font-size:14px;font-weight:500;line-height:1.5}.contact__info__item__value{color:#333;font-size:14px;font-weight:500;line-height:1.5}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=144ccb88&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('BreadCrumb',{attrs:{"data":_vm.data.breadcrumbs}}),_vm._ssrNode(" <div class=\"contact__page-title\"><h1 class=\"contact__page-title__title\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.page_title)+"\n            ")+"</h1> <div class=\"contact__page-title__content\">"+(_vm._s(_vm.data.fields.content))+"</div></div> "),_c('GoogleMap'),_vm._ssrNode(" <div class=\"contact__info\"><div class=\"contact__info__item phone\"><h6 class=\"contact__info__item__title\">\n                    Phone\n                </h6> <h6 class=\"contact__info__item__value\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.data.fields.tel)+"\n                ")+"</h6></div> <div class=\"contact__info__item email\"><h6 class=\"contact__info__item__title\">\n                    E-mail\n                </h6> <h6 class=\"contact__info__item__value\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.data.fields.email)+"\n                ")+"</h6></div> <div class=\"contact__info__item address\"><h6 class=\"contact__info__item__title\">\n                    Address\n                </h6> <h6 class=\"contact__info__item__value\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.data.fields.address)+"\n                ")+"</h6></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=144ccb88&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(10);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// EXTERNAL MODULE: ./components/Blocks/BreadCrumb.vue + 4 modules
var BreadCrumb = __webpack_require__(136);

// EXTERNAL MODULE: ./components/Blocks/GoogleMap.vue + 4 modules
var GoogleMap = __webpack_require__(225);

// EXTERNAL MODULE: ./compositions/functions.js
var functions = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
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
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  components: {
    BreadCrumb: BreadCrumb["default"],
    GoogleMap: GoogleMap["default"]
  },

  async asyncData({
    $config,
    $axios,
    error
  }) {
    try {
      const {
        data
      } = await $axios.$get(`${$config.APP_BACKEND_API}/wp-json/api/contact`);
      const seo = data.fields.seo;
      return {
        data,
        seo
      };
    } catch (e) {
      console.log(e);
      error({
        statusCode: 404,
        message: 'Post not found'
      });
      return {
        data: {},
        seo: {}
      };
    }
  },

  head() {
    return {
      title: this.seo.title + ' | ' + this.$config.APP_TITLE_TEMPLATE,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.seo.desc
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: this.seo.title
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: this.seo.desc
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.APP_URL}${this.$route.fullPath}`
      }, {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: this.seo.title
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.seo.thumb ? this.seo.thumb : `${process.env.APP_URL}/og_img.jpg`
      }, {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: this.seo.desc
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: this.seo.desc
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.seo.title
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: this.seo.thumb ? this.seo.thumb : `${process.env.APP_URL}/og_img.jpg`
      }]
    };
  },

  mounted() {
    this.$store.dispatch('ADD_LOADING_STACK', loadImage());
    this.$store.dispatch('WAIT_LOADING');
    this.gsapInit();
  },

  methods: {
    gsapInit() {
      external_gsap_default.a.fromTo('.breadcrumb', {
        y: -20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.contact__page-title__title', {
        x: -20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.contact__page-title__content', {
        x: 20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.google-map', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }).delay(1);
      external_gsap_default.a.fromTo('.contact__info__item', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.2
      }).delay(1.3);
    }

  }
});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(236)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6acf192e"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map