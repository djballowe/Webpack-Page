

function makeHome() {
    const content = document.querySelector('#content');

    const elementFactory = (type, attributes, text) => {
        const create = document.createElement(type);
        create.textContent = text;
        for (key in attributes) {
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

module.export = makeHome();

