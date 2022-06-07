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
    container.appendChild(elementFactory('div', {class: 'contact-container'}));

    const contentContainer = document.querySelector('.contact-container');
    contentContainer.appendChild(elementFactory('div', {class: 'info'}));
    
    const info = document.querySelector('.info');

    info.appendChild(elementFactory('h1',{class: 'contact'}, 'Contact'));
    info.appendChild(elementFactory('p',{class: 'contact'}, '54321 Countdown Road'));
    info.appendChild(elementFactory('p',{class: 'contact'}, 'Los Angeles CA 54321'));
    info.appendChild(elementFactory('p',{class: 'contact'}, 'Write us a question!'));
    info.appendChild(elementFactory('p',{class: 'contact'}, 'theamericanplace@america.com'));

    contentContainer.appendChild(elementFactory('div', {class: 'hours'}));

    const hours = document.querySelector('.hours');

    hours.appendChild(elementFactory('h1', {class: 'hour'}, 'Hours'));
    hours.appendChild(elementFactory('p', {class: 'monday'}, 'Monday 7-10AM, 3-9PM'));
    hours.appendChild(elementFactory('p', {class: 'tuesday'}, 'Tuesday 7-10AM, 3-9PM'));
    hours.appendChild(elementFactory('p', {class: 'wednesday'}, 'Wednesday 7-10AM, 3-9PM'));
    hours.appendChild(elementFactory('p', {class: 'thursday'}, 'Thursday 7-10AM, 3-9PM'));
    hours.appendChild(elementFactory('p', {class: 'friday'}, 'Friday 7AM, 10PM'));
    hours.appendChild(elementFactory('p', {class: 'saturday'}, 'Saturday 7AM, 10PM'));
    hours.appendChild(elementFactory('p', {class: 'sunday'}, 'Sunday 7AM, 9PM'));

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





