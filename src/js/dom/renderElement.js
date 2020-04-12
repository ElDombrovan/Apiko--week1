import { isNonEmptyArr, isNonEmptyObj } from '../helpers/typeCheck.js';

const renderElement = ({ tagName, attributes, children }) => {

    if(!tagName || typeof tagName !== 'string') {
      console.error('Tag name is not specified');
      return;
    }

    const element = document.createElement(tagName);

    if (isNonEmptyObj(attributes)) {
      for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
      }
    }
  
    if(isNonEmptyArr(children)) {
      for (const child of children) {
        const renderedChild = render(child);
        renderedChild && element.appendChild(renderedChild);
      }
    }

    return element;
  };
  
  export const render = (node) => {
    if (!node) return;

    if (typeof node === 'string') {
      return document.createTextNode(node);
    }
  
    return renderElement(node);
  };
  