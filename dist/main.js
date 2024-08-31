/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst homePage = () => {\n    const content = document.querySelector('#content');\n    content.removeAttribute('id');\n    content.classList.add('home-tab');\n\n    const intro = document.createElement('div');\n    intro.classList.add('home-intro');\n\n    const introHeadingFirst = document.createElement('h1');\n    introHeadingFirst.classList.add('intro-heading');\n    introHeadingFirst.textContent = 'Food For';\n\n    const introHeadingSecond = document.createElement('h1');\n    introHeadingSecond.classList.add('intro-heading');\n    introHeadingSecond.textContent = 'Your Soul';\n\n    const introPara = document.createElement('p');\n    introPara.classList.add('intro-para');\n    introPara.textContent = `It's about good food and fresh ingredients.`;\n\n    // when you click on this button it takes you to menu page\n    // so add the same the menu tab as the click trigger\n    //so can i import index in here so it can see the menu button?\n\n    const introBtn = document.createElement('button');\n    introBtn.classList.add('introBtn');\n    introBtn.textContent = 'View Our Menu';\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50LWhvbWVwYWdlLy4vc3JjL2hvbWUuanM/N2I0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS10YWInKTtcblxuICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW50cm8uY2xhc3NMaXN0LmFkZCgnaG9tZS1pbnRybycpO1xuXG4gICAgY29uc3QgaW50cm9IZWFkaW5nRmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGludHJvSGVhZGluZ0ZpcnN0LmNsYXNzTGlzdC5hZGQoJ2ludHJvLWhlYWRpbmcnKTtcbiAgICBpbnRyb0hlYWRpbmdGaXJzdC50ZXh0Q29udGVudCA9ICdGb29kIEZvcic7XG5cbiAgICBjb25zdCBpbnRyb0hlYWRpbmdTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGludHJvSGVhZGluZ1NlY29uZC5jbGFzc0xpc3QuYWRkKCdpbnRyby1oZWFkaW5nJyk7XG4gICAgaW50cm9IZWFkaW5nU2Vjb25kLnRleHRDb250ZW50ID0gJ1lvdXIgU291bCc7XG5cbiAgICBjb25zdCBpbnRyb1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW50cm9QYXJhLmNsYXNzTGlzdC5hZGQoJ2ludHJvLXBhcmEnKTtcbiAgICBpbnRyb1BhcmEudGV4dENvbnRlbnQgPSBgSXQncyBhYm91dCBnb29kIGZvb2QgYW5kIGZyZXNoIGluZ3JlZGllbnRzLmA7XG5cbiAgICAvLyB3aGVuIHlvdSBjbGljayBvbiB0aGlzIGJ1dHRvbiBpdCB0YWtlcyB5b3UgdG8gbWVudSBwYWdlXG4gICAgLy8gc28gYWRkIHRoZSBzYW1lIHRoZSBtZW51IHRhYiBhcyB0aGUgY2xpY2sgdHJpZ2dlclxuICAgIC8vc28gY2FuIGkgaW1wb3J0IGluZGV4IGluIGhlcmUgc28gaXQgY2FuIHNlZSB0aGUgbWVudSBidXR0b24/XG5cbiAgICBjb25zdCBpbnRyb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGludHJvQnRuLmNsYXNzTGlzdC5hZGQoJ2ludHJvQnRuJyk7XG4gICAgaW50cm9CdG4udGV4dENvbnRlbnQgPSAnVmlldyBPdXIgTWVudSc7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n// import \"./styles.css\";\n \n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// this will import pageContent\n//it will have the nav buttons and a click event e.g pageContent.home()\n//it will also have remove content, call content and have content.textContent = \"\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUM4QjtBQUM5QixpREFBUTtBQUNSO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1ob21lcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjsgXG5ob21lUGFnZSgpO1xuLy8gdGhpcyB3aWxsIGltcG9ydCBwYWdlQ29udGVudFxuLy9pdCB3aWxsIGhhdmUgdGhlIG5hdiBidXR0b25zIGFuZCBhIGNsaWNrIGV2ZW50IGUuZyBwYWdlQ29udGVudC5ob21lKClcbi8vaXQgd2lsbCBhbHNvIGhhdmUgcmVtb3ZlIGNvbnRlbnQsIGNhbGwgY29udGVudCBhbmQgaGF2ZSBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;