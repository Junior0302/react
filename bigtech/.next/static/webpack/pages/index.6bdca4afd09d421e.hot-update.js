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

/***/ "./components/CountDown/CountDownTwo.jsx":
/*!***********************************************!*\
  !*** ./components/CountDown/CountDownTwo.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ \"./node_modules/react-countdown/dist/index.es.js\");\n\n\n\nconst CountDownTwo = ()=>{\n    const renderer = (param)=>{\n        let { days , hours , minutes , seconds , completed  } = param;\n        if (completed) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"time-count day\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"00\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                lineNumber: 10,\n                                columnNumber: 13\n                            }, undefined),\n                            \"Jours\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"time-count hour\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"00\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, undefined),\n                            \"heure\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"time-count min\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"00\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, undefined),\n                            \"minute\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"time-count sec\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"00\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, undefined),\n                            \"seconde\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"time-count day\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: days < 10 ? \"0\" + days : days\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined),\n                            \"Jours\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"time-count hour\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: hours < 10 ? \"0\" + hours : hours\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined),\n                            \"heure\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"time-count min\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: minutes < 10 ? \"0\" + minutes : minutes\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            \"minute\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"time-count sec\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: seconds < 10 ? \"0\" + seconds : seconds\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            \"seconde\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"countdown\",\n        className: \"countdown-area-two\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container custom-container-four\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-lg-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"countdown-wrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"title\",\n                                children: \"L'ICO commencera dans...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"countdown-gampang\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"custom-countdown-two\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    date: Date.now() + 5000000,\n                                    renderer: renderer\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\johnj\\\\Desktop\\\\react\\\\bigtech\\\\components\\\\CountDown\\\\CountDownTwo.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CountDownTwo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountDownTwo);\nvar _c;\n$RefreshReg$(_c, \"CountDownTwo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdW50RG93bi9Db3VudERvd25Ud28uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDYztBQUV4QyxNQUFNRSxlQUFlLElBQU07SUFDekIsTUFBTUMsV0FBVyxTQUFrRDtZQUFqRCxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUVDLFVBQVMsRUFBRTtRQUM1RCxJQUFJQSxXQUFXO1lBQ2IscUJBQ0U7O2tDQUNFLDhEQUFDQzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDOzBDQUFNOzs7Ozs7NEJBQVk7Ozs7Ozs7a0NBRXJCLDhEQUFDRjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDOzBDQUFNOzs7Ozs7NEJBQVk7Ozs7Ozs7a0NBRXJCLDhEQUFDRjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDOzBDQUFNOzs7Ozs7NEJBQVk7Ozs7Ozs7a0NBRXJCLDhEQUFDRjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDOzBDQUFNOzs7Ozs7NEJBQVk7Ozs7Ozs7OztRQUkzQixPQUFPO1lBQ0wscUJBQ0U7O2tDQUNFLDhEQUFDRjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDOzBDQUFNUCxPQUFPLEtBQUssTUFBTUEsT0FBT0EsSUFBSTs7Ozs7OzRCQUFROzs7Ozs7O2tDQUU5Qyw4REFBQ0s7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQzswQ0FBTU4sUUFBUSxLQUFLLE1BQU1BLFFBQVFBLEtBQUs7Ozs7Ozs0QkFBUTs7Ozs7OztrQ0FFakQsOERBQUNJO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7MENBQU1MLFVBQVUsS0FBSyxNQUFNQSxVQUFVQSxPQUFPOzs7Ozs7NEJBQVE7Ozs7Ozs7a0NBRXZELDhEQUFDRzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDOzBDQUFNSixVQUFVLEtBQUssTUFBTUEsVUFBVUEsT0FBTzs7Ozs7OzRCQUFROzs7Ozs7Ozs7UUFJN0QsQ0FBQztJQUNIO0lBR0EscUJBQ0UsOERBQUNLO1FBQVFDLElBQUc7UUFBWUgsV0FBVTtrQkFDaEMsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDSTtnQ0FBR0osV0FBVTswQ0FBUTs7Ozs7OzBDQUNwQiw4REFBQ0Q7Z0NBQUlJLElBQUc7Ozs7OzswQ0FFUiw4REFBQ0o7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNULHVEQUFTQTtvQ0FBQ2MsTUFBTUMsS0FBS0MsR0FBRyxLQUFLO29DQUFTZCxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRTtLQTFETUQ7QUE0RE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudERvd24vQ291bnREb3duVHdvLmpzeD8zOTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvdW50ZG93biBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XHJcblxyXG5jb25zdCBDb3VudERvd25Ud28gPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyZXIgPSAoeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcywgY29tcGxldGVkIH0pID0+IHtcclxuICAgIGlmIChjb21wbGV0ZWQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWNvdW50IGRheVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57XCIwMFwifTwvc3Bhbj5Kb3Vyc1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtY291bnQgaG91clwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57XCIwMFwifTwvc3Bhbj5oZXVyZVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtY291bnQgbWluXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntcIjAwXCJ9PC9zcGFuPm1pbnV0ZVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtY291bnQgc2VjXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntcIjAwXCJ9PC9zcGFuPnNlY29uZGVcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWNvdW50IGRheVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57ZGF5cyA8IDEwID8gXCIwXCIgKyBkYXlzIDogZGF5c308L3NwYW4+Sm91cnNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWNvdW50IGhvdXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+e2hvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnN9PC9zcGFuPmhldXJlXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1jb3VudCBtaW5cIj5cclxuICAgICAgICAgICAgPHNwYW4+e21pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXN9PC9zcGFuPm1pbnV0ZVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtY291bnQgc2VjXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntzZWNvbmRzIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzfTwvc3Bhbj5zZWNvbmRlXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb3VudGRvd25cIiBjbGFzc05hbWU9XCJjb3VudGRvd24tYXJlYS10d29cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY3VzdG9tLWNvbnRhaW5lci1mb3VyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLXdyYXBcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+TCdJQ08gY29tbWVuY2VyYSBkYW5zLi4uPC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY291bnRkb3duLWdhbXBhbmdcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY291bnRkb3duLXR3b1wiPlxyXG4gICAgICAgICAgICAgICAgPENvdW50ZG93biBkYXRlPXtEYXRlLm5vdygpICsgNTAwMDAwMH0gcmVuZGVyZXI9e3JlbmRlcmVyfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnREb3duVHdvO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb3VudGRvd24iLCJDb3VudERvd25Ud28iLCJyZW5kZXJlciIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY29tcGxldGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInNlY3Rpb24iLCJpZCIsImgyIiwiZGF0ZSIsIkRhdGUiLCJub3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CountDown/CountDownTwo.jsx\n"));

/***/ })

});