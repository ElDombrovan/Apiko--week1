import React from '../dom/dom.js';

const MoreButton = () => {

    const moreButton = React.createElement('button', {
        attributes: {
            class: 'MoreButton',
            type: 'submit',
            onclick: '',
        },
        children: ['Load more']
    });
    return moreButton;
};

export default MoreButton;