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

/***/ "(app-pages-browser)/./app/components/contextFiltersData.jsx":
/*!***********************************************!*\
  !*** ./app/components/contextFiltersData.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FilterProvider: function() { return /* binding */ FilterProvider; },\n/* harmony export */   FiltersContextData: function() { return /* binding */ FiltersContextData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ FiltersContextData,FilterProvider auto */ \nvar _s = $RefreshSig$();\n\nconst FiltersContextData = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction FilterProvider(param) {\n    let { children } = param;\n    _s();\n    const [inmuebles, setInmuebles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [disableBut, setDisableBut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    //const [datosFiltradosOk, setDatosFiltradosOk] = useState();\n    const fetchData = async ()=>{\n        let offset = (page - 1) * limit;\n        let url = \"https://www.tokkobroker.com/api/v1/property/?lang=es_ar&offset=\".concat(offset, \"&limit=\").concat(limit, \"&key=6364f88ef8fab03a542837a002e64525689ad2bd&format=json\");\n        const response = await fetch(url, {\n            cache: \"force-cache\"\n        });\n        const data = await response.json();\n        const newArray = data.objects.map((inmueble)=>{\n            return inmueble;\n        });\n        //setInmuebles((prevInmuebles) => [...prevInmuebles, ...newArray]);\n        setInmuebles(newArray);\n    };\n    const loadMore = ()=>{\n        setPage((prevPage)=>prevPage + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, [\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FiltersContextData.Provider, {\n        value: {\n            datosFiltradosOk: inmuebles,\n            setInmuebles,\n            setPage,\n            fetchData,\n            loadMore,\n            disableBut,\n            setDisableBut,\n            setLimit,\n            limit\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Anabel\\\\Desktop\\\\desarrollos webs\\\\portugal\\\\app\\\\components\\\\contextFiltersData.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(FilterProvider, \"kWu0oTgX+cqSIdmphiFiJWidxS8=\");\n_c = FilterProvider;\nvar _c;\n$RefreshReg$(_c, \"FilterProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NvbnRleHRGaWx0ZXJzRGF0YS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMyRDtBQUVwRCxNQUFNRyxtQ0FBcUJILG9EQUFhQSxHQUFHO0FBRTNDLFNBQVNJLGVBQWUsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUM3QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNqQyw2REFBNkQ7SUFDN0QsTUFBTWEsWUFBWTtRQUNoQixJQUFJQyxTQUFTLENBQUNILE9BQU8sS0FBS0Y7UUFDMUIsSUFBSU0sTUFBTSxrRUFBa0ZOLE9BQWhCSyxRQUFPLFdBQWUsT0FBTkwsT0FBTTtRQUVsRyxNQUFNTyxXQUFXLE1BQU1DLE1BQU1GLEtBQUs7WUFBRUcsT0FBTztRQUFjO1FBQ3pELE1BQU1DLE9BQU8sTUFBTUgsU0FBU0ksSUFBSTtRQUVoQyxNQUFNQyxXQUFXRixLQUFLRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQztZQUNqQyxPQUFPQTtRQUNUO1FBRUEsbUVBQW1FO1FBQ25FbEIsYUFBYWU7SUFDZjtJQUVBLE1BQU1JLFdBQVc7UUFDZmIsUUFBUSxDQUFDYyxXQUFhQSxXQUFXO0lBQ25DO0lBRUF6QixnREFBU0EsQ0FBQztRQUNSWTtJQUNGLEdBQUc7UUFBQ0Y7S0FBSztJQUVULHFCQUNFLDhEQUFDVCxtQkFBbUJ5QixRQUFRO1FBQzFCQyxPQUFPO1lBQ0xDLGtCQUFrQnhCO1lBQ2xCQztZQUNBTTtZQUNBQztZQUNBWTtZQUNBbEI7WUFDQUM7WUFDQUU7WUFDQUQ7UUFDRjtrQkFFQ0w7Ozs7OztBQUdQO0dBL0NnQkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvY29udGV4dEZpbHRlcnNEYXRhLmpzeD9jODVmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVyc0NvbnRleHREYXRhID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZpbHRlclByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtpbm11ZWJsZXMsIHNldElubXVlYmxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Rpc2FibGVCdXQsIHNldERpc2FibGVCdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUoMTApO1xyXG5cclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAvL2NvbnN0IFtkYXRvc0ZpbHRyYWRvc09rLCBzZXREYXRvc0ZpbHRyYWRvc09rXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IG9mZnNldCA9IChwYWdlIC0gMSkgKiBsaW1pdDtcclxuICAgIGxldCB1cmwgPSBgaHR0cHM6Ly93d3cudG9ra29icm9rZXIuY29tL2FwaS92MS9wcm9wZXJ0eS8/bGFuZz1lc19hciZvZmZzZXQ9JHtvZmZzZXR9JmxpbWl0PSR7bGltaXR9JmtleT02MzY0Zjg4ZWY4ZmFiMDNhNTQyODM3YTAwMmU2NDUyNTY4OWFkMmJkJmZvcm1hdD1qc29uYDtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBjYWNoZTogXCJmb3JjZS1jYWNoZVwiIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBuZXdBcnJheSA9IGRhdGEub2JqZWN0cy5tYXAoKGlubXVlYmxlKSA9PiB7XHJcbiAgICAgIHJldHVybiBpbm11ZWJsZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2V0SW5tdWVibGVzKChwcmV2SW5tdWVibGVzKSA9PiBbLi4ucHJldklubXVlYmxlcywgLi4ubmV3QXJyYXldKTtcclxuICAgIHNldElubXVlYmxlcyhuZXdBcnJheSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9hZE1vcmUgPSAoKSA9PiB7XHJcbiAgICBzZXRQYWdlKChwcmV2UGFnZSkgPT4gcHJldlBhZ2UgKyAxKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW3BhZ2VdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGaWx0ZXJzQ29udGV4dERhdGEuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBkYXRvc0ZpbHRyYWRvc09rOiBpbm11ZWJsZXMsXHJcbiAgICAgICAgc2V0SW5tdWVibGVzLFxyXG4gICAgICAgIHNldFBhZ2UsXHJcbiAgICAgICAgZmV0Y2hEYXRhLFxyXG4gICAgICAgIGxvYWRNb3JlLFxyXG4gICAgICAgIGRpc2FibGVCdXQsXHJcbiAgICAgICAgc2V0RGlzYWJsZUJ1dCxcclxuICAgICAgICBzZXRMaW1pdCxcclxuICAgICAgICBsaW1pdCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9GaWx0ZXJzQ29udGV4dERhdGEuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmlsdGVyc0NvbnRleHREYXRhIiwiRmlsdGVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlubXVlYmxlcyIsInNldElubXVlYmxlcyIsImRpc2FibGVCdXQiLCJzZXREaXNhYmxlQnV0IiwibGltaXQiLCJzZXRMaW1pdCIsInBhZ2UiLCJzZXRQYWdlIiwiZmV0Y2hEYXRhIiwib2Zmc2V0IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImNhY2hlIiwiZGF0YSIsImpzb24iLCJuZXdBcnJheSIsIm9iamVjdHMiLCJtYXAiLCJpbm11ZWJsZSIsImxvYWRNb3JlIiwicHJldlBhZ2UiLCJQcm92aWRlciIsInZhbHVlIiwiZGF0b3NGaWx0cmFkb3NPayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/contextFiltersData.jsx\n"));

/***/ })

});