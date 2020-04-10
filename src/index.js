import { React } from './js/dom/dom.js';
import { App } from './js/components/App.js';

const root = document.getElementById('root');
const app = React.render(App);
React.mountElement(app, root);