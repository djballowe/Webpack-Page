/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeContact": () => (/* binding */ makeContact)
/* harmony export */ });
function makeContact() {
    const content = document.querySelector('#content');

    const elementFactory = (type, attributes, text) => {
        const create = document.createElement(type);
        create.textContent = text;
        for (let key in attributes) {
            create.setAttribute(key, attributes[key]);
        }
        return create;
    }

    content.appendChild(elementFactory('div', {id: 'contact'}));
    
    const container = document.querySelector('#contact');
    container.appendChild(elementFactory('div', {class: 'content-container'}));

    const contentContainer = document.querySelector('.content-container');
    contentContainer.appendChild(elementFactory('div', {class: 'info'}));
    
    const info = document.querySelector('.info');

    info.appendChild(elementFactory('h1',{class: 'contact'}, 'Contact'));
    info.appendChild(elementFactory('p',{class: 'contact'}, '54321 Countdown Road'));
    info.appendChild(elementFactory('p',{class: 'contact'}, 'Los Angeles CA 54321'));
    info.appendChild(elementFactory('p',{class: 'contact'}, 'Write us a question!'));
    info.appendChild(elementFactory('p',{class: 'contact'}, 'theamericanplace@america.com'));

    container.appendChild(elementFactory('div', {class: 'hours'}));

    const hours = document.querySelector('.hours');

    hours.appendChild(elementFactory('h1', {class: 'hours'}, 'Hours'));
    hours.appendChild(elementFactory('p', {class: 'hours'}, 'Monday 7-10AM, 3-9PM'));
    hours.appendChild(elementFactory('p', {class: 'hours'}, 'Tuesday 7-10AM, 3-9PM'));
    hours.appendChild(elementFactory('p', {class: 'hours'}, 'Wednesday 7-10AM, 3-9PM'));
    hours.appendChild(elementFactory('p', {class: 'hours'}, 'Thursday 7-10AM, 3-9PM'));
    hours.appendChild(elementFactory('p', {class: 'hours'}, 'Friday 7AM, 10PM'));
    hours.appendChild(elementFactory('p', {class: 'hours'}, 'Saturday 7AM, 10PM'));
    hours.appendChild(elementFactory('p', {class: 'hours'}, 'Sunday 7AM, 9PM'));

    container.appendChild(elementFactory('div', {class: 'reserve'}));

    const reserve = document.querySelector('.reserve');

    reserve.appendChild(elementFactory('h1', {class: 'title'}, 'Reserve a table'));
    reserve.appendChild(elementFactory('form', {class: 'form'}));

    const form = document.querySelector('.form');

    form.appendChild(elementFactory('div', {class: 'guests'}));

    const guests = document.querySelector('.guests');

    guests.appendChild(elementFactory('label', {id: 'label'}, 'Guests'));
    guests.appendChild(elementFactory('input'));

    form.appendChild(elementFactory('div', {class: 'time'}));

    const time = document.querySelector('.time');

    time.appendChild(elementFactory('label', {id: 'label'}, 'Time'));
    time.appendChild(elementFactory('input'));

    form.appendChild(elementFactory('div', {class: 'email'}));

    const email = document.querySelector('.email');

    email.appendChild(elementFactory('label', {id: 'label'}, 'Email'));
    email.appendChild(elementFactory('input'));
}



/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeHome": () => (/* binding */ makeHome)
/* harmony export */ });
const makeHome = () =>  {
    const content = document.querySelector('#content');

    const elementFactory = (type, attributes, text) => {
        const create = document.createElement(type);
        create.textContent = text;
        for (let key in attributes) {
            create.setAttribute(key, attributes[key]);
        }
        return create;
    }

    const container = elementFactory('div', {id: 'homepage'});
    content.appendChild(container);
    
    const homepage = document.querySelector('#homepage');
    homepage.appendChild(elementFactory('div', {id: 'background'}));
    
    const text = document.querySelector('#background');
    text.appendChild(elementFactory('h1',{class: 'text'}, 'EVERYONE'));
    text.appendChild(elementFactory('h1',{class: 'text'}, 'WANTS'));
    text.appendChild(elementFactory('h1',{class: 'text'}, 'IN'));
    text.appendChild(elementFactory('button', {class: 'button'}, 'Get Started'));
}






/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMenu": () => (/* binding */ makeMenu)
/* harmony export */ });
/* harmony import */ var _menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.png */ "./src/menu.png");


