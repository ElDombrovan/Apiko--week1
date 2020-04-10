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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dom/dom.js */ \"./src/js/dom/dom.js\");\n/* harmony import */ var _js_components_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/App.js */ \"./src/js/components/App.js\");\n\n\n\n\n\nconst root = document.getElementById('root');\nconst app = _js_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].render(_js_components_App_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n_js_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].mountElement(app, root);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/components/App.js":
/*!**********************************!*\
  !*** ./src/js/components/App.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/dom.js */ \"./src/js/dom/dom.js\");\n\n\nconst App = _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement('div', {\n    attributes: {\n        style: 'background-color: red', \n    },\n    children: [\n        _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement('span', {\n            attributes: {},\n            children: 'Test text for span tag'\n        }),\n        _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(' div', {\n            attributes: {\n                style: 'padding: 5px',\n                style: 'border: 1px solid white'\n            },\n            children: [\n                _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement('p', {\n                   attributes: {\n                       style: 'color: white',\n                       style: 'text-decoration: underline'\n                   },\n                   children: 'Paragraph tag with div parent' \n                })\n            ]       \n        })\n    ]\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/js/components/App.js?");

/***/ }),

/***/ "./src/js/dom/createElement.js":
/*!*************************************!*\
  !*** ./src/js/dom/createElement.js ***!
  \*************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nconst createElement = ( tagName, {attributes= {}, children = []} = {}) => {\n    return{\n        tagName,\n        attributes,\n        children,\n    };\n};\n\n//# sourceURL=webpack:///./src/js/dom/createElement.js?");

/***/ }),

/***/ "./src/js/dom/dom.js":
/*!***************************!*\
  !*** ./src/js/dom/dom.js ***!
  \***************************/
/*! exports provided: React */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"React\", function() { return React; });\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/js/dom/createElement.js\");\n/* harmony import */ var _renderElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderElement.js */ \"./src/js/dom/renderElement.js\");\n/* harmony import */ var _mountElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mountElement.js */ \"./src/js/dom/mountElement.js\");\n\n\n\n\nconst React = {\n    createElement: _createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"],\n    render: _renderElement_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n    mountElement: _mountElement_js__WEBPACK_IMPORTED_MODULE_2__[\"mountElement\"],\n};\n\n//# sourceURL=webpack:///./src/js/dom/dom.js?");

/***/ }),

/***/ "./src/js/dom/mountElement.js":
/*!************************************!*\
  !*** ./src/js/dom/mountElement.js ***!
  \************************************/
/*! exports provided: mountElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mountElement\", function() { return mountElement; });\nconst mountElement = (node, target) => {\n    target.replaceWith(node);\n    return node;\n};\n\n//# sourceURL=webpack:///./src/js/dom/mountElement.js?");

/***/ }),

/***/ "./src/js/dom/renderElement.js":
/*!*************************************!*\
  !*** ./src/js/dom/renderElement.js ***!
  \*************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nconst renderElement = ({ tagName, attrs, children }) => {\n    const element = document.createElement(tagName);\n  \n    for (const [key, value] of Object.entries(attrs)) {\n      element.setAttribute(key, value);\n    }\n  \n    for (const child of children) {\n      element.appendChild(render(child));\n    }\n  \n    return element;\n  };\n  \n  const render = (node) => {\n    if (typeof node === 'string') {\n      return document.createTextNode(node);\n    }\n  \n    return renderElement(node);\n  };\n  \n\n//# sourceURL=webpack:///./src/js/dom/renderElement.js?");

/***/ })

/******/ });