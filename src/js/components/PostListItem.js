import React from '../dom/dom.js';

const PostListItem = props => {
    const { id, title, body } = props;

    const element = React.createElement('li', {
        attributes: {
            class: 'PostListItem',
            id: `post-${id}`,
        },
        children: [
            React.createElement('input', {
                attributes: {
                    type: 'checkbox',
                    class: 'PostListItem__checkbox',
                    id: `checkbox-${id}`,
                },
                children: [],
            }),
            React.createElement('label', {
                attributes: {
                    class: 'PostListItem__number',
                    for: `checkbox-${id}`,
                },
                children: [`Task #${id}`],
            }),
            React.createElement('h3', {
                attributes: {
                    class: 'PostListItem__title',
                },
                children: [title],
            }),
            React.createElement('p', {
                attributes: {
                    class: 'PostListItem__body',
                },
                children: [body],
            }),
        ]
    });
    return element;
};

export default PostListItem;