"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Layouts_MainMenu_Abay_MainMenu_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/core/index.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sources_mainMenuLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Sources/mainMenuLinks */ "./resources/js/Sources/mainMenuLinks.js");
/* harmony import */ var _Layouts_MainMenu_Abay_UserMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Layouts/MainMenu/Abay/UserMenu */ "./resources/js/Layouts/MainMenu/Abay/UserMenu.vue");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config */ "./resources/js/config.js");
/* harmony import */ var _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Functions/menuTrigger */ "./resources/js/Functions/menuTrigger.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'MainMenu',
  emits: ['updateMainMenuStatus'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();

    /*Functions*/

    /*Sources*/
    var _MainMenuLinks = (0,_Sources_mainMenuLinks__WEBPACK_IMPORTED_MODULE_3__["default"])({
        roles: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.value.roles,
        permissions: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.value.permissions
      }),
      mainMenuLinks = _MainMenuLinks.mainMenuLinks,
      mainMenuFooterLinks = _MainMenuLinks.mainMenuFooterLinks;
    var activeMainLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([null, null, null]);

    /*Main-menu - Variables*/
    var appearingMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("appearingMode");
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(function () {
      mainMenuLinks.value.forEach(function (ml) {
        if (ml.hasOwnProperty('links')) {
          ml.links.find(function (sl) {
            /*Active Main-link*/
            if (ml.link === route().current()) {
              activeMainLink.value[0] = ml.id;
            }

            /*Active Sub-link*/
            if (sl.link === route().current()) {
              activeMainLink.value[0] = ml.id;
              activeMainLink.value[1] = sl.id;
            }

            /*Active Third-link*/
            if (sl.hasOwnProperty('links')) {
              sl.links.find(function (tl) {
                if (tl.link === route().current()) {
                  activeMainLink.value[0] = ml.id;
                  activeMainLink.value[1] = sl.id;
                  activeMainLink.value[2] = tl.id;
                }
              });
            }
          });
        }
      });
    });

    /*Sub-menu - Variables*/
    var subMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var showSubMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();

    /*Submenu - Visibility*/
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_7__.onClickOutside)(subMenu, function (event) {
      return showSubMenu.value = false;
    });

    /*Third-menu */
    var thirdMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_7__.onClickOutside)(thirdMenu, function (event) {
      return activeMainLink.value[2] = null;
    });

    /*Watch Window Size*/
    var breakpoints = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('breakpoints');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(breakpoints);
    }, function (newValue) {
      if (newValue.value.smaller('md').value) {
        _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_6__.menuStatus.value = 'hidden';
      }
      if (newValue.value.greater('md').value) {
        _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_6__.menuStatus.value = 'opened';
      }
    });
    var __returned__ = {
      mainMenuLinks: mainMenuLinks,
      mainMenuFooterLinks: mainMenuFooterLinks,
      activeMainLink: activeMainLink,
      appearingMode: appearingMode,
      subMenu: subMenu,
      showSubMenu: showSubMenu,
      thirdMenu: thirdMenu,
      breakpoints: breakpoints,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
      inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      get Link() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link;
      },
      get usePage() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage;
      },
      get onClickOutside() {
        return _vueuse_core__WEBPACK_IMPORTED_MODULE_7__.onClickOutside;
      },
      get cloneDeep() {
        return lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep;
      },
      get MainMenuLinks() {
        return _Sources_mainMenuLinks__WEBPACK_IMPORTED_MODULE_3__["default"];
      },
      get UserMenu() {
        return _Layouts_MainMenu_Abay_UserMenu__WEBPACK_IMPORTED_MODULE_4__["default"];
      },
      get appConf() {
        return _config__WEBPACK_IMPORTED_MODULE_5__.appConf;
      },
      get mainMenuConf() {
        return _config__WEBPACK_IMPORTED_MODULE_5__.mainMenuConf;
      },
      get menuStatus() {
        return _Functions_menuTrigger__WEBPACK_IMPORTED_MODULE_6__.menuStatus;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserMenu"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=template&id=0fc9824a":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=template&id=0fc9824a ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["src"];
var _hoisted_2 = {
  "class": "flex flex-col flex-grow space-y-[.25rem] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-slate-200 overscroll-x-none pr-4 -mr-4 scroll-smooth"
};
var _hoisted_3 = ["onClick"];
var _hoisted_4 = {
  key: 0,
  "class": "abay-main-menu-root-link"
};
var _hoisted_5 = ["textContent"];
var _hoisted_6 = ["textContent"];
var _hoisted_7 = ["href", "target"];
var _hoisted_8 = ["textContent"];
var _hoisted_9 = ["href", "target"];
var _hoisted_10 = {
  "class": "flex items-center justify-center"
};
var _hoisted_11 = {
  "class": "flex flex-col h-20 justify-center items-center"
};
var _hoisted_12 = ["innerHTML"];
var _hoisted_13 = ["innerHTML"];
var _hoisted_14 = {
  key: 0,
  "class": "mt-6 space-y-[.25rem]",
  ref: "thirdMenu"
};
var _hoisted_15 = {
  key: 0,
  "class": "relative flex justify-between items-center cursor-default"
};
var _hoisted_16 = {
  "class": "flex space-x-2 items-center"
};
var _hoisted_17 = ["textContent"];
var _hoisted_18 = ["onClick"];
var _hoisted_19 = ["textContent"];
var _hoisted_20 = ["href", "target"];
var _hoisted_21 = ["textContent"];
var _hoisted_22 = {
  key: 3,
  "class": "absolute z-50 top-10 -left-0 flex flex-col p-2 space-y-2 w-full rounded-md bg-white bg-slate-700 bg-opacity-[.97]"
};
var _hoisted_23 = ["textContent"];
var _hoisted_24 = ["href", "target"];
var _hoisted_25 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["abay-main-menu", {
      'border-r': $setup.showSubMenu,
      'abay-main-menu-show': $setup.menuStatus === 'opened',
      'abay-main-menu-hide': $setup.menuStatus === 'hidden'
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Logo "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Link"], {
    href: _ctx.route('/'),
    "class": "h-16 w-16 text-rose-600 my-4 mx-auto"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: [$setup.appearingMode === 'dark' ? $setup.mainMenuConf.abay.logo.dark ? $setup.mainMenuConf.abay.logo.dark : $setup.appConf.logo.dark : $setup.mainMenuConf.abay.logo.light ? $setup.mainMenuConf.abay.logo.light : $setup.appConf.logo.light]
      }, null, 8 /* PROPS */, _hoisted_1)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Main Links "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Link "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.mainMenuLinks, function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: link.id,
      onClick: function onClick($event) {
        $setup.activeMainLink[0] = link.id;
        $setup.showSubMenu = true;
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["abay-main-menu-root-wrapper", {
        'bg-rose-500 text-gray-50': $setup.activeMainLink[0] === link.id
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Dropdown"), link.type === 'dropdown' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Icon "), link.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
      key: 0,
      icon: link.icon,
      "class": "w-6 h-6"
    }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Label "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "text-[.65rem]",
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label)
    }, null, 8 /* PROPS */, _hoisted_5)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Internal Route Link"), link.type === 'route' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Link"], {
      key: 1,
      href: _ctx.route(link.link),
      "class": "abay-main-menu-root-link"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Icon "), link.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
          key: 0,
          icon: link.icon,
          "class": "w-6 h-6"
        }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Label "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "class": "text-[.65rem]",
          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label)
        }, null, 8 /* PROPS */, _hoisted_6)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("External Link"), link.type === 'simple-link' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      "class": "abay-main-menu-root-link",
      href: link.link,
      target: !!link.target,
      key: link.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Icon "), link.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
      key: 0,
      icon: link.icon,
      "class": "w-6 h-6"
    }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Label "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "text-[.65rem]",
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label)
    }, null, 8 /* PROPS */, _hoisted_8)], 8 /* PROPS */, _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_3);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Footer Links"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.mainMenuFooterLinks, function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: link.id,
      "class": "flex flex-shrink-0 justify-center items-center h-12 w-12 mx-auto bg-slate-100/10 mb-4 rounded-full"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Internal Route Link"), link.linkType === 'route' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Link"], {
      id: "footer-link",
      href: _ctx.route(link.link),
      key: link.id
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [link.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
          key: 0,
          icon: link.icon,
          "class": "mt-1 w-6 h-6"
        }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 1
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("External Link"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      id: "footer-link",
      href: link.link,
      target: !!link.target,
      key: link.id
    }, [link.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
      key: 0,
      icon: link.icon,
      "class": "mt-1 w-6 h-6"
    }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_9))], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" User Menu "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["UserMenu"])])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sub Links "), $setup.activeMainLink[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["absolute z-10 flex h-full flex-col px-4 -mb-4 w-56 bg-gradient-to-tl from-slate-700/90 to-slate-800 text-gray-50", [$setup.showSubMenu ? 'left-28' : '-left-56', 'transition-all duration-700']]),
    ref: "subMenu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Firm Info "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Firm Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-2xl font-bold",
    innerHTML: $setup.mainMenuConf.appName ? $setup.mainMenuConf.appName : $setup.appConf.appName
  }, null, 8 /* PROPS */, _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Firm Slogan "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-xs font-semibold text-center",
    innerHTML: $setup.mainMenuConf.catchPhrase ? $setup.mainMenuConf.catchPhrase : $setup.appConf.catchPhrase
  }, null, 8 /* PROPS */, _hoisted_13)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sub Links "), $setup.activeMainLink[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sub Link "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.mainMenuLinks.find(function (l) {
    return l.id === $setup.activeMainLink[0];
  }).links, function (subLink) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: subLink,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["relative p-2 rounded-md hover:bg-slate-400/50 cursor-pointer text-sm", [{
        'bg-rose-500': $setup.activeMainLink[1] === subLink.id
      }]])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Dropdown"), subLink.type === 'dropdown' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Icon "), subLink.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
      key: 0,
      icon: subLink.icon
    }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Label "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subLink.label)
    }, null, 8 /* PROPS */, _hoisted_17)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Dropdown Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "px-2 cursor-pointer",
      onClick: function onClick($event) {
        return $setup.activeMainLink[2] = $setup.activeMainLink[2] === subLink.id ? null : subLink.id;
      }
    }, [subLink.hasOwnProperty('links') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
      key: 0,
      icon: "ellipsis-vertical",
      size: "sm"
    })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_18)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Internal Route Link"), subLink.type === 'route' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Link"], {
      key: 1,
      href: _ctx.route(subLink.link),
      "class": "flex space-x-2 items-center"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Icon "), subLink.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
          key: 0,
          icon: subLink.icon
        }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Label "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subLink.label)
        }, null, 8 /* PROPS */, _hoisted_19)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("External Link"), subLink.type === 'simple-link' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      "class": "flex space-x-2 items-center",
      href: subLink.link,
      target: !!subLink.target,
      key: subLink.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Icon "), subLink.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
      key: 0,
      icon: subLink.icon
    }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Label "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subLink.label)
    }, null, 8 /* PROPS */, _hoisted_21)], 8 /* PROPS */, _hoisted_20)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Third Menu"), $setup.activeMainLink[2] === subLink.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(subLink.links, function (thirdLink) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: thirdLink,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["p-1 rounded-md", [{
          'bg-rose-500': _ctx.route().current(thirdLink.link)
        }]])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Internal Route Link"), thirdLink.type === 'route' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Link"], {
        key: 0,
        href: _ctx.route(thirdLink.link),
        "class": "flex space-x-2 items-center"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Icon "), thirdLink.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
            key: 0,
            icon: thirdLink.icon
          }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Label "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(thirdLink.label)
          }, null, 8 /* PROPS */, _hoisted_23)];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("External Link"), thirdLink.type === 'simple-link' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
        "class": "flex space-x-2 items-center",
        href: thirdLink.link,
        target: !!thirdLink.target,
        key: thirdLink.id
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Icon "), thirdLink.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
        key: 0,
        icon: thirdLink.icon
      }, null, 8 /* PROPS */, ["icon"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Label "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(thirdLink.label)
      }, null, 8 /* PROPS */, _hoisted_25)], 8 /* PROPS */, _hoisted_24)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */);
    }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=template&id=2da8f2ed":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=template&id=2da8f2ed ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
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

