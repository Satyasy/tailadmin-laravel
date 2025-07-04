"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Layouts_MainMenu_Umay_MainMenu_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Functions/menuTrigger */ "./resources/js/Functions/menuTrigger.js");
/* harmony import */ var _Sources_mainMenuLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Sources/mainMenuLinks */ "./resources/js/Sources/mainMenuLinks.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config */ "./resources/js/config.js");
/* harmony import */ var _Layouts_MainMenu_Umay_MainMenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Layouts/MainMenu/Umay/MainMenuItem */ "./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);




/*Sources*/




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'MainMenu',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();

    /*Functions*/
    var _MainMenuLinks = (0,_Sources_mainMenuLinks__WEBPACK_IMPORTED_MODULE_3__["default"])({
        roles: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.value.roles,
        permissions: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.value.permissions
      }),
      mainMenuLinks = _MainMenuLinks.mainMenuLinks,
      mainMenuFooterLinks = _MainMenuLinks.mainMenuFooterLinks;

    /*Menu - Variables*/
    var selectedLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('selectedLink', selectedLink);
    var appearingMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("appearingMode");

    /*Watch Window Size*/
    var breakpoints = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('breakpoints');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(breakpoints);
    }, function (newValue) {
      if (newValue.value.smaller('md').value) {
        _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_2__.menuStatus.value = 'hidden';
      }
      if (newValue.value.greater('md').value) {
        _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_2__.menuStatus.value = 'opened';
      }
    });
    var __returned__ = {
      mainMenuLinks: mainMenuLinks,
      mainMenuFooterLinks: mainMenuFooterLinks,
      selectedLink: selectedLink,
      appearingMode: appearingMode,
      breakpoints: breakpoints,
      inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject,
      provide: vue__WEBPACK_IMPORTED_MODULE_0__.provide,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      get Link() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link;
      },
      get usePage() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage;
      },
      get menuStatus() {
        return _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_2__.menuStatus;
      },
      get updateMenuStatus() {
        return _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_2__.updateMenuStatus;
      },
      get MainMenuLinks() {
        return _Sources_mainMenuLinks__WEBPACK_IMPORTED_MODULE_3__["default"];
      },
      get appConf() {
        return _config__WEBPACK_IMPORTED_MODULE_4__.appConf;
      },
      get mainMenuConf() {
        return _config__WEBPACK_IMPORTED_MODULE_4__.mainMenuConf;
      },
      get MainMenuItem() {
        return _Layouts_MainMenu_Umay_MainMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"];
      },
      get cloneDeep() {
        return lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Functions/menuTrigger */ "./resources/js/Functions/menuTrigger.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ "./resources/js/config.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




/*Sources*/


/*Variables*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'MainMenuItem',
  props: {
    link: {
      type: Object,
      "default": null
    }
  },
  emits: ['selected'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      __emit = _ref.emit;
    __expose();

    /*Functions*/
    var emit = __emit;
    var props = __props;
    var selectedLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('selectedLink');
    var activeMenus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      root: null,
      second: null,
      third: null
    });

    /*Select Active Link*/
    var select = function select(selection) {
      if (selectedLink.value[0] === selection[0] && selection.length === 1 && _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_2__.menuStatus !== 'opened') {
        emit('selected', []);
      } else if (selectedLink.value[0] === selection[0] && selectedLink.value[1] === selection[1] && selection.length === 2) {
        emit('selected', selection.splice(0, 1));
      } else {
        emit('selected', selection);
      }
    };

    /*Search Active Link*/
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(function () {
      if (props.link["links"]) {
        var _iterator = _createForOfIteratorHelper(props.link["links"]),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;
            /*Check Second Level*/
            if (route().current(child.link) && child.link !== null && !child["links"]) {
              activeMenus.root = props.link.id;
              activeMenus.second = child.id;
              select([props.link.id, child.id]);
            }

            /*Check Third Level*/
            if (child["links"]) {
              var _iterator2 = _createForOfIteratorHelper(child["links"]),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var third = _step2.value;
                  if (route().current(third.link) && third.link !== null) {
                    activeMenus.root = props.link.id;
                    activeMenus.second = child.id;
                    activeMenus.third = third.id;
                    select([props.link.id, child.id, third.id]);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        /*Check First Level*/
        if (route().current(props.link.link) && props.link.link !== null) {
          activeMenus.root = props.link.id;
          select([props.link.id]);
        }
      }
    });

    /*Radius Check*/
    var generatedRadius = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var style = {
        rootLinkClasses: {
          activeBg: null,
          normal: null,
          active: null
        },
        secondLinkClasses: {
          activeBg: null,
          normal: null,
          active: null
        },
        thirdLinkClasses: {
          activeBg: null,
          normal: null,
          active: null
        }
      };
      var comparedStyle = "radius-".concat(_config__WEBPACK_IMPORTED_MODULE_3__.mainMenuConf.umay.menuRadius ? _config__WEBPACK_IMPORTED_MODULE_3__.mainMenuConf.umay.menuRadius : _config__WEBPACK_IMPORTED_MODULE_3__.appConf.radius);
      var mainKeys = ['rootLinkClasses', 'secondLinkClasses', 'thirdLinkClasses'];
      var subKeys = ['activeBg', 'normal', 'active'];
      mainKeys.forEach(function (link) {
        subKeys.forEach(function (subLink) {
          _config__WEBPACK_IMPORTED_MODULE_3__.mainMenuConf.umay[link][subLink].forEach(function (i) {
            if (!i.match(/(rounded|radius)/g)) {
              style[link][subLink] = comparedStyle;
            } else {
              style[link][subLink] = null;
            }
          });
        });
      });
      return style;
    });
    var __returned__ = {
      emit: emit,
      props: props,
      selectedLink: selectedLink,
      activeMenus: activeMenus,
      select: select,
      generatedRadius: generatedRadius,
      inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      get Link() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link;
      },
      get menuStatus() {
        return _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_2__.menuStatus;
      },
      get updateMenuStatus() {
        return _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_2__.updateMenuStatus;
      },
      get appConf() {
        return _config__WEBPACK_IMPORTED_MODULE_3__.appConf;
      },
      get mainMenuConf() {
        return _config__WEBPACK_IMPORTED_MODULE_3__.mainMenuConf;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=template&id=12b5c0f8&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=template&id=12b5c0f8&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-12b5c0f8"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = ["src"];
var _hoisted_2 = ["innerHTML"];
var _hoisted_3 = {
  id: "links-wrapper"
};
var _hoisted_4 = {
  id: "footer"
};
var _hoisted_5 = ["textContent"];
var _hoisted_6 = ["href"];
var _hoisted_7 = ["textContent"];
var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "class": "umay-main-menu-trigger-icon",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M13 5l7 7-7 7M5 5l7 7-7 7"
  })], -1 /* HOISTED */);
});
var _hoisted_9 = [_hoisted_8];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("aside", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["umay-main-menu", {
      'umay-main-menu-show': $setup.menuStatus === 'opened',
      'umay-main-menu-hide': $setup.menuStatus === 'hidden',
      'umay-main-menu-fold': $setup.menuStatus === 'closed'
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["header", [$setup.mainMenuConf.umay.logoAreaClasses ? $setup.mainMenuConf.umay.logoAreaClasses : $setup.appConf.logoAreaClasses, "radius-".concat($setup.mainMenuConf.umay.logoAreaRadius ? $setup.mainMenuConf.umay.logoAreaRadius : $setup.appConf.radius)]])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Link"], {
    href: _ctx.route('/'),
    "class": "logo-out-container"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["logo-inside-container", $setup.menuStatus === 'closed' && 'ml-1'])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("TODO: Title and Logo will come from DB"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: [$setup.appearingMode === 'dark' ? $setup.mainMenuConf.umay.logo.dark ? $setup.mainMenuConf.umay.logo.dark : $setup.appConf.logo.dark : $setup.mainMenuConf.umay.logo.light ? $setup.mainMenuConf.umay.logo.light : $setup.appConf.logo.light],
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.mainMenuConf.umay.logoClasses)
      }, null, 10 /* CLASS, PROPS */, _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        id: "logo-title",
        innerHTML: $setup.mainMenuConf.appName ? $setup.mainMenuConf.appName : $setup.appConf.appName,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.menuStatus !== 'closed' ? 'umay-main-menu-title-show' : 'umay-main-menu-title-hide', $setup.mainMenuConf.umay.appNameClasses])
      }, null, 10 /* CLASS, PROPS */, _hoisted_2)], 2 /* CLASS */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Menu Items"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.mainMenuLinks, function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["MainMenuItem"], {
      key: link.id,
      link: link,
      onSelected: _cache[0] || (_cache[0] = function ($event) {
        return $setup.selectedLink = $event;
      })
    }, null, 8 /* PROPS */, ["link"]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Menu Footer"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$setup.mainMenuFooterLinks.length > 0 && $setup.menuStatus !== 'closed' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: "mainMenuFooterLinks",
        id: "footer-links-wrapper",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.mainMenuFooterLinks.length > 1 ? 'grid-cols-2' : '', "radius-".concat($setup.mainMenuConf.umay.radius ? $setup.mainMenuConf.umay.radius : $setup.appConf.radius)])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Footer Links"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.mainMenuFooterLinks, function (link) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Internal Route Link"), link.linkType === 'route' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Link"], {
          id: "footer-link",
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.mainMenuFooterLinks.length > 2 ? 'justify-start' : 'justify-center'),
          href: _ctx.route(link.link),
          key: link.id
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [link.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
              key: 0,
              icon: link.icon
            }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label ? link.label : link.label)
            }, null, 8 /* PROPS */, _hoisted_5)];
          }),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["class", "href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: 1
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("External Link"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
          id: "footer-link",
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.mainMenuFooterLinks.length > 2 ? 'justify-start' : 'justify-center'),
          href: link.link,
          target: "_blank",
          key: link.id
        }, [link.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
          key: 0,
          icon: link.icon
        }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label ? link.label : link.label)
        }, null, 8 /* PROPS */, _hoisted_7)], 10 /* CLASS, PROPS */, _hoisted_6))], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);
      }), 256 /* UNKEYED_FRAGMENT */))], 2 /* CLASS */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: "mainMenuOpenArrow",
        id: "footer-trigger",
        onClick: _cache[1] || (_cache[1] = function () {
          return $setup.updateMenuStatus && $setup.updateMenuStatus.apply($setup, arguments);
        })
      }, [].concat(_hoisted_9)))];
    }),
    _: 1 /* STABLE */
  })])], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=template&id=486ee737&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=template&id=486ee737&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-486ee737"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "flex justify-center items-center w-8 h-8"
};
var _hoisted_2 = ["textContent"];
var _hoisted_3 = {
  "class": "flex justify-center items-center w-8 h-8"
};
var _hoisted_4 = ["textContent"];
var _hoisted_5 = ["href", "target"];
var _hoisted_6 = {
  "class": "flex justify-center items-center w-8 h-8"
};
var _hoisted_7 = ["textContent"];
var _hoisted_8 = {
  key: 0,
  "class": "flex flex-col py-2 space-y-2 overflow-hidden"
};
var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
  "class": "flex space-x-2 items-center"
};
var _hoisted_11 = ["textContent"];
var _hoisted_12 = {
  "class": "flex justify-between space-x-2 items-center w-full"
};
var _hoisted_13 = ["textContent"];
var _hoisted_14 = ["href", "target"];
var _hoisted_15 = {
  "class": "flex justify-center items-center w-8 h-8"
};
var _hoisted_16 = ["textContent"];
var _hoisted_17 = {
  "class": "flex flex-col space-y-4 w-full"
};
var _hoisted_18 = {
  "class": "flex justify-between space-x-2 py-2 items-center w-full"
};
var _hoisted_19 = ["textContent"];
var _hoisted_20 = ["href", "target"];
var _hoisted_21 = {
  "class": "flex justify-center items-center w-8 h-8"
};
var _hoisted_22 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Root Wrapper"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["relative w-full font-sans text-slate-100 p-2", [$setup.generatedRadius.rootLinkClasses.activeBg, $setup.selectedLink.includes($props.link.id) && $props.link['links'] && $setup.menuStatus !== 'closed' && $setup.mainMenuConf.umay.rootLinkClasses.activeBg]])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Root Item: Dropdown"), $props.link.type === 'dropdown' && $props.link.visibleFor !== false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      $setup.select([$props.link.id]);
      $setup.menuStatus === 'closed' && $setup.updateMenuStatus();
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-between items-center px-2 rounded cursor-pointer overflow-hidden transition-color duration-300 w-full", [$setup.selectedLink.includes($props.link.id) && $setup.menuStatus !== 'closed' || $setup.activeMenus.root === $props.link.id ? [$setup.mainMenuConf.umay.rootLinkClasses.active, $setup.generatedRadius.rootLinkClasses.active] : [$setup.mainMenuConf.umay.rootLinkClasses.normal, $setup.generatedRadius.rootLinkClasses.normal], $setup.menuStatus !== 'closed' ? 'h-12 space-x-2' : 'h-14 ']])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center w-full", {
      'space-x-2': $setup.menuStatus !== 'closed',
      'justify-between': $setup.menuStatus !== 'closed',
      'justify-center': $setup.menuStatus === 'closed'
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$props.link['icon'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
    key: 0,
    icon: $props.link.icon
  }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Label"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.link.label),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex whitespace-nowrap transition-size-medium", [$setup.menuStatus !== 'closed' ? 'w-show' : 'w-hide', 'transition-size-medium']])
  }, null, 10 /* CLASS, PROPS */, _hoisted_2)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [$setup.menuStatus !== 'closed' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
    key: 0,
    icon: "chevron-down",
    size: "sm",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([[$setup.selectedLink.includes($props.link.id) ? 'rotate-90' : 'rotate-0'], "mr-1 transition-size-medium"])
  }, null, 8 /* PROPS */, ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 2 /* CLASS */)) : $props.link.type === 'route' && $props.link.visibleFor !== false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Root Item: Route"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Link"], {
    href: _ctx.route($props.link.link),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      $setup.select([$props.link.id]);
      $setup.menuStatus === 'closed' && $setup.updateMenuStatus();
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-between items-center px-3 rounded cursor-pointer w-full overflow-hidden transition-color duration-300", [$setup.selectedLink.includes($props.link.id) || $setup.activeMenus.root === $props.link.id ? [$setup.mainMenuConf.umay.rootLinkClasses.active, $setup.generatedRadius.rootLinkClasses.active] : [$setup.mainMenuConf.umay.rootLinkClasses.normal, $setup.generatedRadius.rootLinkClasses.normal], $setup.menuStatus !== 'closed' ? 'h-12 space-x-2' : 'h-14 ']])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center", $setup.menuStatus !== 'closed' && 'space-x-2'])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$props.link['icon'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
        key: 0,
        icon: $props.link.icon
      }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Label"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.link.label),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["whitespace-nowrap transition-size-medium", [$setup.menuStatus !== 'closed' ? 'w-show' : 'w-hide', 'transition-size-medium']])
      }, null, 10 /* CLASS, PROPS */, _hoisted_4)], 2 /* CLASS */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class"])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : $props.link.type === 'simple-link' && $props.link.visibleFor !== false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Root Item: Link"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $props.link.link,
    target: $props.link.target,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-between items-center px-3 rounded cursor-pointer w-full overflow-hidden transition-color duration-300", [[$setup.mainMenuConf.umay.rootLinkClasses.normal, $setup.generatedRadius.rootLinkClasses.normal], $setup.menuStatus !== 'closed' ? 'h-12 space-x-2' : 'h-14 ']])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center", $setup.menuStatus !== 'closed' && 'space-x-2'])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$props.link['icon'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
    key: 0,
    icon: $props.link.icon
  }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Label"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.link.label),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["whitespace-nowrap transition-size-medium", [$setup.menuStatus !== 'closed' ? 'w-show' : 'w-hide', 'transition-size-medium']])
  }, null, 10 /* CLASS, PROPS */, _hoisted_7)], 2 /* CLASS */)], 10 /* CLASS, PROPS */, _hoisted_5)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Secondly Item"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "subMenuTransition"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.link.links && $setup.selectedLink.includes($props.link.id) && $setup.menuStatus !== 'closed' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.link.links, function (subItem) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: subItem
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Secondly Item: Dropdown"), subItem.type === 'dropdown' && subItem.visibleFor !== false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: subItem.id,
          onClick: function onClick($event) {
            return $setup.select([$props.link.id, subItem.id]);
          },
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-between items-center space-x-2 px-3 py-2 cursor-pointer rounded transition-color duration-300", [$setup.selectedLink.includes(subItem.id) || $setup.activeMenus.second === subItem.id ? [$setup.mainMenuConf.umay.secondLinkClasses.active, $setup.generatedRadius.secondLinkClasses.active] : [$setup.mainMenuConf.umay.secondLinkClasses.normal, $setup.generatedRadius.secondLinkClasses.normal]]])
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [subItem['icon'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
          key: 0,
          icon: subItem.icon
        }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subItem.label)
        }, null, 8 /* PROPS */, _hoisted_11)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
          icon: "chevron-down",
          size: "sm",
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([[$setup.selectedLink.includes(subItem.id) ? 'rotate-90' : 'rotate-0'], "mr-1 transition-size-medium"])
        }, null, 8 /* PROPS */, ["class"])], 10 /* CLASS, PROPS */, _hoisted_9)) : subItem.type === 'route' && subItem.visibleFor !== false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: 1
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Secondly Item: Route"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Link"], {
          href: _ctx.route(subItem.link),
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-between items-center space-x-2 px-3 py-2 cursor-pointer rounded transition-color duration-300", [$setup.selectedLink.includes(subItem.id) || $setup.activeMenus.second === subItem.id ? [$setup.mainMenuConf.umay.secondLinkClasses.active, $setup.generatedRadius.secondLinkClasses.active] : [$setup.mainMenuConf.umay.secondLinkClasses.normal, $setup.generatedRadius.secondLinkClasses.normal]]])
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subItem.label)
            }, null, 8 /* PROPS */, _hoisted_13), subItem['icon'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
              key: 0,
              icon: subItem.icon
            }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
          }),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href", "class"])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : subItem.type === 'simple-link' && subItem.visibleFor !== false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: 2
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Secondly Item: Link"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          href: subItem.link,
          target: subItem.target,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-between items-center px-3 rounded cursor-pointer w-full overflow-hidden transition-color duration-300", [[$setup.mainMenuConf.umay.secondLinkClasses.normal, $setup.generatedRadius.secondLinkClasses.normal], $setup.menuStatus !== 'closed' ? 'h-12 space-x-2' : 'h-14 ']])
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center", $setup.menuStatus !== 'closed' && 'space-x-2'])
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [subItem['icon'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
          key: 0,
          icon: subItem.icon
        }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Label"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subItem.label),
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["whitespace-nowrap transition-size-medium", [$setup.menuStatus !== 'closed' ? 'w-show' : 'w-hide', 'transition-size-medium']])
        }, null, 10 /* CLASS, PROPS */, _hoisted_16)], 2 /* CLASS */)], 10 /* CLASS, PROPS */, _hoisted_14)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Third Item"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
          name: "subMenuTransition"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [subItem.links && $setup.selectedLink.includes(subItem.id) || subItem.links && $setup.activeMenus.second === subItem.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: 0,
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex p-2", [$setup.generatedRadius.thirdLinkClasses.activeBg, $setup.mainMenuConf.umay.thirdLinkClasses.activeBg]])
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(subItem.links, function (thirdItem) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                key: thirdItem
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Third: Route"), thirdItem.type === 'route' && thirdItem.visibleFor !== false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Link"], {
                key: 0,
                href: _ctx.route(thirdItem.link),
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center space-x-2 px-3 cursor-pointer w-full", [$setup.selectedLink.includes(thirdItem.id) || $setup.activeMenus.third === thirdItem.id ? [$setup.mainMenuConf.umay.thirdLinkClasses.active, $setup.generatedRadius.thirdLinkClasses.active] : [$setup.mainMenuConf.umay.thirdLinkClasses.normal, $setup.generatedRadius.thirdLinkClasses.normal]]])
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(thirdItem.label)
                  }, null, 8 /* PROPS */, _hoisted_19), thirdItem['icon'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
                    key: 0,
                    icon: thirdItem.icon
                  }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
                }),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href", "class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Third: Link"), thirdItem.type === 'simple-link' && thirdItem.visibleFor !== false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
                key: 1,
                href: thirdItem.link,
                target: thirdItem.target,
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center space-x-2 px-3 cursor-pointer w-full", [[$setup.mainMenuConf.umay.thirdLinkClasses.normal, $setup.generatedRadius.thirdLinkClasses.normal], $setup.menuStatus !== 'closed' ? 'h-12 space-x-2' : 'h-14 ']])
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center", $setup.menuStatus !== 'closed' && 'space-x-2'])
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [thirdItem['icon'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
                key: 0,
                icon: thirdItem.icon
              }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Label"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(thirdItem.label),
                "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["whitespace-nowrap transition-size-medium", [$setup.menuStatus !== 'closed' ? 'w-show' : 'w-hide', 'transition-size-medium']])
              }, null, 10 /* CLASS, PROPS */, _hoisted_22)], 2 /* CLASS */)], 10 /* CLASS, PROPS */, _hoisted_20)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
            }), 128 /* KEYED_FRAGMENT */))])], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
          }),
          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */)], 64 /* STABLE_FRAGMENT */);
      }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  })], 2 /* CLASS */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Sources/mainMenuLinks.js":
