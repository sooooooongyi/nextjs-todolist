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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"(api)/./lib/data/todo.ts\");\n\nconst Data = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0VBQUVELElBQUlBLCtDQUFBQTtBQUFOLENBQWI7QUFFQSxpRUFBZUMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kb2xpc3QvLi9saWIvZGF0YS9pbmRleC50cz9hMjUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgRGF0YSA9IHsgdG9kbyB9O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhO1xuIl0sIm5hbWVzIjpbInRvZG8iLCJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/data/index.ts\n");

/***/ }),

/***/ "(api)/./lib/data/todo.ts":
/*!**************************!*\
  !*** ./lib/data/todo.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getList = () => {\n  const todosBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(\"data/todos.json\");\n  const todosString = todosBuffer.toString();\n\n  if (!todosString) {\n    return [];\n  }\n\n  const todos = JSON.parse(todosString);\n  return todos;\n};\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList();\n  const todo = todos.some(todo => todo.id === id);\n  return todo;\n};\n\nconst write = async todos => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(\"data/todos.json\", JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS90b2RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUdBLE1BQU1FLE9BQU8sR0FBRyxNQUFNO0VBQ3BCLE1BQU1DLFdBQVcsR0FBR0gsZ0RBQVksQ0FBQyxpQkFBRCxDQUFoQztFQUNBLE1BQU1JLFdBQVcsR0FBR0QsV0FBVyxDQUFDRSxRQUFaLEVBQXBCOztFQUNBLElBQUksQ0FBQ0QsV0FBTCxFQUFrQjtJQUNoQixPQUFPLEVBQVA7RUFDRDs7RUFDRCxNQUFNRSxLQUFpQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osV0FBWCxDQUExQjtFQUNBLE9BQU9FLEtBQVA7QUFDRCxDQVJEOztBQVVBLE1BQU1HLEtBQUssR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUE0QjtFQUN4QyxNQUFNSixLQUFLLEdBQUdKLE9BQU8sRUFBckI7RUFDQSxNQUFNUyxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sSUFBTixDQUFZRCxJQUFELElBQVVBLElBQUksQ0FBQ0QsRUFBTCxLQUFZQSxFQUFqQyxDQUFiO0VBQ0EsT0FBT0MsSUFBUDtBQUNELENBSkQ7O0FBTUEsTUFBTUUsS0FBSyxHQUFHLE1BQU9QLEtBQVAsSUFBNkI7RUFDekNMLGlEQUFhLENBQUMsaUJBQUQsRUFBb0JNLElBQUksQ0FBQ08sU0FBTCxDQUFlUixLQUFmLENBQXBCLENBQWI7QUFDRCxDQUZEOztBQUlBLGlFQUFlO0VBQUVKLE9BQUY7RUFBV08sS0FBWDtFQUFrQkk7QUFBbEIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kb2xpc3QvLi9saWIvZGF0YS90b2RvLnRzP2NkNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy90b2RvXCI7XG5cbmNvbnN0IGdldExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9zQnVmZmVyID0gcmVhZEZpbGVTeW5jKFwiZGF0YS90b2Rvcy5qc29uXCIpO1xuICBjb25zdCB0b2Rvc1N0cmluZyA9IHRvZG9zQnVmZmVyLnRvU3RyaW5nKCk7XG4gIGlmICghdG9kb3NTdHJpbmcpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBKU09OLnBhcnNlKHRvZG9zU3RyaW5nKTtcbiAgcmV0dXJuIHRvZG9zO1xufTtcblxuY29uc3QgZXhpc3QgPSAoeyBpZCB9OiB7IGlkOiBudW1iZXIgfSkgPT4ge1xuICBjb25zdCB0b2RvcyA9IGdldExpc3QoKTtcbiAgY29uc3QgdG9kbyA9IHRvZG9zLnNvbWUoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcbiAgcmV0dXJuIHRvZG87XG59O1xuXG5jb25zdCB3cml0ZSA9IGFzeW5jICh0b2RvczogVG9kb1R5cGVbXSkgPT4ge1xuICB3cml0ZUZpbGVTeW5jKFwiZGF0YS90b2Rvcy5qc29uXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGdldExpc3QsIGV4aXN0LCB3cml0ZSB9O1xuIl0sIm5hbWVzIjpbInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJnZXRMaXN0IiwidG9kb3NCdWZmZXIiLCJ0b2Rvc1N0cmluZyIsInRvU3RyaW5nIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJleGlzdCIsImlkIiwidG9kbyIsInNvbWUiLCJ3cml0ZSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/data/todo.ts\n");

/***/ }),

