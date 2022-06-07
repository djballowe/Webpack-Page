import { makeHome } from "./load"
import { makeMenu } from "./menu"
import { makeContact } from "./contact"
import { clearPage } from "./clear"

document.querySelector('header').addEventListener('click', function(e) {
    const nav = e.target.getAttribute('id');
    if (nav === 'H') {
        clearPage();
        makeHome();
    } else if (nav === 'M') {
        clearPage();
        makeMenu();
    } else if (nav === 'C') {
        clearPage();
        makeContact();
    }
})

makeHome();






