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

/***/ "./components/payment/index.tsx":
/*!**************************************!*\
  !*** ./components/payment/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_myplate_Desktop_sslcommerce_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_myplate_Desktop_sslcommerce_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_myplate_Desktop_sslcommerce_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar Payment = function() {\n    var data1 = {\n        name: \"Mr. Khandakar\",\n        price: 200,\n        address: \"Dhaka\"\n    };\n    var onClickHandler = function() {\n        var _ref = _asyncToGenerator(_Users_myplate_Desktop_sslcommerce_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _Users_myplate_Desktop_sslcommerce_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        data = axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"http://localhost:3030/\");\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onClickHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center p-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Name:\",\n                        data1 === null || data1 === void 0 ? void 0 : data1.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/myplate/Desktop/sslcommerce/frontend/components/payment/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Price:\",\n                        data1 === null || data1 === void 0 ? void 0 : data1.price\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/myplate/Desktop/sslcommerce/frontend/components/payment/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Address:\",\n                        data1 === null || data1 === void 0 ? void 0 : data1.address\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/myplate/Desktop/sslcommerce/frontend/components/payment/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \" rounded bg-slate-400 px-2 py-1 text-white\",\n                    children: \"Pay\"\n                }, void 0, false, {\n                    fileName: \"/Users/myplate/Desktop/sslcommerce/frontend/components/payment/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/myplate/Desktop/sslcommerce/frontend/components/payment/index.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = Payment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Payment);\nvar _c;\n$RefreshReg$(_c, \"Payment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BheW1lbnQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNBO0FBRTFCLElBQU1FLE9BQU8sR0FBRyxXQUFNO0lBQ3BCLElBQU1DLEtBQUksR0FBRztRQUNYQyxJQUFJLEVBQUUsZUFBZTtRQUNyQkMsS0FBSyxFQUFFLEdBQUc7UUFDVkMsT0FBTyxFQUFFLE9BQU87S0FDakI7SUFFRCxJQUFNQyxjQUFjO21CQUFHLDRMQUFZO2dCQUMzQkosSUFBSTs7Ozt3QkFBSkEsSUFBSSxHQUFHRixpREFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUM7Ozs7OztTQUNuRDt3QkFGS00sY0FBYzs7O09BRW5CO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUNFLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGdEQUFpRDs7OEJBQzlELDhEQUFDQyxHQUFDOzt3QkFBQyxPQUFLO3dCQUFDUixLQUFJLGFBQUpBLEtBQUksV0FBTSxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUksQ0FBRUMsSUFBSTs7Ozs7O3lCQUFLOzhCQUN4Qiw4REFBQ08sR0FBQzs7d0JBQUMsUUFBTTt3QkFBQ1IsS0FBSSxhQUFKQSxLQUFJLFdBQU8sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxLQUFJLENBQUVFLEtBQUs7Ozs7Ozt5QkFBSzs4QkFDMUIsOERBQUNNLEdBQUM7O3dCQUFDLFVBQVE7d0JBQUNSLEtBQUksYUFBSkEsS0FBSSxXQUFTLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsS0FBSSxDQUFFRyxPQUFPOzs7Ozs7eUJBQUs7OEJBQzlCLDhEQUFDRyxLQUFHO29CQUFDQyxTQUFTLEVBQUMsNENBQTRDOzhCQUFDLEtBQUc7Ozs7O3lCQUFNOzs7Ozs7aUJBQ2pFO3FCQUNMLENBQ0g7Q0FDSDtBQXBCS1IsS0FBQUEsT0FBTztBQXNCYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGF5bWVudC9pbmRleC50c3g/ZDZiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IFBheW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbmFtZTogXCJNci4gS2hhbmRha2FyXCIsXG4gICAgcHJpY2U6IDIwMCxcbiAgICBhZGRyZXNzOiBcIkRoYWthXCIsXG4gIH07XG5cbiAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICBwLTEwXCI+XG4gICAgICAgIDxwPk5hbWU6e2RhdGE/Lm5hbWV9PC9wPlxuICAgICAgICA8cD5QcmljZTp7ZGF0YT8ucHJpY2V9PC9wPlxuICAgICAgICA8cD5BZGRyZXNzOntkYXRhPy5hZGRyZXNzfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcm91bmRlZCBiZy1zbGF0ZS00MDAgcHgtMiBweS0xIHRleHQtd2hpdGVcIj5QYXk8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiUGF5bWVudCIsImRhdGEiLCJuYW1lIiwicHJpY2UiLCJhZGRyZXNzIiwib25DbGlja0hhbmRsZXIiLCJwb3N0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/payment/index.tsx\n");

/***/ })

});