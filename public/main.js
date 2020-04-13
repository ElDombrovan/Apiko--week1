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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/styles/main.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

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
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);




const init = async () => {
  const root = document.getElementById('root');
  const appElement = await Object(_js_components_App_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const app = _js_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].render(appElement);
  _js_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].mountElement(app, root);
};

init();

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/*! exports provided: API_URL, POST_LIMIT, apiDataFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_LIMIT", function() { return POST_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiDataFetch", function() { return apiDataFetch; });
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const POST_LIMIT = 10;
const apiDataFetch = API_URL => fetch(API_URL).then(res => res.json()).then(data => data);

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
/* harmony import */ var _PostList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostList.js */ "./src/js/components/PostList.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.js */ "./src/js/api.js");




const App = async () => {
  const posts = await Object(_api_js__WEBPACK_IMPORTED_MODULE_2__["apiDataFetch"])(_api_js__WEBPACK_IMPORTED_MODULE_2__["API_URL"]).then(arr => arr.slice(0, _api_js__WEBPACK_IMPORTED_MODULE_2__["POST_LIMIT"]));
  const children = Object(_PostList_js__WEBPACK_IMPORTED_MODULE_1__["default"])(posts);
  const element = _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', {
    attributes: {
      class: 'App'
    },
    children: [children]
  });
  return element;
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/js/components/PostList.js":
/*!***************************************!*\
  !*** ./src/js/components/PostList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/dom.js */ "./src/js/dom/dom.js");
/* harmony import */ var _PostListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostListItem.js */ "./src/js/components/PostListItem.js");



const PostList = posts => {
  const children = posts.map(({
    id,
    title,
    body
  } = post) => Object(_PostListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    id,
    title,
    body
  }));
  const element = _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('ul', {
    attributes: {
      class: 'PostList'
    },
    children: children
  });
  return element;
};

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ }),

/***/ "./src/js/components/PostListItem.js":
/*!*******************************************!*\
  !*** ./src/js/components/PostListItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/dom.js */ "./src/js/dom/dom.js");


const PostListItem = props => {
  const {
    id,
    title,
    body
  } = props;
  const element = _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('li', {
    attributes: {
      class: 'PostListItem',
      id: `post-${id}`
    },
    children: [_dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('input', {
      attributes: {
        type: 'checkbox',
        class: 'PostListItem__checkbox',
        id: `checkbox-${id}`
      },
      children: []
    }), _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('label', {
      attributes: {
        class: 'PostListItem__number',
        for: `checkbox-${id}`
      },
      children: [`Task #${id}`]
    }), _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('h3', {
      attributes: {
        class: 'PostListItem__title'
      },
      children: [title]
    }), _dom_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('p', {
      attributes: {
        class: 'PostListItem__body'
      },
      children: [body]
    })]
  });
  return element;
};

/* harmony default export */ __webpack_exports__["default"] = (PostListItem);

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
const createElement = (tagName, {
  attributes = {},
  children = []
} = {}) => ({
  tagName,
  attributes,
  children
});

/***/ }),

/***/ "./src/js/dom/dom.js":
/*!***************************!*\
  !*** ./src/js/dom/dom.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ "./src/js/dom/createElement.js");
/* harmony import */ var _renderElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderElement.js */ "./src/js/dom/renderElement.js");
/* harmony import */ var _mountElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mountElement.js */ "./src/js/dom/mountElement.js");



const React = {
  createElement: _createElement_js__WEBPACK_IMPORTED_MODULE_0__["createElement"],
  render: _renderElement_js__WEBPACK_IMPORTED_MODULE_1__["render"],
  mountElement: _mountElement_js__WEBPACK_IMPORTED_MODULE_2__["mountElement"]
};
/* harmony default export */ __webpack_exports__["default"] = (React);

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
/* harmony import */ var _helpers_cleanNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/cleanNode.js */ "./src/js/helpers/cleanNode.js");

const mountElement = (node, target) => {
  Object(_helpers_cleanNode_js__WEBPACK_IMPORTED_MODULE_0__["cleanNode"])(target);
  target.appendChild(node);
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
/* harmony import */ var _helpers_typeCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/typeCheck.js */ "./src/js/helpers/typeCheck.js");


const renderElement = ({
  tagName,
  attributes,
  children
}) => {
  if (!tagName || typeof tagName !== 'string') {
    console.error('Tag name is not specified');
    return;
  }

  const element = document.createElement(tagName);

  if (Object(_helpers_typeCheck_js__WEBPACK_IMPORTED_MODULE_0__["isNonEmptyObj"])(attributes)) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
  }

  if (Object(_helpers_typeCheck_js__WEBPACK_IMPORTED_MODULE_0__["isNonEmptyArr"])(children)) {
    for (const child of children) {
      const renderedChild = render(child);
      renderedChild && element.appendChild(renderedChild);
    }
  }

  return element;
};

