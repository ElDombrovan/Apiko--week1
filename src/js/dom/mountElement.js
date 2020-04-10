export const mountElement = (node, target) => {
    target.replaceWith(node);
    return node;
};