import { React } from '../dom/dom.js';

const App = React.createElement('div', {
    attributes: {
        style: 'background-color: red', 
    },
    children: [
        React.createElement('span',{
            attributes: {},
            children: ['Test text for span tag'],
        }),
        React.createElement('div', {
            attributes: {
                style: 'padding: 5px',
                style: 'border: 1px solid white'
            },
            children: [
                React.createElement('p', {
                   attributes: {
                       style: 'color: white',
                       style: 'text-decoration: underline'
                   },
                   children: ['Paragraph tag with div parent'],
                })
            ]       
        })
    ]
});

export default App;