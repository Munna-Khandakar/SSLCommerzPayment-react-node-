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

/***/ "./components/payment/index.tsx":
/*!**************************************!*\
  !*** ./components/payment/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Payment = ()=>{\n    const formData = {\n        name: \"Mr. Khandakar\",\n        price: 200,\n        address: \"Dhaka\"\n    };\n    const onClickHandler = async ()=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:3030/order\", formData);\n            console.log(res);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center p-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Name:\",\n                        formData?.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/myplate/Desktop/sslcommerce/frontend/components/payment/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Price:\",\n                        formData?.price\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/myplate/Desktop/sslcommerce/frontend/components/payment/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Address:\",\n                        formData?.address\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/myplate/Desktop/sslcommerce/frontend/components/payment/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" rounded bg-slate-400 px-2 py-1 text-white\",\n                    onClick: onClickHandler,\n                    children: \"Pay\"\n                }, void 0, false, {\n                    fileName: \"/Users/myplate/Desktop/sslcommerce/frontend/components/payment/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/myplate/Desktop/sslcommerce/frontend/components/payment/index.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payment);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BheW1lbnQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNBO0FBRTFCLE1BQU1FLE9BQU8sR0FBRyxJQUFNO0lBQ3BCLE1BQU1DLFFBQVEsR0FBRztRQUNmQyxJQUFJLEVBQUUsZUFBZTtRQUNyQkMsS0FBSyxFQUFFLEdBQUc7UUFDVkMsT0FBTyxFQUFFLE9BQU87S0FDakI7SUFFRCxNQUFNQyxjQUFjLEdBQUcsVUFBWTtRQUNqQyxJQUFJO1lBQ0YsTUFBTUMsR0FBRyxHQUFHLE1BQU1QLGlEQUFVLENBQUMsNkJBQTZCLEVBQUVFLFFBQVEsQ0FBQztZQUNyRU8sT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQyxDQUFDO1NBQ2xCLENBQUMsT0FBT0ksS0FBSyxFQUFFO1lBQ2RGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtLQUNGO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGdEQUFpRDs7OEJBQzlELDhEQUFDQyxHQUFDOzt3QkFBQyxPQUFLO3dCQUFDWixRQUFRLEVBQUVDLElBQUk7Ozs7Ozs2QkFBSzs4QkFDNUIsOERBQUNXLEdBQUM7O3dCQUFDLFFBQU07d0JBQUNaLFFBQVEsRUFBRUUsS0FBSzs7Ozs7OzZCQUFLOzhCQUM5Qiw4REFBQ1UsR0FBQzs7d0JBQUMsVUFBUTt3QkFBQ1osUUFBUSxFQUFFRyxPQUFPOzs7Ozs7NkJBQUs7OEJBQ2xDLDhEQUFDTyxLQUFHO29CQUNGQyxTQUFTLEVBQUMsNENBQTRDO29CQUN0REUsT0FBTyxFQUFFVCxjQUFjOzhCQUN4QixLQUVEOzs7Ozs2QkFBTTs7Ozs7O3FCQUNGO3FCQUNMLENBQ0g7Q0FDSDtBQUVELGlFQUFlTCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnQvaW5kZXgudHN4P2Q2YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBQYXltZW50ID0gKCkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICBuYW1lOiBcIk1yLiBLaGFuZGFrYXJcIixcbiAgICBwcmljZTogMjAwLFxuICAgIGFkZHJlc3M6IFwiRGhha2FcIixcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9vcmRlclwiLCBmb3JtRGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICBwLTEwXCI+XG4gICAgICAgIDxwPk5hbWU6e2Zvcm1EYXRhPy5uYW1lfTwvcD5cbiAgICAgICAgPHA+UHJpY2U6e2Zvcm1EYXRhPy5wcmljZX08L3A+XG4gICAgICAgIDxwPkFkZHJlc3M6e2Zvcm1EYXRhPy5hZGRyZXNzfTwvcD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkIGJnLXNsYXRlLTQwMCBweC0yIHB5LTEgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgb25DbGljaz17b25DbGlja0hhbmRsZXJ9XG4gICAgICAgID5cbiAgICAgICAgICBQYXlcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIlBheW1lbnQiLCJmb3JtRGF0YSIsIm5hbWUiLCJwcmljZSIsImFkZHJlc3MiLCJvbkNsaWNrSGFuZGxlciIsInJlcyIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/payment/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/messaging */ \"firebase/messaging\");\n/* harmony import */ var _utills_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utills/firebase/firebase */ \"./utills/firebase/firebase.ts\");\n/* harmony import */ var _components_payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/payment */ \"./components/payment/index.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_messaging__WEBPACK_IMPORTED_MODULE_2__, _utills_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_messaging__WEBPACK_IMPORTED_MODULE_2__, _utills_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction page() {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_payment__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/myplate/Desktop/sslcommerce/frontend/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, this);\n// return <Home />;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5QztBQUNvQjtBQUNUO0FBQ1Y7QUFFM0IsU0FBU00sSUFBSSxHQUFHO0lBQzdCLHNEQUFzRDtJQUN0REwsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxLQUE2RCxFQUFFLEVBVWxFO0tBQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUFPLDhEQUFDSSwyREFBTzs7OztZQUFHLENBQUM7QUFDbkIsbUJBQW1CO0NBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvbWUgZnJvbSBcIkBjb21wb25lbnRzL1BhZ2VzL0hvbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldE1lc3NhZ2luZywgb25NZXNzYWdlIH0gZnJvbSBcImZpcmViYXNlL21lc3NhZ2luZ1wiO1xuaW1wb3J0IGZpcmViYXNlQXBwIGZyb20gXCJAdXRpbGxzL2ZpcmViYXNlL2ZpcmViYXNlXCI7XG5pbXBvcnQgUGF5bWVudCBmcm9tIFwiQGNvbXBvbmVudHMvcGF5bWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2luZyA9IGdldE1lc3NhZ2luZyhmaXJlYmFzZUFwcCk7XG4gICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uTWVzc2FnZShtZXNzYWdpbmcsIChwYXlsb2FkKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9yZWdyb3VuZCBwdXNoIG5vdGlmaWNhdGlvbiByZWNlaXZlZDpcIiwgcGF5bG9hZCk7XG4gICAgICAgIC8vIEhhbmRsZSB0aGUgcmVjZWl2ZWQgcHVzaCBub3RpZmljYXRpb24gd2hpbGUgdGhlIGFwcCBpcyBpbiB0aGUgZm9yZWdyb3VuZFxuICAgICAgICAvLyBZb3UgY2FuIGRpc3BsYXkgYSBub3RpZmljYXRpb24gb3IgdXBkYXRlIHRoZSBVSSBiYXNlZCBvbiB0aGUgcGF5bG9hZFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB1bnN1YnNjcmliZSgpOyAvLyBVbnN1YnNjcmliZSBmcm9tIHRoZSBvbk1lc3NhZ2UgZXZlbnRcbiAgICAgIH07XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxQYXltZW50IC8+O1xuICAvLyByZXR1cm4gPEhvbWUgLz47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJnZXRNZXNzYWdpbmciLCJvbk1lc3NhZ2UiLCJmaXJlYmFzZUFwcCIsIlBheW1lbnQiLCJwYWdlIiwibmF2aWdhdG9yIiwibWVzc2FnaW5nIiwidW5zdWJzY3JpYmUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./utills/firebase/firebase.ts":
