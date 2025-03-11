exports.ids = [13];
exports.modules = {

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(283);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("047a9ade", content, true, context)
};

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mw-1.4345f4f.png";

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mw-2.5b352ee.png";

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mw-3.9e1b9fd.png";

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(221);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".o-index-memory{position:relative;overflow:hidden;height:100vh}.o-index-memory__heading{padding:88px 120px 0;font-size:40px;font-weight:500;line-height:1.8;letter-spacing:5px;color:#000}@media(max-width:1199px){.o-index-memory__heading{font-size:30px;line-height:1.4;letter-spacing:1px}}@media(max-width:767px){.o-index-memory__heading{font-size:20px;line-height:1.5;letter-spacing:.67px}}.o-index-memory__bottom-img{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:920px;max-width:80%;height:auto}.o-index-memory__gallery{position:relative;display:flex;flex-direction:column;align-items:center;overflow-x:hidden;overflow-y:hidden;padding:0 0 10rem;width:100vh;height:100vw;transform:rotate(-90deg) translate3d(0,-100vh,0);transform-origin:right top;perspective:1px;transform-style:preserve-3d;-ms-overflow-style:none;scrollbar-width:none;cursor:-webkit-grab;cursor:grab}.o-index-memory__gallery:active{cursor:-webkit-grabbing;cursor:grabbing}.o-index-memory__gallery::-webkit-scrollbar{display:none}.o-index-memory__gallery__img{display:flex;align-items:center;justify-content:center;min-height:40vh;transform-origin:50% 50%;transform:rotate(90deg) translateZ(.1px) scale(.9) translateX(0) translateY(-3vh);transition:1s}.o-index-memory__gallery__img>*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.o-index-memory__gallery__img img{max-width:45vh;max-height:50vh;transition:.5s;vertical-align:top}.o-index-memory__gallery__img.slower{transform:rotate(90deg) translateZ(-.6px) scale(2) translateX(0) translateY(-17.5vh)}.o-index-memory__gallery__img.slower1{transform:rotate(90deg) translateZ(-.25px) scale(1.05) translateX(0) translateY(8vh)}.o-index-memory__gallery__img.slower2{transform:rotate(90deg) translateZ(-.3px) scale(1.3) translateX(0) translateY(2vh)}.o-index-memory__gallery__img.slower-down{transform:rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0) translateY(16vh)}.o-index-memory__gallery__img.faster{transform:rotate(90deg) translateZ(-.8px) scale(.9) translateX(0) translateY(3vh)}.o-index-memory__gallery__img.faster1{transform:rotate(90deg) translateZ(.05px) scale(.8) translateX(0) translateY(10vh)}.o-index-memory__gallery__img.fastest{transform:rotate(90deg) translateZ(.22px) scale(.7) translateX(-10vh) translateY(-15vh)}.o-index-memory__gallery__img.vertical{transform:rotate(90deg) translateZ(.5px) scale(.5) translateX(0) translateY(-29vh)}.o-index-memory__gallery__img.last{transform:rotate(90deg) translateZ(-.2px) scale(1.1) translateX(25vh) translateY(-8vh)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/ParallaxGallery.vue?vue&type=template&id=3a854106&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"o-index-memory"},[_vm._ssrNode("<h2 class=\"o-index-memory__heading\">\n        Memory Wall\n    </h2> <svg width=\"490\" height=\"212\" viewBox=\"0 0 490 212\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\" class=\"o-index-memory__bottom-img\"><path d=\"M122.5 0.333217L0 212L490 212L367.5 0.333206L122.5 0.333217Z\" fill=\"#EAEAEA\"></path></svg> <div class=\"o-index-memory__gallery\"><div class=\"o-index-memory__gallery__img slower\"><img draggable=\"false\""+(_vm._ssrAttr("src",__webpack_require__(279)))+" alt></div> <div class=\"o-index-memory__gallery__img faster\"><img draggable=\"false\""+(_vm._ssrAttr("src",__webpack_require__(280)))+" alt></div> <div class=\"o-index-memory__gallery__img slower vertical\"><img draggable=\"false\""+(_vm._ssrAttr("src",__webpack_require__(281)))+" alt></div> <div class=\"o-index-memory__gallery__img slower slower-down\"></div> <div class=\"o-index-memory__gallery__img\"></div> <div style=\"display: none;\"><div class=\"o-index-memory__gallery__img slower slower-down\"><img draggable=\"false\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/swanduckriver.jpg\" alt></div> <div class=\"o-index-memory__gallery__img\"><img draggable=\"false\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-terrace.jpg\" alt></div> <div class=\"o-index-memory__gallery__img slower\"><img draggable=\"false\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-seine-boat.jpg\" alt></div> <div class=\"o-index-memory__gallery__img faster1\"><img draggable=\"false\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/old-man-river.jpg\" alt></div> <div class=\"o-index-memory__gallery__img slower slower2\"><img draggable=\"false\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-table-street.jpg\" alt></div> <div class=\"o-index-memory__gallery__img\"><img draggable=\"false\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/street-scene-people.jpg\" alt></div> <div class=\"o-index-memory__gallery__img slower\"><img draggable=\"false\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg\" alt></div> <div class=\"o-index-memory__gallery__img slower last\"><img draggable=\"false\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/shop-window-reflection.jpg\" alt></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blocks/ParallaxGallery.vue?vue&type=template&id=3a854106&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(10);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/ParallaxGallery.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ParallaxGalleryvue_type_script_lang_js_ = ({
  data() {
    return {
      t1: null,
      offsetTop: 0,
      scrollTop: 0,
      interval: null,
      isDrag: false,
      isDragging: false,
      dir: 'right',
      touchX: 0
    };
  },

  mounted() {
    this.t1 = external_gsap_default.a.timeline();
    this.offsetTop = this.$refs.gallery.scrollHeight - window.innerWidth;
    this.autoFly();
    this.initInterval();
  },

  beforeDestroy() {
    window.clearInterval(this.interval);
  },

  methods: {
    drag(e) {
      this.isDragging = true;

      if (!this.isDrag) {
        return;
      }

      let moveX;

      if (e.touches) {
        moveX = e.touches[0].clientX - this.touchX;
        this.touchX = e.touches[0].clientX;
      } else {
        moveX = e.movementX;
      }

      this.$refs.gallery.scrollBy(0, -moveX);
      this.scrollTop = this.$refs.gallery.scrollTop;
      this.dir = e.movementX >= 0 ? 'left' : 'right';

      if (this.scrollTop < 10) {
        this.dir = 'right';
      } else if (this.scrollTop > this.offsetTop - 10) {
        this.dir = 'left';
      }
    },

    enableDrag(e) {
      this.isDrag = true;
      this.killFly();
      this.killInterval();

      if (e.touches) {
        this.touchX = e.touches[0].clientX;
      }
    },

    disableDrag() {
      this.isDragging = false;

      if (!this.isDrag) {
        return;
      }

      this.isDrag = false;
      this.t1 = external_gsap_default.a.timeline();
      this.autoFly(this.dir);
      this.initInterval();
    },

    autoFly(dir) {
      if (dir === 'left') {
        this.t1.to(this, {
          scrollTop: 0,
          duration: 120 * this.scrollTop / this.offsetTop,
          ease: 'linear'
        });
      } else {
        this.t1.to(this, {
          scrollTop: this.offsetTop,
          duration: 120 * (1 - this.scrollTop / this.offsetTop),
          ease: 'linear'
        });
      }
    },

    killFly() {
      this.t1.kill();
    },

    initInterval() {
      this.interval = setInterval(() => {
        this.$refs.gallery.scrollTo(0, this.scrollTop);
      }, 20);
    },

    killInterval() {
      window.clearInterval(this.interval);
    }

  }
});
// CONCATENATED MODULE: ./components/Blocks/ParallaxGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blocks_ParallaxGalleryvue_type_script_lang_js_ = (ParallaxGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blocks/ParallaxGallery.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(282)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blocks_ParallaxGalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b2bc7042"
  
)

/* harmony default export */ var ParallaxGallery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blocks-parallax-gallery.js.map