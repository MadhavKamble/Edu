"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/src/assets/img/blog/blog-2.jpg":
/*!********************************************!*\
  !*** ./app/src/assets/img/blog/blog-2.jpg ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/blog-2.8652cafd.jpg\",\"height\":768,\"width\":1024,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-2.8652cafd.jpg&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":6});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zcmMvYXNzZXRzL2ltZy9ibG9nL2Jsb2ctMi5qcGciLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLENBQUMsaU1BQWlNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zcmMvYXNzZXRzL2ltZy9ibG9nL2Jsb2ctMi5qcGc/MjM4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvbWVkaWEvYmxvZy0yLjg2NTJjYWZkLmpwZ1wiLFwiaGVpZ2h0XCI6NzY4LFwid2lkdGhcIjoxMDI0LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZtZWRpYSUyRmJsb2ctMi44NjUyY2FmZC5qcGcmdz04JnE9NzBcIixcImJsdXJXaWR0aFwiOjgsXCJibHVySGVpZ2h0XCI6Nn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/src/assets/img/blog/blog-2.jpg\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/(pages)/home/home.jsx":
/*!***********************************!*\
  !*** ./app/(pages)/home/home.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Banner: function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ \"(app-pages-browser)/./node_modules/animate.css/animate.css\");\n/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-on-screen */ \"(app-pages-browser)/./node_modules/react-on-screen/lib/index.js\");\n/* harmony import */ var _src_assets_img_blog_blog_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/assets/img/blog/blog-2.jpg */ \"(app-pages-browser)/./app/src/assets/img/blog/blog-2.jpg\");\n/* __next_internal_client_entry_do_not_use__ Banner auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Banner = ()=>{\n    _s();\n    const [loopNum, setLoopNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [delta, setDelta] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(300 - Math.random() * 100);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const toRotate = [\n        \"EduNexus\",\n        \"Smart Education\",\n        \"Web Development\"\n    ];\n    const period = 2000;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let ticker = setInterval(()=>{\n            tick();\n        }, delta);\n        return ()=>{\n            clearInterval(ticker);\n        };\n    }, [\n        text\n    ]);\n    const tick = ()=>{\n        let i = loopNum % toRotate.length;\n        let fullText = toRotate[i];\n        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);\n        setText(updatedText);\n        if (isDeleting) {\n            setDelta((prevDelta)=>prevDelta / 2);\n        }\n        if (!isDeleting && updatedText === fullText) {\n            setIsDeleting(true);\n            setIndex((prevIndex)=>prevIndex - 1);\n            setDelta(period);\n        } else if (isDeleting && updatedText === \"\") {\n            setIsDeleting(false);\n            setLoopNum(loopNum + 1);\n            setIndex(1);\n            setDelta(500);\n        } else {\n            setIndex((prevIndex)=>prevIndex + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"banner flex flex-row justify-center\",\n        id: \"home\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                xs: 12,\n                md: 6,\n                xl: 7,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_on_screen__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: (param)=>/*#__PURE__*/ {\n                        let { isVisible } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: isVisible ? \"animate__animated animate__fadeIn\" : \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"ml-28\",\n                                    children: [\n                                        \"Hi! Welcome to\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"txt-rotate\",\n                                            dataperiod: \"1500\",\n                                            \"data-rotate\": '[ \"Abhiyantrika\", \"Web Development\", \"App Development\" ]',\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"wrap\",\n                                                children: text\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"ml-14\",\n                                    children: \"Discover an online hub where students from Indian universities and colleges showcase their projects. Fostering collaboration, innovation, and academic integrity, we unite academias brightest minds.\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hero min-h-screen bg-base-200\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"hero-content flex-col lg:flex-row-reverse\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: _src_assets_img_blog_blog_2_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                className: \"max-w-sm rounded-lg shadow-2xl\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                        className: \"text-5xl font-bold\",\n                                                        children: \"Box Office News!\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"py-6\",\n                                                        children: \"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"btn btn-primary\",\n                                                        children: \"Get Started\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, undefined);\n                    }\n                }, void 0, false, {\n                    fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\EDU\\\\Edu\\\\app\\\\(pages)\\\\home\\\\home.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Banner, \"L+Dtj+pl5Eiam5MFYNjDReTwWwI=\");\n_c = Banner;\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGFnZXMpL2hvbWUvaG9tZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDSztBQUFBO0FBQzVCO0FBQ3lCO0FBQ2M7QUFFckQsTUFBTU0sU0FBUzs7SUFDcEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDLE1BQU1lLEtBQUtDLE1BQU0sS0FBSztJQUN6RCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1tQixXQUFXO1FBQUM7UUFBWTtRQUFtQjtLQUFrQjtJQUNuRSxNQUFNQyxTQUFTO0lBRWZuQixnREFBU0EsQ0FBQztRQUNSLElBQUlvQixTQUFTQyxZQUFZO1lBQ3ZCQztRQUNGLEdBQUdWO1FBRUgsT0FBTztZQUNMVyxjQUFjSDtRQUNoQjtJQUNGLEdBQUc7UUFBQ1Y7S0FBSztJQUVULE1BQU1ZLE9BQU87UUFDWCxJQUFJRSxJQUFJbEIsVUFBVVksU0FBU08sTUFBTTtRQUNqQyxJQUFJQyxXQUFXUixRQUFRLENBQUNNLEVBQUU7UUFDMUIsSUFBSUcsY0FBY25CLGFBQ2RrQixTQUFTRSxTQUFTLENBQUMsR0FBR2xCLEtBQUtlLE1BQU0sR0FBRyxLQUNwQ0MsU0FBU0UsU0FBUyxDQUFDLEdBQUdsQixLQUFLZSxNQUFNLEdBQUc7UUFFeENkLFFBQVFnQjtRQUVSLElBQUluQixZQUFZO1lBQ2RLLFNBQVMsQ0FBQ2dCLFlBQWNBLFlBQVk7UUFDdEM7UUFFQSxJQUFJLENBQUNyQixjQUFjbUIsZ0JBQWdCRCxVQUFVO1lBQzNDakIsY0FBYztZQUNkUSxTQUFTLENBQUNhLFlBQWNBLFlBQVk7WUFDcENqQixTQUFTTTtRQUNYLE9BQU8sSUFBSVgsY0FBY21CLGdCQUFnQixJQUFJO1lBQzNDbEIsY0FBYztZQUNkRixXQUFXRCxVQUFVO1lBQ3JCVyxTQUFTO1lBQ1RKLFNBQVM7UUFDWCxPQUFPO1lBQ0xJLFNBQVMsQ0FBQ2EsWUFBY0EsWUFBWTtRQUN0QztJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7UUFBc0NDLElBQUc7a0JBQzFELDRFQUFDaEMsaUVBQVNBO3NCQUNSLDRFQUFDQywyREFBR0E7Z0JBQUNnQyxJQUFJO2dCQUFJQyxJQUFJO2dCQUFHQyxJQUFJOzBCQUN0Qiw0RUFBQ2pDLHVEQUFlQTs4QkFDYjs0QkFBQyxFQUFFa0MsU0FBUyxFQUFFOytCQUNiLDhEQUFDQzs0QkFDQ04sV0FBV0ssWUFBWSxzQ0FBc0M7OzhDQUU3RCw4REFBQ0U7b0NBQUdQLFdBQVU7O3dDQUNWO3dDQUFpQjtzREFDbkIsOERBQUNROzRDQUNDUixXQUFVOzRDQUNWUyxZQUFXOzRDQUNYQyxlQUFZO3NEQUVaLDRFQUFDRjtnREFBS1IsV0FBVTswREFBUXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHNUIsOERBQUNpQztvQ0FBRVgsV0FBVTs4Q0FBUTs7Ozs7OzhDQU1yQiw4REFBQ007b0NBQUlOLFdBQVU7OENBQ2IsNEVBQUNNO3dDQUFJTixXQUFVOzswREFDYiw4REFBQ1k7Z0RBQ0NDLEtBQUt6Qyx1RUFBUUE7Z0RBQ2I0QixXQUFVOzs7Ozs7MERBRVosOERBQUNNOztrRUFDQyw4REFBQ0M7d0RBQUdQLFdBQVU7a0VBQXFCOzs7Ozs7a0VBQ25DLDhEQUFDVzt3REFBRVgsV0FBVTtrRUFBTzs7Ozs7O2tFQUtwQiw4REFBQ2M7d0RBQU9kLFdBQVU7a0VBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFJdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uQixFQUFFO0dBaEdXM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhwYWdlcykvaG9tZS9ob21lLmpzeD9hMWJhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJhbmltYXRlLmNzc1wiO1xyXG5pbXBvcnQgVHJhY2tWaXNpYmlsaXR5IGZyb20gXCJyZWFjdC1vbi1zY3JlZW5cIjtcclxuaW1wb3J0IGZlYXR1cmVzIGZyb20gXCIuLi8uLi9zcmMvYXNzZXRzL2ltZy9ibG9nL2Jsb2ctMi5qcGdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCYW5uZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvb3BOdW0sIHNldExvb3BOdW1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZWx0YSwgc2V0RGVsdGFdID0gdXNlU3RhdGUoMzAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgdG9Sb3RhdGUgPSBbXCJFZHVOZXh1c1wiLCBcIlNtYXJ0IEVkdWNhdGlvblwiLCBcIldlYiBEZXZlbG9wbWVudFwiXTtcclxuICBjb25zdCBwZXJpb2QgPSAyMDAwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRpY2tlciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdGljaygpO1xyXG4gICAgfSwgZGVsdGEpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGlja2VyKTtcclxuICAgIH07XHJcbiAgfSwgW3RleHRdKTtcclxuXHJcbiAgY29uc3QgdGljayA9ICgpID0+IHtcclxuICAgIGxldCBpID0gbG9vcE51bSAlIHRvUm90YXRlLmxlbmd0aDtcclxuICAgIGxldCBmdWxsVGV4dCA9IHRvUm90YXRlW2ldO1xyXG4gICAgbGV0IHVwZGF0ZWRUZXh0ID0gaXNEZWxldGluZ1xyXG4gICAgICA/IGZ1bGxUZXh0LnN1YnN0cmluZygwLCB0ZXh0Lmxlbmd0aCAtIDEpXHJcbiAgICAgIDogZnVsbFRleHQuc3Vic3RyaW5nKDAsIHRleHQubGVuZ3RoICsgMSk7XHJcblxyXG4gICAgc2V0VGV4dCh1cGRhdGVkVGV4dCk7XHJcblxyXG4gICAgaWYgKGlzRGVsZXRpbmcpIHtcclxuICAgICAgc2V0RGVsdGEoKHByZXZEZWx0YSkgPT4gcHJldkRlbHRhIC8gMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc0RlbGV0aW5nICYmIHVwZGF0ZWRUZXh0ID09PSBmdWxsVGV4dCkge1xyXG4gICAgICBzZXRJc0RlbGV0aW5nKHRydWUpO1xyXG4gICAgICBzZXRJbmRleCgocHJldkluZGV4KSA9PiBwcmV2SW5kZXggLSAxKTtcclxuICAgICAgc2V0RGVsdGEocGVyaW9kKTtcclxuICAgIH0gZWxzZSBpZiAoaXNEZWxldGluZyAmJiB1cGRhdGVkVGV4dCA9PT0gXCJcIikge1xyXG4gICAgICBzZXRJc0RlbGV0aW5nKGZhbHNlKTtcclxuICAgICAgc2V0TG9vcE51bShsb29wTnVtICsgMSk7XHJcbiAgICAgIHNldEluZGV4KDEpO1xyXG4gICAgICBzZXREZWx0YSg1MDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SW5kZXgoKHByZXZJbmRleCkgPT4gcHJldkluZGV4ICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJhbm5lciBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCIgaWQ9XCJob21lXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs2fSB4bD17N30+XHJcbiAgICAgICAgICA8VHJhY2tWaXNpYmlsaXR5PlxyXG4gICAgICAgICAgICB7KHsgaXNWaXNpYmxlIH0pID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzVmlzaWJsZSA/IFwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtbC0yOFwiPlxyXG4gICAgICAgICAgICAgICAgICB7YEhpISBXZWxjb21lIHRvYH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0LXJvdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXBlcmlvZD1cIjE1MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcm90YXRlPSdbIFwiQWJoaXlhbnRyaWthXCIsIFwiV2ViIERldmVsb3BtZW50XCIsIFwiQXBwIERldmVsb3BtZW50XCIgXSdcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndyYXBcIj57dGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0xNFwiPlxyXG4gICAgICAgICAgICAgICAgICBEaXNjb3ZlciBhbiBvbmxpbmUgaHViIHdoZXJlIHN0dWRlbnRzIGZyb20gSW5kaWFuIHVuaXZlcnNpdGllc1xyXG4gICAgICAgICAgICAgICAgICBhbmQgY29sbGVnZXMgc2hvd2Nhc2UgdGhlaXIgcHJvamVjdHMuIEZvc3RlcmluZyBjb2xsYWJvcmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICBpbm5vdmF0aW9uLCBhbmQgYWNhZGVtaWMgaW50ZWdyaXR5LCB3ZSB1bml0ZSBhY2FkZW1pYXNcclxuICAgICAgICAgICAgICAgICAgYnJpZ2h0ZXN0IG1pbmRzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIG1pbi1oLXNjcmVlbiBiZy1iYXNlLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudCBmbGV4LWNvbCBsZzpmbGV4LXJvdy1yZXZlcnNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtmZWF0dXJlc31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LXNtIHJvdW5kZWQtbGcgc2hhZG93LTJ4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZFwiPkJveCBPZmZpY2UgTmV3cyE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlbnQgY3VwaWRpdGF0ZSB2b2x1cHRhdGVtIGV0IGluLiBRdWFlcmF0IGZ1Z2lhdCB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3N1bWVuZGEgZXhjZXB0dXJpIGV4ZXJjaXRhdGlvbmVtIHF1YXNpLiBJbiBkZWxlbml0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXF1ZSBhdXQgcmVwdWRpYW5kYWUgZXQgYSBpZCBuaXNpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5HZXQgU3RhcnRlZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9UcmFja1Zpc2liaWxpdHk+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsIkNvbCIsIlRyYWNrVmlzaWJpbGl0eSIsImZlYXR1cmVzIiwiQmFubmVyIiwibG9vcE51bSIsInNldExvb3BOdW0iLCJpc0RlbGV0aW5nIiwic2V0SXNEZWxldGluZyIsInRleHQiLCJzZXRUZXh0IiwiZGVsdGEiLCJzZXREZWx0YSIsIk1hdGgiLCJyYW5kb20iLCJpbmRleCIsInNldEluZGV4IiwidG9Sb3RhdGUiLCJwZXJpb2QiLCJ0aWNrZXIiLCJzZXRJbnRlcnZhbCIsInRpY2siLCJjbGVhckludGVydmFsIiwiaSIsImxlbmd0aCIsImZ1bGxUZXh0IiwidXBkYXRlZFRleHQiLCJzdWJzdHJpbmciLCJwcmV2RGVsdGEiLCJwcmV2SW5kZXgiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJ4cyIsIm1kIiwieGwiLCJpc1Zpc2libGUiLCJkaXYiLCJoMSIsInNwYW4iLCJkYXRhcGVyaW9kIiwiZGF0YS1yb3RhdGUiLCJwIiwiaW1nIiwic3JjIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(pages)/home/home.jsx\n"));

/***/ })

});