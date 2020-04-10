/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dom/dom.js */ \"./src/js/dom/dom.js\");\n/* harmony import */ var _js_components_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/App.js */ \"./src/js/components/App.js\");\n\n\n\n\nvar root = document.getElementById('root');\nvar app = _js_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].render(_js_components_App_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n_js_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].mountElement(app, root);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/components/App.js":
/*!**********************************!*\
  !*** ./src/js/components/App.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/dom.js */ \"./src/js/dom/dom.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar App = _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement('div', {\n  attributes: {\n    style: 'background-color: red'\n  },\n  children: [_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement('span', {\n    attributes: {},\n    children: 'Test text for span tag'\n  }), _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(' div', {\n    attributes: _defineProperty({\n      style: 'padding: 5px'\n    }, \"style\", 'border: 1px solid white'),\n    children: [_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement('p', {\n      attributes: _defineProperty({\n        style: 'color: white'\n      }, \"style\", 'text-decoration: underline'),\n      children: 'Paragraph tag with div parent'\n    })]\n  })]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/js/components/App.js?");

/***/ }),

/***/ "./src/js/dom/createElement.js":
/*!*************************************!*\
  !*** ./src/js/dom/createElement.js ***!
  \*************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nvar createElement = function createElement(tagName) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$attributes = _ref.attributes,\n      attributes = _ref$attributes === void 0 ? {} : _ref$attributes,\n      _ref$children = _ref.children,\n      children = _ref$children === void 0 ? [] : _ref$children;\n\n  return {\n    tagName: tagName,\n    attributes: attributes,\n    children: children\n  };\n};\n\n//# sourceURL=webpack:///./src/js/dom/createElement.js?");

/***/ }),

/***/ "./src/js/dom/dom.js":
/*!***************************!*\
  !*** ./src/js/dom/dom.js ***!
  \***************************/
/*! exports provided: React */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"React\", function() { return React; });\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/js/dom/createElement.js\");\n/* harmony import */ var _renderElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderElement.js */ \"./src/js/dom/renderElement.js\");\n/* harmony import */ var _mountElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mountElement.js */ \"./src/js/dom/mountElement.js\");\n\n\n\nvar React = {\n  createElement: _createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"],\n  render: _renderElement_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  mountElement: _mountElement_js__WEBPACK_IMPORTED_MODULE_2__[\"mountElement\"]\n};\n\n//# sourceURL=webpack:///./src/js/dom/dom.js?");

/***/ }),

/***/ "./src/js/dom/mountElement.js":
/*!************************************!*\
  !*** ./src/js/dom/mountElement.js ***!
  \************************************/
/*! exports provided: mountElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mountElement\", function() { return mountElement; });\nvar mountElement = function mountElement(node, target) {\n  target.replaceWith(node);\n  return node;\n};\n\n//# sourceURL=webpack:///./src/js/dom/mountElement.js?");

/***/ }),

/***/ "./src/js/dom/renderElement.js":
/*!*************************************!*\
  !*** ./src/js/dom/renderElement.js ***!
  \*************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar renderElement = function renderElement(_ref) {\n  var tagName = _ref.tagName,\n      attrs = _ref.attrs,\n      children = _ref.children;\n  var element = document.createElement(tagName);\n\n  for (var _i = 0, _Object$entries = Object.entries(attrs); _i < _Object$entries.length; _i++) {\n    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n        key = _Object$entries$_i[0],\n        value = _Object$entries$_i[1];\n\n    element.setAttribute(key, value);\n  }\n\n  var _iterator = _createForOfIteratorHelper(children),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var child = _step.value;\n      element.appendChild(render(child));\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return element;\n};\n\nvar render = function render(node) {\n  if (typeof node === 'string') {\n    return document.createTextNode(node);\n  }\n\n  return renderElement(node);\n};\n\n//# sourceURL=webpack:///./src/js/dom/renderElement.js?");

/***/ })

/******/ });