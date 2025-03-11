exports.ids = [11];
exports.modules = {

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2aa566cc", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GallerySlide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GallerySlide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GallerySlide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GallerySlide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GallerySlide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".gallery{width:100vw;height:400px}@media screen and (min-width:640px){.gallery{height:650px}}@media screen and (min-width:1440px){.gallery{height:1000px}}.gallery__container{position:relative;width:100%;height:100%}.gallery .swiper-container{overflow:visible;width:100%;height:100%}.gallery__slide__image{position:absolute}.gallery__slide__image .img-box{padding-bottom:67.2%;width:100%}.gallery__slide__image img{position:absolute;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media(min-width:768px){.gallery__slide__image.offset{left:calc(50% - 351px)!important}}@media(min-width:992px){.gallery__slide__image.offset{left:calc(50% - 456px)!important}}@media(max-width:1023px){.gallery__slide__image.offset{width:40%!important}}@media(min-width:1024px){.gallery__slide__image.offset{left:inherit!important}}.gallery__slide:nth-child(odd) .gallery__slide__image:first-child{top:0;left:24px;width:60%;z-index:1}.gallery__slide:nth-child(odd) .gallery__slide__image:nth-child(2){top:50%;left:11%;width:38%}.gallery__slide:nth-child(odd) .gallery__slide__image:nth-child(3){top:24%;right:5%;width:40%;z-index:1}.gallery__slide:nth-child(2n) .gallery__slide__image:first-child{top:35%;left:5%;width:30%}.gallery__slide:nth-child(2n) .gallery__slide__image:nth-child(2){top:0;right:10%;width:60%;z-index:1}.gallery__slide:nth-child(2n) .gallery__slide__image:nth-child(3){top:45%;right:12%;width:40%}@media(min-width:1024px){.gallery__slide:nth-child(odd) .gallery__slide__image:first-child{top:0;left:0;width:45%;z-index:1}.gallery__slide:nth-child(odd) .gallery__slide__image:nth-child(2){top:60%;left:40%;width:15%}.gallery__slide:nth-child(odd) .gallery__slide__image:nth-child(3){top:5%;right:0;width:30%}.gallery__slide:nth-child(2n) .gallery__slide__image:first-child{top:20%;left:5%;width:25%}.gallery__slide:nth-child(2n) .gallery__slide__image:nth-child(2){top:20%;right:unset;left:44%;width:18%;z-index:1}.gallery__slide:nth-child(2n) .gallery__slide__image:nth-child(3){top:33%;right:3%;width:40%}}.gallery .slide-show__button{position:absolute;top:-40px;right:20px;display:none}@media(min-width:1024px){.gallery .slide-show__button{top:-73px;right:40px;display:block}}.gallery .swiper-navigation{display:flex;align-items:center;width:80px}.gallery .swiper-button-next,.gallery .swiper-button-prev{--swiper-navigation-size:24px;color:#333}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/GallerySlide.vue?vue&type=template&id=5ae2219b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gallery"},[_vm._ssrNode("<div class=\"gallery__container\"><div class=\"swiper-container\"><div class=\"swiper-wrapper\">"+(_vm._ssrList((_vm.imageGroup),function(group,i){return ("<div class=\"gallery__slide swiper-slide\">"+(_vm._ssrList((group),function(img,j){return ("<div"+(_vm._ssrClass("gallery__slide__image",{offset: i % 2 === 0 && j === 0}))+(_vm._ssrStyle(null,{width: img.width, top: img.top, left: img.left, right: img.right, bottom: img.bottom, zIndex: img.zIndex}, null))+"><div class=\"img-box\"><img draggable=\"false\""+(_vm._ssrAttr("src",img.url))+(_vm._ssrAttr("alt",img.title))+"></div></div>")}))+"</div>")}))+"</div> <div class=\"slide-show__button\"><div class=\"swiper-navigation slide-show__navigation\"><div class=\"swiper-button-prev\"></div> <div class=\"swiper-button-next\"></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blocks/GallerySlide.vue?vue&type=template&id=5ae2219b&

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(126);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blocks/GallerySlide.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var GallerySlidevue_type_script_lang_js_ = ({
  props: {
    images: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  data() {
    return {
      imageGroup: []
    };
  },

  mounted() {
    for (let i = 0; i < this.images.length; i += 3) {
      const group = this.images.slice(i, i + 3);
      this.imageGroup.push(group);
    }

    this.$nextTick(function () {
      new external_swiper_default.a('.gallery .swiper-container', {
        slidesPerView: 1,
        freeMode: true,
        grabCursor: true,
        navigation: {
          nextEl: '.gallery .swiper-button-next',
          prevEl: '.gallery .swiper-button-prev'
        }
      });
    });
  }

});
// CONCATENATED MODULE: ./components/Blocks/GallerySlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blocks_GallerySlidevue_type_script_lang_js_ = (GallerySlidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blocks/GallerySlide.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(200)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blocks_GallerySlidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3bc33f0b"
  
)

/* harmony default export */ var GallerySlide = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blocks-gallery-slide.js.map