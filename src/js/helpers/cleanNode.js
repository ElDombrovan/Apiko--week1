export const cleanNode = node => {
    let child = node.lastElementChild;  
    while (child) { 
        node.removeChild(child); 
        child = node.lastElementChild; 
    }
}