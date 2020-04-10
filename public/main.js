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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dom/dom.js */ "./src/js/dom/dom.js");
/* harmony import */ var _js_components_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/App.js */ "./src/js/components/App.js");




var root = document.getElementById('root');
var app = _js_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["React"].render(_js_components_App_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_js_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["React"].mountElement(app, root);

/***/ }),

/***/ "./src/js/components/App.js":
/*!**********************************!*\
  !*** ./src/js/components/App.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/dom.js */ "./src/js/dom/dom.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var App = _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["React"].createElement('div', {
  attributes: {
    style: 'background-color: red'
  },
  children: [_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["React"].createElement('span', {
    attributes: {},
    children: 'Test text for span tag'
  }), _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["React"].createElement(' div', {
    attributes: _defineProperty({
      style: 'padding: 5px'
    }, "style", 'border: 1px solid white'),
    children: [_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["React"].createElement('p', {
      attributes: _defineProperty({
        style: 'color: white'
      }, "style", 'text-decoration: underline'),
      children: 'Paragraph tag with div parent'
    })]
  })]
});
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/js/dom/createElement.js":
/*!*************************************!*\
  !*** ./src/js/dom/createElement.js ***!
  \*************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
var createElement = function createElement(tagName) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$attributes = _ref.attributes,
      attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children;

  return {
    tagName: tagName,
    attributes: attributes,
    children: children
  };
};

/***/ }),

/***/ "./src/js/dom/dom.js":
/*!***************************!*\
  !*** ./src/js/dom/dom.js ***!
  \***************************/
/*! exports provided: React */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "React", function() { return React; });
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ "./src/js/dom/createElement.js");
/* harmony import */ var _renderElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderElement.js */ "./src/js/dom/renderElement.js");
/* harmony import */ var _mountElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mountElement.js */ "./src/js/dom/mountElement.js");



var React = {
  createElement: _createElement_js__WEBPACK_IMPORTED_MODULE_0__["createElement"],
  render: _renderElement_js__WEBPACK_IMPORTED_MODULE_1__["render"],
  mountElement: _mountElement_js__WEBPACK_IMPORTED_MODULE_2__["mountElement"]
};

/***/ }),

/***/ "./src/js/dom/mountElement.js":
/*!************************************!*\
  !*** ./src/js/dom/mountElement.js ***!
  \************************************/
/*! exports provided: mountElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountElement", function() { return mountElement; });
var mountElement = function mountElement(node, target) {
  target.replaceWith(node);
  return node;
};

/***/ }),

/***/ "./src/js/dom/renderElement.js":
/*!*************************************!*\
  !*** ./src/js/dom/renderElement.js ***!
  \*************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var renderElement = function renderElement(_ref) {
  var tagName = _ref.tagName,
      attrs = _ref.attrs,
      children = _ref.children;
  var element = document.createElement(tagName);

  for (var _i = 0, _Object$entries = Object.entries(attrs); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    element.setAttribute(key, value);
  }

  var _iterator = _createForOfIteratorHelper(children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      element.appendChild(render(child));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return element;
};

var render = function render(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  return renderElement(node);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZG9tL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS9tb3VudEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS9yZW5kZXJFbGVtZW50LmpzIl0sIm5hbWVzIjpbInJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwIiwiUmVhY3QiLCJyZW5kZXIiLCJBcHAiLCJtb3VudEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlcyIsInN0eWxlIiwiY2hpbGRyZW4iLCJ0YWdOYW1lIiwibm9kZSIsInRhcmdldCIsInJlcGxhY2VXaXRoIiwicmVuZGVyRWxlbWVudCIsImF0dHJzIiwiZWxlbWVudCIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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QU8sQ0FBQ0ssWUFBUixDQUFxQkYsR0FBckIsRUFBMEJDLEtBQTFCO0FBQ0Q7O0FBTG1ELDZDQU9oQ1gsUUFQZ0M7QUFBQTs7QUFBQTtBQU9wRCx3REFBOEI7QUFBQSxVQUFuQmEsS0FBbUI7QUFDNUJOLGFBQU8sQ0FBQ08sV0FBUixDQUFvQnBCLE1BQU0sQ0FBQ21CLEtBQUQsQ0FBMUI7QUFDRDtBQVRtRDtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdwRCxTQUFPTixPQUFQO0FBQ0QsQ0FaSDs7QUFjUyxJQUFNYixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDUSxJQUFELEVBQVU7QUFDOUIsTUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLFdBQU9aLFFBQVEsQ0FBQ3lCLGNBQVQsQ0FBd0JiLElBQXhCLENBQVA7QUFDRDs7QUFFRCxTQUFPRyxhQUFhLENBQUNILElBQUQsQ0FBcEI7QUFDRCxDQU5NLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSAnLi9qcy9kb20vZG9tLmpzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9qcy9jb21wb25lbnRzL0FwcC5qcyc7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuY29uc3QgYXBwID0gUmVhY3QucmVuZGVyKEFwcCk7XG5SZWFjdC5tb3VudEVsZW1lbnQoYXBwLCByb290KTsiLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJy4uL2RvbS9kb20uanMnO1xuXG5jb25zdCBBcHAgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgICBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6IHJlZCcsIFxuICAgIH0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICAgICAgY2hpbGRyZW46ICdUZXN0IHRleHQgZm9yIHNwYW4gdGFnJ1xuICAgICAgICB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnIGRpdicsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBzdHlsZTogJ3BhZGRpbmc6IDVweCcsXG4gICAgICAgICAgICAgICAgc3R5bGU6ICdib3JkZXI6IDFweCBzb2xpZCB3aGl0ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3AnLCB7XG4gICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ2NvbG9yOiB3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAndGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUnXG4gICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ1BhcmFncmFwaCB0YWcgd2l0aCBkaXYgcGFyZW50JyBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSAgICAgICBcbiAgICAgICAgfSlcbiAgICBdXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKCB0YWdOYW1lLCB7YXR0cmlidXRlcz0ge30sIGNoaWxkcmVuID0gW119ID0ge30pID0+IHtcbiAgICByZXR1cm57XG4gICAgICAgIHRhZ05hbWUsXG4gICAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgIH07XG59OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2NyZWF0ZUVsZW1lbnQuanMnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9yZW5kZXJFbGVtZW50LmpzJztcbmltcG9ydCB7IG1vdW50RWxlbWVudCB9IGZyb20gJy4vbW91bnRFbGVtZW50LmpzJztcblxuZXhwb3J0IGNvbnN0IFJlYWN0ID0ge1xuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgcmVuZGVyLFxuICAgIG1vdW50RWxlbWVudCxcbn07IiwiZXhwb3J0IGNvbnN0IG1vdW50RWxlbWVudCA9IChub2RlLCB0YXJnZXQpID0+IHtcbiAgICB0YXJnZXQucmVwbGFjZVdpdGgobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59OyIsImNvbnN0IHJlbmRlckVsZW1lbnQgPSAoeyB0YWdOYW1lLCBhdHRycywgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICBcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRycykpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChyZW5kZXIoY2hpbGQpKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuICBcbiAgZXhwb3J0IGNvbnN0IHJlbmRlciA9IChub2RlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUpO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHJlbmRlckVsZW1lbnQobm9kZSk7XG4gIH07XG4gICJdLCJzb3VyY2VSb290IjoiIn0=