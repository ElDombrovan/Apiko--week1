import React from './js/dom/dom.js';

import App from './js/components/App.js';

import './styles/main.scss';


const init = async() => {
    const root = document.getElementById('root');

    const appElement = await App();
    const app = React.render(appElement);

    React.mountElement(app, root);
}

init();