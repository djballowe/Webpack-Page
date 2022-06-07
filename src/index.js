import makeHome from './load';


window.onload = makeHome();


const nav = document.querySelectorAll('li');

function navigation() {
    nav.forEach((li) => {
        li.addEventListener('click', () => {
            clearCanvas();
            if (li.id === 'M') {
                menu;
            } else if (li.id === 'C') {
                //contact function
            } else if (li.id === 'H') {
                test;
            }
        })
    })
}

function clearCanvas() {
    const content = document.querySelector('#content');
    let num = document.getElementById('content').childElementCount;
    for (let i = 0; i < num; i++) {
        let child = content.lastElementChild;
        while (child) {
            content.removeChild(child);
            child = content.lastElementChild;
        }
    }
}

navigation();