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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst ACCOUNT_BANNED_SUBSCRIPTIN = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  subscription Subscription {\n    userBannedSubscription\n  }\n`;\nconst Home = ()=>{\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(ACCOUNT_BANNED_SUBSCRIPTIN);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(data);\n        if (!data) {\n            return;\n        }\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Nova conta criada!\");\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n        children: \"Home!\"\n    }, void 0, false, {\n        fileName: \"/home/luciano/Downloads/websockets/apps/frontend/src/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0Q7QUFDcEI7QUFDTTtBQUV4QyxNQUFNSSw2QkFBNkJILCtDQUFHLENBQUM7Ozs7QUFJdkMsQ0FBQztBQUVELE1BQU1JLE9BQU8sSUFBTTtJQUNqQixNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHTiwrREFBZUEsQ0FBQ0k7SUFFakNGLGdEQUFTQSxDQUFDLElBQU07UUFDZEssUUFBUUMsR0FBRyxDQUFDRjtRQUNaLElBQUksQ0FBQ0EsTUFBTTtZQUNUO1FBQ0YsQ0FBQztRQUVESCx3REFBVyxDQUFDO0lBQ2QsR0FBRztRQUFDRztLQUFLO0lBRVQscUJBQU8sOERBQUNJO2tCQUFHOzs7Ozs7QUFDYjtBQUVBLGlFQUFlTCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3Vic2NyaXB0aW9uLCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmNvbnN0IEFDQ09VTlRfQkFOTkVEX1NVQlNDUklQVElOID0gZ3FsYFxuICBzdWJzY3JpcHRpb24gU3Vic2NyaXB0aW9uIHtcbiAgICB1c2VyQmFubmVkU3Vic2NyaXB0aW9uXG4gIH1cbmA7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU3Vic2NyaXB0aW9uKEFDQ09VTlRfQkFOTkVEX1NVQlNDUklQVElOKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRvYXN0LmVycm9yKFwiTm92YSBjb250YSBjcmlhZGEhXCIpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiA8aDQ+SG9tZSE8L2g0Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3Vic2NyaXB0aW9uIiwiZ3FsIiwidXNlRWZmZWN0IiwidG9hc3QiLCJBQ0NPVU5UX0JBTk5FRF9TVUJTQ1JJUFRJTiIsIkhvbWUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();