function makeMenu() {
    const content = document.querySelector('#content');

    const elementFactory = (type, attributes, text) => {
        const create = document.createElement(type);
        create.textContent = text;
        for (let key in attributes) {
            create.setAttribute(key, attributes[key]);
        }
        return create;
    }

    
    content.appendChild(elementFactory('div', {id: 'menu'}));

    const menib = document.querySelector('#menu');

    menib.appendChild(elementFactory('div', {class: 'img'}));

    const container = document.querySelector('.img');
    const myMenu = new Image();
    myMenu.src = _menu_png__WEBPACK_IMPORTED_MODULE_0__;

    container.appendChild(myMenu);
}



/***/ }),

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e191c3d0732b7edd8c6.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ "./src/load.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





(0,_contact__WEBPACK_IMPORTED_MODULE_2__.makeContact)();







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsY0FBYztBQUM3RDtBQUNBO0FBQ0EsaURBQWlELDJCQUEyQjs7QUFFNUU7QUFDQSx3REFBd0QsY0FBYztBQUN0RTtBQUNBOztBQUVBLDBDQUEwQyxpQkFBaUI7QUFDM0QseUNBQXlDLGlCQUFpQjtBQUMxRCx5Q0FBeUMsaUJBQWlCO0FBQzFELHlDQUF5QyxpQkFBaUI7QUFDMUQseUNBQXlDLGlCQUFpQjs7QUFFMUQsaURBQWlELGVBQWU7O0FBRWhFOztBQUVBLDRDQUE0QyxlQUFlO0FBQzNELDJDQUEyQyxlQUFlO0FBQzFELDJDQUEyQyxlQUFlO0FBQzFELDJDQUEyQyxlQUFlO0FBQzFELDJDQUEyQyxlQUFlO0FBQzFELDJDQUEyQyxlQUFlO0FBQzFELDJDQUEyQyxlQUFlO0FBQzFELDJDQUEyQyxlQUFlOztBQUUxRCxpREFBaUQsaUJBQWlCOztBQUVsRTs7QUFFQSw4Q0FBOEMsZUFBZTtBQUM3RCxnREFBZ0QsY0FBYzs7QUFFOUQ7O0FBRUEsNENBQTRDLGdCQUFnQjs7QUFFNUQ7O0FBRUEsZ0RBQWdELFlBQVk7QUFDNUQ7O0FBRUEsNENBQTRDLGNBQWM7O0FBRTFEOztBQUVBLDhDQUE4QyxZQUFZO0FBQzFEOztBQUVBLDRDQUE0QyxlQUFlOztBQUUzRDs7QUFFQSwrQ0FBK0MsWUFBWTtBQUMzRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkMsZUFBZTtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsaUJBQWlCO0FBQ2pFO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RCwrQ0FBK0MsZ0JBQWdCO0FBQy9EOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJVOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsV0FBVzs7QUFFMUQ7O0FBRUEsNkNBQTZDLGFBQWE7O0FBRTFEO0FBQ0E7QUFDQSxpQkFBaUIsc0NBQUk7O0FBRXJCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7QUFDQTtBQUNNOzs7QUFHdkMscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJwYWNrLVBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrLVBhZ2UvLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrLVBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9XZWJwYWNrLVBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2VicGFjay1QYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XZWJwYWNrLVBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9XZWJwYWNrLVBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWJwYWNrLVBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZWJwYWNrLVBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vV2VicGFjay1QYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1ha2VDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgZWxlbWVudEZhY3RvcnkgPSAodHlwZSwgYXR0cmlidXRlcywgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBjcmVhdGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgY3JlYXRlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNyZWF0ZTtcbiAgICB9XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6ICdjb250YWN0J30pKTtcbiAgICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnY29udGVudC1jb250YWluZXInfSkpO1xuXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNvbnRhaW5lcicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2luZm8nfSkpO1xuICAgIFxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuXG4gICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaDEnLHtjbGFzczogJ2NvbnRhY3QnfSwgJ0NvbnRhY3QnKSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcse2NsYXNzOiAnY29udGFjdCd9LCAnNTQzMjEgQ291bnRkb3duIFJvYWQnKSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcse2NsYXNzOiAnY29udGFjdCd9LCAnTG9zIEFuZ2VsZXMgQ0EgNTQzMjEnKSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcse2NsYXNzOiAnY29udGFjdCd9LCAnV3JpdGUgdXMgYSBxdWVzdGlvbiEnKSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcse2NsYXNzOiAnY29udGFjdCd9LCAndGhlYW1lcmljYW5wbGFjZUBhbWVyaWNhLmNvbScpKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnaG91cnMnfSkpO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cnMnKTtcblxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdoMScsIHtjbGFzczogJ2hvdXJzJ30sICdIb3VycycpKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsIHtjbGFzczogJ2hvdXJzJ30sICdNb25kYXkgNy0xMEFNLCAzLTlQTScpKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsIHtjbGFzczogJ2hvdXJzJ30sICdUdWVzZGF5IDctMTBBTSwgMy05UE0nKSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCB7Y2xhc3M6ICdob3Vycyd9LCAnV2VkbmVzZGF5IDctMTBBTSwgMy05UE0nKSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCB7Y2xhc3M6ICdob3Vycyd9LCAnVGh1cnNkYXkgNy0xMEFNLCAzLTlQTScpKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsIHtjbGFzczogJ2hvdXJzJ30sICdGcmlkYXkgN0FNLCAxMFBNJykpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywge2NsYXNzOiAnaG91cnMnfSwgJ1NhdHVyZGF5IDdBTSwgMTBQTScpKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsIHtjbGFzczogJ2hvdXJzJ30sICdTdW5kYXkgN0FNLCA5UE0nKSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ3Jlc2VydmUnfSkpO1xuXG4gICAgY29uc3QgcmVzZXJ2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZlJyk7XG5cbiAgICByZXNlcnZlLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdoMScsIHtjbGFzczogJ3RpdGxlJ30sICdSZXNlcnZlIGEgdGFibGUnKSk7XG4gICAgcmVzZXJ2ZS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZm9ybScsIHtjbGFzczogJ2Zvcm0nfSkpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdndWVzdHMnfSkpO1xuXG4gICAgY29uc3QgZ3Vlc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXN0cycpO1xuXG4gICAgZ3Vlc3RzLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdsYWJlbCcsIHtpZDogJ2xhYmVsJ30sICdHdWVzdHMnKSk7XG4gICAgZ3Vlc3RzLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbnB1dCcpKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ3RpbWUnfSkpO1xuXG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJyk7XG5cbiAgICB0aW1lLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdsYWJlbCcsIHtpZDogJ2xhYmVsJ30sICdUaW1lJykpO1xuICAgIHRpbWUuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2lucHV0JykpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnZW1haWwnfSkpO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwnKTtcblxuICAgIGVtYWlsLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdsYWJlbCcsIHtpZDogJ2xhYmVsJ30sICdFbWFpbCcpKTtcbiAgICBlbWFpbC5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW5wdXQnKSk7XG59XG5cbmV4cG9ydCB7IG1ha2VDb250YWN0IH07IiwiY29uc3QgbWFrZUhvbWUgPSAoKSA9PiAge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgZWxlbWVudEZhY3RvcnkgPSAodHlwZSwgYXR0cmlidXRlcywgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBjcmVhdGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgY3JlYXRlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNyZWF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiAnaG9tZXBhZ2UnfSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIFxuICAgIGNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVwYWdlJyk7XG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogJ2JhY2tncm91bmQnfSkpO1xuICAgIFxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2dyb3VuZCcpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2gxJyx7Y2xhc3M6ICd0ZXh0J30sICdFVkVSWU9ORScpKTtcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdoMScse2NsYXNzOiAndGV4dCd9LCAnV0FOVFMnKSk7XG4gICAgdGV4dC5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaDEnLHtjbGFzczogJ3RleHQnfSwgJ0lOJykpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsIHtjbGFzczogJ2J1dHRvbid9LCAnR2V0IFN0YXJ0ZWQnKSk7XG59XG5cbmV4cG9ydCB7IG1ha2VIb21lIH07XG5cblxuIiwiaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LnBuZyc7XG5cbmZ1bmN0aW9uIG1ha2VNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgZWxlbWVudEZhY3RvcnkgPSAodHlwZSwgYXR0cmlidXRlcywgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBjcmVhdGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgY3JlYXRlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNyZWF0ZTtcbiAgICB9XG5cbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6ICdtZW51J30pKTtcblxuICAgIGNvbnN0IG1lbmliID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcblxuICAgIG1lbmliLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdpbWcnfSkpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZycpO1xuICAgIGNvbnN0IG15TWVudSA9IG5ldyBJbWFnZSgpO1xuICAgIG15TWVudS5zcmMgPSBtZW51O1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG15TWVudSk7XG59XG5cbmV4cG9ydCB7IG1ha2VNZW51IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgbWFrZUhvbWUgfSBmcm9tIFwiLi9sb2FkXCJcbmltcG9ydCB7IG1ha2VNZW51IH0gZnJvbSBcIi4vbWVudVwiXG5pbXBvcnQgeyBtYWtlQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIlxuXG5cbm1ha2VDb250YWN0KCk7XG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=