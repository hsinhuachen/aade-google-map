exports.ids = [30,11,18];
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

/***/ }),

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

/***/ 202:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"zh":{"hello":"你好"},"en":{"hello":"hello!"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/round_texture_01-1.174e642.png";

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NyIgaGVpZ2h0PSI0NiI+PHBhdGggZmlsbD0iIzU5NTc1NyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjMuMTQ2IDIzLjExOGgtLjAyOEMxMC42MjYgMjMuMTE4LjUgMTIuOTkuNS41aDIyLjY0NnYyMi42MTh6TTQ2LjUgNDUuNUgyMy4zODJWMjIuODgySDQ2LjVWNDUuNXoiLz48L3N2Zz4="

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(266);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2065e928", content, true, context)
};

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

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI0NSI+PHBhdGggZmlsbD0iIzU5NTc1NyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAxMWgxMFYwSDB2MTF6bTAgMTdoMTBWMTdIMHYxMXptMCAxN2gxMFYzNEgwdjExeiIvPjwvc3ZnPg=="

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NiIgaGVpZ2h0PSI0NiI+PHBhdGggZmlsbD0iIzU5NTc1NyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjMuMzU0IDIzLjExOGguMDI4QzM1Ljg3NCAyMy4xMTggNDYgMTIuOTkgNDYgLjVIMjMuMzU0djIyLjYxOHpNMCA0NS41aDIzLjExOFYyMi44ODJIMFY0NS41eiIvPjwvc3ZnPg=="

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MSIgaGVpZ2h0PSIxNyI+PHBhdGggZD0iTTguMDcgMEwuNTI4IDcuMzU3SC40MnYuMTA2bC0uNDIuNDEuNDIuNDI4di4wNTdsLjA1NC0uMDAxIDcuNTg4IDcuNzYzLjcxNS0uNjk5LTYuOTA1LTcuMDY0SDkwLjQydi0xSDEuOTZMOC43Ny43MTYgOC4wNyAweiIvPjwvc3ZnPg=="

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTcuNTg4IDBsLjY5OS43MTZMMS44NDQgN0g1MHYxSDEuOTgybDYuMzEzIDYuNDU4LS43MTUuN0wwIDcuNDAyIDcuNTg4IDB6Ii8+PC9zdmc+"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MSIgaGVpZ2h0PSIxNyI+PHBhdGggZD0iTTgyLjM1LjY0Mkw4OS44OSA4SDkwdi4xMDVsLjQyLjQxLS40Mi40MjhWOWgtLjA1NWwtNy41ODcgNy43NjMtLjcxNi0uN0w4OC41NDcgOUgwVjhoODguNDU5bC02LjgwOC02LjY0Mi42OTgtLjcxNnoiLz48L3N2Zz4="

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTQyLjQxMiAwbC0uNjk5LjcxNkw0OC4xNTYgN0gwdjFoNDguMDE4bC02LjMxMyA2LjQ1OC43MTUuN0w1MCA3LjQwMiA0Mi40MTIgMHoiLz48L3N2Zz4="

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NiIgaGVpZ2h0PSIxMSI+PHBhdGggZmlsbD0iIzU5NTc1NyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzQuNS41djEwaDExVi41aC0xMXptLTE3IDB2MTBoMTFWLjVoLTExek0uNS41djEwaDExVi41SC41eiIvPjwvc3ZnPg=="

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/content-mobile-deco.7e521ed.jpeg";

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(20);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(267);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(268);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(269);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(270);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(215);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(271);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".index{position:relative;overflow:hidden;padding-top:126px;min-height:100vh}@media(min-width:768px){.index{padding-top:100px}.index:before{content:\"\";position:absolute;top:0;left:50%;display:block;width:1px;height:100%;background-color:#ddd;transform:translate(-50%)}}@media(min-width:1024px){.index{padding-top:186px}}.index__bg{position:absolute;top:0;left:0;width:100%;height:100%;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:top;background-repeat:no-repeat;background-size:100% auto;pointer-events:none}@media(min-width:768px){.index__bg{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}}.index__deco{position:absolute}.index__deco[data-id=\"1\"]{top:130px;left:0}.index__deco[data-id=\"1\"] svg{width:40px;height:100%}@media(max-width:1023px){.index__deco[data-id=\"1\"]{display:none}}@media(max-width:767px){.index__deco[data-id=\"1\"]{top:-30px;left:55%}.index__deco[data-id=\"1\"] svg{width:22px}}.index__deco[data-id=\"2\"]{top:125px;right:140px}.index__deco[data-id=\"2\"] img{width:10px}@media(max-width:1199px){.index__deco[data-id=\"2\"]{top:156px;right:86px;display:none}.index__deco[data-id=\"2\"] img{width:7px}}@media(max-width:767px){.index__deco[data-id=\"2\"]{top:95px;right:27px}.index__deco[data-id=\"2\"] img{width:5px}}.index__deco[data-id=\"3\"]{bottom:0;right:0}.index__deco[data-id=\"3\"] img{width:45px}@media(max-width:1199px){.index__deco[data-id=\"3\"]{bottom:97px;display:none}.index__deco[data-id=\"3\"] img{width:30px}}@media(max-width:767px){.index__deco[data-id=\"3\"]{top:335px;right:-10px}.index__deco[data-id=\"3\"] img{width:21px}}.index__banner{position:relative}@media(min-width:1200px){.index__banner{background-size:auto 1328px}}.index__banner__swiper-pagination{position:absolute!important;top:0;bottom:auto!important;right:55px;display:flex;margin-top:0!important;z-index:1}@media(max-width:1199px){.index__banner__swiper-pagination{top:50px;right:30px}}@media(max-width:767px){.index__banner__swiper-pagination{top:25px}}.index__banner__swiper-pagination .swiper-pagination__item{position:relative;display:block;margin-right:0;width:auto;height:auto;background:none}.index__banner__swiper-pagination .swiper-pagination__item:hover{transform:none}.index__banner__swiper-pagination .swiper-pagination__item:first-child .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 1s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 1s infinite}.index__banner__swiper-pagination .swiper-pagination__item:nth-child(2) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 2s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 2s infinite}.index__banner__swiper-pagination .swiper-pagination__item:nth-child(3) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 3s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 3s infinite}.index__banner__swiper-pagination .swiper-pagination__item:nth-child(4) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 4s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 4s infinite}.index__banner__swiper-pagination .swiper-pagination__item:nth-child(5) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 5s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 5s infinite}.index__banner__swiper-pagination .swiper-pagination__item:nth-child(6) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 6s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 6s infinite}.index__banner__swiper-pagination .swiper-pagination__item:nth-child(7) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 7s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 7s infinite}.index__banner__swiper-pagination .swiper-pagination__item:nth-child(8) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 8s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 8s infinite}.index__banner__swiper-pagination .swiper-pagination__item:nth-child(9) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 9s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 9s infinite}.index__banner__swiper-pagination .swiper-pagination__item:nth-child(10) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 10s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 10s infinite}.index__banner__swiper-pagination .swiper-pagination__item.swiper-pagination-bullet-active{transform:none}.index__banner__swiper-pagination .swiper-pagination__item.swiper-pagination-bullet-active .icon-circle{opacity:1}.index__banner__swiper-pagination .swiper-pagination__item.swiper-pagination-bullet-active .icon-star{opacity:0}.index__banner__swiper-pagination .icon-circle,.index__banner__swiper-pagination .icon-star{display:block;font-size:30px;transition:opacity .3s ease}@media(max-width:1199px){.index__banner__swiper-pagination .icon-circle,.index__banner__swiper-pagination .icon-star{font-size:20px}}.index__banner__swiper-pagination .icon-circle:before,.index__banner__swiper-pagination .icon-star:before{display:block;margin:0;padding:1px;width:auto;height:auto}.index__banner__swiper-pagination .icon-circle{position:absolute;top:0;left:0;opacity:0}.index__banner__swiper-pagination .icon-star{opacity:1}.index__banner__swiper-button-next,.index__banner__swiper-button-prev{position:absolute;top:50%;margin-top:-22px;width:90px;height:44px;z-index:10;cursor:pointer}.index__banner__swiper-button-next:after,.index__banner__swiper-button-prev:after{content:\"\"}.index__banner__swiper-button-prev{right:auto;left:10px;transition:.3s}.index__banner__swiper-button-prev img{margin-left:auto}@media(max-width:1023px){.index__banner__swiper-button-prev{top:78%;left:0}}.index__banner__swiper-button-prev:hover{left:0}.index__banner__swiper-button-next{right:10px;left:auto;transition:.3s}@media(max-width:1023px){.index__banner__swiper-button-next{top:78%;right:0}}.index__banner__swiper-button-next:hover{right:0}.index__banner.container{padding-right:15px;padding-left:15px}.index .m-event-slide{position:relative;display:flex;flex-direction:column;padding:0;width:1260px;height:calc(100vh - 100px);text-align:left}@media(min-width:768px){.index .m-event-slide{padding:0}}@media(min-width:1024px){.index .m-event-slide{padding:0 95px}}.index .m-event-slide p+p{margin-top:0}.index .m-event-slide__date-box{display:flex;justify-content:flex-start;flex:0 0 auto}.index .m-event-slide__links{position:relative;top:-10%;flex:0 0 auto;margin-bottom:80px}@media screen and (max-width:1199px){.index .m-event-slide__links{top:-13%;margin-bottom:0}}@media screen and (max-width:767px){.index .m-event-slide__links{top:-10%}}.index .m-event-slide__links .a-rect-link{width:200px}.index .m-event-slide__main{flex:1 1 auto}@media(min-width:1200px){.index .m-event-slide__main{display:flex}.index .m-event-slide__main-content{flex:1 1 auto}}@media(max-width:1199px){.index .m-event-slide__main-content{margin:0 auto}}.index .m-event-slide__info{flex:0 0 255px}@media(max-width:1199px){.index .m-event-slide__info{margin-bottom:30px}}@media(max-width:767px){.index .m-event-slide__info{min-height:auto;margin-bottom:15px}}.index .m-event-slide__year{-ms-writing-mode:tb-lr;writing-mode:vertical-lr;transform:rotate(180deg);font-size:30px;font-weight:700;line-height:30px;letter-spacing:normal;text-align:center;color:#333}@media(max-width:1199px){.index .m-event-slide__year{font-size:21.8px;line-height:21.8px}}@media(max-width:767px){.index .m-event-slide__year{font-size:14.4px;line-height:normal}}.index .m-event-slide__date{margin-left:10px;font-size:80px;font-weight:700;line-height:normal;letter-spacing:normal;color:#333}@media(max-width:1199px){.index .m-event-slide__date{font-size:58.2px}}@media(max-width:767px){.index .m-event-slide__date{margin-left:0;font-size:38.4px}}.index .m-event-slide__date-icon{display:inline-block}.index .m-event-slide__date-icon.-to:before{content:\"\";display:block;width:20px;height:3px;background-color:333333}.index .m-event-slide__date-icon.-and{font-size:30px;color:#333}.index .m-event-slide__desc{color:rgba(51,51,51,.6);font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.index .m-event-slide__desc{font-size:24px}}@media(max-width:767px){.index .m-event-slide__desc{color:rgba(51,51,51,.6)}}.index .m-event-slide__desc+.m-event-slide__desc{margin-top:2px}.index .m-event-slide__desc+.m-event-slide__heading{margin-top:13px}@media(max-width:767px){.index .m-event-slide__desc+.m-event-slide__heading{margin-top:8px;font-size:24px;line-height:1.3}}.index .m-event-slide__heading{font-size:40px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(max-width:1199px){.index .m-event-slide__heading{font-size:30px;line-height:1.4;letter-spacing:1px}}@media(max-width:767px){.index .m-event-slide__heading{font-size:20px;line-height:1.5;letter-spacing:.67px}}.index .m-event-slide__heading+.m-event-slide__subheading{margin-top:10px}@media(max-width:1199px){.index .m-event-slide__heading+.m-event-slide__subheading{margin-top:5px;margin-top:0}}.index .m-event-slide__subheading{font-size:18px;font-weight:500;line-height:normal;letter-spacing:normal}@media(max-width:1199px){.index .m-event-slide__subheading{font-size:12px}}.index .swiper-arrow.-default{display:none}@media(max-width:1199.98px){.index .swiper-arrow.-default{display:block}}.index .swiper-arrow.-tablet{display:block}@media(max-width:1199.98px){.index .swiper-arrow.-tablet{display:none}}.index .o-main-deco{position:absolute;top:100px;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100vh;z-index:1;transition:opacity .3s ease,height .1s ease}@media(max-width:1336px){.index .o-main-deco{transform:scale(.8)}}@media(max-width:1199px){.index .o-main-deco{top:0;left:2%}}@media(max-width:767px){.index .o-main-deco{top:60px;left:0;transform:scale(.33)}}@media(max-width:359px){.index .o-main-deco{transform:scale(.3)}}.index .o-main-deco.-hide{opacity:0}.index .o-main-deco__news-img{position:absolute;top:50%;left:0;transform:translateY(-50%);opacity:0}.index .o-main-deco__main{position:absolute;top:50%;left:50%;width:966px;height:594px;transform:translate(-50%,-50%)}.index .o-main-deco__white-round{position:absolute;top:0;right:50%;width:516px;height:594px;-webkit-clip-path:polygon(50% 0,100% 25.42%,100% 74.92%,50% 100%,0 74.92%,0 25.42%);clip-path:polygon(50% 0,100% 25.42%,100% 74.92%,50% 100%,0 74.92%,0 25.42%);background-color:#fff;transform:translate(50%);transition:all .3s ease}.index .o-main-deco__half-round{position:absolute;top:50%;left:50%;transition:all .5s ease;transform:translate(-50%,-50%)}.index .o-main-deco__half-round-shape{position:relative;display:block;overflow:hidden;width:594px;height:258px;-webkit-clip-path:polygon(0 100%,25.42% 0,74.92% 0,100% 100%);clip-path:polygon(0 100%,25.42% 0,74.92% 0,100% 100%);transition:all .5s ease;transform-origin:center center}.index .o-main-deco__half-round-texture{position:absolute;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity .3s ease}.index .o-main-deco__half-round-texture.-show{opacity:1}.index .o-main-deco__half-round[data-name=solid] .o-main-deco__half-round-shape{background-color:#f8b50b;transform:rotate(90deg) translateY(-50%)}.index .o-main-deco__half-round[data-name=texture] .o-main-deco__half-round-shape{background-color:#444;transform:rotate(-90deg) translateY(-50%)}.index .o-main-deco__svg-wrapper image{opacity:0}.index .o-main-deco[data-animate=\"1\"] .o-main-deco__white-round{right:75px;transform:none}.index .o-main-deco[data-animate=\"1\"] .o-main-deco__half-round[data-name=solid]{top:calc(50% - 3px);left:calc(100% - 630px);transform:translateY(-50%)}.index .o-main-deco[data-animate=\"1\"] .o-main-deco__half-round[data-name=texture]{transform:none;top:calc(100% - 264px);left:calc(100% - 927px)}.index .o-main-deco[data-animate=\"1\"] .o-main-deco__half-round[data-name=texture] .o-main-deco__half-round-shape{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 50%/cover no-repeat;transform:rotate(-180deg)}.index .o-main-deco[data-animate=\"1\"] .o-main-deco__half-round-texture[data-id=\"1\"]{opacity:1}.index .o-main-deco[data-animate=\"2\"] .o-main-deco__white-round{right:75px;transform:rotate(30deg)}.index .o-main-deco[data-animate=\"2\"] .o-main-deco__half-round[data-name=solid]{transform:none;top:calc(100% - 304px);left:calc(100% - 924px)}.index .o-main-deco[data-animate=\"2\"] .o-main-deco__half-round[data-name=solid] .o-main-deco__half-round-shape{transform:rotate(-180deg)}.index .o-main-deco[data-animate=\"2\"] .o-main-deco__half-round[data-name=texture]{top:calc(50% - 3px);left:calc(100% - 630px);transform:translateY(-50%) rotate(-150deg)}.index .o-main-deco[data-animate=\"2\"] .o-main-deco__half-round[data-name=texture] .o-main-deco__half-round-shape{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") 50%/cover no-repeat}.index .o-main-deco[data-animate=\"2\"] .o-main-deco__half-round-texture[data-id=\"2\"]{opacity:1}@media(max-width:767px){.index .o-main-deco[data-animate=\"3\"] .o-main-deco__main{left:60%}}.index .o-main-deco[data-animate=\"3\"] .o-main-deco__white-round{top:0;right:unset;left:-11px}.index .o-main-deco[data-animate=\"3\"] .o-main-deco__half-round[data-name=solid]{transform:translateY(-50%);top:50%;left:-50px}.index .o-main-deco[data-animate=\"3\"] .o-main-deco__half-round[data-name=solid] .o-main-deco__half-round-shape{transform:rotate(90deg) translateY(50%)}.index .o-main-deco[data-animate=\"3\"] .o-main-deco__half-round[data-name=texture]{top:100%;left:calc(100% - 648px);transform:translateY(-100%)}.index .o-main-deco[data-animate=\"3\"] .o-main-deco__half-round[data-name=texture] .o-main-deco__half-round-shape{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") 50%/cover no-repeat;transform:translate(0)}.index .o-main-deco[data-animate=\"3\"] .o-main-deco__half-round-texture[data-id=\"3\"]{opacity:1}.index .o-main-deco[data-animate=\"4\"] .o-main-deco__white-round{opacity:0}.index .o-main-deco[data-animate=\"4\"] .o-main-deco__news-img{opacity:1;transition:opacity .1s ease .5s}@media(max-width:1199px){.index .o-main-deco[data-animate=\"4\"] .o-main-deco__news-img .o-main-deco__svg-wrapper{transform:scale(.757);transform-origin:left center}}.index .o-main-deco[data-animate=\"4\"] .o-main-deco__half-round{opacity:0;transition:all .5s ease,opacity .5s ease .6s}.index .o-main-deco[data-animate=\"4\"] .o-main-deco__half-round .o-main-deco__half-round-shape{width:680px;height:340px;border-radius:340px 340px 0 0}@media(max-width:1199px){.index .o-main-deco[data-animate=\"4\"] .o-main-deco__half-round .o-main-deco__half-round-shape{width:515px;height:257.5px;border-radius:257.5px 257.5px 0 0}}.index .o-main-deco[data-animate=\"4\"] .o-main-deco__half-round[data-name=solid]{left:0;transform:translateY(-50%)}.index .o-main-deco[data-animate=\"4\"] .o-main-deco__half-round[data-name=solid] .o-main-deco__half-round-shape{transform:rotate(90deg) translate(-30px,-50%)}@media(max-width:1199px){.index .o-main-deco[data-animate=\"4\"] .o-main-deco__half-round[data-name=solid] .o-main-deco__half-round-shape{transform:rotate(90deg) translate(-21px,-50%)}}.index .o-main-deco[data-animate=\"4\"] .o-main-deco__half-round[data-name=texture]{left:0;transform:translateY(-50%)}.index .o-main-deco[data-animate=\"4\"] .o-main-deco__half-round[data-name=texture] .o-main-deco__half-round-shape{transform:rotate(-90deg) translate(-24.5px,-50%)}@media(max-width:1199px){.index .o-main-deco[data-animate=\"4\"] .o-main-deco__half-round[data-name=texture] .o-main-deco__half-round-shape{transform:rotate(-90deg) translate(-21px,-50%)}}.index .o-main-deco[data-animate=\"5\"] .o-main-deco__white-round{opacity:0}.index .o-main-deco[data-animate=\"5\"] .o-main-deco__half-round[data-name=solid]{top:0;left:50%;transform:translate(-100%)}.index .o-main-deco[data-animate=\"5\"] .o-main-deco__half-round[data-name=solid] .o-main-deco__half-round-shape{width:300px;height:150px;transform:rotate(-90deg) translate(-25%,50%)}.index .o-main-deco[data-animate=\"5\"] .o-main-deco__half-round[data-name=texture]{top:100%;left:50%;transform:translateY(-100%)}.index .o-main-deco[data-animate=\"5\"] .o-main-deco__half-round[data-name=texture] .o-main-deco__half-round-shape{width:460px;height:230px;transform:rotate(90deg) translate(-25%,50%)}.index .o-main-deco[data-animate=hide]{opacity:0}.index .o-fixed-footer{position:fixed;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;padding:10px 30px;width:100%;z-index:3;transition:transform .3s ease;will-change:transform}@media(max-width:767px){.index .o-fixed-footer{display:none}}.index .o-fixed-footer .m-social-links{display:flex}.index .o-fixed-footer .m-social-links__item{position:relative;display:block;transition:opacity .5s}.index .o-fixed-footer .m-social-links__item:not(:first-child){margin-left:30px}.index .o-fixed-footer .m-social-links__item-hidden{position:absolute;opacity:0}.index .o-fixed-footer .m-social-links__item:hover{opacity:.5}.index .o-fixed-footer .m-social-links__icon{font-size:24px;color:#4a4a4a}.index .o-fixed-footer .m-social-links__hidden-text{display:none}.index .o-fixed-footer__copyright{font-size:12px;font-weight:300;line-height:2;letter-spacing:normal;color:#333;pointer-events:all}.start-animation .index .o-fixed-footer{transform:none;transition:transform .3s ease 1.5s}.start-animation .index .o-fixed-footer.-no-delay{transition-delay:0s}.index .o-fixed-footer.-hide{transform:translateY(100%);transition:transform .3s ease}.index .o-index-about{position:relative;display:flex;align-items:center;justify-content:center;margin-bottom:232px;min-height:100vh;z-index:1}@media(min-width:1200px){.index .o-index-about{margin-bottom:80px;min-height:1000px}}@media(max-width:767px){.index .o-index-about{display:block;height:auto}}.index .o-index-about .container{position:relative;margin-top:0}.index .o-index-about__deco[data-id=\"1\"]{position:relative;width:45px;margin-bottom:35px}@media(max-width:1199px){.index .o-index-about__deco[data-id=\"1\"]{margin-bottom:30px}}@media(max-width:767px){.index .o-index-about__deco[data-id=\"1\"]{display:none;width:25px;margin-bottom:15px}}.index .o-index-about__deco[data-id=\"2\"]{position:absolute;top:570px;left:132px;width:40px}@media(max-width:767px){.index .o-index-about__deco[data-id=\"2\"]{display:none}}.index .o-index-about__pagination{position:absolute;top:125px;right:0;display:flex;align-items:center;justify-content:flex-end;margin:0}.index .o-index-about__pagination .swiper-pagination__item{position:relative;display:block;margin-right:0;width:auto;height:auto;background:none}.index .o-index-about__pagination .swiper-pagination__item:hover{transform:none}.index .o-index-about__pagination .swiper-pagination__item:first-child .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 1s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 1s infinite}.index .o-index-about__pagination .swiper-pagination__item:nth-child(2) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 2s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 2s infinite}.index .o-index-about__pagination .swiper-pagination__item:nth-child(3) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 3s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 3s infinite}.index .o-index-about__pagination .swiper-pagination__item:nth-child(4) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 4s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 4s infinite}.index .o-index-about__pagination .swiper-pagination__item:nth-child(5) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 5s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 5s infinite}.index .o-index-about__pagination .swiper-pagination__item:nth-child(6) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 6s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 6s infinite}.index .o-index-about__pagination .swiper-pagination__item:nth-child(7) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 7s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 7s infinite}.index .o-index-about__pagination .swiper-pagination__item:nth-child(8) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 8s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 8s infinite}.index .o-index-about__pagination .swiper-pagination__item:nth-child(9) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 9s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 9s infinite}.index .o-index-about__pagination .swiper-pagination__item:nth-child(10) .icon-star{-webkit-animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 10s infinite;animation:swiperDotAnimation 3s cubic-bezier(.17,.37,.43,.67) 10s infinite}.index .o-index-about__pagination .swiper-pagination__item.swiper-pagination-bullet-active{transform:none}.index .o-index-about__pagination .swiper-pagination__item.swiper-pagination-bullet-active .icon-circle{opacity:1}.index .o-index-about__pagination .swiper-pagination__item.swiper-pagination-bullet-active .icon-star{opacity:0}.index .o-index-about__pagination .icon-circle,.index .o-index-about__pagination .icon-star{display:block;font-size:30px;transition:opacity .3s ease}@media(max-width:1199px){.index .o-index-about__pagination .icon-circle,.index .o-index-about__pagination .icon-star{font-size:20px}}.index .o-index-about__pagination .icon-circle:before,.index .o-index-about__pagination .icon-star:before{display:block;margin:0;padding:1px;width:auto;height:auto}.index .o-index-about__pagination .icon-circle{position:absolute;top:0;left:0;opacity:0}.index .o-index-about__pagination .icon-star{opacity:1}.index .o-index-about__main-deco{position:absolute;top:180px;width:50%;height:680px;pointer-events:none}.index .o-index-about__main-deco__wrapper{position:absolute;width:588px;height:680px;z-index:99}.index .o-index-about__main-deco__wrapper__left{position:absolute;top:0;left:0;width:294px;height:680px}.index .o-index-about__main-deco__wrapper__left>svg{width:100%;height:100%}.index .o-index-about__main-deco__wrapper__right{position:absolute;top:0;right:0;width:294px;height:680px;transform:translateX(-1px) translateY(-56px)}.index .o-index-about__main-deco__wrapper__right>svg{width:100%;height:100%}.index .o-index-about__main-deco__wrapper__cover{position:absolute;top:0;left:0;width:588px;height:736px;-webkit-clip-path:polygon(49.8% 0,100% 23.2%,100% 69.43%,50% 92.53%,50% 100%,0 76.77%,0 30.4%,49.8% 7.5%,49.8% 0);clip-path:polygon(49.8% 0,100% 23.2%,100% 69.43%,50% 92.53%,50% 100%,0 76.77%,0 30.4%,49.8% 7.5%,49.8% 0);transform:translateY(-56px)}.index .o-index-about__main-deco__wrapper__cover>div{position:absolute;top:0;left:0;width:100%;height:100%;background-position:50%;background-repeat:no-repeat;background-size:cover}.index .o-index-about__main-deco__wrapper__cover[data-image=\"1\"]>div:not(:first-child),.index .o-index-about__main-deco__wrapper__cover[data-image=\"2\"]>div:not(:nth-child(2)){opacity:0}@media(max-width:1023px){.index .o-index-about__main-deco{display:none}}.index .o-index-about__main{position:relative}@media(min-width:1200px){.index .o-index-about__main{display:flex;justify-content:space-between}}.index .o-index-about__intro{flex:0 0 auto}.index .o-index-about__content{position:relative;flex:0 0 416px;margin-left:auto;padding-top:45px}@media(max-width:1199px){.index .o-index-about__content{padding-top:0;max-width:345px}}@media(max-width:1023px){.index .o-index-about__content{display:none}}.index .o-index-about__content__box{position:relative;top:255px}.index .o-index-about__content__top{font-size:15px;font-weight:400;position:absolute;top:0;left:0;line-height:1.7;color:rgba(51,51,51,.8);transition:transform .3s,opacity .3s}@media(min-width:1200px){.index .o-index-about__content__top{font-size:16px}}.index .o-index-about__content__bottom{font-size:15px;font-weight:400;position:absolute;top:0;left:0;line-height:1.7;color:rgba(51,51,51,.8);transition:transform .3s,opacity .3s}@media(min-width:1200px){.index .o-index-about__content__bottom{font-size:16px}}.index .o-index-about__content .a-rect-link{margin-top:32px;width:100%}.index .o-index-about__content[data-content=\"1\"] .o-index-about__content__bottom,.index .o-index-about__content[data-content=\"2\"] .o-index-about__content__top{transform:translateX(100%);opacity:0;pointer-events:none}.index .o-index-about__content-mobile{display:none}@media(max-width:1023px){.index .o-index-about__content-mobile{display:block}}.index .o-index-about__content-mobile__deco{width:375px;height:468px;background-position:50%;background-repeat:no-repeat;background-size:cover;-webkit-clip-path:polygon(49.8% 0,100% 23.3%,100% 69.43%,50% 92.53%,50% 100%,0 76.77%,0 31%,49.8% 7.5%,49.8% 0);clip-path:polygon(49.8% 0,100% 23.3%,100% 69.43%,50% 92.53%,50% 100%,0 76.77%,0 31%,49.8% 7.5%,49.8% 0);margin:0 auto 32px}@media(max-width:639px){.index .o-index-about__content-mobile__deco{width:250px;height:312px}}.index .o-index-about__content-mobile__desc{color:rgba(51,51,51,.8);font-size:15px;font-weight:400;line-height:1.7}@media(min-width:1200px){.index .o-index-about__content-mobile__desc{font-size:16px}}.index .o-index-about__content-mobile .a-rect-link{margin-top:40px;max-width:200px}@media(max-width:767px){.index .o-index-about__content-mobile .a-rect-link{width:235px;max-width:235px}}.index .o-index-about__slider{position:relative;margin-top:-20px}@media(min-width:768px){.index .o-index-about__slider{display:none}}.index .o-index-about__slider .swiper-button-next,.index .o-index-about__slider .swiper-button-prev{top:53%;width:70px;height:auto;background:none}.index .o-index-about__slider .swiper-arrow{padding:10px 5px;width:100%}.index .o-index-about__slider .swiper-pagination{position:absolute;top:0;right:0}.index .o-index-about__slider .swiper-pagination .swiper-pagination__item{position:relative;display:block;margin-right:0;margin-left:0;width:auto;height:auto;background:none}.index .o-index-about__slider .swiper-pagination .swiper-pagination__item.swiper-pagination-bullet-active,.index .o-index-about__slider .swiper-pagination .swiper-pagination__item:hover{transform:none}.index .o-index-about__slider .swiper-pagination .swiper-pagination__item.swiper-pagination-bullet-active .icon-circle{opacity:1}.index .o-index-about__slider .swiper-pagination .swiper-pagination__item.swiper-pagination-bullet-active .icon-star{opacity:0}.index .o-index-about__slider .swiper-pagination .icon-circle,.index .o-index-about__slider .swiper-pagination .icon-star{display:block;font-size:13px;transition:opacity .3s ease}.index .o-index-about__slider .swiper-pagination .icon-circle:before,.index .o-index-about__slider .swiper-pagination .icon-star:before{display:block;margin:0;padding:1px;width:auto;height:auto}.index .o-index-about__slider .swiper-pagination .icon-circle{position:absolute;top:0;left:0;opacity:0}.index .o-index-about__slider .swiper-pagination .icon-star{opacity:1}.index .o-index-about__heading{text-align:center;margin-bottom:24px;font-size:24px;font-weight:700;line-height:normal;letter-spacing:.5px}@media(min-width:1200px){.index .o-index-about__heading{font-size:40px;margin-bottom:0;text-align:left}}.index .o-index-about__subheading{margin-top:-10px;font-size:18px;font-weight:500;line-height:normal;letter-spacing:normal}@media(max-width:1199px){.index .o-index-about__subheading{margin-top:0;font-size:12px}}.index .o-index-about .a-news-text-card{position:relative;padding-bottom:6px;transition:transform .3s ease}.index .o-index-about .a-news-text-card:before{content:\"\";position:absolute;bottom:0;right:0;display:block;width:125%;height:2px;background-color:#333;transform:scaleX(0);transition:transform .3s ease-out;transform-origin:right center;will-change:transform}@media(max-width:1199px){.index .o-index-about .a-news-text-card:before{width:115%}}.index .o-index-about .a-news-text-card.-active{transform:translate(-40px)}@media(max-width:1199px){.index .o-index-about .a-news-text-card.-active{transform:translate(-10px)}}.index .o-index-about .a-news-text-card.-active:before{transform:none}.index .o-index-about .a-rect-link.-show-mobile{margin-top:30px;max-width:152px}@media(min-width:768px){.index .o-index-about .a-rect-link.-show-mobile{display:none}}.index .o-index-case{position:relative;padding-bottom:45px;z-index:2}@media screen and (max-width:1199px){.index .o-index-case{margin-bottom:120px;padding-bottom:0}}@media screen and (min-width:1200px){.index .o-index-case .container{padding-top:166px}}.index .o-index-case.invert{padding-bottom:100px}.index .o-index-case.invert .o-index-case__col:first-child{order:2}.index .o-index-case.invert .o-index-case__col:nth-child(2){order:1}.index .o-index-case.invert .o-index-case__col:nth-child(2) .-single:before{right:unset;left:0;transform:translateX(-100%)}.index .o-index-case__deco{position:absolute}.index .o-index-case__deco[data-id=\"1\"]{top:0;left:0;transform:translateY(-40px);z-index:1}.index .o-index-case__deco[data-id=\"1\"] img{width:45px}@media(max-width:1199px){.index .o-index-case__deco[data-id=\"1\"]{transform:translateY(-157px)}.index .o-index-case__deco[data-id=\"1\"] img{width:30px}}@media(max-width:767px){.index .o-index-case__deco[data-id=\"1\"]{display:none}}.index .o-index-case__deco[data-id=\"2\"]{bottom:65px;right:83px;z-index:1}.index .o-index-case__deco[data-id=\"2\"] img{width:24px}@media(max-width:767px){.index .o-index-case__deco[data-id=\"2\"]{display:none}}.index .o-index-case__intro{position:relative;margin-bottom:50px;text-align:center;z-index:1}@media(max-width:1199px){.index .o-index-case__intro{margin-bottom:30px}}@media(max-width:767px){.index .o-index-case__intro{margin-bottom:15px}}.index .o-index-case__heading{font-size:24px;font-weight:700;line-height:normal;letter-spacing:.5px}@media(min-width:1200px){.index .o-index-case__heading{font-size:40px}}.index .o-index-case__subheading{margin-top:-10px;font-size:18px;font-weight:500;line-height:normal;letter-spacing:normal}@media(max-width:1199px){.index .o-index-case__subheading{margin-top:0;font-size:12px}}.index .o-index-case__col{flex:0 0 50%}@media(max-width:767px){.index .o-index-case__col:nth-child(2){display:none}}@media(min-width:1200px){.index .o-index-case__col:nth-child(2){transform:translateY(-255px)}}.index .o-index-case__col:nth-child(2) .m-case-list{padding-bottom:105px}.index .o-index-case__col:nth-child(2) .m-case-list:before{content:\"\";position:absolute;top:0;right:0;display:block;height:100%;transform:translate(100%);background-color:#fff}@media(min-width:768px){.index .o-index-case__col:nth-child(2) .m-case-list:before{width:calc((100vw - 720px)/2)}}@media(min-width:992px){.index .o-index-case__col:nth-child(2) .m-case-list:before{width:calc((100vw - 930px)/2)}}@media(min-width:1280px){.index .o-index-case__col:nth-child(2) .m-case-list:before{width:calc((100vw - 870px)/2)}}@media(min-width:1440px){.index .o-index-case__col:nth-child(2) .m-case-list:before{width:calc((100vw - 1020px)/2)}}.index .o-index-case__main{position:relative;z-index:0}@media(min-width:768px){.index .o-index-case__main{display:flex}}.index .o-index-case .m-case-list{height:100%;background-color:#fff}@media(max-width:767px){.index .o-index-case .m-case-list{background-color:unset}}.index .o-index-case .m-case-list.-multiple{padding:37px}@media(max-width:1199px){.index .o-index-case .m-case-list.-multiple:after,.index .o-index-case .m-case-list.-multiple:before{content:\"\";position:absolute;top:0;display:block;width:calc((100vw - 100%)/2);height:100%;background:#fff}.index .o-index-case .m-case-list.-multiple:before{left:0;transform:translate(-100%)}.index .o-index-case .m-case-list.-multiple:after{right:0;transform:translate(100%)}}@media(max-width:1199px)and (max-width:767px){.index .o-index-case .m-case-list.-multiple:after,.index .o-index-case .m-case-list.-multiple:before{background-color:unset}}@media(max-width:767px){.index .o-index-case .m-case-list.-multiple{padding:16px 0}}.index .o-index-case .m-case-list.-multiple .m-case-list__main{margin:0 -12px}.index .o-index-case .m-case-list.-multiple .m-case-list__item{flex:0 0 100%;margin-bottom:32px;padding:0 12px;width:100%}@media(min-width:768px){.index .o-index-case .m-case-list.-multiple .m-case-list__item{flex:0 0 50%;margin-bottom:0;width:50%}}@media(max-width:1199px){.index .o-index-case .m-case-list .a-rect-link{margin-top:30px;max-width:200px}}@media(max-width:767px){.index .o-index-case .m-case-list .a-rect-link{width:235px;max-width:235px}}.index .o-index-memory-bg{position:absolute;bottom:0;width:100vw;height:425px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");background-position:0 0;background-repeat:no-repeat;background-size:cover;z-index:0}@media(min-width:768px){.index .o-index-memory-bg{height:792px}}@media(min-width:1024px){.index .o-index-memory-bg{height:1192px}}.index .o-index-memory{position:relative;padding-top:48px;z-index:2}@media(min-width:768px){.index .o-index-memory{padding-top:64px}}.index .o-index-memory__title{margin-bottom:48px;text-align:center;font-size:24px;font-weight:700;line-height:normal;letter-spacing:.5px}@media(min-width:1200px){.index .o-index-memory__title{font-size:40px}}@media(min-width:768px){.index .o-index-memory__title{text-align:left}}.index .o-index-bottom{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:40%;min-width:428px;max-width:80%;height:auto;z-index:1}@media(max-width:767px){.index .o-index-bottom{width:218px;min-width:unset}}@-webkit-keyframes swiperDotAnimation{0%{transform:rotate(0deg)}50%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@keyframes swiperDotAnimation{0%{transform:rotate(0deg)}50%{transform:rotate(1turn)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/deco_text01_small.6f7e3f1.png";

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/deco_text01_middle.6c58970.jpeg";

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/round_texture_01-2.06e231b.jpeg";

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/round_texture_01-3.b32515d.jpeg";

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-memory.80fd9ea.png";

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=8b20f7a8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index"},[_vm._ssrNode("<div class=\"index__bg\"></div> <div data-id=\"2\" class=\"index__deco\"><img"+(_vm._ssrAttr("src",__webpack_require__(257)))+" alt></div> <div data-animate=\"1\" class=\"o-main-deco js-main-deco\"><div class=\"o-main-deco__main\"><div class=\"o-main-deco__white-round\"></div> <div data-name=\"solid\" class=\"o-main-deco__half-round\"><div class=\"o-main-deco__half-round-shape\"><div data-id=\"1\" class=\"o-main-deco__half-round-texture -solid\" style=\"background: rgb(248, 181, 11);\"></div> <div data-id=\"2\" class=\"o-main-deco__half-round-texture -solid\" style=\"background: rgb(229, 229, 229);\"></div> <div data-id=\"3\" class=\"o-main-deco__half-round-texture -solid\" style=\"background: rgb(248, 181, 11);\"></div></div></div> <div data-name=\"texture\" class=\"o-main-deco__half-round\"><div class=\"o-main-deco__half-round-shape\"></div></div></div></div> <div class=\"index__banner\"><div class=\"container\"><div style=\"position: relative;\"><div data-id=\"1\" class=\"index__deco\"><svg width=\"39\" height=\"22\" viewBox=\"0 0 39 22\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39 0L20.1487 22L20.1487 0L39 0ZM18.8501 0L0 22V0H18.8501Z\" fill=\"#F8B50B\"></path></svg></div> <div data-id=\"3\" class=\"index__deco\"><img"+(_vm._ssrAttr("src",__webpack_require__(258)))+" alt></div> "+((_vm.data.banner.length > 1)?("<div tabindex=\"0\" class=\"index__banner__swiper-button-prev\"><img"+(_vm._ssrAttr("src",__webpack_require__(259)))+" alt class=\"swiper-arrow -default\"> <img"+(_vm._ssrAttr("src",__webpack_require__(260)))+" alt class=\"swiper-arrow -tablet\"></div>"):"<!---->")+" "+((_vm.data.banner.length > 1)?("<div tabindex=\"0\" class=\"index__banner__swiper-button-next\"><img"+(_vm._ssrAttr("src",__webpack_require__(261)))+" alt class=\"swiper-arrow -default\"> <img"+(_vm._ssrAttr("src",__webpack_require__(262)))+" alt class=\"swiper-arrow -tablet\"></div>"):"<!---->")+" <div class=\"index__banner__swiper swiper-container\"><div class=\"index__banner__swiper__slide swiper-wrapper\">"+(_vm._ssrList((_vm.data.banner),function(ban,i){return ("<div class=\"m-event-slide swiper-slide\"><div class=\"m-event-slide__date-box\"><p class=\"m-event-slide__year\">"+_vm._ssrEscape("\n                                    "+_vm._s(ban.year)+"\n                                ")+"</p> <p class=\"m-event-slide__date\">"+_vm._ssrEscape("\n                                    "+_vm._s(ban.date_str)+"\n                                ")+"</p></div> <div class=\"m-event-slide__main\"><div class=\"m-event-slide__info\"></div> <div class=\"m-event-slide__main-content\"><p class=\"m-event-slide__desc\">"+_vm._ssrEscape("\n                                        "+_vm._s(ban.subtitle)+"\n                                    ")+"</p> <p class=\"m-event-slide__heading\">"+_vm._ssrEscape("\n                                        "+_vm._s(ban.title)+"\n                                    ")+"</p> <p class=\"m-event-slide__subheading\"></p></div></div> <div class=\"m-event-slide__links\"><a"+(_vm._ssrAttr("href",ban.button_link))+(_vm._ssrAttr("title",ban.title))+" tabindex=\"-1\" class=\"a-rect-link\">SEE MORE</a></div></div>")}))+"</div></div> <div class=\"index__banner__swiper-pagination swiper-pagination\"></div></div></div></div> <div"+(_vm._ssrClass("o-fixed-footer",{'-hide': _vm.isFooterHide}))+"><div class=\"m-social-links\"><a"+(_vm._ssrAttr("href",_vm.socialLink.facebook))+" target=\"_blank\" title=\"[另開新視窗]美感教育粉絲專頁頁連結\" class=\"m-social-links__item\"><span class=\"m-social-links__hidden-text\">[另開新視窗]美感教育粉絲專頁頁連結</span> <span class=\"m-social-links__icon icon-facebook\"></span></a> <a"+(_vm._ssrAttr("href",_vm.socialLink.youtube))+" target=\"_blank\" title=\"[另開新視窗]美感教育YouTube影片連結\" class=\"m-social-links__item\"><span class=\"m-social-links__hidden-text\">[另開新視窗]美感教育YouTube影片連結</span> <span class=\"m-social-links__icon icon-youtube-play\"></span></a></div> <p class=\"o-fixed-footer__copyright\">\n            © 2022 CRIT-AADE. All Rights Reserved.\n        </p></div> <div class=\"o-index-about\">"+((_vm.isMainDecoShow)?("<div><div class=\"o-index-about__main-deco\"><div class=\"o-index-about__main-deco__wrapper\"><div class=\"o-index-about__main-deco__wrapper__left\"><svg width=\"294\" height=\"682\" viewBox=\"0 0 294 682\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\" xmlns:xlink=\"https://www.w3.org/1999/xlink\" class=\"o-index-about__main-deco__wrapper__left-texture\"><mask id=\"mask0_7_26\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"294\" height=\"682\" style=\"mask-type: alpha;\"><path d=\"M0 170.709L294 0.559082V681.157L0 511.008V170.709Z\" fill=\"#F8B50B\"></path></mask> <g mask=\"url(#mask0_7_26)\"><rect x=\"-422\" y=\"1\" width=\"1379\" height=\"689\" fill=\"url(#pattern0)\"></rect></g> <defs><pattern id=\"pattern0\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><use xlink:href=\"#image0_7_26\" transform=\"translate(0 -0.000362845) scale(0.000833333 0.00166788)\"></use></pattern> <image id=\"image0_7_26\" width=\"1200\" height=\"600\""+(_vm._ssrAttr("xlink:href",__webpack_require__(215)))+"></image></defs></svg></div> <div class=\"o-index-about__main-deco__wrapper__right\"><svg width=\"294\" height=\"681\" viewBox=\"0 0 294 681\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\" class=\"o-index-about__main-deco__wrapper__right-texture\"><path d=\"M294 170.15L0 0V680.598L294 510.449V170.15Z\" fill=\"#F8B50B\"></path></svg></div> <div data-image=\"1\" class=\"o-index-about__main-deco__wrapper__cover\">"+(_vm._ssrList((_vm.data.about_block.images),function(img,i){return ("<div"+(_vm._ssrStyle(null,("background-image: url(" + (img.url) + ")"), null))+"></div>")}))+"</div></div></div></div>"):"<!---->")+" <div data-aos=\"custom\" class=\"container\"><div class=\"o-index-about__main\"><div class=\"o-index-about__intro\"><div data-id=\"1\" class=\"o-index-about__deco\"><img"+(_vm._ssrAttr("src",__webpack_require__(263)))+" alt></div> <p class=\"o-index-about__heading\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.data.about_block.title)+"\n                    ")+"</p> <p class=\"o-index-about__subheading\"></p></div> <div data-content=\"1\" class=\"o-index-about__content\"><div class=\"o-index-about__pagination swiper-pagination\"><div class=\"o-index-about__pagination-item swiper-pagination__item swiper-pagination-bullet-active -active\"><span class=\"icon-star\"></span> <span class=\"icon-circle\"></span></div> <div class=\"o-index-about__pagination-item swiper-pagination__item\"><span class=\"icon-star\"></span> <span class=\"icon-circle\"></span></div></div> <div class=\"o-index-about__content__box\">"+((_vm.data.about_block.content[0])?("<div class=\"o-index-about__content__top\">"+(_vm._s(_vm.data.about_block.content[0].item))+"</div>"):"<!---->")+" <div class=\"o-index-about__content__bottom\">"+((_vm.data.about_block.content[1])?("<div>"+(_vm._s(_vm.data.about_block.content[1].item))+"</div>"):"<!---->")+" <a"+(_vm._ssrAttr("href",_vm.data.about_block.button_link))+" title=\"SEE MORE\" class=\"a-rect-link\">SEE MORE</a></div></div></div> <div class=\"o-index-about__content-mobile\"><div class=\"o-index-about__content-mobile__deco\""+(_vm._ssrStyle(null,{backgroundImage: ("url(" + (__webpack_require__(264)) + ")")}, null))+"></div> <div class=\"o-index-about__content-mobile__desc\">"+((_vm.data.about_block.content[0])?("<div>"+(_vm._s(_vm.data.about_block.content[0].item))+"</div>"):"<!---->")+" <br><br> "+((_vm.data.about_block.content[1])?("<div>"+(_vm._s(_vm.data.about_block.content[0].item))+"</div>"):"<!---->")+" <a"+(_vm._ssrAttr("href",_vm.data.about_block.button_link))+" title=\"SEE MORE\" class=\"a-rect-link\">SEE MORE</a></div></div></div></div></div> "),_vm._ssrNode("<div class=\"o-index-case normal\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div data-aos=\"custom\" class=\"o-index-case__intro\"><p class=\"o-index-case__heading\">\n                    Education Projects\n                </p> <p class=\"o-index-case__subheading\"></p></div> "),_vm._ssrNode("<div data-aos=\"custom\" class=\"o-index-case__main\">","</div>",[_vm._ssrNode("<div class=\"o-index-case__col\">","</div>",[_vm._ssrNode("<div data-id=\"1\" class=\"o-index-case__deco\"><img"+(_vm._ssrAttr("src",__webpack_require__(216)))+" alt></div> "),_vm._ssrNode("<div class=\"m-case-list -multiple\">","</div>",[(_vm.projects)?_vm._ssrNode("<div class=\"m-case-list__main\">","</div>",_vm._l((_vm.projects.slice(1, 5)),function(post,i){return _vm._ssrNode("<div class=\"m-case-list__item\">","</div>",[_c('ArticleCard',{attrs:{"data":post}})],1)}),0):_vm._e(),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"a-rect-link",attrs:{"to":"/projects","title":"SEE MORE"}},[_vm._v("\n                            SEE MORE\n                        ")])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"o-index-case__col js-case-col__2\">","</div>",[(_vm.projects)?_vm._ssrNode("<div class=\"m-case-list -single\">","</div>",[_c('ArticleCard',{attrs:{"data":_vm.projects[0]}})],1):_vm._e()])],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"o-index-case invert\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div data-aos=\"custom\" class=\"o-index-case__intro\"><p class=\"o-index-case__heading\">\n                    Selected Courses\n                </p> <p class=\"o-index-case__subheading\"></p></div> "),_vm._ssrNode("<div data-aos=\"custom\" class=\"o-index-case__main\">","</div>",[_vm._ssrNode("<div class=\"o-index-case__col\">","</div>",[_vm._ssrNode("<div data-id=\"1\" class=\"o-index-case__deco\"><img"+(_vm._ssrAttr("src",__webpack_require__(216)))+" alt></div> "),_vm._ssrNode("<div class=\"m-case-list -multiple\">","</div>",[(_vm.courses)?_vm._ssrNode("<div class=\"m-case-list__main\">","</div>",_vm._l((_vm.courses.slice(1, 5)),function(post,i){return _vm._ssrNode("<div class=\"m-case-list__item\">","</div>",[_c('ArticleCard',{attrs:{"data":post}})],1)}),0):_vm._e(),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"a-rect-link",attrs:{"to":"/courses","title":"SEE MORE"}},[_vm._v("\n                            SEE MORE\n                        ")])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"o-index-case__col js-case-col__2\">","</div>",[(_vm.courses)?_vm._ssrNode("<div class=\"m-case-list -single\">","</div>",[_c('ArticleCard',{attrs:{"data":_vm.courses[0]}})],1):_vm._e()])],2)],2)]),_vm._ssrNode(" <div class=\"o-index-memory-bg\"></div> "),_vm._ssrNode("<div class=\"o-index-memory\">","</div>",[_vm._ssrNode("<div class=\"container\"><h2 class=\"o-index-memory__title\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.memory_wall.title)+"\n            ")+"</h2></div> "),_c('GallerySlide',{attrs:{"images":_vm.data.memory_wall.images}})],2),_vm._ssrNode(" <svg width=\"490\" height=\"212\" viewBox=\"0 0 490 212\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\" class=\"o-index-bottom\"><path d=\"M122.5 0.333217L0 212L490 212L367.5 0.333206L122.5 0.333217Z\" fill=\"#EAEAEA\"></path></svg> <div id=\"scroll-end\" style=\"height: 1px;\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=8b20f7a8&

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(126);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(10);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(127);
var ScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(ScrollTrigger_);

// EXTERNAL MODULE: ./components/Blocks/GallerySlide.vue + 4 modules
var GallerySlide = __webpack_require__(232);

// EXTERNAL MODULE: ./components/Card/ArticleCard.vue + 4 modules
var ArticleCard = __webpack_require__(139);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'PageIndex',
  components: {
    GallerySlide: GallerySlide["default"],
    ArticleCard: ArticleCard["default"]
  },
  meta: {
    loading: true
  },

  async asyncData({
    $config,
    $axios,
    route,
    error
  }) {
    try {
      let {
        data
      } = await $axios.$get(`${$config.APP_BACKEND_API}/wp-json/api/index`);
      const banner = data.banner.map(el => {
        return { ...el,
          year: new Date(el.date).getFullYear().toString(),
          date_str: `${new Date(el.date).getMonth() + 1}.${new Date(el.date).getDate()}`
        };
      });
      const projects = data.article_list[0];
      const courses = data.article_list[1];
      data = { ...data,
        banner
      };
      const seo = data.seo;
      return {
        data,
        projects,
        courses,
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
        projects: {},
        courses: {},
        seo: {}
      };
    }
  },

  data() {
    return {
      fields: '',
      newsActive: 0,
      isFooterHide: false,
      isMainDecoShow: true,
      tl1: null,
      tl2: null,
      tl3: null,
      tl4: null
    };
  },

  head() {
    return {
      title: this.seo.title,
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
        content: `${process.env.APP_URL}`
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

  computed: {
    loadingConfig() {
      return this.$store.state.loadingConfig;
    },

    isLoading() {
      return this.$store.getters.isLoading;
    },

    socialLink() {
      return this.$store.state.globalOptions.options.social_link;
    }

  },

  created() {
    this.$store.commit('CHANGE_LOADING_TYPE', 'LOADING_TYPE_AJAX');
  },

  mounted() {
    this.scrollT1();
    this.scrollT2();
    this.scrollT3();
    this.scrollT4();
    const deco = this.$refs.deco;
    const swiper = new external_swiper_default.a('.index__banner__swiper', {
      slidesPerView: 1,
      // autoplay: {
      //     delay: 3000,
      // },
      loop: this.data.banner.length > 1,
      navigation: {
        nextEl: '.index__banner__swiper-button-next',
        prevEl: '.index__banner__swiper-button-prev'
      },
      pagination: {
        el: '.index__banner__swiper-pagination',
        clickable: true,

        renderBullet(index, className) {
          return '<span class="' + className + ' swiper-pagination__item"><span class="icon-star"></span><span class="icon-circle"></span></span>';
        }

      }
    });
    swiper.on('slideChange', function () {
      deco.dataset.animate = swiper.realIndex + 1;
    });
    window.addEventListener('scroll', this.scroll);
    window.addEventListener('resize', this.restartScrollT3);
  },

  beforeDestroy() {
    this.tl1.kill();
    this.tl2.kill();
    this.tl3.kill();
    this.tl4.kill();
    window.removeEventListener('scroll', this.scroll);
    window.removeEventListener('resize', this.restartScrollT3);
  },

  methods: {
    scroll() {
      if (window.scrollY > 150) {
        this.isFooterHide = true;
      } else {
        this.isFooterHide = false;
      }
    },

    switchNews(e) {
      this.newsActive = +e.target.dataset.id;
    },

    scrollT1() {
      this.tl1 = external_gsap_default.a.timeline({
        scrollTrigger: {
          trigger: '.o-index-case.normal .container',
          pin: false,
          start: 'top bottom-=20%',
          end: '+=255',
          scrub: 2,
          snap: false
        }
      });
      this.tl1.fromTo('.o-index-case.normal .js-case-col__2', {
        y: -255
      }, {
        y: 0
      });
    },

    scrollT2() {
      this.tl2 = external_gsap_default.a.timeline({
        scrollTrigger: {
          trigger: '.o-index-case.invert .container',
          pin: false,
          start: 'top bottom-=20%',
          end: '+=255',
          scrub: 2,
          snap: false
        }
      });
      this.tl2.fromTo('.o-index-case.invert .js-case-col__2', {
        y: -255
      }, {
        y: 0
      });
    },

    scrollT3() {
      const boxX = document.querySelector('.o-index-about__content__box').getBoundingClientRect().x;
      const wrapperWidth = document.querySelector('.o-index-about__main-deco__wrapper').clientWidth;
      const oriLeft = 0.5 * (boxX - wrapperWidth);
      this.tl3 = external_gsap_default.a.timeline({
        scrollTrigger: {
          id: 'o-index-about__main-deco',
          trigger: '.o-index-about__main-deco',
          endTrigger: '#scroll-end',
          pin: true,
          start: 'center center',
          end: 'top top',
          scrub: true,
          snap: false
        }
      });
      this.tl3.set('.o-index-about__main-deco__wrapper', {
        left: oriLeft + 'px'
      }, 't1').fromTo('.o-index-about__main-deco__wrapper__cover', {
        opacity: 1
      }, {
        opacity: 0
      }, 't1').to('.o-index-about__main-deco__wrapper__left', {
        rotation: 180,
        left: '100%',
        width: 221,
        height: 510,
        y: 85
      }, 't2').to('.o-index-about__main-deco__wrapper__right', {
        rotation: -180,
        width: 147,
        height: 340,
        x: 0
      }, 't2').to('.o-index-about__main-deco__wrapper', {
        width: '50%'
      }, 't2').to('.o-index-about__main-deco__wrapper', {
        left: '50%'
      }, 't2').to('.o-index-about__main-deco__wrapper__left', {
        width: 150,
        height: 347,
        y: -20
      }, 't3').to('.o-index-about__main-deco__wrapper__right', {
        width: 120,
        height: 279
      }, 't3').to('.o-index-about__main-deco__wrapper', {
        top: '20%'
      }, 't3').set('.o-index-about__main-deco__wrapper__left > svg', {
        transformOrigin: 'right'
      }, 't4').set('.o-index-about__main-deco__wrapper__right > svg', {
        transformOrigin: 'left'
      }, 't4').to('.o-index-about__main-deco__wrapper__left > svg', {
        rotation: 1080
      }, 't4').to('.o-index-about__main-deco__wrapper__right > svg', {
        rotation: 720
      }, 't4').to('.o-index-about__main-deco__wrapper__left', {
        width: 30,
        height: 70
      }, 't4').to('.o-index-about__main-deco__wrapper__right', {
        width: 15,
        height: 35,
        y: -36
      }, 't4').to('.o-index-about__main-deco__wrapper', {
        top: '75%'
      }, 't4').to('.o-index-about__main-deco__wrapper__left', {
        opacity: 0
      }, 't4+=75%').to('.o-index-about__main-deco__wrapper__right', {
        opacity: 0
      }, 't4+=75%');
    },

    scrollT4() {
      this.tl4 = external_gsap_default.a.timeline({
        scrollTrigger: {
          trigger: '.o-index-about__content__box',
          pin: true,
          start: 'center+=235 center',
          scrub: true,
          snap: false,
          onEnter: () => {
            this.$refs.aboutContent.dataset.content = 2;
            this.$refs.aboutContent.querySelectorAll('.swiper-pagination__item').forEach((el, i) => {
              el.classList.remove('swiper-pagination-bullet-active');

              if (i === 1) {
                el.classList.add('swiper-pagination-bullet-active');
              }

              external_gsap_default.a.timeline().to('.o-index-about__main-deco__wrapper', {
                x: -50,
                opacity: 0,
                duration: 0.2,
                ease: 'linear',
                onComplete: () => {
                  document.querySelector('.o-index-about__main-deco__wrapper__cover').dataset.image = '2';
                }
              }).to('.o-index-about__main-deco__wrapper', {
                x: 0,
                opacity: 1,
                duration: 0.2,
                ease: 'linear'
              });
            });
          },
          onLeaveBack: () => {
            this.$refs.aboutContent.dataset.content = 1;
            this.$refs.aboutContent.querySelectorAll('.swiper-pagination__item').forEach((el, i) => {
              el.classList.remove('swiper-pagination-bullet-active');

              if (i === 0) {
                el.classList.add('swiper-pagination-bullet-active');
              }

              external_gsap_default.a.timeline().to('.o-index-about__main-deco__wrapper', {
                x: -50,
                opacity: 0,
                duration: 0.2,
                ease: 'linear',
                onComplete: () => {
                  document.querySelector('.o-index-about__main-deco__wrapper__cover').dataset.image = '1';
                }
              }).to('.o-index-about__main-deco__wrapper', {
                x: 0,
                opacity: 1,
                duration: 0.2,
                ease: 'linear'
              });
            });
          }
        }
      });
    },

    restartScrollT3() {
      const st3 = ScrollTrigger_default.a.getById('o-index-about__main-deco');
      st3.kill();
      this.tl3.kill();
      this.isMainDecoShow = false;
      setTimeout(() => {
        this.isMainDecoShow = true;
      }, 500);
      setTimeout(() => {
        this.scrollT3();
      }, 750);
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// EXTERNAL MODULE: ./pages/index.vue?vue&type=custom&index=0&blockType=i18n
var pagesvue_type_custom_index_0_blockType_i18n = __webpack_require__(272);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(265)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9187714a"
  
)

/* custom blocks */

if (typeof pagesvue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(pagesvue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map