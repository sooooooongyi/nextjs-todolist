"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo/add",{

/***/ "./components/AddTodo.tsx":
/*!********************************!*\
  !*** ./components/AddTodo.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/songsong/Desktop/songsong/dev/next-todolist/components/AddTodo.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"AddTodo__Container\",\n  componentId: \"sc-32jjjw-0\"\n})([\"padding:16px;.add-todo-colors-wrapper{width:100%;margin-top:16px;display:flex;justify-content:space-between;}.add-todo-color-list{display:flex;button{width:24px;height:24px;margin-right:16px;border:0;outline:0;border-radius:50%;&:last-child{margin:0;}}}.add-todo-header-title{font-size:21px;}.add-todo-header{display:flex;justify-content:space-between;align-items:center;.add-todo-submit-button{padding:4px 8px;border:1px solid black;border-radius:5px;background-color:white;outline:none;font-size:14px;}}.bg-blue{background-color:\", \";}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blue);\n_c = Container;\n\nvar AddTodo = function AddTodo() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"add-todo-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        className: \"add-todo-header-title\",\n        children: \"App Todo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: \"add-todo-submit-button\",\n        onClick: function onClick() {},\n        children: \"\\uCD94\\uAC00\\uD558\\uAE30\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = AddTodo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTodo);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"AddTodo\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZFRvZG8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUcsU0FBUyxHQUFHRix3RUFBSDtFQUFBO0VBQUE7QUFBQSxraUJBNkNTQyw0REE3Q1QsQ0FBZjtLQUFNQzs7QUFpRE4sSUFBTUcsT0FBaUIsR0FBRyxTQUFwQkEsT0FBb0IsR0FBTTtFQUM5QixvQkFDRSw4REFBQyxTQUFEO0lBQUEsdUJBQ0U7TUFBSyxTQUFTLEVBQUMsaUJBQWY7TUFBQSx3QkFDRTtRQUFJLFNBQVMsRUFBQyx1QkFBZDtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBRUU7UUFBUSxJQUFJLEVBQUMsUUFBYjtRQUFzQixTQUFTLEVBQUMsd0JBQWhDO1FBQXlELE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBQTFFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBUUQsQ0FURDs7TUFBTUE7QUFXTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZFRvZG8udHN4PzQyZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBCcnVzaEljb24gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWNzL3N2Zy9icnVzaC5zdmdcIjtcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvcGFsZXR0ZVwiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxNnB4O1xuXG4gIC5hZGQtdG9kby1jb2xvcnMtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5hZGQtdG9kby1jb2xvci1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFkZC10b2RvLWhlYWRlci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG5cbiAgLmFkZC10b2RvLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5hZGQtdG9kby1zdWJtaXQtYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAuYmctYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmJsdWV9O1xuICB9XG5gO1xuXG5jb25zdCBBZGRUb2RvOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtdG9kby1oZWFkZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFkZC10b2RvLWhlYWRlci10aXRsZVwiPkFwcCBUb2RvPC9oMT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYWRkLXRvZG8tc3VibWl0LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHt9fT7stpTqsIDtlZjquLA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9kbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsInBhbGV0dGUiLCJDb250YWluZXIiLCJkaXYiLCJibHVlIiwiQWRkVG9kbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AddTodo.tsx\n"));

/***/ })

});