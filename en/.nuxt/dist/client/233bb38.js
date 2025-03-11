/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
	[29, 11, 14], {
		418: function(t, e, o) {
			var content = o(426);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, o(44).default)("2b06289c", content, !0, {
				sourceMap: !1
			})
		},
		419: function(t, e, o) {
			"use strict";
			o(12);
			var n = o(420),
				r = o.n(n);
			e.a = function() {
				return {
					loadImage: function() {
						return new Promise((function(t) {
							new r.a("#__nuxt", {
								background: !0
							}, (function(e) {
								t()
							}))
						}))
					}
				}
			}
		},
		420: function(t, e, o) {
			var n, r;
			! function(c, l) {
				"use strict";
				n = [o(421)], void 0 === (r = function(t) {
					return function(t, e) {
						var o = t.jQuery,
							n = t.console;

						function r(a, b) {
							for (var t in b) a[t] = b[t];
							return a
						}
						var c = Array.prototype.slice;

						function l(t) {
							return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? c.call(t) : [t]
						}

						function m(t, e, c) {
							if (!(this instanceof m)) return new m(t, e, c);
							var h = t;
							"string" == typeof t && (h = document.querySelectorAll(t)), h ? (this.elements = l(h), this.options = r({}, this.options), "function" == typeof e ? c = e : r(this.options, e), c && this.on("always", c), this.getImages(), o && (this.jqDeferred = new o.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (h || t))
						}
						m.prototype = Object.create(e.prototype), m.prototype.options = {}, m.prototype.getImages = function() {
							this.images = [], this.elements.forEach(this.addElementImages, this)
						}, m.prototype.addElementImages = function(t) {
							"IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
							var e = t.nodeType;
							if (e && h[e]) {
								for (var o = t.querySelectorAll("img"), i = 0; i < o.length; i++) {
									var img = o[i];
									this.addImage(img)
								}
								if ("string" == typeof this.options.background) {
									var n = t.querySelectorAll(this.options.background);
									for (i = 0; i < n.length; i++) {
										var r = n[i];
										this.addElementBackgroundImages(r)
									}
								}
							}
						};
						var h = {
							1: !0,
							9: !0,
							11: !0
						};

						function d(img) {
							this.img = img
						}

						function f(t, element) {
							this.url = t, this.element = element, this.img = new Image
						}
						return m.prototype.addElementBackgroundImages = function(t) {
							var style = getComputedStyle(t);
							if (style)
								for (var e = /url\((['"])?(.*?)\1\)/gi, o = e.exec(style.backgroundImage); null !== o;) {
									var n = o && o[2];
									n && this.addBackground(n, t), o = e.exec(style.backgroundImage)
								}
						}, m.prototype.addImage = function(img) {
							var t = new d(img);
							this.images.push(t)
						}, m.prototype.addBackground = function(t, e) {
							var o = new f(t, e);
							this.images.push(o)
						}, m.prototype.check = function() {
							var t = this;

							function e(image, e, o) {
								setTimeout((function() {
									t.progress(image, e, o)
								}))
							}
							this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
								t.once("progress", e), t.check()
							})) : this.complete()
						}, m.prototype.progress = function(image, t, e) {
							this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded, this.emitEvent("progress", [this, image, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, image), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + e, image, t)
						}, m.prototype.complete = function() {
							var t = this.hasAnyBroken ? "fail" : "done";
							if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
								var e = this.hasAnyBroken ? "reject" : "resolve";
								this.jqDeferred[e](this)
							}
						}, d.prototype = Object.create(e.prototype), d.prototype.check = function() {
							this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
						}, d.prototype.getIsImageComplete = function() {
							return this.img.complete && this.img.naturalWidth
						}, d.prototype.confirm = function(t, e) {
							this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
						}, d.prototype.handleEvent = function(t) {
							var e = "on" + t.type;
							this[e] && this[e](t)
						}, d.prototype.onload = function() {
							this.confirm(!0, "onload"), this.unbindEvents()
						}, d.prototype.onerror = function() {
							this.confirm(!1, "onerror"), this.unbindEvents()
						}, d.prototype.unbindEvents = function() {
							this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
						}, f.prototype = Object.create(d.prototype), f.prototype.check = function() {
							this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
						}, f.prototype.unbindEvents = function() {
							this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
						}, f.prototype.confirm = function(t, e) {
							this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
						}, m.makeJQueryPlugin = function(e) {
							(e = e || t.jQuery) && ((o = e).fn.imagesLoaded = function(t, e) {
								return new m(this, t, e).jqDeferred.promise(o(this))
							})
						}, m.makeJQueryPlugin(), m
					}(c, t)
				}.apply(e, n)) || (t.exports = r)
			}("undefined" != typeof window ? window : this)
		},
		421: function(t, e, o) {
			var n, r;
			"undefined" != typeof window && window, void 0 === (r = "function" == typeof(n = function() {
				"use strict";

				function t() {}
				var e = t.prototype;
				return e.on = function(t, e) {
					if (t && e) {
						var o = this._events = this._events || {},
							n = o[t] = o[t] || [];
						return -1 == n.indexOf(e) && n.push(e), this
					}
				}, e.once = function(t, e) {
					if (t && e) {
						this.on(t, e);
						var o = this._onceEvents = this._onceEvents || {};
						return (o[t] = o[t] || {})[e] = !0, this
					}
				}, e.off = function(t, e) {
					var o = this._events && this._events[t];
					if (o && o.length) {
						var n = o.indexOf(e);
						return -1 != n && o.splice(n, 1), this
					}
				}, e.emitEvent = function(t, e) {
					var o = this._events && this._events[t];
					if (o && o.length) {
						o = o.slice(0), e = e || [];
						for (var n = this._onceEvents && this._onceEvents[t], i = 0; i < o.length; i++) {
							var r = o[i];
							n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e)
						}
						return this
					}
				}, e.allOff = function() {
					delete this._events, delete this._onceEvents
				}, t
			}) ? n.call(e, o, e, t) : n) || (t.exports = r)
		},
		424: function(t, e) {
			t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDYgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNSA2TDEgMTEiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4K"
		},
		425: function(t, e, o) {
			"use strict";
			o(418)
		},
		426: function(t, e, o) {
			var n = o(43)((function(i) {
				return i[1]
			}));
			n.push([t.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]), n.push([t.i, ".breadcrumb[data-v-21d5390a]{display:flex;align-items:flex-end}.breadcrumb__item[data-v-21d5390a]{display:flex;align-items:center;color:#333;margin-bottom:12px;opacity:1;transition:opacity .5s}@media(min-width:1200px){.breadcrumb__item[data-v-21d5390a]{margin-bottom:16px}}.breadcrumb__item-arrow[data-v-21d5390a]{margin:auto 10px}.breadcrumb__item[data-v-21d5390a]:not(:last-child){opacity:.5;transition:opacity .5s}.breadcrumb__item[data-v-21d5390a]:not(:last-child):hover{opacity:1}.breadcrumb__item:last-child .breadcrumb__item-arrow[data-v-21d5390a]{display:none}", ""]), n.locals = {}, t.exports = n
		},
		427: function(t, e, o) {
			"use strict";
			o.r(e);
			var n = {
					props: {
						data: {
							type: Array,
							default: function() {
								return []
							}
						}
					}
				},
				r = (o(425), o(18)),
				component = Object(r.a)(n, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("ul", {
						staticClass: "breadcrumb"
					}, t._l(t.data, (function(e) {
						return n("li", {
							key: e.title,
							staticClass: "breadcrumb__item"
						}, [n("a", {
							attrs: {
								href: e.url
							}
						}, [t._v(t._s(e.title))]), t._v(" "), n("img", {
							staticClass: "breadcrumb__item-arrow",
							attrs: {
								src: o(424),
								alt: "箭頭"
							}
						})])
					})), 0)
				}), [], !1, null, "21d5390a", null);
			e.default = component.exports
		},
		444: function(t, e, o) {
			var content = o(479);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, o(44).default)("59aa0f2e", content, !0, {
				sourceMap: !1
			})
		},
		476: function(t, e, o) {
			"use strict";
			(function(t) {
				var n = o(5),
					r = (o(35), o(24), o(68)),
					c = o(427),
					l = o(535),
					m = o(419),
					h = Object(m.a)().loadImage;
				e.a = {
					components: {
						BreadCrumb: c.default,
						GoogleMap: l.default
					},
					asyncData: function(t) {
						return Object(n.a)(regeneratorRuntime.mark((function e() {
							var o, n, r, c, data, l;
							return regeneratorRuntime.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return o = t.$config, n = t.$axios, r = t.error, e.prev = 1, e.next = 4, n.$get("".concat(o.APP_BACKEND_API, "/wp-json/api/contact"));
									case 4:
										return c = e.sent, data = c.data, l = data.fields.seo, e.abrupt("return", {
											data: data,
											seo: l
										});
									case 10:
										return e.prev = 10, e.t0 = e.catch(1), console.log(e.t0), r({
											statusCode: 404,
											message: "Post not found"
										}), e.abrupt("return", {
											data: {},
											seo: {}
										});
									case 15:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[1, 10]
							])
						})))()
					},
					head: function() {
						return {
							title: this.seo.title + " | " + this.$config.APP_TITLE_TEMPLATE,
							meta: [{
								hid: "description",
								name: "description",
								content: this.seo.desc
							}, {
								hid: "og:title",
								property: "og:title",
								content: this.seo.title
							}, {
								hid: "og:description",
								property: "og:description",
								content: this.seo.desc
							}, {
								hid: "og:url",
								property: "og:url",
								content: "".concat(t.env.APP_URL).concat(this.$route.fullPath)
							}, {
								hid: "og:site_name",
								property: "og:site_name",
								content: this.seo.title
							}, {
								hid: "og:image",
								property: "og:image",
								content: this.seo.thumb ? this.seo.thumb : "".concat(t.env.APP_URL, "/og_img.jpg")
							}, {
								hid: "og:image:alt",
								property: "og:image:alt",
								content: this.seo.desc
							}, {
								hid: "twitter:description",
								name: "twitter:description",
								content: this.seo.desc
							}, {
								hid: "twitter:title",
								name: "twitter:title",
								content: this.seo.title
							}, {
								hid: "twitter:image",
								name: "twitter:image",
								content: this.seo.thumb ? this.seo.thumb : "".concat(t.env.APP_URL, "/og_img.jpg")
							}]
						}
					},
					mounted: function() {
						this.$store.dispatch("ADD_LOADING_STACK", h()), this.$store.dispatch("WAIT_LOADING"), this.gsapInit()
					},
					methods: {
						gsapInit: function() {
							r.a.fromTo(".breadcrumb", {
								y: -20,
								opacity: 0
							}, {
								y: 0,
								opacity: 1
							}).delay(1), r.a.fromTo(".contact__page-title__title", {
								x: -20,
								opacity: 0
							}, {
								x: 0,
								opacity: 1
							}).delay(1), r.a.fromTo(".contact__page-title__content", {
								x: 20,
								opacity: 0
							}, {
								x: 0,
								opacity: 1
							}).delay(1), r.a.fromTo(".google-map", {
								y: 20,
								opacity: 0
							}, {
								y: 0,
								opacity: 1
							}).delay(1), r.a.fromTo(".contact__info__item", {
								y: 20,
								opacity: 0
							}, {
								y: 0,
								opacity: 1,
								stagger: .2
							}).delay(1.3)
						}
					}
				}
			}).call(this, o(117))
		},
		477: function(t, e, o) {
			t.exports = o.p + "img/google-map-dot.383e009.svg"
		},
		478: function(t, e, o) {
			"use strict";
			o(444)
		},
		479: function(t, e, o) {
			var n = o(43)((function(i) {
				return i[1]
			}));
			n.push([t.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]), n.push([t.i, ".google-map{position:relative;left:calc(50% - 50vw);margin-bottom:40px;width:100vw;height:400px}@media(min-width:1200px){.google-map{left:unset;margin-bottom:50px;width:100%;height:600px}}.google-map__map-container{position:relative;width:100%;height:100%}.google-map__map-container__google-main-map{position:absolute!important;top:0;bottom:0;right:0;left:0;margin:auto;width:100%;height:100%;z-index:0}.google-map__map-container__zoom-box{position:absolute;bottom:20px;right:20px;z-index:10}.google-map__map-container__zoom-box .zoom-button{display:flex;align-items:center;justify-content:center;margin-bottom:5px;width:40px;height:40px;font-size:1rem;color:#fff;background-color:#444;cursor:pointer}", ""]), n.locals = {}, t.exports = n
		},
		515: function(t, e, o) {
			var content = o(547);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, o(44).default)("49ca0508", content, !0, {
				sourceMap: !1
			})
		},
		535: function(t, e, o) {
			"use strict";
			o.r(e);
			o(48), o(54);
			var n = {
					props: {
						id: {
							type: void 0,
							default: function() {
								return null
							}
						}
					},
					data: function() {
						return {
							map: null,
							google: null,
							map_start: !1,
							mapResizeTimer: null,
							centerMarker1: null,
							map_styles: [{
								featureType: "water",
								elementType: "geometry",
								stylers: [{
									color: "#e9e9e9"
								}, {
									lightness: 17
								}]
							}, {
								featureType: "landscape",
								elementType: "geometry",
								stylers: [{
									color: "#f5f5f5"
								}, {
									lightness: 20
								}]
							}, {
								featureType: "road.highway",
								elementType: "geometry.fill",
								stylers: [{
									color: "#ffffff"
								}, {
									lightness: 17
								}]
							}, {
								featureType: "road.highway",
								elementType: "geometry.stroke",
								stylers: [{
									color: "#ffffff"
								}, {
									lightness: 29
								}, {
									weight: .2
								}]
							}, {
								featureType: "road.arterial",
								elementType: "geometry",
								stylers: [{
									color: "#ffffff"
								}, {
									lightness: 18
								}]
							}, {
								featureType: "road.local",
								elementType: "geometry",
								stylers: [{
									color: "#ffffff"
								}, {
									lightness: 16
								}]
							}, {
								featureType: "poi",
								elementType: "geometry",
								stylers: [{
									color: "#f5f5f5"
								}, {
									lightness: 21
								}]
							}, {
								featureType: "poi.park",
								elementType: "geometry",
								stylers: [{
									color: "#dedede"
								}, {
									lightness: 21
								}]
							}, {
								elementType: "labels.text.stroke",
								stylers: [{
									visibility: "on"
								}, {
									color: "#ffffff"
								}, {
									lightness: 16
								}]
							}, {
								elementType: "labels.text.fill",
								stylers: [{
									saturation: 36
								}, {
									color: "#333333"
								}, {
									lightness: 40
								}]
							}, {
								elementType: "labels.icon",
								stylers: [{
									visibility: "off"
								}]
							}, {
								featureType: "transit",
								elementType: "geometry",
								stylers: [{
									color: "#f2f2f2"
								}, {
									lightness: 19
								}]
							}, {
								featureType: "administrative",
								elementType: "geometry.fill",
								stylers: [{
									color: "#fefefe"
								}, {
									lightness: 20
								}]
							}, {
								featureType: "administrative",
								elementType: "geometry.stroke",
								stylers: [{
									color: "#fefefe"
								}, {
									lightness: 17
								}, {
									weight: 1.2
								}]
							}],
							resizeFunc: null
						}
					},
					mounted: function() {
						this.google = window.google, this.start_map(), this.resizeFunc = this.resize.bind(this), window.addEventListener("resize", this.resizeFunc)
					},
					beforeDestroy: function() {
						window.removeEventListener("resize", this.resizeFunc)
					},
					methods: {
						start_map: function() {
							this.map_start = !0;
							var t = {
								center: new this.google.maps.LatLng(25.091, 121.5379),
								zoom: 10.6,
								mapTypeControl: !1,
								scaleControl: !1,
								streetViewControl: !1,
								rotateControl: !1,
								fullscreenControl: !1,
								scrollwheel: !1,
								mapTypeId: this.google.maps.MapTypeId.ROADMAP,
								styles: this.map_styles,
								text: "off",
								zoomControl: !1
							};
							this.zoom = 10.6, this.map = new this.google.maps.Map(this.$refs.googleMainMap, t), this.restart_icon(), this.map_start = !1
						},
						clean_map: function() {
							this.map = null
						},
						Zoom_out: function() {
							1 != +this.zoom && (this.map.setZoom(this.zoom - 1), this.zoom = this.zoom - 1, this.restart_icon())
						},
						restart_icon: function() {
							this.centerMarker1 && this.centerMarker1.setMap(null);
							var t = {
								url: o(477),
								size: new this.google.maps.Size(64, 78),
								scaledSize: new this.google.maps.Size(32, 39),
								origin: new this.google.maps.Point(0, 0),
								anchor: new this.google.maps.Point(0, 0)
							};
							this.centerMarker1 = new this.google.maps.Marker({
								position: new this.google.maps.LatLng(25.041, 121.5379),
								map: this.map,
								title: "mackent",
								icon: t,
								optimized: !1
							})
						},
						Zoom_in: function() {
							22 != +this.zoom && (this.map.setZoom(this.zoom + 1), this.zoom = this.zoom + 1, this.restart_icon())
						},
						resize: function() {
							var t = this;
							clearTimeout(this.mapResizeTimer), this.mapResizeTimer = setTimeout((function() {
								t.start_map()
							}), 200)
						}
					}
				},
				r = (o(478), o(18)),
				component = Object(r.a)(n, (function() {
					var t = this,
						e = t.$createElement,
						o = t._self._c || e;
					return o("div", {
						staticClass: "google-map"
					}, [o("div", {
						staticClass: "google-map__map-container"
					}, [o("div", {
						ref: "googleMainMap",
						staticClass: "google-map__map-container__google-main-map"
					}), t._v(" "), o("div", {
						staticClass: "google-map__map-container__zoom-box"
					}, [o("div", {
						staticClass: "zoom-in zoom-button",
						on: {
							click: t.Zoom_in
						}
					}, [o("i", {
						staticClass: "icon-plus"
					})]), t._v(" "), o("div", {
						staticClass: "zoom-out zoom-button",
						on: {
							click: t.Zoom_out
						}
					}, [o("i", {
						staticClass: "icon-out"
					})])])])])
				}), [], !1, null, null, null);
			e.default = component.exports
		},
		546: function(t, e, o) {
			"use strict";
			o(515)
		},
		547: function(t, e, o) {
			var n = o(43)((function(i) {
				return i[1]
			}));
			n.push([t.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC&family=Red+Hat+Display:wght@300&display=swap);"]), n.push([t.i, ".contact{overflow:hidden;padding-top:118px}.contact__page-title{margin-bottom:40px}@media(min-width:1200px){.contact__page-title{margin-bottom:80px;display:flex;align-items:center}}.contact__page-title__title{margin-bottom:40px;font-size:32px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.contact__page-title__title{font-size:48px;width:41.666666%;margin-bottom:0}}.contact__page-title__content{color:rgba(51,51,51,.8);font-size:16px;font-weight:700;line-height:1.3;letter-spacing:.5px}@media(min-width:1200px){.contact__page-title__content{font-size:18px;width:58.333333%}}.contact .google-map{margin-bottom:60px}.contact__info{padding-bottom:80px}@media(min-width:1200px){.contact__info{display:flex;justify-content:space-between;padding-bottom:160px}}.contact__info__item{flex:0 0 auto;margin-bottom:24px}@media(min-width:1200px){.contact__info__item{margin-bottom:0}}@media(min-width:1200px){.contact__info__item.address{flex:0 0 41.666666%;width:41.666666%}}.contact__info__item__title{margin-bottom:8px;color:rgba(51,51,51,.6);font-size:14px;font-weight:500;line-height:1.5}.contact__info__item__value{color:#333;font-size:14px;font-weight:500;line-height:1.5}", ""]), n.locals = {}, t.exports = n
		},
		607: function(t, e, o) {
			"use strict";
			o.r(e);
			var n = o(476).a,
				r = (o(546), o(18)),
				component = Object(r.a)(n, (function() {
					var t = this,
						e = t.$createElement,
						o = t._self._c || e;
					return o("div", {
						staticClass: "contact"
					}, [o("div", {
						staticClass: "container"
					}, [o("BreadCrumb", {
						attrs: {
							data: t.data.breadcrumbs
						}
					}), t._v(" "), o("div", {
						staticClass: "contact__page-title"
					}, [o("h1", {
						staticClass: "contact__page-title__title"
					}, [t._v("\n                " + t._s(t.data.page_title) + "\n            ")]), t._v(" "), o("div", {
						staticClass: "contact__page-title__content",
						domProps: {
							innerHTML: t._s(t.data.fields.content)
						}
					})]), t._v(" "), o("GoogleMap"), t._v(" "), o("div", {
						staticClass: "contact__info"
					}, [o("div", {
						staticClass: "contact__info__item phone"
					}, [o("h6", {
						staticClass: "contact__info__item__title"
					}, [t._v("\n                    Phone\n                ")]), t._v(" "), o("h6", {
						staticClass: "contact__info__item__value"
					}, [t._v("\n                    " + t._s(t.data.fields.tel) + "\n                ")])]), t._v(" "), o("div", {
						staticClass: "contact__info__item email"
					}, [o("h6", {
						staticClass: "contact__info__item__title"
					}, [t._v("\n                    E-mail\n                ")]), t._v(" "), o("h6", {
						staticClass: "contact__info__item__value"
					}, [t._v("\n                    " + t._s(t.data.fields.email) + "\n                ")])]), t._v(" "), o("div", {
						staticClass: "contact__info__item address"
					}, [o("h6", {
						staticClass: "contact__info__item__title"
					}, [t._v("\n                    Address\n                ")]), t._v(" "), o("h6", {
						staticClass: "contact__info__item__value"
					}, [t._v("\n                    " + t._s(t.data.fields.address) + "\n                ")])])])], 1)])
				}), [], !1, null, null, null);
			e.default = component.exports
		}
	}
]);