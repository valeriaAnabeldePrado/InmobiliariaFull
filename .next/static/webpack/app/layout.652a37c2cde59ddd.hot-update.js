"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/components/contextFiltersData.jsx":
/*!***********************************************!*\
  !*** ./app/components/contextFiltersData.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FilterProvider: function() { return /* binding */ FilterProvider; },\n/* harmony export */   FiltersContextData: function() { return /* binding */ FiltersContextData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ FiltersContextData,FilterProvider auto */ \nvar _s = $RefreshSig$();\n\nconst FiltersContextData = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction FilterProvider(param) {\n    let { children } = param;\n    _s();\n    const [inmuebles, setInmuebles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [disableBut, setDisableBut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    //const [datosFiltradosOk, setDatosFiltradosOk] = useState();\n    const fetchData = async ()=>{\n        let offset = (page - 1) * limit;\n        let url = \"https://www.tokkobroker.com/api/v1/property/?lang=es_ar&offset=\".concat(offset, \"&limit=\").concat(limit, \"&key=6364f88ef8fab03a542837a002e64525689ad2bd&format=json\");\n        const response = await fetch(url, {\n            cache: \"force-cache\"\n        });\n        const data = await response.json();\n        const newArray = data.objects.map((inmueble)=>{\n            return inmueble;\n        });\n        setInmuebles((prevInmuebles)=>[\n                ...prevInmuebles,\n                ...newArray\n            ]);\n    };\n    const loadMore = ()=>{\n        setPage((prevPage)=>prevPage + 1);\n        console.log(page);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, [\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FiltersContextData.Provider, {\n        value: {\n            datosFiltradosOk: inmuebles,\n            setInmuebles,\n            setPage,\n            fetchData,\n            loadMore,\n            disableBut,\n            setDisableBut,\n            setLimit,\n            limit\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Anabel\\\\Desktop\\\\desarrollos webs\\\\portugal\\\\app\\\\components\\\\contextFiltersData.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(FilterProvider, \"kWu0oTgX+cqSIdmphiFiJWidxS8=\");\n_c = FilterProvider;\nvar _c;\n$RefreshReg$(_c, \"FilterProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NvbnRleHRGaWx0ZXJzRGF0YS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMyRDtBQUVwRCxNQUFNRyxtQ0FBcUJILG9EQUFhQSxHQUFHO0FBRTNDLFNBQVNJLGVBQWUsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUM3QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNqQyw2REFBNkQ7SUFDN0QsTUFBTWEsWUFBWTtRQUNoQixJQUFJQyxTQUFTLENBQUNILE9BQU8sS0FBS0Y7UUFDMUIsSUFBSU0sTUFBTSxrRUFBa0ZOLE9BQWhCSyxRQUFPLFdBQWUsT0FBTkwsT0FBTTtRQUVsRyxNQUFNTyxXQUFXLE1BQU1DLE1BQU1GLEtBQUs7WUFBRUcsT0FBTztRQUFjO1FBQ3pELE1BQU1DLE9BQU8sTUFBTUgsU0FBU0ksSUFBSTtRQUVoQyxNQUFNQyxXQUFXRixLQUFLRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQztZQUNqQyxPQUFPQTtRQUNUO1FBRUFsQixhQUFhLENBQUNtQixnQkFBa0I7bUJBQUlBO21CQUFrQko7YUFBUztJQUNqRTtJQUVBLE1BQU1LLFdBQVc7UUFDZmQsUUFBUSxDQUFDZSxXQUFhQSxXQUFXO1FBQ2pDQyxRQUFRQyxHQUFHLENBQUNsQjtJQUNkO0lBRUFWLGdEQUFTQSxDQUFDO1FBQ1JZO0lBQ0YsR0FBRztRQUFDRjtLQUFLO0lBRVQscUJBQ0UsOERBQUNULG1CQUFtQjRCLFFBQVE7UUFDMUJDLE9BQU87WUFDTEMsa0JBQWtCM0I7WUFDbEJDO1lBQ0FNO1lBQ0FDO1lBQ0FhO1lBQ0FuQjtZQUNBQztZQUNBRTtZQUNBRDtRQUNGO2tCQUVDTDs7Ozs7O0FBR1A7R0EvQ2dCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9jb250ZXh0RmlsdGVyc0RhdGEuanN4P2M4NWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJzQ29udGV4dERhdGEgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmlsdGVyUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2lubXVlYmxlcywgc2V0SW5tdWVibGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGlzYWJsZUJ1dCwgc2V0RGlzYWJsZUJ1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZSgxMCk7XHJcblxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIC8vY29uc3QgW2RhdG9zRmlsdHJhZG9zT2ssIHNldERhdG9zRmlsdHJhZG9zT2tdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xyXG4gICAgbGV0IHVybCA9IGBodHRwczovL3d3dy50b2trb2Jyb2tlci5jb20vYXBpL3YxL3Byb3BlcnR5Lz9sYW5nPWVzX2FyJm9mZnNldD0ke29mZnNldH0mbGltaXQ9JHtsaW1pdH0ma2V5PTYzNjRmODhlZjhmYWIwM2E1NDI4MzdhMDAyZTY0NTI1Njg5YWQyYmQmZm9ybWF0PWpzb25gO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IGNhY2hlOiBcImZvcmNlLWNhY2hlXCIgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IG5ld0FycmF5ID0gZGF0YS5vYmplY3RzLm1hcCgoaW5tdWVibGUpID0+IHtcclxuICAgICAgcmV0dXJuIGlubXVlYmxlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0SW5tdWVibGVzKChwcmV2SW5tdWVibGVzKSA9PiBbLi4ucHJldklubXVlYmxlcywgLi4ubmV3QXJyYXldKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2FkTW9yZSA9ICgpID0+IHtcclxuICAgIHNldFBhZ2UoKHByZXZQYWdlKSA9PiBwcmV2UGFnZSArIDEpO1xyXG4gICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtwYWdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmlsdGVyc0NvbnRleHREYXRhLlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgZGF0b3NGaWx0cmFkb3NPazogaW5tdWVibGVzLFxyXG4gICAgICAgIHNldElubXVlYmxlcyxcclxuICAgICAgICBzZXRQYWdlLFxyXG4gICAgICAgIGZldGNoRGF0YSxcclxuICAgICAgICBsb2FkTW9yZSxcclxuICAgICAgICBkaXNhYmxlQnV0LFxyXG4gICAgICAgIHNldERpc2FibGVCdXQsXHJcbiAgICAgICAgc2V0TGltaXQsXHJcbiAgICAgICAgbGltaXQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRmlsdGVyc0NvbnRleHREYXRhLlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZpbHRlcnNDb250ZXh0RGF0YSIsIkZpbHRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpbm11ZWJsZXMiLCJzZXRJbm11ZWJsZXMiLCJkaXNhYmxlQnV0Iiwic2V0RGlzYWJsZUJ1dCIsImxpbWl0Iiwic2V0TGltaXQiLCJwYWdlIiwic2V0UGFnZSIsImZldGNoRGF0YSIsIm9mZnNldCIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJjYWNoZSIsImRhdGEiLCJqc29uIiwibmV3QXJyYXkiLCJvYmplY3RzIiwibWFwIiwiaW5tdWVibGUiLCJwcmV2SW5tdWVibGVzIiwibG9hZE1vcmUiLCJwcmV2UGFnZSIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwiZGF0b3NGaWx0cmFkb3NPayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/contextFiltersData.jsx\n"));

/***/ })

});