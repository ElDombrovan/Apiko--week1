export const API_URL = 'https://jsonplaceholder.typicode.com/posts';
export const POST_LIMIT = 10;

export const apiDataFetch = API_URL => fetch(API_URL)
        .then(res => res.json())
        .then(data => data);
