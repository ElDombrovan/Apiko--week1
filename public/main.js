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
        id: `checkbox-${id}`,
        onchange: ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MTNjZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1Bvc3RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1Bvc3RMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZG9tL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS9tb3VudEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS9yZW5kZXJFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2NsZWFuTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy90eXBlQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NWRkMiJdLCJuYW1lcyI6WyJpbml0Iiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBFbGVtZW50IiwiQXBwIiwiYXBwIiwiUmVhY3QiLCJyZW5kZXIiLCJtb3VudEVsZW1lbnQiLCJBUElfVVJMIiwiUE9TVF9MSU1JVCIsImFwaURhdGFGZXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwicG9zdHMiLCJhcnIiLCJzbGljZSIsImNoaWxkcmVuIiwiUG9zdExpc3QiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJjbGFzcyIsIm1hcCIsImlkIiwidGl0bGUiLCJib2R5IiwicG9zdCIsIlBvc3RMaXN0SXRlbSIsInByb3BzIiwidHlwZSIsIm9uY2hhbmdlIiwiZm9yIiwidGFnTmFtZSIsIm5vZGUiLCJ0YXJnZXQiLCJjbGVhbk5vZGUiLCJhcHBlbmRDaGlsZCIsInJlbmRlckVsZW1lbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJpc05vbkVtcHR5T2JqIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwic2V0QXR0cmlidXRlIiwiaXNOb25FbXB0eUFyciIsImNoaWxkIiwicmVuZGVyZWRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZUNoaWxkIiwib2JqIiwia2V5cyIsImxlbmd0aCIsIkFycmF5IiwiaXNBcnJheSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVD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TUFBTVIsYUFBYSxHQUFHaEMsR0FBRyxJQUFJQSxHQUFHLElBQUl5QyxLQUFLLENBQUNDLE9BQU4sQ0FBYzFDLEdBQWQsQ0FBUCxJQUE2QkEsR0FBRyxDQUFDd0MsTUFBOUQsQzs7Ozs7Ozs7Ozs7QUNEUCxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLG9WQUFrTDs7QUFFcE47O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJy4vanMvZG9tL2RvbS5qcyc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9qcy9jb21wb25lbnRzL0FwcC5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuXG5jb25zdCBpbml0ID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgICBjb25zdCBhcHBFbGVtZW50ID0gYXdhaXQgQXBwKCk7XG4gICAgY29uc3QgYXBwID0gUmVhY3QucmVuZGVyKGFwcEVsZW1lbnQpO1xuXG4gICAgUmVhY3QubW91bnRFbGVtZW50KGFwcCwgcm9vdCk7XG59XG5cbmluaXQoKTsiLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnO1xuZXhwb3J0IGNvbnN0IFBPU1RfTElNSVQgPSAxMDtcblxuZXhwb3J0IGNvbnN0IGFwaURhdGFGZXRjaCA9IEFQSV9VUkwgPT4gZmV0Y2goQVBJX1VSTClcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAnLi4vZG9tL2RvbS5qcyc7XG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi9Qb3N0TGlzdC5qcyc7XG5cbmltcG9ydCB7IGFwaURhdGFGZXRjaCwgQVBJX1VSTCwgUE9TVF9MSU1JVCB9IGZyb20gJy4uL2FwaS5qcyc7XG5cbmNvbnN0IEFwcCA9IGFzeW5jKCkgPT4ge1xuXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCBhcGlEYXRhRmV0Y2goQVBJX1VSTClcbiAgICAgICAgLnRoZW4oYXJyID0+IGFyci5zbGljZSgwLCBQT1NUX0xJTUlUKSk7XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IFBvc3RMaXN0KHBvc3RzKTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIGNsYXNzOiAnQXBwJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtjaGlsZHJlbl0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAnLi4vZG9tL2RvbS5qcyc7XG5cbmltcG9ydCBQb3N0TGlzdEl0ZW0gZnJvbSAnLi9Qb3N0TGlzdEl0ZW0uanMnO1xuXG5jb25zdCBQb3N0TGlzdCA9IHBvc3RzID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHBvc3RzLm1hcCgoeyBpZCwgdGl0bGUsIGJvZHkgfSA9IHBvc3QpID0+IFxuICAgICAgICBQb3N0TGlzdEl0ZW0oeyBpZCwgdGl0bGUsIGJvZHkgfSlcbiAgICApO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VsJywge1xuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBjbGFzczogJ1Bvc3RMaXN0JyxcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICcuLi9kb20vZG9tLmpzJztcblxuY29uc3QgUG9zdExpc3RJdGVtID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBib2R5IH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgY2xhc3M6ICdQb3N0TGlzdEl0ZW0nLFxuICAgICAgICAgICAgaWQ6IGBwb3N0LSR7aWR9YCxcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdQb3N0TGlzdEl0ZW1fX2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGBjaGVja2JveC0ke2lkfWAsXG4gICAgICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ1Bvc3RMaXN0SXRlbV9fbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgZm9yOiBgY2hlY2tib3gtJHtpZH1gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtgVGFzayAjJHtpZH1gXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaDMnLCB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ1Bvc3RMaXN0SXRlbV9fdGl0bGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFt0aXRsZV0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3AnLCB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ1Bvc3RMaXN0SXRlbV9fYm9keScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2JvZHldLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0SXRlbTsiLCJleHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9ICggdGFnTmFtZSwgeyBhdHRyaWJ1dGVzID0ge30sIGNoaWxkcmVuID0gW10gfSA9IHt9KSA9PlxuICAgICh7XG4gICAgICAgIHRhZ05hbWUsXG4gICAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgIH0pOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2NyZWF0ZUVsZW1lbnQuanMnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9yZW5kZXJFbGVtZW50LmpzJztcbmltcG9ydCB7IG1vdW50RWxlbWVudCB9IGZyb20gJy4vbW91bnRFbGVtZW50LmpzJztcblxuY29uc3QgUmVhY3QgPSB7XG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICByZW5kZXIsXG4gICAgbW91bnRFbGVtZW50LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7IiwiaW1wb3J0IHsgY2xlYW5Ob2RlIH0gZnJvbSAnLi4vaGVscGVycy9jbGVhbk5vZGUuanMnO1xuXG5leHBvcnQgY29uc3QgbW91bnRFbGVtZW50ID0gKG5vZGUsIHRhcmdldCkgPT4ge1xuICAgIGNsZWFuTm9kZSh0YXJnZXQpO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cbiAgICAiLCJpbXBvcnQgeyBpc05vbkVtcHR5QXJyLCBpc05vbkVtcHR5T2JqIH0gZnJvbSAnLi4vaGVscGVycy90eXBlQ2hlY2suanMnO1xuXG5jb25zdCByZW5kZXJFbGVtZW50ID0gKHsgdGFnTmFtZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gfSkgPT4ge1xuXG4gICAgaWYoIXRhZ05hbWUgfHwgdHlwZW9mIHRhZ05hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUYWcgbmFtZSBpcyBub3Qgc3BlY2lmaWVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBpZiAoaXNOb25FbXB0eU9iaihhdHRyaWJ1dGVzKSkge1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpZihpc05vbkVtcHR5QXJyKGNoaWxkcmVuKSkge1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICBjb25zdCByZW5kZXJlZENoaWxkID0gcmVuZGVyKGNoaWxkKTtcbiAgICAgICAgcmVuZGVyZWRDaGlsZCAmJiBlbGVtZW50LmFwcGVuZENoaWxkKHJlbmRlcmVkQ2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuICBcbiAgZXhwb3J0IGNvbnN0IHJlbmRlciA9IChub2RlKSA9PiB7XG4gICAgaWYgKCFub2RlKSByZXR1cm47XG5cbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZSk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gcmVuZGVyRWxlbWVudChub2RlKTtcbiAgfTtcbiAgIiwiZXhwb3J0IGNvbnN0IGNsZWFuTm9kZSA9IG5vZGUgPT4ge1xuICAgIGxldCBjaGlsZCA9IG5vZGUubGFzdEVsZW1lbnRDaGlsZDsgIFxuICAgIHdoaWxlIChjaGlsZCkgeyBcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7IFxuICAgICAgICBjaGlsZCA9IG5vZGUubGFzdEVsZW1lbnRDaGlsZDsgXG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBpc05vbkVtcHR5T2JqID0gb2JqID0+IG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xuZXhwb3J0IGNvbnN0IGlzTm9uRW1wdHlBcnIgPSBhcnIgPT4gYXJyICYmIEFycmF5LmlzQXJyYXkoYXJyKSAmJiBhcnIubGVuZ3RoOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0zIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=