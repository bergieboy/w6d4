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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = function(arg) {
  let elementList;

  if (typeof arg === 'string') {
    elementList = document.querySelectorAll(arg);
    return new DOMNodeCollection(elementList);
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }

};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor (args) {
    this.args = args;

    return this;
  }

  html(string) {
    if (string === undefined) {
      return this.args[0];

    } else {
      this.args.forEach(function(el) {
        el.innerHTML = string;
      });
    }
  }

  empty() {
    this.args.forEach(function(el) {
      el.innerHTML ="";
    });
  }

  append(arg) {
    this.args.forEach(function(el) {
      el.innerHTML += arg;
    });
  }

  attr(string) {
    var el = this.args[0].attributes;
    return el[string];
  }

  addClass(string) {
    this.args.forEach(function(el) {
      el.setAttribute("class", string);
    });
  }

  removeClass() {
    this.args.forEach(function(el) {
      el.removeAttribute("class");
    });
  }

  children() {
    let childArr = [];
    this.args.forEach(function(el) {
       childArr = childArr.concat(Array.from(el.children));
    });
    return childArr;
  }

  parent() {
    let parentArr = [];
    this.args.forEach(function(el) {
       if (!parentArr.includes(el.parentNode)) {
         parentArr = parentArr.concat(el.parentNode);
       }
    });
    return parentArr;
  }

  find(string) {
    let findArr = [];
    this.args.forEach(function(el) {
      findArr = findArr.concat(Array.from(el.querySelectorAll(string)));
    });

    return findArr;
  }

  remove() {
    this.args.forEach(function(el) {
      el.remove();
    });
  }

  on(action, callback) {
    this.args.forEach(function(el) {
      el.addEventListener(action, callback);
    });
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);