document.querySelector('header').addEventListener('click', function(e) {
    const nav = e.target.getAttribute('id');
    if (nav === 'H') {
        (0,_load__WEBPACK_IMPORTED_MODULE_0__.makeHome)();
    } else if (nav === 'M') {
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.makeMenu)();
    } else if (nav === 'C') {
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.makeContact)();
    }
})







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsY0FBYztBQUM3RDtBQUNBO0FBQ0EsaURBQWlELDJCQUEyQjs7QUFFNUU7QUFDQSx3REFBd0QsY0FBYztBQUN0RTtBQUNBOztBQUVBLDBDQUEwQyxpQkFBaUI7QUFDM0QseUNBQXlDLGlCQUFpQjtBQUMxRCx5Q0FBeUMsaUJBQWlCO0FBQzFELHlDQUF5QyxpQkFBaUI7QUFDMUQseUNBQXlDLGlCQUFpQjs7QUFFMUQsd0RBQXdELGVBQWU7O0FBRXZFOztBQUVBLDRDQUE0QyxjQUFjO0FBQzFELDJDQUEyQyxnQkFBZ0I7QUFDM0QsMkNBQTJDLGlCQUFpQjtBQUM1RCwyQ0FBMkMsbUJBQW1CO0FBQzlELDJDQUEyQyxrQkFBa0I7QUFDN0QsMkNBQTJDLGdCQUFnQjtBQUMzRCwyQ0FBMkMsa0JBQWtCO0FBQzdELDJDQUEyQyxnQkFBZ0I7O0FBRTNELGlEQUFpRCxpQkFBaUI7O0FBRWxFOztBQUVBLDhDQUE4QyxlQUFlO0FBQzdELGdEQUFnRCxjQUFjOztBQUU5RDs7QUFFQSw0Q0FBNEMsZ0JBQWdCOztBQUU1RDs7QUFFQSxnREFBZ0QsWUFBWTtBQUM1RDs7QUFFQSw0Q0FBNEMsY0FBYzs7QUFFMUQ7O0FBRUEsOENBQThDLFlBQVk7QUFDMUQ7O0FBRUEsNENBQTRDLGVBQWU7O0FBRTNEOztBQUVBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxlQUFlO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxpQkFBaUI7QUFDakU7QUFDQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hELCtDQUErQyxnQkFBZ0I7QUFDL0Q7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlU7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxXQUFXOztBQUUxRDs7QUFFQSw2Q0FBNkMsYUFBYTs7QUFFMUQ7QUFDQTtBQUNBLGlCQUFpQixzQ0FBSTs7QUFFckI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZpQztBQUNBO0FBQ007OztBQUd2QztBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFRO0FBQ2hCLE1BQU07QUFDTixRQUFRLCtDQUFRO0FBQ2hCLE1BQU07QUFDTixRQUFRLHFEQUFXO0FBQ25CO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYnBhY2stUGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL1dlYnBhY2stUGFnZS8uL3NyYy9sb2FkLmpzIiwid2VicGFjazovL1dlYnBhY2stUGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL1dlYnBhY2stUGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWJwYWNrLVBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYnBhY2stUGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1dlYnBhY2stUGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1dlYnBhY2stUGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dlYnBhY2stUGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9XZWJwYWNrLVBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWFrZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBlbGVtZW50RmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCB0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBjcmVhdGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlYXRlO1xuICAgIH1cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogJ2NvbnRhY3QnfSkpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdjb250YWN0LWNvbnRhaW5lcid9KSk7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtY29udGFpbmVyJyk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnaW5mbyd9KSk7XG4gICAgXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJyk7XG5cbiAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdoMScse2NsYXNzOiAnY29udGFjdCd9LCAnQ29udGFjdCcpKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJyx7Y2xhc3M6ICdjb250YWN0J30sICc1NDMyMSBDb3VudGRvd24gUm9hZCcpKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJyx7Y2xhc3M6ICdjb250YWN0J30sICdMb3MgQW5nZWxlcyBDQSA1NDMyMScpKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJyx7Y2xhc3M6ICdjb250YWN0J30sICdXcml0ZSB1cyBhIHF1ZXN0aW9uIScpKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJyx7Y2xhc3M6ICdjb250YWN0J30sICd0aGVhbWVyaWNhbnBsYWNlQGFtZXJpY2EuY29tJykpO1xuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnaG91cnMnfSkpO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cnMnKTtcblxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdoMScsIHtjbGFzczogJ2hvdXInfSwgJ0hvdXJzJykpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywge2NsYXNzOiAnbW9uZGF5J30sICdNb25kYXkgNy0xMEFNLCAzLTlQTScpKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsIHtjbGFzczogJ3R1ZXNkYXknfSwgJ1R1ZXNkYXkgNy0xMEFNLCAzLTlQTScpKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsIHtjbGFzczogJ3dlZG5lc2RheSd9LCAnV2VkbmVzZGF5IDctMTBBTSwgMy05UE0nKSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCB7Y2xhc3M6ICd0aHVyc2RheSd9LCAnVGh1cnNkYXkgNy0xMEFNLCAzLTlQTScpKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsIHtjbGFzczogJ2ZyaWRheSd9LCAnRnJpZGF5IDdBTSwgMTBQTScpKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsIHtjbGFzczogJ3NhdHVyZGF5J30sICdTYXR1cmRheSA3QU0sIDEwUE0nKSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCB7Y2xhc3M6ICdzdW5kYXknfSwgJ1N1bmRheSA3QU0sIDlQTScpKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAncmVzZXJ2ZSd9KSk7XG5cbiAgICBjb25zdCByZXNlcnZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmUnKTtcblxuICAgIHJlc2VydmUuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2gxJywge2NsYXNzOiAndGl0bGUnfSwgJ1Jlc2VydmUgYSB0YWJsZScpKTtcbiAgICByZXNlcnZlLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdmb3JtJywge2NsYXNzOiAnZm9ybSd9KSk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2d1ZXN0cyd9KSk7XG5cbiAgICBjb25zdCBndWVzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3RzJyk7XG5cbiAgICBndWVzdHMuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2xhYmVsJywge2lkOiAnbGFiZWwnfSwgJ0d1ZXN0cycpKTtcbiAgICBndWVzdHMuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2lucHV0JykpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAndGltZSd9KSk7XG5cbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKTtcblxuICAgIHRpbWUuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2xhYmVsJywge2lkOiAnbGFiZWwnfSwgJ1RpbWUnKSk7XG4gICAgdGltZS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW5wdXQnKSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdlbWFpbCd9KSk7XG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbCcpO1xuXG4gICAgZW1haWwuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2xhYmVsJywge2lkOiAnbGFiZWwnfSwgJ0VtYWlsJykpO1xuICAgIGVtYWlsLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbnB1dCcpKTtcbn1cblxuZXhwb3J0IHsgbWFrZUNvbnRhY3QgfTsiLCJjb25zdCBtYWtlSG9tZSA9ICgpID0+ICB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBlbGVtZW50RmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCB0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBjcmVhdGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6ICdob21lcGFnZSd9KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgXG4gICAgY29uc3QgaG9tZXBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZXBhZ2UnKTtcbiAgICBob21lcGFnZS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiAnYmFja2dyb3VuZCd9KSk7XG4gICAgXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrZ3JvdW5kJyk7XG4gICAgdGV4dC5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaDEnLHtjbGFzczogJ3RleHQnfSwgJ0VWRVJZT05FJykpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2gxJyx7Y2xhc3M6ICd0ZXh0J30sICdXQU5UUycpKTtcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdoMScse2NsYXNzOiAndGV4dCd9LCAnSU4nKSk7XG4gICAgdGV4dC5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnYnV0dG9uJywge2NsYXNzOiAnYnV0dG9uJ30sICdHZXQgU3RhcnRlZCcpKTtcbn1cblxuZXhwb3J0IHsgbWFrZUhvbWUgfTtcblxuXG4iLCJpbXBvcnQgbWVudSBmcm9tICcuL21lbnUucG5nJztcblxuZnVuY3Rpb24gbWFrZU1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBlbGVtZW50RmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCB0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBjcmVhdGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlYXRlO1xuICAgIH1cblxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogJ21lbnUnfSkpO1xuXG4gICAgY29uc3QgbWVuaWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuXG4gICAgbWVuaWIuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2ltZyd9KSk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nJyk7XG4gICAgY29uc3QgbXlNZW51ID0gbmV3IEltYWdlKCk7XG4gICAgbXlNZW51LnNyYyA9IG1lbnU7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobXlNZW51KTtcbn1cblxuZXhwb3J0IHsgbWFrZU1lbnUgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBtYWtlSG9tZSB9IGZyb20gXCIuL2xvYWRcIlxuaW1wb3J0IHsgbWFrZU1lbnUgfSBmcm9tIFwiLi9tZW51XCJcbmltcG9ydCB7IG1ha2VDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiXG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgbmF2ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGlmIChuYXYgPT09ICdIJykge1xuICAgICAgICBtYWtlSG9tZSgpO1xuICAgIH0gZWxzZSBpZiAobmF2ID09PSAnTScpIHtcbiAgICAgICAgbWFrZU1lbnUoKTtcbiAgICB9IGVsc2UgaWYgKG5hdiA9PT0gJ0MnKSB7XG4gICAgICAgIG1ha2VDb250YWN0KCk7XG4gICAgfVxufSlcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==