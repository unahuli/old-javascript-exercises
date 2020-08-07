const removeFromArray = function(thisArray, ...elements) {
    for(let i = 0; i < elements.length; i++) {
        let index = thisArray.indexOf(elements[i]);
        if (index !== -1) {
            thisArray.splice(index, 1);
        }
    }
    return thisArray;
}

module.exports = removeFromArray
