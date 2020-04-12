export const createElement = ( tagName, { attributes = {}, children = [] } = {}) =>
    ({
        tagName,
        attributes,
        children,
    });