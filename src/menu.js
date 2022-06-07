function makeMenu() {
    const content = document.querySelector('#content');

    const elementFactory = (type, attributes, text) => {
        const create = document.createElement(type);
        create.textContent = text;
        for (key in attributes) {
            create.setAttribute(key, attributes[key]);
        }
        return create;
    }

    
    content.appendChild(elementFactory('div', {id: 'menu'}););



}