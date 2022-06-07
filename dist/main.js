/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPage": () => (/* binding */ clearPage)
/* harmony export */ });
function clearPage() {
    
    let num = document.getElementById('content').childElementCount;
    console.log(num);
    const content = document.getElementById('content');
    
    for (let i = 0; i < num; i++) {
        let child = content.lastElementChild;
        while (child) {
            content.removeChild(child);
            child = content.lastElementChild;
        }
    }
}



/***/ }),

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
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear */ "./src/clear.js");





document.querySelector('header').addEventListener('click', function(e) {
    const nav = e.target.getAttribute('id');
    if (nav === 'H') {
        (0,_clear__WEBPACK_IMPORTED_MODULE_3__.clearPage)();
        (0,_load__WEBPACK_IMPORTED_MODULE_0__.makeHome)();
    } else if (nav === 'M') {
        (0,_clear__WEBPACK_IMPORTED_MODULE_3__.clearPage)();
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.makeMenu)();
    } else if (nav === 'C') {
        (0,_clear__WEBPACK_IMPORTED_MODULE_3__.clearPage)();
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.makeContact)();
    }
})

;(0,_load__WEBPACK_IMPORTED_MODULE_0__.makeHome)();







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrLVBhZ2UvLi9zcmMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vV2VicGFjay1QYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vV2VicGFjay1QYWdlLy4vc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vV2VicGFjay1QYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vV2VicGFjay1QYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYnBhY2stUGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vV2VicGFjay1QYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vV2VicGFjay1QYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vV2VicGFjay1QYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VicGFjay1QYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL1dlYnBhY2stUGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG4gICAgXG4gICAgbGV0IG51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgY29uc29sZS5sb2cobnVtKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkID0gY29udGVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBjbGVhclBhZ2UgfTsiLCJmdW5jdGlvbiBtYWtlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGVsZW1lbnRGYWN0b3J5ID0gKHR5cGUsIGF0dHJpYnV0ZXMsIHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgY3JlYXRlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGNyZWF0ZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjcmVhdGU7XG4gICAgfVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiAnY29udGFjdCd9KSk7XG4gICAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2NvbnRhY3QtY29udGFpbmVyJ30pKTtcblxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1jb250YWluZXInKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdpbmZvJ30pKTtcbiAgICBcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKTtcblxuICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2gxJyx7Y2xhc3M6ICdjb250YWN0J30sICdDb250YWN0JykpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLHtjbGFzczogJ2NvbnRhY3QnfSwgJzU0MzIxIENvdW50ZG93biBSb2FkJykpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLHtjbGFzczogJ2NvbnRhY3QnfSwgJ0xvcyBBbmdlbGVzIENBIDU0MzIxJykpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLHtjbGFzczogJ2NvbnRhY3QnfSwgJ1dyaXRlIHVzIGEgcXVlc3Rpb24hJykpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLHtjbGFzczogJ2NvbnRhY3QnfSwgJ3RoZWFtZXJpY2FucGxhY2VAYW1lcmljYS5jb20nKSk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdob3Vycyd9KSk7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VycycpO1xuXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2gxJywge2NsYXNzOiAnaG91cid9LCAnSG91cnMnKSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ3AnLCB7Y2xhc3M6ICdtb25kYXknfSwgJ01vbmRheSA3LTEwQU0sIDMtOVBNJykpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywge2NsYXNzOiAndHVlc2RheSd9LCAnVHVlc2RheSA3LTEwQU0sIDMtOVBNJykpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywge2NsYXNzOiAnd2VkbmVzZGF5J30sICdXZWRuZXNkYXkgNy0xMEFNLCAzLTlQTScpKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsIHtjbGFzczogJ3RodXJzZGF5J30sICdUaHVyc2RheSA3LTEwQU0sIDMtOVBNJykpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywge2NsYXNzOiAnZnJpZGF5J30sICdGcmlkYXkgN0FNLCAxMFBNJykpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdwJywge2NsYXNzOiAnc2F0dXJkYXknfSwgJ1NhdHVyZGF5IDdBTSwgMTBQTScpKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgncCcsIHtjbGFzczogJ3N1bmRheSd9LCAnU3VuZGF5IDdBTSwgOVBNJykpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICdyZXNlcnZlJ30pKTtcblxuICAgIGNvbnN0IHJlc2VydmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2ZScpO1xuXG4gICAgcmVzZXJ2ZS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaDEnLCB7Y2xhc3M6ICd0aXRsZSd9LCAnUmVzZXJ2ZSBhIHRhYmxlJykpO1xuICAgIHJlc2VydmUuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2Zvcm0nLCB7Y2xhc3M6ICdmb3JtJ30pKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnZ3Vlc3RzJ30pKTtcblxuICAgIGNvbnN0IGd1ZXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzdHMnKTtcblxuICAgIGd1ZXN0cy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnbGFiZWwnLCB7aWQ6ICdsYWJlbCd9LCAnR3Vlc3RzJykpO1xuICAgIGd1ZXN0cy5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaW5wdXQnKSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7Y2xhc3M6ICd0aW1lJ30pKTtcblxuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xuXG4gICAgdGltZS5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnbGFiZWwnLCB7aWQ6ICdsYWJlbCd9LCAnVGltZScpKTtcbiAgICB0aW1lLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdpbnB1dCcpKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtjbGFzczogJ2VtYWlsJ30pKTtcblxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsJyk7XG5cbiAgICBlbWFpbC5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnbGFiZWwnLCB7aWQ6ICdsYWJlbCd9LCAnRW1haWwnKSk7XG4gICAgZW1haWwuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2lucHV0JykpO1xufVxuXG5leHBvcnQgeyBtYWtlQ29udGFjdCB9OyIsImNvbnN0IG1ha2VIb21lID0gKCkgPT4gIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGVsZW1lbnRGYWN0b3J5ID0gKHR5cGUsIGF0dHJpYnV0ZXMsIHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgY3JlYXRlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGNyZWF0ZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjcmVhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsIHtpZDogJ2hvbWVwYWdlJ30pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBcbiAgICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lcGFnZScpO1xuICAgIGhvbWVwYWdlLmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdkaXYnLCB7aWQ6ICdiYWNrZ3JvdW5kJ30pKTtcbiAgICBcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhY2tncm91bmQnKTtcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdoMScse2NsYXNzOiAndGV4dCd9LCAnRVZFUllPTkUnKSk7XG4gICAgdGV4dC5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnaDEnLHtjbGFzczogJ3RleHQnfSwgJ1dBTlRTJykpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoZWxlbWVudEZhY3RvcnkoJ2gxJyx7Y2xhc3M6ICd0ZXh0J30sICdJTicpKTtcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCB7Y2xhc3M6ICdidXR0b24nfSwgJ0dldCBTdGFydGVkJykpO1xufVxuXG5leHBvcnQgeyBtYWtlSG9tZSB9O1xuXG5cbiIsImltcG9ydCBtZW51IGZyb20gJy4vbWVudS5wbmcnO1xuXG5mdW5jdGlvbiBtYWtlTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGVsZW1lbnRGYWN0b3J5ID0gKHR5cGUsIGF0dHJpYnV0ZXMsIHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgY3JlYXRlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGNyZWF0ZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjcmVhdGU7XG4gICAgfVxuXG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2lkOiAnbWVudSd9KSk7XG5cbiAgICBjb25zdCBtZW5pYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5cbiAgICBtZW5pYi5hcHBlbmRDaGlsZChlbGVtZW50RmFjdG9yeSgnZGl2Jywge2NsYXNzOiAnaW1nJ30pKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWcnKTtcbiAgICBjb25zdCBteU1lbnUgPSBuZXcgSW1hZ2UoKTtcbiAgICBteU1lbnUuc3JjID0gbWVudTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChteU1lbnUpO1xufVxuXG5leHBvcnQgeyBtYWtlTWVudSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IG1ha2VIb21lIH0gZnJvbSBcIi4vbG9hZFwiXG5pbXBvcnQgeyBtYWtlTWVudSB9IGZyb20gXCIuL21lbnVcIlxuaW1wb3J0IHsgbWFrZUNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCJcbmltcG9ydCB7IGNsZWFyUGFnZSB9IGZyb20gXCIuL2NsZWFyXCJcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgbmF2ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGlmIChuYXYgPT09ICdIJykge1xuICAgICAgICBjbGVhclBhZ2UoKTtcbiAgICAgICAgbWFrZUhvbWUoKTtcbiAgICB9IGVsc2UgaWYgKG5hdiA9PT0gJ00nKSB7XG4gICAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgICBtYWtlTWVudSgpO1xuICAgIH0gZWxzZSBpZiAobmF2ID09PSAnQycpIHtcbiAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgIG1ha2VDb250YWN0KCk7XG4gICAgfVxufSlcblxubWFrZUhvbWUoKTtcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==