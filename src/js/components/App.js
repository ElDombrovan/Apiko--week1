import { React } from '../dom/dom.js';
import { PostList } from './PostList.js';

const App = () => {

    const children = PostList();

    const element = React.createElement('div', {
        attributes: {
            style: 'background-color: red', 
        },
        children: [children],
    });

    return element;
}

export default App;