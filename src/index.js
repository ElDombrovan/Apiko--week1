import React from './js/dom/dom.js';

import './styles/main.scss';
import PostList from './js/components/PostList.js';
import PostListItem from './js/components/PostListItem.js';
import MoreButton from './js/components/MoreButton.js';

import { apiDataFetch, API_URL, POST_LIMIT, INITIAL_PAGE } from './js/api.js';

let currentPage = INITIAL_PAGE;

const $root = document.getElementById('root');
const $moreButton = MoreButton();

const getContent = async (page) => await apiDataFetch(`${API_URL}?_page=${page}&_limit=${POST_LIMIT}`);

const init = async() => {
    
    const currentPosts = await getContent(currentPage);
    const postList = PostList(currentPosts);
    React.render($root, postList);

    // Button
    React.render($root, $moreButton);

    const $DOMbutton = document.querySelector('.MoreButton');
    $DOMbutton.addEventListener('click', showMore, true);
}

init();


const showMore = async () => {
    if ( currentPage >= 10){
        $moreButton.style.display = 'none';
    } else {
        currentPage++;
        const posts = await getContent(currentPage);
        const $postList = document.querySelector('.PostList');
        const renderedPosts = posts
        .map(({ id, title, body } = post) => 
            PostListItem({ id, title, body }
        ));

        renderedPosts
            .map(post => $postList.appendChild(post));
    }
 };