/*!***********************************************!*\
  !*** ./resources/js/Sources/mainMenuLinks.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.mjs");
/* harmony import */ var _Lang_languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Lang/languages */ "./resources/js/Lang/languages.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* Multi-language */



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var roles = _ref.roles,
    permissions = _ref.permissions;
  var _useI18n = (0,vue_i18n__WEBPACK_IMPORTED_MODULE_2__.useI18n)({
      inheritLocale: true,
      messages: _Lang_languages__WEBPACK_IMPORTED_MODULE_0__.mainMenuTranslates
    }),
    tm = _useI18n.tm;

  /*Main Menu Links*/
  var mainMenuLinks = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
    return [{
      id: "externalGitHubRepo",
      label: tm("externalGitHubRepo"),
      icon: "star",
      link: "https://github.com/sinan-aydogan/anemon-laravel",
      type: "simple-link",
      target: "_blank",
      visibleFor: roles.includes('Super Admin')
    }, {
      id: "authPages",
      label: tm("authPages"),
      icon: "tv",
      link: null,
      type: "dropdown",
      links: [{
        id: "authLogin",
        label: tm("authLogin"),
        icon: null,
        link: "login-app",
        type: "route"
      }, {
        id: "authRegister",
        label: tm("authRegister"),
        icon: null,
        link: "register-app",
        type: "route"
      }, {
        id: "authForgotPassword",
        label: tm("authForgotPassword"),
        icon: null,
        link: "forgot-password-app",
        type: "route"
      }, {
        id: "authLockScreen",
        label: tm("authLockScreen"),
        icon: null,
        link: "lock-app",
        type: "route"
      }, {
        id: "authProfile",
        label: tm("authProfile"),
        icon: null,
        link: "profile.show",
        type: "route"
      }]
    }, {
      id: "components",
      label: tm("components"),
      icon: "plug",
      link: null,
      type: "dropdown",
      links: [{
        id: "componentAlert",
        label: tm("componentAlert"),
        icon: null,
        link: "alert",
        type: "route"
      }, {
        id: "componentAvatar",
        label: tm("componentAvatar"),
        icon: null,
        link: "avatar",
        type: "route"
      }, {
        id: "componentBadge",
        label: tm("componentBadge"),
        icon: null,
        link: "badge",
        type: "route"
      }, {
        id: "componentBreadcrumb",
        label: tm("componentBreadcrumb"),
        icon: null,
        link: "breadcrumb",
        type: "route"
      }, {
        id: "componentButton",
        label: tm("componentButton"),
        icon: null,
        link: "button",
        type: "route"
      }, {
        id: "componentCollapsible",
        label: tm("componentCollapsible"),
        icon: null,
        link: "collapsible",
        type: "route"
      }, {
        id: "componentDropdown",
        label: tm("componentDropdown"),
        icon: null,
        link: "dropdown",
        type: "route"
      }, {
        id: "componentList",
        label: tm("componentList"),
        icon: null,
        link: "list",
        type: "route"
      }, {
        id: "componentLoading",
        label: tm("componentLoading"),
        icon: null,
        link: "loading",
        type: "route"
      }, {
        id: "componentModal",
        label: tm("componentModal"),
        icon: null,
        link: "modal",
        type: "route"
      }, {
        id: "componentProgressBar",
        label: tm("componentProgressBar"),
        icon: null,
        link: "progress",
        type: "route"
      }, {
        id: "componentStatisticWidget",
        label: tm("componentStatisticWidget"),
        icon: "chart-bar",
        link: "layout-statistic-widget",
        type: "route"
      }, {
        id: "componentTab",
        label: tm("componentTab"),
        icon: null,
        link: "tab",
        type: "route"
      }, {
        id: "componentTable",
        label: tm("componentTable"),
        icon: "table",
        link: null,
        type: "dropdown",
        links: [{
          id: "componentTableJson",
          label: tm("componentTableJson"),
          icon: null,
          link: "table",
          type: "route"
        }, {
          id: "componentTableBackend",
          label: tm("componentTableBackend"),
          icon: null,
          link: "back-end-table",
          type: "route"
        }, {
          id: "componentPagination",
          label: tm("componentPagination"),
          icon: null,
          link: "pagination",
          type: "route"
        }]
      }, {
        id: "componentTooltip",
        label: tm("componentTooltip"),
        icon: null,
        link: "tooltip",
        type: "route"
      }, {
        id: "layoutElements",
        label: tm("layoutElements"),
        icon: "window-maximize",
        link: null,
        type: "dropdown",
        links: [{
          id: "layoutStructure",
          label: tm("layoutStructure"),
          icon: "layer-group",
          link: "layout-structure",
          type: "route"
        }, {
          id: "layoutGrid",
          label: tm("layoutGrid"),
          icon: "grip-horizontal",
          link: "layout-grid",
          type: "route"
        }, {
          id: "componentContentBox",
          label: tm("componentContentBox"),
          icon: "window-restore",
          link: "content-box",
          type: "route"
        }]
      }]
    }, {
      id: "formElements",
      label: tm("formElements"),
      icon: "edit",
      link: null,
      type: "dropdown",
      links: [{
        id: "formStructure",
        label: tm("formStructure"),
        icon: null,
        link: "form-structure",
        type: "route"
      }, {
        id: "formInputGroup",
        label: tm("formInputGroup"),
        icon: null,
        link: "form-input-group",
        type: "route"
      }, {
        id: "formSimpleInputs",
        label: tm("formSimpleInputs"),
        icon: null,
        link: "form-simple-field",
        type: "route"
      }, {
        id: "formRepeatableInput",
        label: tm("formRepeatableInput"),
        icon: "retweet",
        link: "form-repeatable-field",
        type: "route"
      }, {
        id: "formDateTimeInput",
        label: tm("formDateTimeInput"),
        icon: "clock",
        link: "form-date-field",
        type: "route"
      }, {
        id: "formSelectInput",
        label: tm("formSelectInput"),
        icon: null,
        link: "form-select-input",
        type: "route"
      }]
    }, {
      id: "externalSources",
      label: tm("externalSources"),
      icon: "code",
      type: "dropdown",
      links: [{
        id: "externalLaravelDocument",
        label: tm("externalLaravelDocument"),
        icon: null,
        link: "https://laravel.com/docs",
        type: "simple-link",
        target: "_blank"
      }, {
        id: "externalInertiaDocument",
        label: tm("externalInertiaDocument"),
        icon: null,
        link: "https://inertiajs.com/",
        type: "simple-link",
        target: "_blank"
      }, {
        id: "externalVuejsDocument",
        label: tm("externalVuejsDocument"),
        icon: null,
        link: "https://v3.vuejs.org/",
        type: "simple-link",
        target: "_blank"
      }, {
        id: "externalTailwindcssDocument",
        label: tm("externalTailwindcssDocument"),
        icon: null,
        link: "https://tailwindcss.com/docs",
        type: "simple-link",
        target: "_blank"
      }]
    }];
  });

  /*Main Menu Footer*/
  var mainMenuFooterLinks = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
    return [{
      id: "footerHelp",
      label: tm("footerHelp"),
      linkType: "simple-link",
      link: "https://github.com/sinan-aydogan",
      icon: "question",
      target: "_blank"
    }, {
      id: "footerSettings",
      label: tm("footerSettings"),
      showWhenFolded: true,
      linkType: "route",
      link: "settings",
      icon: "cog"
    }];
  });
  return {
    mainMenuLinks: mainMenuLinks,
    mainMenuFooterLinks: mainMenuFooterLinks
  };
}
;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade-enter-active[data-v-12b5c0f8], .fade-leave-active[data-v-12b5c0f8] {\n    transition: all 300ms;\n}\n.fade-enter-from[data-v-12b5c0f8], .fade-leave-to[data-v-12b5c0f8] {\n    opacity: 0;\n    transform: scale(0);\n}\n.fade-enter-to[data-v-12b5c0f8], .fade-leave-from[data-v-12b5c0f8] {\n    opacity: 1;\n    transform: scale(1);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.subMenuTransition-enter-active[data-v-486ee737], .subMenuTransition-leave-active[data-v-486ee737] {\n    transition: max-height 300ms cubic-bezier(.17, .67, .83, .67),\n    opacity 300ms cubic-bezier(.17, .67, .83, .67),\n    transform 300ms cubic-bezier(.17, .67, .83, .67);\n}\n.subMenuTransition-enter-from[data-v-486ee737], .subMenuTransition-leave-to[data-v-486ee737] {\n    transform: translateY(-1rem);\n    max-height: 0;\n    opacity: 0;\n}\n.subMenuTransition-leave-from[data-v-486ee737], .subMenuTransition-enter-to[data-v-486ee737] {\n    max-height: 75vh;\n    opacity: 1;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_style_index_0_id_12b5c0f8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_style_index_0_id_12b5c0f8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_style_index_0_id_12b5c0f8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenuItem_vue_vue_type_style_index_0_id_486ee737_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenuItem_vue_vue_type_style_index_0_id_486ee737_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenuItem_vue_vue_type_style_index_0_id_486ee737_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Umay/MainMenu.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Umay/MainMenu.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainMenu_vue_vue_type_template_id_12b5c0f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=template&id=12b5c0f8&scoped=true */ "./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=template&id=12b5c0f8&scoped=true");
/* harmony import */ var _MainMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _MainMenu_vue_vue_type_style_index_0_id_12b5c0f8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css */ "./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css");
/* harmony import */ var _var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MainMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MainMenu_vue_vue_type_template_id_12b5c0f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-12b5c0f8"],['__file',"resources/js/Layouts/MainMenu/Umay/MainMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainMenuItem_vue_vue_type_template_id_486ee737_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainMenuItem.vue?vue&type=template&id=486ee737&scoped=true */ "./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=template&id=486ee737&scoped=true");
/* harmony import */ var _MainMenuItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainMenuItem.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _MainMenuItem_vue_vue_type_style_index_0_id_486ee737_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css */ "./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css");
/* harmony import */ var _var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MainMenuItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MainMenuItem_vue_vue_type_template_id_486ee737_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-486ee737"],['__file',"resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainMenu.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenuItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenuItem_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainMenuItem.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=template&id=12b5c0f8&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=template&id=12b5c0f8&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_template_id_12b5c0f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_template_id_12b5c0f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainMenu.vue?vue&type=template&id=12b5c0f8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=template&id=12b5c0f8&scoped=true");


/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=template&id=486ee737&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=template&id=486ee737&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenuItem_vue_vue_type_template_id_486ee737_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenuItem_vue_vue_type_template_id_486ee737_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainMenuItem.vue?vue&type=template&id=486ee737&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=template&id=486ee737&scoped=true");


/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_style_index_0_id_12b5c0f8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenu.vue?vue&type=style&index=0&id=12b5c0f8&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenuItem_vue_vue_type_style_index_0_id_486ee737_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Umay/MainMenuItem.vue?vue&type=style&index=0&id=486ee737&scoped=true&lang=css");


/***/ })

}]);