const render = node => {
  if (!node) return;

  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  return renderElement(node);
};

/***/ }),

/***/ "./src/js/helpers/cleanNode.js":
/*!*************************************!*\
  !*** ./src/js/helpers/cleanNode.js ***!
  \*************************************/
/*! exports provided: cleanNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanNode", function() { return cleanNode; });
const cleanNode = node => {
  let child = node.lastElementChild;

  while (child) {
    node.removeChild(child);
    child = node.lastElementChild;
  }
};

/***/ }),

/***/ "./src/js/helpers/typeCheck.js":
/*!*************************************!*\
  !*** ./src/js/helpers/typeCheck.js ***!
  \*************************************/
/*! exports provided: isNonEmptyObj, isNonEmptyArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyObj", function() { return isNonEmptyObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArr", function() { return isNonEmptyArr; });
const isNonEmptyObj = obj => obj && typeof obj === 'object' && Object.keys(obj).length;
const isNonEmptyArr = arr => arr && Array.isArray(arr) && arr.length;

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./main.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MTNjZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1Bvc3RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1Bvc3RMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZG9tL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS9tb3VudEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS9yZW5kZXJFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2NsZWFuTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy90eXBlQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NWRkMiJdLCJuYW1lcyI6WyJpbml0Iiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBFbGVtZW50IiwiQXBwIiwiYXBwIiwiUmVhY3QiLCJyZW5kZXIiLCJtb3VudEVsZW1lbnQiLCJBUElfVVJMIiwiUE9TVF9MSU1JVCIsImFwaURhdGFGZXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwicG9zdHMiLCJhcnIiLCJzbGljZSIsImNoaWxkcmVuIiwiUG9zdExpc3QiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJjbGFzcyIsIm1hcCIsImlkIiwidGl0bGUiLCJib2R5IiwicG9zdCIsIlBvc3RMaXN0SXRlbSIsInByb3BzIiwidHlwZSIsImZvciIsInRhZ05hbWUiLCJub2RlIiwidGFyZ2V0IiwiY2xlYW5Ob2RlIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJFbGVtZW50IiwiY29uc29sZSIsImVycm9yIiwiaXNOb25FbXB0eU9iaiIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsInNldEF0dHJpYnV0ZSIsImlzTm9uRW1wdHlBcnIiLCJjaGlsZCIsInJlbmRlcmVkQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJyZW1vdmVDaGlsZCIsIm9iaiIsImtleXMiLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7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QUFJd0MsS0FBSyxDQUFDQyxPQUFOLENBQWN6QyxHQUFkLENBQVAsSUFBNkJBLEdBQUcsQ0FBQ3VDLE1BQTlELEM7Ozs7Ozs7Ozs7O0FDRFAsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyxvVkFBa0w7O0FBRXBOOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBSZWFjdCBmcm9tICcuL2pzL2RvbS9kb20uanMnO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vanMvY29tcG9uZW50cy9BcHAuanMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5cblxuY29uc3QgaW5pdCA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgY29uc3QgYXBwRWxlbWVudCA9IGF3YWl0IEFwcCgpO1xuICAgIGNvbnN0IGFwcCA9IFJlYWN0LnJlbmRlcihhcHBFbGVtZW50KTtcblxuICAgIFJlYWN0Lm1vdW50RWxlbWVudChhcHAsIHJvb3QpO1xufVxuXG5pbml0KCk7IiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJztcbmV4cG9ydCBjb25zdCBQT1NUX0xJTUlUID0gMTA7XG5cbmV4cG9ydCBjb25zdCBhcGlEYXRhRmV0Y2ggPSBBUElfVVJMID0+IGZldGNoKEFQSV9VUkwpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJy4uL2RvbS9kb20uanMnO1xuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4vUG9zdExpc3QuanMnO1xuXG5pbXBvcnQgeyBhcGlEYXRhRmV0Y2gsIEFQSV9VUkwsIFBPU1RfTElNSVQgfSBmcm9tICcuLi9hcGkuanMnO1xuXG5jb25zdCBBcHAgPSBhc3luYygpID0+IHtcblxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgYXBpRGF0YUZldGNoKEFQSV9VUkwpXG4gICAgICAgIC50aGVuKGFyciA9PiBhcnIuc2xpY2UoMCwgUE9TVF9MSU1JVCkpO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBQb3N0TGlzdChwb3N0cyk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBjbGFzczogJ0FwcCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbY2hpbGRyZW5dLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJy4uL2RvbS9kb20uanMnO1xuXG5pbXBvcnQgUG9zdExpc3RJdGVtIGZyb20gJy4vUG9zdExpc3RJdGVtLmpzJztcblxuY29uc3QgUG9zdExpc3QgPSBwb3N0cyA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwb3N0cy5tYXAoKHsgaWQsIHRpdGxlLCBib2R5IH0gPSBwb3N0KSA9PiBcbiAgICAgICAgUG9zdExpc3RJdGVtKHsgaWQsIHRpdGxlLCBib2R5IH0pXG4gICAgKTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCd1bCcsIHtcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgY2xhc3M6ICdQb3N0TGlzdCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAnLi4vZG9tL2RvbS5qcyc7XG5cbmNvbnN0IFBvc3RMaXN0SXRlbSA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IGlkLCB0aXRsZSwgYm9keSB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIGNsYXNzOiAnUG9zdExpc3RJdGVtJyxcbiAgICAgICAgICAgIGlkOiBgcG9zdC0ke2lkfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnUG9zdExpc3RJdGVtX19jaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBgY2hlY2tib3gtJHtpZH1gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnUG9zdExpc3RJdGVtX19udW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBmb3I6IGBjaGVja2JveC0ke2lkfWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2BUYXNrICMke2lkfWBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdoMycsIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnUG9zdExpc3RJdGVtX190aXRsZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW3RpdGxlXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncCcsIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnUG9zdExpc3RJdGVtX19ib2R5JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYm9keV0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3RJdGVtOyIsImV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKCB0YWdOYW1lLCB7IGF0dHJpYnV0ZXMgPSB7fSwgY2hpbGRyZW4gPSBbXSB9ID0ge30pID0+XG4gICAgKHtcbiAgICAgICAgdGFnTmFtZSxcbiAgICAgICAgYXR0cmlidXRlcyxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgfSk7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vY3JlYXRlRWxlbWVudC5qcyc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuL3JlbmRlckVsZW1lbnQuanMnO1xuaW1wb3J0IHsgbW91bnRFbGVtZW50IH0gZnJvbSAnLi9tb3VudEVsZW1lbnQuanMnO1xuXG5jb25zdCBSZWFjdCA9IHtcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIHJlbmRlcixcbiAgICBtb3VudEVsZW1lbnQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDsiLCJpbXBvcnQgeyBjbGVhbk5vZGUgfSBmcm9tICcuLi9oZWxwZXJzL2NsZWFuTm9kZS5qcyc7XG5cbmV4cG9ydCBjb25zdCBtb3VudEVsZW1lbnQgPSAobm9kZSwgdGFyZ2V0KSA9PiB7XG4gICAgY2xlYW5Ob2RlKHRhcmdldCk7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuICAgICIsImltcG9ydCB7IGlzTm9uRW1wdHlBcnIsIGlzTm9uRW1wdHlPYmogfSBmcm9tICcuLi9oZWxwZXJzL3R5cGVDaGVjay5qcyc7XG5cbmNvbnN0IHJlbmRlckVsZW1lbnQgPSAoeyB0YWdOYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgICBpZighdGFnTmFtZSB8fCB0eXBlb2YgdGFnTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RhZyBuYW1lIGlzIG5vdCBzcGVjaWZpZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGlmIChpc05vbkVtcHR5T2JqKGF0dHJpYnV0ZXMpKSB7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmKGlzTm9uRW1wdHlBcnIoY2hpbGRyZW4pKSB7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkQ2hpbGQgPSByZW5kZXIoY2hpbGQpO1xuICAgICAgICByZW5kZXJlZENoaWxkICYmIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmVuZGVyZWRDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG4gIFxuICBleHBvcnQgY29uc3QgcmVuZGVyID0gKG5vZGUpID0+IHtcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiByZW5kZXJFbGVtZW50KG5vZGUpO1xuICB9O1xuICAiLCJleHBvcnQgY29uc3QgY2xlYW5Ob2RlID0gbm9kZSA9PiB7XG4gICAgbGV0IGNoaWxkID0gbm9kZS5sYXN0RWxlbWVudENoaWxkOyAgXG4gICAgd2hpbGUgKGNoaWxkKSB7IFxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTsgXG4gICAgICAgIGNoaWxkID0gbm9kZS5sYXN0RWxlbWVudENoaWxkOyBcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGlzTm9uRW1wdHlPYmogPSBvYmogPT4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XG5leHBvcnQgY29uc3QgaXNOb25FbXB0eUFyciA9IGFyciA9PiBhcnIgJiYgQXJyYXkuaXNBcnJheShhcnIpICYmIGFyci5sZW5ndGg7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==