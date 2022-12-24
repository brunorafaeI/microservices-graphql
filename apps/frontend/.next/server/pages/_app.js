"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/apollo.ts":
/*!***************************!*\
  !*** ./src/lib/apollo.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/ws */ \"@apollo/client/link/ws\");\n/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({\n    uri: \"http://localhost:4005/graphql\"\n});\nconst wsLink =  false ? 0 : null;\nconst splitLink =  false ? 0 : httpLink;\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    link: splitLink,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Fwb2xsby50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThFO0FBRWpCO0FBRU47QUFFdkQsTUFBTU0sV0FBVyxJQUFJTCxvREFBUUEsQ0FBQztJQUM1Qk0sS0FBSztBQUNQO0FBRUEsTUFBTUMsU0FDSixNQUE2QixHQUN6QixDQUtFLEdBQ0YsSUFBSTtBQUVWLE1BQU1HLFlBQ0osTUFBNkIsR0FDekJSLENBU0VHLEdBRUZBLFFBQVE7QUFFUCxNQUFNVSxTQUFTLElBQUloQix3REFBWUEsQ0FBQztJQUNyQ2lCLE1BQU1OO0lBQ05PLE9BQU8sSUFBSWhCLHlEQUFhQTtBQUMxQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvbGliL2Fwb2xsby50cz85YzI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSHR0cExpbmssIEluTWVtb3J5Q2FjaGUsIHNwbGl0IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBHcmFwaFFMV3NMaW5rIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L2xpbmsvc3Vic2NyaXB0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiZ3JhcGhxbC13c1wiO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC9saW5rL3dzXCI7XG5cbmNvbnN0IGh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKHtcbiAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwNS9ncmFwaHFsXCIsXG59KTtcblxuY29uc3Qgd3NMaW5rID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuICAgID8gbmV3IFdlYlNvY2tldExpbmsoe1xuICAgICAgICB1cmk6IFwid3M6Ly9sb2NhbGhvc3Q6NDAwNS9ncmFwaHFsXCIsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICByZWNvbm5lY3Q6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIDogbnVsbDtcblxuY29uc3Qgc3BsaXRMaW5rID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuICAgID8gc3BsaXQoXG4gICAgICAgICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09IFwiT3BlcmF0aW9uRGVmaW5pdGlvblwiICYmXG4gICAgICAgICAgICBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gXCJzdWJzY3JpcHRpb25cIlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHdzTGluayxcbiAgICAgICAgaHR0cExpbmtcbiAgICAgIClcbiAgICA6IGh0dHBMaW5rO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIGxpbms6IHNwbGl0TGluayxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJIdHRwTGluayIsIkluTWVtb3J5Q2FjaGUiLCJzcGxpdCIsImdldE1haW5EZWZpbml0aW9uIiwiV2ViU29ja2V0TGluayIsImh0dHBMaW5rIiwidXJpIiwid3NMaW5rIiwib3B0aW9ucyIsInJlY29ubmVjdCIsInNwbGl0TGluayIsInF1ZXJ5IiwiZGVmaW5pdGlvbiIsImtpbmQiLCJvcGVyYXRpb24iLCJjbGllbnQiLCJsaW5rIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/apollo.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/apollo */ \"./src/lib/apollo.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst App = (props)=>{\n    const { Component , pageProps  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: _lib_apollo__WEBPACK_IMPORTED_MODULE_3__.client,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/luciano/Downloads/websockets/apps/frontend/src/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                fileName: \"/home/luciano/Downloads/websockets/apps/frontend/src/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luciano/Downloads/websockets/apps/frontend/src/pages/_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dEO0FBQ047QUFFSDtBQUV2QyxNQUFNRyxNQUFNLENBQUNDLFFBQW9CO0lBQy9CLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBR0Y7SUFFakMscUJBQ0UsOERBQUNKLDBEQUFjQTtRQUFDRSxRQUFRQSwrQ0FBTUE7OzBCQUM1Qiw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ0wsb0RBQU9BOzs7Ozs7Ozs7OztBQUdkO0FBRUEsaUVBQWVFLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2xpYi9hcG9sbG9cIjtcblxuY29uc3QgQXBwID0gKHByb3BzOiBBcHBQcm9wcykgPT4ge1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8VG9hc3RlciAvPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiQXBvbGxvUHJvdmlkZXIiLCJUb2FzdGVyIiwiY2xpZW50IiwiQXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/ws":
/*!*****************************************!*\
  !*** external "@apollo/client/link/ws" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@apollo/client/link/ws");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();