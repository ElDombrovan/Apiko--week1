import { React } from '../dom/dom.js';
import { PostListItem } from './PostListItem.js';
// import { apiDataFetch, API_URL } from '../api.js';

export const PostList = () => {

    const posts = [{
            id: 1,
            Title: "123",
            Body: "321",
        }];
    
    const postListItems = posts.map(({ id, Title, Body } = post) => 
        PostListItem({ 
            id: id,
            title: Title,
            body: Body, 
        }));

    const postsList = React.createElement('div', {
        attributes: {
            class: 'PostList',
        },
        children: postListItems,
    });

    return postsList;
};