/***/ "./resources/js/Layouts/MainMenu/Abay/MainMenu.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Abay/MainMenu.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainMenu_vue_vue_type_template_id_0fc9824a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=template&id=0fc9824a */ "./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=template&id=0fc9824a");
/* harmony import */ var _MainMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MainMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MainMenu_vue_vue_type_template_id_0fc9824a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/MainMenu/Abay/MainMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Abay/UserMenu.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Abay/UserMenu.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserMenu_vue_vue_type_template_id_2da8f2ed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserMenu.vue?vue&type=template&id=2da8f2ed */ "./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=template&id=2da8f2ed");
/* harmony import */ var _UserMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserMenu.vue?vue&type=script&lang=js */ "./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UserMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserMenu_vue_vue_type_template_id_2da8f2ed__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/MainMenu/Abay/UserMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainMenu.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=template&id=0fc9824a":
/*!***************************************************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=template&id=0fc9824a ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_template_id_0fc9824a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainMenu_vue_vue_type_template_id_0fc9824a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainMenu.vue?vue&type=template&id=0fc9824a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/MainMenu.vue?vue&type=template&id=0fc9824a");


/***/ }),

/***/ "./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=template&id=2da8f2ed":
/*!***************************************************************************************!*\
  !*** ./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=template&id=2da8f2ed ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserMenu_vue_vue_type_template_id_2da8f2ed__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserMenu_vue_vue_type_template_id_2da8f2ed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserMenu.vue?vue&type=template&id=2da8f2ed */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainMenu/Abay/UserMenu.vue?vue&type=template&id=2da8f2ed");


/***/ })

}]);