export const isNonEmptyObj = obj => obj && typeof obj === 'object'&& Object.keys(obj).length;
export const isNonEmptyArr = arr => arr && Array.isArray(arr) && arr.length;