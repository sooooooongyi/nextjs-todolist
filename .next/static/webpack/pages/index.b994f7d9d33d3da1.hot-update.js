"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/api/todos.ts":
/*!**************************!*\
  !*** ./lib/api/todos.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoAPI\": function() { return /* binding */ addTodoAPI; },\n/* harmony export */   \"checkTodoAPI\": function() { return /* binding */ checkTodoAPI; },\n/* harmony export */   \"getTodosAPI\": function() { return /* binding */ getTodosAPI; }\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./lib/api/index.ts\");\n\nvar getTodosAPI = function getTodosAPI() {\n  return ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"api/todos\");\n};\nvar checkTodoAPI = function checkTodoAPI(id) {\n  return ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"api/todos/\".concat(id));\n};\nvar addTodoAPI = function addTodoAPI(body) {\n  return ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/api/todos\", body);\n};\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL3RvZG9zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQVFPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0VBQUEsT0FBTUQsNkNBQUEsQ0FBc0IsV0FBdEIsQ0FBTjtBQUFBLENBQXBCO0FBQ0EsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRDtFQUFBLE9BQWdCSiwrQ0FBQSxxQkFBeUJJLEVBQXpCLEVBQWhCO0FBQUEsQ0FBckI7QUFDQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFEO0VBQUEsT0FDeEJQLDhDQUFBLENBQVcsWUFBWCxFQUF5Qk8sSUFBekIsQ0FEd0I7QUFBQSxDQUFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvYXBpL3RvZG9zLnRzP2MzYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCIuXCI7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy90b2RvXCI7XG5cbmludGVyZmFjZSBBZGRUb2RvQVBJQm9keSB7XG4gIHRleHQ6IHN0cmluZztcbiAgY29sb3I6IFRvZG9UeXBlW1wiY29sb3JcIl07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUb2Rvc0FQSSA9ICgpID0+IGF4aW9zLmdldDxUb2RvVHlwZVtdPihcImFwaS90b2Rvc1wiKTtcbmV4cG9ydCBjb25zdCBjaGVja1RvZG9BUEkgPSAoaWQ6IG51bWJlcikgPT4gYXhpb3MucGF0Y2goYGFwaS90b2Rvcy8ke2lkfWApO1xuZXhwb3J0IGNvbnN0IGFkZFRvZG9BUEkgPSAoYm9keTogQWRkdG9kb0FQSUJvZHkpID0+XG4gIGF4aW9zLnBvc3QoXCIvYXBpL3RvZG9zXCIsIGJvZHkpO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0VG9kb3NBUEkiLCJnZXQiLCJjaGVja1RvZG9BUEkiLCJpZCIsInBhdGNoIiwiYWRkVG9kb0FQSSIsImJvZHkiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api/todos.ts\n"));

/***/ })

});