import { makeHome } from "./load"
import { makeMenu } from "./menu"
import { makeContact } from "./contact"


document.querySelector('header').addEventListener('click', function(e) {
    const nav = e.target.getAttribute('id');
    if (nav === 'H') {
        makeHome();
    } else if (nav === 'M') {
        makeMenu();
    } else if (nav === 'C') {
        makeContact();
    }
})






