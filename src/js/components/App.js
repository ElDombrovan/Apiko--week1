import React from '../dom/dom.js';
import PostList from './PostList.js';

import { apiDataFetch, API_URL, POST_LIMIT } from '../api.js';

const App = async() => {

    const posts = await apiDataFetch(API_URL)
        .then(arr => arr.slice(0, POST_LIMIT));

    const children = PostList(posts);

    const element = React.createElement('div', {
        attributes: {
            style: 'background-color: red', 
        },
        children: [children],
    });

    return element;
};

export default App;