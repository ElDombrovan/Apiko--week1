import React from '../dom/dom.js';

import PostListItem from './PostListItem.js';

const PostList = posts => {
    const children = posts.map(({ id, title, body } = post) => 
        PostListItem({ id, title, body })
    );

    const element = React.createElement('div', {
        attributes: {
            class: 'PostList',
        },
        children: children,
    });

    return element;
};

export default PostList;
