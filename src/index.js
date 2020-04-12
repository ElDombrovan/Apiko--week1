'use strict'

import { React } from './js/dom/dom.js';
import App from './js/components/App.js';

import './styles/main.scss';

const init = () => {
    const root = document.getElementById('root');
    const appElement = App();
    const app = React.render(appElement);

    React.mountElement(app, root);
}

init();