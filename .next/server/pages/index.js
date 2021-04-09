module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Head.tsx":
/*!*****************************!*\
  !*** ./components/Head.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/kirohi/Users/kirohi/github.com/unvalley/TabX-LP/components/Head.tsx\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  title,\n  description,\n  image,\n  url\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"icon\",\n      href: \"/favicon.ico\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"canonical\",\n      href: url\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:title\",\n      content: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:description\",\n      content: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:url\",\n      content: url\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:image\",\n      content: image\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:site_name\",\n      content: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:image:width\",\n      content: \"600\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:image:height\",\n      content: \"600\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:card\",\n      content: \"summary\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:site\",\n      content: \"@unvalley_\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:title\",\n      content: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:description\",\n      content: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:image\",\n      content: image\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQudHN4PzFhYTMiXSwibmFtZXMiOlsidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBU2UsZ0VBQUM7QUFBQ0EsT0FBRDtBQUFRQyxhQUFSO0FBQXFCQyxPQUFyQjtBQUE0QkM7QUFBNUIsQ0FBRCxLQUEwRDtBQUN2RSxzQkFDRSxxRUFBQyxnREFBRDtBQUFBLDRCQUNFO0FBQUEsZ0JBQVFIO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sU0FBRyxFQUFDLE1BQVY7QUFBaUIsVUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFNLFNBQUcsRUFBQyxXQUFWO0FBQXNCLFVBQUksRUFBRUc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUtFO0FBQU0sY0FBUSxFQUFDLFVBQWY7QUFBMEIsYUFBTyxFQUFFSDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUU7QUFBTSxjQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsYUFBTyxFQUFFQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBT0U7QUFBTSxjQUFRLEVBQUMsUUFBZjtBQUF3QixhQUFPLEVBQUVFO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFRRTtBQUFNLGNBQVEsRUFBQyxVQUFmO0FBQTBCLGFBQU8sRUFBRUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQVNFO0FBQU0sY0FBUSxFQUFDLGNBQWY7QUFBOEIsYUFBTyxFQUFFRjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBVUU7QUFBTSxjQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsYUFBTyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUFXRTtBQUFNLGNBQVEsRUFBQyxpQkFBZjtBQUFpQyxhQUFPLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQWFFO0FBQU0sVUFBSSxFQUFDLGNBQVg7QUFBMEIsYUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUFjRTtBQUFNLFVBQUksRUFBQyxjQUFYO0FBQTBCLGFBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGLGVBZUU7QUFBTSxVQUFJLEVBQUMsZUFBWDtBQUEyQixhQUFPLEVBQUVBO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFnQkU7QUFBTSxVQUFJLEVBQUMscUJBQVg7QUFBaUMsYUFBTyxFQUFFQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixlQWlCRTtBQUFNLFVBQUksRUFBQyxlQUFYO0FBQTJCLGFBQU8sRUFBRUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxQkQsQ0F0QkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBpbWFnZTogc3RyaW5nXG4gIHVybDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7dGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZSwgdXJsfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXt1cmx9IC8+XG5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17dXJsfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiNjAwXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYwMFwiIC8+XG5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkB1bnZhbGxleV9cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlfSAvPlxuICAgIDwvSGVhZD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Head.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @geist-ui/react */ \"@geist-ui/react\");\n/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _geist_ui_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @geist-ui/react-icons */ \"@geist-ui/react-icons\");\n/* harmony import */ var _geist_ui_react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react_icons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Head */ \"./components/Head.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/kirohi/Users/kirohi/github.com/unvalley/TabX-LP/pages/index.tsx\";\n\n\n\n\n\nconst CATCH_COPY = 'Save your Tab Life';\nconst SUB_PHRASE = 'Simple tab managegment Extension';\nconst APP_NAME = 'TabX';\nconst TITLE = `${APP_NAME} - ${CATCH_COPY}`;\nconst DESCRIPTION = 'TabX is a simple tab management Chrome Extension. Try it!';\nconst LP_LINK = 'https://tabx.app';\nconst STORE_LINK = 'https://chrome.google.com/webstore/detail/tabx/pnomgepiknocmkmncjkcchojfiookljb?hl=en&authuser=1';\nconst ISSUE_LINK = '';\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"html\", {\n    lang: \"en\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Head__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      title: TITLE,\n      description: DESCRIPTION,\n      image: \"\",\n      url: LP_LINK\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.header,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headerlink,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/tabx.png\",\n          width: \"40\",\n          height: \"40\",\n          alt: \"app-icon\",\n          style: {\n            marginRight: '10px'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"TabX\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mainnav,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: STORE_LINK,\n          target: \"_blank\",\n          children: \"Add\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: ISSUE_LINK,\n          target: \"_blank\",\n          children: \"Issues\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"].Container, {\n        gap: 2,\n        justify: \"center\",\n        direction: \"row-reverse\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n          xs: 24,\n          md: 24,\n          lg: 12,\n          style: {\n            margin: 'auto 0'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n            children: CATCH_COPY\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,\n            children: SUB_PHRASE\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              textAlign: 'center'\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_geist_ui_react_icons__WEBPACK_IMPORTED_MODULE_2__[\"Chrome\"], {\n                size: 40\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 23\n              }, this),\n              auto: true,\n              type: \"success\",\n              size: \"large\",\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,\n              onClick: () => window.open(STORE_LINK, '_blank'),\n              children: \"Add to Chrome\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n          xs: 24,\n          md: 24,\n          lg: 12,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n            width: 700,\n            height: 360,\n            src: \"/screenshot-dark.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJDQVRDSF9DT1BZIiwiU1VCX1BIUkFTRSIsIkFQUF9OQU1FIiwiVElUTEUiLCJERVNDUklQVElPTiIsIkxQX0xJTksiLCJTVE9SRV9MSU5LIiwiSVNTVUVfTElOSyIsIkhvbWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJoZWFkZXJsaW5rIiwibWFyZ2luUmlnaHQiLCJtYWlubmF2IiwiY29udGFpbmVyIiwibWFyZ2luIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRleHRBbGlnbiIsImJ1dHRvbiIsIndpbmRvdyIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUcsb0JBQW5CO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLGtDQUFuQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFqQjtBQUNBLE1BQU1DLEtBQUssR0FBSSxHQUFFRCxRQUFTLE1BQUtGLFVBQVcsRUFBMUM7QUFDQSxNQUFNSSxXQUFXLEdBQUcsMkRBQXBCO0FBRUEsTUFBTUMsT0FBTyxHQUFHLGtCQUFoQjtBQUNBLE1BQU1DLFVBQVUsR0FDZCxrR0FERjtBQUVBLE1BQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0U7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQU0sV0FBSyxFQUFFTCxLQUFiO0FBQW9CLGlCQUFXLEVBQUVDLFdBQWpDO0FBQThDLFdBQUssRUFBQyxFQUFwRDtBQUF1RCxTQUFHLEVBQUVDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFO0FBQVEsZUFBUyxFQUFFSSw4REFBTSxDQUFDQyxNQUExQjtBQUFBLDhCQUNFO0FBQUcsWUFBSSxFQUFDLEVBQVI7QUFBVyxpQkFBUyxFQUFFRCw4REFBTSxDQUFDRSxVQUE3QjtBQUFBLGdDQUNFO0FBQ0UsYUFBRyxFQUFDLFdBRE47QUFFRSxlQUFLLEVBQUMsSUFGUjtBQUdFLGdCQUFNLEVBQUMsSUFIVDtBQUlFLGFBQUcsRUFBQyxVQUpOO0FBS0UsZUFBSyxFQUFFO0FBQUVDLHVCQUFXLEVBQUU7QUFBZjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQUssaUJBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksT0FBdkI7QUFBQSxnQ0FDRTtBQUFHLGNBQUksRUFBRVAsVUFBVDtBQUFxQixnQkFBTSxFQUFDLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBRyxjQUFJLEVBQUVDLFVBQVQ7QUFBcUIsZ0JBQU0sRUFBQyxRQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQXdCRTtBQUFTLGVBQVMsRUFBRUUsOERBQU0sQ0FBQ0ssU0FBM0I7QUFBQSw2QkFDRSxxRUFBQyxvREFBRCxDQUFNLFNBQU47QUFBZ0IsV0FBRyxFQUFFLENBQXJCO0FBQXdCLGVBQU8sRUFBQyxRQUFoQztBQUF5QyxpQkFBUyxFQUFDLGFBQW5EO0FBQUEsZ0NBQ0UscUVBQUMsb0RBQUQ7QUFBTSxZQUFFLEVBQUUsRUFBVjtBQUFjLFlBQUUsRUFBRSxFQUFsQjtBQUFzQixZQUFFLEVBQUUsRUFBMUI7QUFBOEIsZUFBSyxFQUFFO0FBQUVDLGtCQUFNLEVBQUU7QUFBVixXQUFyQztBQUFBLGtDQUVFO0FBQUkscUJBQVMsRUFBRU4sOERBQU0sQ0FBQ08sS0FBdEI7QUFBQSxzQkFBOEJoQjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0U7QUFBRyxxQkFBUyxFQUFFUyw4REFBTSxDQUFDUSxXQUFyQjtBQUFBLHNCQUFtQ2hCO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFLRTtBQUFLLGlCQUFLLEVBQUU7QUFBRWlCLHVCQUFTLEVBQUU7QUFBYixhQUFaO0FBQUEsbUNBQ0UscUVBQUMsc0RBQUQ7QUFDRSxrQkFBSSxlQUFFLHFFQUFDLDREQUFEO0FBQVEsb0JBQUksRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRFI7QUFFRSxrQkFBSSxNQUZOO0FBR0Usa0JBQUksRUFBQyxTQUhQO0FBSUUsa0JBQUksRUFBQyxPQUpQO0FBS0UsdUJBQVMsRUFBRVQsOERBQU0sQ0FBQ1UsTUFMcEI7QUFNRSxxQkFBTyxFQUFFLE1BQU1DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZZixVQUFaLEVBQXdCLFFBQXhCLENBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFvQkUscUVBQUMsb0RBQUQ7QUFBTSxZQUFFLEVBQUUsRUFBVjtBQUFjLFlBQUUsRUFBRSxFQUFsQjtBQUFzQixZQUFFLEVBQUUsRUFBMUI7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUFPLGlCQUFLLEVBQUUsR0FBZDtBQUFtQixrQkFBTSxFQUFFLEdBQTNCO0FBQWdDLGVBQUcsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZERCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRGlzcGxheSwgR3JpZCwgSW1hZ2UsIFNwYWNlciwgVGV4dCB9IGZyb20gJ0BnZWlzdC11aS9yZWFjdCdcbmltcG9ydCB7IENocm9tZSB9IGZyb20gJ0BnZWlzdC11aS9yZWFjdC1pY29ucydcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgQ0FUQ0hfQ09QWSA9ICdTYXZlIHlvdXIgVGFiIExpZmUnXG5jb25zdCBTVUJfUEhSQVNFID0gJ1NpbXBsZSB0YWIgbWFuYWdlZ21lbnQgRXh0ZW5zaW9uJ1xuY29uc3QgQVBQX05BTUUgPSAnVGFiWCdcbmNvbnN0IFRJVExFID0gYCR7QVBQX05BTUV9IC0gJHtDQVRDSF9DT1BZfWBcbmNvbnN0IERFU0NSSVBUSU9OID0gJ1RhYlggaXMgYSBzaW1wbGUgdGFiIG1hbmFnZW1lbnQgQ2hyb21lIEV4dGVuc2lvbi4gVHJ5IGl0ISdcblxuY29uc3QgTFBfTElOSyA9ICdodHRwczovL3RhYnguYXBwJ1xuY29uc3QgU1RPUkVfTElOSyA9XG4gICdodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC90YWJ4L3Bub21nZXBpa25vY21rbW5jamtjY2hvamZpb29rbGpiP2hsPWVuJmF1dGh1c2VyPTEnXG5jb25zdCBJU1NVRV9MSU5LID0gJydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxIZWFkIHRpdGxlPXtUSVRMRX0gZGVzY3JpcHRpb249e0RFU0NSSVBUSU9OfSBpbWFnZT1cIlwiIHVybD17TFBfTElOS30gLz5cblxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVybGlua30+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL3RhYngucG5nXCJcbiAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgYWx0PVwiYXBwLWljb25cIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+VGFiWDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5uYXZ9PlxuICAgICAgICAgIDxhIGhyZWY9e1NUT1JFX0xJTkt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9e0lTU1VFX0xJTkt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgSXNzdWVzXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8R3JpZC5Db250YWluZXIgZ2FwPXsyfSBqdXN0aWZ5PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwicm93LXJldmVyc2VcIj5cbiAgICAgICAgICA8R3JpZCB4cz17MjR9IG1kPXsyNH0gbGc9ezEyfSBzdHlsZT17eyBtYXJnaW46ICdhdXRvIDAnIH19PlxuICAgICAgICAgICAgey8qIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e0NBVENIX0NPUFl9PC9oMT4gKi99XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntDQVRDSF9DT1BZfTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e1NVQl9QSFJBU0V9PC9wPlxuICAgICAgICAgICAgey8qIENocm9tZSBJY29uICovfVxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj17PENocm9tZSBzaXplPXs0MH0gLz59XG4gICAgICAgICAgICAgICAgYXV0b1xuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihTVE9SRV9MSU5LLCAnX2JsYW5rJyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBZGQgdG8gQ2hyb21lXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgPEdyaWQgeHM9ezI0fSBtZD17MjR9IGxnPXsxMn0+XG4gICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezcwMH0gaGVpZ2h0PXszNjB9IHNyYz1cIi9zY3JlZW5zaG90LWRhcmsucG5nXCIgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZC5Db250YWluZXI+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhIGhyZWY9e1NUT1JFX0xJTkt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICBUYWJYXG4gICAgICAgIDwvYT5cbiAgICAgICAgey8qIDxTcGFjZXIgeT17MX0gLz4gKi99XG4gICAgICB7LyogPGEgaHJlZj17U1RPUkVfTElOS30+UHJpdmFjeSBQb2xpY3kgJiBSZWdhbDwvYT4gKi99XG4gICAgICB7LyogPC9mb290ZXI+ICovfVxuICAgIDwvaHRtbD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"header\": \"Home_header__3vlZW\",\n\t\"headerlink\": \"Home_headerlink__2nOEH\",\n\t\"nav\": \"Home_nav__1c1C3\",\n\t\"mainnav\": \"Home_mainnav__2EOHw\",\n\t\"site-name\": \"Home_site-name__kElPa\",\n\t\"button\": \"Home_button__Xc9mA\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2VmZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJoZWFkZXJcIjogXCJIb21lX2hlYWRlcl9fM3ZsWldcIixcblx0XCJoZWFkZXJsaW5rXCI6IFwiSG9tZV9oZWFkZXJsaW5rX18ybk9FSFwiLFxuXHRcIm5hdlwiOiBcIkhvbWVfbmF2X18xYzFDM1wiLFxuXHRcIm1haW5uYXZcIjogXCJIb21lX21haW5uYXZfXzJFT0h3XCIsXG5cdFwic2l0ZS1uYW1lXCI6IFwiSG9tZV9zaXRlLW5hbWVfX2tFbFBhXCIsXG5cdFwiYnV0dG9uXCI6IFwiSG9tZV9idXR0b25fX1hjOW1BXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@geist-ui/react":
/*!**********************************!*\
  !*** external "@geist-ui/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@geist-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ2Vpc3QtdWkvcmVhY3RcIj8zMDI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBnZWlzdC11aS9yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBnZWlzdC11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@geist-ui/react\n");

/***/ }),

/***/ "@geist-ui/react-icons":
/*!****************************************!*\
  !*** external "@geist-ui/react-icons" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@geist-ui/react-icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ2Vpc3QtdWkvcmVhY3QtaWNvbnNcIj9mNTUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBnZWlzdC11aS9yZWFjdC1pY29ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBnZWlzdC11aS9yZWFjdC1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@geist-ui/react-icons\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });