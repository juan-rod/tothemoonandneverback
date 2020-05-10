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
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setCanvas = function setCanvas() {\n  var c = document.getElementById(\"myCanvas\");\n  var ctx = c.getContext(\"2d\");\n  var img = document.getElementById(\"theImg\");\n  ctx.drawImage(img, 0, 0);\n  var imgData = ctx.getImageData(0, 0, '1500', '1500');\n  console.log('imgData', imgData); // invert colors\n  // var i;\n  // for (i = 0; i < imgData.data.length; i += 4) {\n  //   imgData.data[i] = 255 - imgData.data[i];\n  //   imgData.data[i+1] = 255 - imgData.data[i+1];\n  //   imgData.data[i+2] = 255 - imgData.data[i+2];\n  //   imgData.data[i+3] = 255;\n  // }\n\n  ctx.putImageData(imgData, 0, 0);\n  return 'hello';\n}; // setCanvas()\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setCanvas);\n\n//# sourceURL=webpack:///./src/scripts/canvas.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/scripts/canvas.js\");\n\nconsole.log('setCanvas', Object(_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\nvar wrapper = document.querySelector('.wrapper');\nvar artboard = document.querySelector('.artboard');\n\nvar getClientSize = function getClientSize(wrapper) {\n  return {\n    width: wrapper.clientWidth,\n    height: wrapper.clientHeight\n  };\n};\n\nvar getGridSize = function getGridSize(_ref) {\n  var width = _ref.width,\n      height = _ref.height;\n  return {\n    columns: width / pixelSize,\n    rows: height / pixelSize\n  };\n}; // let setArtboardHeight = () => artboard.style.height = `${ rows * pixelSize }px`\n\n\nvar totalNumberOfDivs = function totalNumberOfDivs() {\n  return columns * rows;\n};\n\nvar setGridFrame = function setGridFrame() {\n  for (var index = 0; index < totalNumberOfDivs(); index++) {\n    var spanElement = document.createElement('span');\n    spanElement.addEventListener(\"click\", handleClick);\n    artboard.appendChild(spanElement);\n  }\n};\n\nvar starPositions = function starPositions(length, max) {\n  return Array.from({\n    length: length\n  }, function () {\n    return Math.floor(Math.random() * max);\n  });\n};\n\nvar setStarElements = function setStarElements() {\n  var allSpans = document.querySelectorAll('span'); // console.log('allSpans', allSpans)\n\n  starPositions(50, totalNumberOfDivs()).forEach(function (star) {\n    // console.log('star', star)\n    allSpans[star].style.backgroundColor = 'white';\n  });\n};\n\nfunction getMoonCenter() {\n  var getSpanElements = document.querySelectorAll('span');\n  console.log('getSpanElements.length', getSpanElements.length);\n  var col = Math.round(colsHalf);\n  var row = Math.round(rowsHalf);\n  row = Math.round(row / 2);\n  console.log('row', row);\n  console.log('col', col);\n  var centerSpan = document.querySelector('span');\n  centerSpan.style.backgroundColor = 'red';\n  centerSpan.style.gridColumn = \"\".concat(col, \"/ \").concat(col + 1);\n  centerSpan.style.gridRow = \"\".concat(row, \"/ \").concat(row + 1);\n  return {\n    col: col,\n    row: row\n  };\n}\n\nvar getMoonPositions = function getMoonPositions() {\n  return {\n    center: getMoonCenter()\n  }; // return getMoonCenter()\n};\n\nvar handleClick = function handleClick(e) {\n  console.log('handleClick e', e);\n  var style = e.target.style;\n  console.log('style', style);\n  style.backgroundColor = 'pink';\n};\n\nvar clientSize = getClientSize(wrapper);\nvar pixelSize = 8;\n\nvar _getGridSize = getGridSize(clientSize),\n    columns = _getGridSize.columns,\n    rows = _getGridSize.rows;\n\ncolumns = Math.round(columns); // console.log('columns', columns)\n\nrows = Math.round(rows);\nconsole.log('rows', rows);\n\nfunction css(el, styles) {\n  for (var property in styles) {\n    el.style[property] = styles[property];\n  }\n}\n\ncss(wrapper, {\n  'grid-template-columns': \"repeat(\".concat(columns, \",1fr)\"),\n  'grid-template-rows': \"repeat(\".concat(rows, \",1fr)\")\n});\nvar rowsHalf = rows / 2;\nconsole.log('rowsHalf', rowsHalf);\nvar colsHalf = columns / 2; // document.getElementById(\"theImg\").onload = function setCanvas () {\n// setArtboardHeight()\n// setGridFrame()\n// setStarElements()\n// getMoonPositions()\n// console.log('getMoonPositions(', getMoonPositions().center)\n// let spanElement = document.querySelector('button')\n// console.log('spanElement', spanElement)\n// spanElement.addEventListener(\"click\", handleClick);\n// let pixelSize = 8\n//  if i can get grid positions, i can use below code, maybe\n// $(document).ready(function(){\n//   $('.grid').on('click', 'div', function(e){\n//         GetGridElementsPosition($(this).index()); //Pass in the index of the clicked div\n//   //Relevant to its siblings, in other words if this is the 5th div in the div = grid\n//   });\n// });\n// function GetGridElementsPosition(index){\n//   //Get the css attribute grid-template-columns from the css of class grid\n//   //split on whitespace and get the length, this will give you how many columns\n//   const colCount = $('.grid').css('grid-template-columns').split(' ').length;\n//   const rowPosition = Math.floor(index / colCount);\n//   const colPosition = index % colCount;\n//   //Return an object with properties row and column\n//   return { row: rowPosition, column: colPosition } ;\n// }\n/// make stars sparkle. half of star array. randomize half of those and dim color by opacity.\n// randomize that ^\n// if i upload a photo, can i progmatically turn it into pixels?\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });