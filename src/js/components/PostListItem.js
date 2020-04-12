import React from '../dom/dom.js';

const PostListItem = props => {
    const { id, title, body } = props;

    const element = React.createElement('div', {
        attributes: {
            class: 'PostListItem',
            id: id,
        },
        children: [
            React.createElement('span', {
                attributes: {},
                children: [`Id: ${id}`],
            }),
            React.createElement('p', {
                attributes: {
                    style: 'font-weight: bold'
                },
                children: [title],
            }),
            React.createElement('p', {
                attributes: {},
                children: [body],
            }),
        ]
    });
    return element;
};

export default PostListItem;