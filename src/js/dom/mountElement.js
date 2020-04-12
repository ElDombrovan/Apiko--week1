import { cleanNode } from '../helpers/cleanNode.js';

export const mountElement = (node, target) => {
    cleanNode(target);
    target.appendChild(node);
}
    