import menu from './menu.png';

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
    myMenu.src = menu;

    container.appendChild(myMenu);
}

export { makeMenu };