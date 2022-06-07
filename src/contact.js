function makeContact() {
    const content = document.getElementById('#content');

    const elementFactory = (type, attributes, text) => {
        const create = document.createElement(type);
        create.textContent = text;
        for (let key in attributes) {
            create.setAttribute(key, attributes[key]);
        }
        return create;
    }

    content.appendChild(elementFactory('div', {class: 'contact-container'}));
    
    const container = document.querySelector('#container');
    container.appendChild(elementFactory('div', {class: 'info', id: 'info'}))

    
    const info = document.querySelector('#info');

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