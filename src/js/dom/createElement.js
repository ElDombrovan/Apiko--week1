import { isNonEmptyObj, isNonEmptyArr } from '../helpers/typeCheck.js';

export const createElement = ( tagName, { attributes = {}, children = [] } = {}) => {

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
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child))
          } else {
            element.appendChild(child); 
          }
      }
    }

    return element;
  };
  