/***/ "(api)/./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data */ \"(api)/./lib/data/index.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"GET\") {\n    try {\n      const todosBuffer = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"data/todos.json\");\n      const todosString = todosBuffer.toString();\n\n      if (!todosString) {\n        res.statusCode = 200;\n        res.send([]);\n      }\n\n      const todos = JSON.parse(todosString);\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  if (req.method === \"POST\") {\n    const {\n      text,\n      color\n    } = req.body;\n\n    if (!text || !color) {\n      res.statusCode = 400;\n      return res.send(\"text 혹은 color 가 없습니다.\");\n    }\n\n    const todos = _lib_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todo.getList();\n    let todoId;\n\n    if (todos.length > 0) {\n      todoId = todos[todos.length - 1].id + 1;\n    } else {\n      todoId = 1;\n    }\n\n    const newTodo = {\n      id: todoId,\n      text,\n      color,\n      checked: false\n    };\n    _lib_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todo.write([...todos, newTodo]);\n    res.statusCode = 200;\n    res.end();\n  }\n\n  res.statusCode = 405;\n  console.log(res.statusCode);\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBRUE7QUFFQSxpRUFBZSxPQUFPRSxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtFQUNsRSxJQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFuQixFQUEwQjtJQUN4QixJQUFJO01BQ0YsTUFBTUMsV0FBVyxHQUFHTCxzREFBQSxDQUFnQixpQkFBaEIsQ0FBcEI7TUFDQSxNQUFNTyxXQUFXLEdBQUdGLFdBQVcsQ0FBQ0csUUFBWixFQUFwQjs7TUFDQSxJQUFJLENBQUNELFdBQUwsRUFBa0I7UUFDaEJKLEdBQUcsQ0FBQ00sVUFBSixHQUFpQixHQUFqQjtRQUNBTixHQUFHLENBQUNPLElBQUosQ0FBUyxFQUFUO01BQ0Q7O01BQ0QsTUFBTUMsS0FBaUIsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLFdBQVgsQ0FBMUI7TUFDQUosR0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCO01BQ0EsT0FBT04sR0FBRyxDQUFDTyxJQUFKLENBQVNDLEtBQVQsQ0FBUDtJQUNELENBVkQsQ0FVRSxPQUFPRyxDQUFQLEVBQVU7TUFDVkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7TUFDQVgsR0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCO01BQ0FOLEdBQUcsQ0FBQ08sSUFBSixDQUFTSSxDQUFUO0lBQ0Q7RUFDRjs7RUFFRCxJQUFJWixHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtJQUN6QixNQUFNO01BQUVhLElBQUY7TUFBUUM7SUFBUixJQUFrQmhCLEdBQUcsQ0FBQ2lCLElBQTVCOztJQUNBLElBQUksQ0FBQ0YsSUFBRCxJQUFTLENBQUNDLEtBQWQsRUFBcUI7TUFDbkJmLEdBQUcsQ0FBQ00sVUFBSixHQUFpQixHQUFqQjtNQUNBLE9BQU9OLEdBQUcsQ0FBQ08sSUFBSixDQUFTLHVCQUFULENBQVA7SUFDRDs7SUFFRCxNQUFNQyxLQUFLLEdBQUdWLDhEQUFBLEVBQWQ7SUFDQSxJQUFJcUIsTUFBSjs7SUFDQSxJQUFJWCxLQUFLLENBQUNZLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtNQUNwQkQsTUFBTSxHQUFHWCxLQUFLLENBQUNBLEtBQUssQ0FBQ1ksTUFBTixHQUFlLENBQWhCLENBQUwsQ0FBd0JDLEVBQXhCLEdBQTZCLENBQXRDO0lBQ0QsQ0FGRCxNQUVPO01BQ0xGLE1BQU0sR0FBRyxDQUFUO0lBQ0Q7O0lBRUQsTUFBTUcsT0FBTyxHQUFHO01BQ2RELEVBQUUsRUFBRUYsTUFEVTtNQUVkTCxJQUZjO01BR2RDLEtBSGM7TUFJZFEsT0FBTyxFQUFFO0lBSkssQ0FBaEI7SUFPQXpCLDREQUFBLENBQWdCLENBQUMsR0FBR1UsS0FBSixFQUFXYyxPQUFYLENBQWhCO0lBQ0F0QixHQUFHLENBQUNNLFVBQUosR0FBaUIsR0FBakI7SUFDQU4sR0FBRyxDQUFDeUIsR0FBSjtFQUNEOztFQUVEekIsR0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCO0VBQ0FNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixHQUFHLENBQUNNLFVBQWhCO0VBQ0EsT0FBT04sR0FBRyxDQUFDeUIsR0FBSixFQUFQO0FBQ0QsQ0FqREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG9saXN0Ly4vcGFnZXMvYXBpL3RvZG9zL2luZGV4LnRzPzAyZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy90b2RvXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRvZG9zQnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKFwiZGF0YS90b2Rvcy5qc29uXCIpO1xuICAgICAgY29uc3QgdG9kb3NTdHJpbmcgPSB0b2Rvc0J1ZmZlci50b1N0cmluZygpO1xuICAgICAgaWYgKCF0b2Rvc1N0cmluZykge1xuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgICAgcmVzLnNlbmQoW10pO1xuICAgICAgfVxuICAgICAgY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBKU09OLnBhcnNlKHRvZG9zU3RyaW5nKTtcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgICAgcmV0dXJuIHJlcy5zZW5kKHRvZG9zKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgcmVzLnNlbmQoZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyB0ZXh0LCBjb2xvciB9ID0gcmVxLmJvZHk7XG4gICAgaWYgKCF0ZXh0IHx8ICFjb2xvcikge1xuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDA7XG4gICAgICByZXR1cm4gcmVzLnNlbmQoXCJ0ZXh0IO2YueydgCBjb2xvciDqsIAg7JeG7Iq164uI64ukLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvcyA9IERhdGEudG9kby5nZXRMaXN0KCk7XG4gICAgbGV0IHRvZG9JZDogbnVtYmVyO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICB0b2RvSWQgPSB0b2Rvc1t0b2Rvcy5sZW5ndGggLSAxXS5pZCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9JZCA9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3VG9kbyA9IHtcbiAgICAgIGlkOiB0b2RvSWQsXG4gICAgICB0ZXh0LFxuICAgICAgY29sb3IsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgRGF0YS50b2RvLndyaXRlKFsuLi50b2RvcywgbmV3VG9kb10pO1xuICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgIHJlcy5lbmQoKTtcbiAgfVxuXG4gIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xuICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzQ29kZSk7XG4gIHJldHVybiByZXMuZW5kKCk7XG59O1xuIl0sIm5hbWVzIjpbImZzIiwiRGF0YSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvZG9zQnVmZmVyIiwicmVhZEZpbGVTeW5jIiwidG9kb3NTdHJpbmciLCJ0b1N0cmluZyIsInN0YXR1c0NvZGUiLCJzZW5kIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJjb2xvciIsImJvZHkiLCJ0b2RvIiwiZ2V0TGlzdCIsInRvZG9JZCIsImxlbmd0aCIsImlkIiwibmV3VG9kbyIsImNoZWNrZWQiLCJ3cml0ZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/index.ts"));
module.exports = __webpack_exports__;

})();