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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State để lưu danh sách người dùng\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State để hiển thị trạng thái loading\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // State để lưu lỗi nếu có\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Gọi API để lấy danh sách người dùng\n        const fetchUsers = async ()=>{\n            try {\n                const response = await fetch(\"\".concat(config.backendApiUrl, \"/users\"));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch users\");\n                }\n                const data = await response.json(); // Chuyển đổi response thành JSON\n                setUsers(data); // Lưu danh sách người dùng vào state\n            } catch (err) {\n                setError(err.message); // Lưu lỗi nếu có\n            } finally{\n                setLoading(false); // Tắt trạng thái loading sau khi hoàn thành\n            }\n        };\n        fetchUsers(); // Gọi hàm fetchUsers\n    }, []); // Chỉ chạy một lần khi component được mount\n    // Hiển thị loading hoặc lỗi nếu có\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/usr/src/app/src/app/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/src/app/page.tsx\",\n        lineNumber: 32,\n        columnNumber: 21\n    }, this);\n    // Render danh sách người dùng\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"HELLO\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"User List:\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            user.username,\n                            \" - \",\n                            user.email\n                        ]\n                    }, index, true, {\n                        fileName: \"/usr/src/app/src/app/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/app/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"vvG5G9m+JVa2SSWAm277lQVAKio=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTRDO0FBRTdCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUMsRUFBRSxHQUFHLG9DQUFvQztJQUM1RSxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUMsT0FBTyx1Q0FBdUM7SUFDckYsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDLE9BQU8sMEJBQTBCO0lBRXBFRCxnREFBU0EsQ0FBQztRQUNSLHNDQUFzQztRQUN0QyxNQUFNUyxhQUFhO1lBQ2pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQXdCLE9BQXJCQyxPQUFPQyxhQUFhLEVBQUM7Z0JBQ3JELElBQUksQ0FBQ0gsU0FBU0ksRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU1DLE9BQU8sTUFBTU4sU0FBU08sSUFBSSxJQUFJLGlDQUFpQztnQkFDckViLFNBQVNZLE9BQU8scUNBQXFDO1lBQ3ZELEVBQUUsT0FBT0UsS0FBSztnQkFDWlYsU0FBU1UsSUFBSUMsT0FBTyxHQUFHLGlCQUFpQjtZQUMxQyxTQUFVO2dCQUNSYixXQUFXLFFBQVEsNENBQTRDO1lBQ2pFO1FBQ0Y7UUFFQUcsY0FBYyxxQkFBcUI7SUFDckMsR0FBRyxFQUFFLEdBQUcsNENBQTRDO0lBRXBELG1DQUFtQztJQUNuQyxJQUFJSixTQUFTLHFCQUFPLDhEQUFDZTtrQkFBRTs7Ozs7O0lBQ3ZCLElBQUliLE9BQU8scUJBQU8sOERBQUNhOztZQUFFO1lBQVFiOzs7Ozs7O0lBRTdCLDhCQUE4QjtJQUM5QixxQkFDRTs7MEJBQ0UsOERBQUNjOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNFcEIsTUFBTXFCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNDOzs0QkFDRUYsS0FBS0csUUFBUTs0QkFBQzs0QkFBSUgsS0FBS0ksS0FBSzs7dUJBRHRCSDs7Ozs7Ozs7Ozs7O0FBT25CO0dBM0N3QnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gU3RhdGUgxJHhu4MgbMawdSBkYW5oIHPDoWNoIG5nxrDhu51pIGTDuW5nXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBTdGF0ZSDEkeG7gyBoaeG7g24gdGjhu4sgdHLhuqFuZyB0aMOhaSBsb2FkaW5nXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7IC8vIFN0YXRlIMSR4buDIGzGsHUgbOG7l2kgbuG6v3UgY8OzXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBH4buNaSBBUEkgxJHhu4MgbOG6pXkgZGFuaCBzw6FjaCBuZ8aw4budaSBkw7luZ1xuICAgIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5iYWNrZW5kQXBpVXJsfS91c2Vyc2ApO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVzZXJzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIENodXnhu4NuIMSR4buVaSByZXNwb25zZSB0aMOgbmggSlNPTlxuICAgICAgICBzZXRVc2VycyhkYXRhKTsgLy8gTMawdSBkYW5oIHPDoWNoIG5nxrDhu51pIGTDuW5nIHbDoG8gc3RhdGVcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7IC8vIEzGsHUgbOG7l2kgbuG6v3UgY8OzXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gVOG6r3QgdHLhuqFuZyB0aMOhaSBsb2FkaW5nIHNhdSBraGkgaG/DoG4gdGjDoG5oXG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoVXNlcnMoKTsgLy8gR+G7jWkgaMOgbSBmZXRjaFVzZXJzXG4gIH0sIFtdKTsgLy8gQ2jhu4kgY2jhuqF5IG3hu5l0IGzhuqduIGtoaSBjb21wb25lbnQgxJHGsOG7o2MgbW91bnRcblxuICAvLyBIaeG7g24gdGjhu4sgbG9hZGluZyBob+G6t2MgbOG7l2kgbuG6v3UgY8OzXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3J9PC9wPjtcblxuICAvLyBSZW5kZXIgZGFuaCBzw6FjaCBuZ8aw4budaSBkw7luZ1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+SEVMTE88L2gxPlxuICAgICAgPGgyPlVzZXIgTGlzdDo8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICB7dXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHt1c2VyLnVzZXJuYW1lfSAtIHt1c2VyLmVtYWlsfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ1c2VycyIsInNldFVzZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hVc2VycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb25maWciLCJiYWNrZW5kQXBpVXJsIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyIiwibWVzc2FnZSIsInAiLCJoMSIsImgyIiwidWwiLCJtYXAiLCJ1c2VyIiwiaW5kZXgiLCJsaSIsInVzZXJuYW1lIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});