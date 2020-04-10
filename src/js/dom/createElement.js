export const createElement = ( tagName, {attributes= {}, children = []} = {}) => {
    return{
        tagName,
        attributes,
        children,
    };
};