import React from './js/dom/dom.js';

import './styles/main.scss';
import PostList from './js/components/PostList.js';
import MoreButton from './js/components/MoreButton.js';

import { apiDataFetch, API_URL, POST_LIMIT, INITIAL_PAGE } from './js/api.js';

const showMore = () => {
    console.log('clicked');
};

const init = async() => {

    // Root
    const $root = document.getElementById('root');

    // Post list
    let currentPage = INITIAL_PAGE;
    const posts = await apiDataFetch(`${API_URL}?_page=${currentPage}&_limit=${POST_LIMIT}`);

    const postList = PostList(posts);
    React.render($root, postList);

    // Button
    const $button = MoreButton();
    React.render($root, $button);

    const $DOMbutton = document.querySelector('.MoreButton');

    $DOMbutton.addEventListener('click', showMore, true);


}

init();