/*!*************************************!*\
  !*** ./utills/firebase/firebase.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCcszwsyG0TBnQR0rrVmSDbH5ifcRLcyew\",\n    authDomain: \"bms-bup-dev.firebaseapp.com\",\n    projectId: \"bms-bup-dev\",\n    storageBucket: \"bms-bup-dev.appspot.com\",\n    messagingSenderId: \"965184613088\",\n    appId: \"1:965184613088:web:50c33f10fe7de8ebfabe85\",\n    measurementId: \"G-TXMD66SQXH\"\n};\n// Initialize Firebase\nconst firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(firebaseApp);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsbHMvZmlyZWJhc2UvZmlyZWJhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWO0FBQ0s7QUFFbEQsTUFBTUUsY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsNkJBQTZCO0lBQ3pDQyxTQUFTLEVBQUUsYUFBYTtJQUN4QkMsYUFBYSxFQUFFLHlCQUF5QjtJQUN4Q0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztJQUNsREMsYUFBYSxFQUFFLGNBQWM7Q0FDOUI7QUFFRCxzQkFBc0I7QUFDdEIsTUFBTUMsV0FBVyxHQUFHViwyREFBYSxDQUFDRSxjQUFjLENBQUM7QUFDMUMsTUFBTVMsRUFBRSxHQUFHVixnRUFBWSxDQUFDUyxXQUFXLENBQUMsQ0FBQztBQUU1QyxpRUFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbGxzL2ZpcmViYXNlL2ZpcmViYXNlLnRzPzBmNTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiAnQUl6YVN5Q2NzendzeUcwVEJuUVIwcnJWbVNEYkg1aWZjUkxjeWV3JyxcbiAgYXV0aERvbWFpbjogJ2Jtcy1idXAtZGV2LmZpcmViYXNlYXBwLmNvbScsXG4gIHByb2plY3RJZDogJ2Jtcy1idXAtZGV2JyxcbiAgc3RvcmFnZUJ1Y2tldDogJ2Jtcy1idXAtZGV2LmFwcHNwb3QuY29tJyxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6ICc5NjUxODQ2MTMwODgnLFxuICBhcHBJZDogJzE6OTY1MTg0NjEzMDg4OndlYjo1MGMzM2YxMGZlN2RlOGViZmFiZTg1JyxcbiAgbWVhc3VyZW1lbnRJZDogJ0ctVFhNRDY2U1FYSCcsXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBmaXJlYmFzZUFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGZpcmViYXNlQXBwKTtcblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2VBcHA7XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlQXBwIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utills/firebase/firebase.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/messaging":
/*!*************************************!*\
  !*** external "firebase/messaging" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/messaging");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();