/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/controller/ClientController.js":
/*!*******************************************!*\
  !*** ./js/controller/ClientController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ClientController\n/* harmony export */ });\n/* harmony import */ var _model_ClientList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ClientList.js */ \"./js/model/ClientList.js\");\n/* harmony import */ var _view_ClientView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/ClientView.js */ \"./js/view/ClientView.js\");\n/* harmony import */ var _helpers_Bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/Bind.js */ \"./js/helpers/Bind.js\");\n\r\n\r\n\r\n\r\nclass ClientController{\r\n    constructor(){\r\n        let $ = document.querySelector.bind(document);\r\n        this._clientList = new _helpers_Bind_js__WEBPACK_IMPORTED_MODULE_2__.default(\r\n            new _model_ClientList_js__WEBPACK_IMPORTED_MODULE_0__.default(),\r\n            new _view_ClientView_js__WEBPACK_IMPORTED_MODULE_1__.default($(\"#client-table\")),\r\n            \"add\"\r\n        );\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack://fetch-api-study/./js/controller/ClientController.js?");

/***/ }),

/***/ "./js/helpers/Bind.js":
/*!****************************!*\
  !*** ./js/helpers/Bind.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Bind\n/* harmony export */ });\n/* harmony import */ var _service_ProxyFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/ProxyFactory.js */ \"./js/service/ProxyFactory.js\");\n\r\n\r\nclass Bind{\r\n    constructor(model, view, ...methods){\r\n        let proxy = _service_ProxyFactory_js__WEBPACK_IMPORTED_MODULE_0__.default.create(model, view, methods);\r\n\r\n        view.update(model);\r\n\r\n        return proxy;\r\n    }\r\n}\n\n//# sourceURL=webpack://fetch-api-study/./js/helpers/Bind.js?");

/***/ }),

/***/ "./js/model/Client.js":
/*!****************************!*\
  !*** ./js/model/Client.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Client\n/* harmony export */ });\nclass Client{\r\n    constructor(name, cpf, actions){\r\n        this._name = name;\r\n        this._cpf = cpf;\r\n        this._actions = actions;\r\n    }\r\n\r\n    get name(){\r\n        return this._name;\r\n    }\r\n\r\n    get cpf(){\r\n        return this._cpf;\r\n    }\r\n\r\n    get actions(){\r\n        return this._actions;\r\n    }\r\n}\n\n//# sourceURL=webpack://fetch-api-study/./js/model/Client.js?");

/***/ }),

/***/ "./js/model/ClientList.js":
/*!********************************!*\
  !*** ./js/model/ClientList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ClientList\n/* harmony export */ });\n/* harmony import */ var _Client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Client.js */ \"./js/model/Client.js\");\n\r\n\r\nclass ClientList{\r\n    constructor(){\r\n        this._clientList = [];\r\n        this._init();\r\n    }\r\n\r\n    _init(){\r\n        this._clientList.push(new _Client_js__WEBPACK_IMPORTED_MODULE_0__.default(\"Jairo\",\"66809433023\",\"\"))\r\n        this._clientList.push(new _Client_js__WEBPACK_IMPORTED_MODULE_0__.default(\"Elena\",\"18875539081\",\"\"))\r\n    }\r\n\r\n    get clients(){\r\n        return [].concat(this._clientList);\r\n    }\r\n\r\n    add(client){\r\n        this._clientList.push(client);\r\n    }\r\n}\n\n//# sourceURL=webpack://fetch-api-study/./js/model/ClientList.js?");

/***/ }),

/***/ "./js/service/ProxyFactory.js":
/*!************************************!*\
  !*** ./js/service/ProxyFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ProxyFactory\n/* harmony export */ });\nclass ProxyFactory{\r\n    static create(model, view, methods){\r\n        return new Proxy(model, {\r\n            get(target, prop){\r\n                if(methods.includes(prop) && ProxyFactory._isFunction(prop)){\r\n                    return () => {\r\n                        Reflect.apply(target, prop, arguments);\r\n                        view.update(model);\r\n                    }\r\n                }\r\n\r\n                return target[prop];\r\n            }\r\n        });\r\n    }\r\n\r\n    static _isFunction(property){\r\n        return typeof(property) == typeof(Function);\r\n    }\r\n}\n\n//# sourceURL=webpack://fetch-api-study/./js/service/ProxyFactory.js?");

/***/ }),

/***/ "./js/view/ClientView.js":
/*!*******************************!*\
  !*** ./js/view/ClientView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ClientView\n/* harmony export */ });\nclass ClientView{\r\n    \r\n    constructor(element){\r\n        this._element = element;\r\n    }\r\n\r\n    update(model){\r\n        this._element.innerHTML = this._template(model);\r\n    }\r\n\r\n    _template(clientList){\r\n        return `\r\n        <table class=\"table\">\r\n        <thead class=\"thead-dark\">\r\n          <tr>\r\n            <th scope=\"col\">CPF</th>\r\n            <th scope=\"col\">Nome</th>\r\n            <th scope=\"col\">Ações</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n            ${clientList.clients.map(client => this._clientTemplate(client)).join('')}\r\n        </tbody>\r\n      </table>\r\n        `;\r\n    }\r\n\r\n    _clientTemplate(client){\r\n        return `<tr>\r\n            <td>${client.cpf}</td>\r\n            <td>${client.name}</td>\r\n            <td>${client.actions}</td>\r\n        </tr>`;\r\n    }\r\n}\n\n//# sourceURL=webpack://fetch-api-study/./js/view/ClientView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/controller/ClientController.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;