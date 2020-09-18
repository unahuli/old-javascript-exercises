const removeFromArray = function() {
    let index;
    let array = arguments[0];
    let element;
    // if (arguments.length < 3) {
    //     element = arguments[1]; 
    //     index = array.indexOf(element);
    //         if (index != -1) {
    //             array.splice(index, 1);
    //         }
    //     return array;
    // } else {
        for (let i = 1; i < arguments.length; i++) {
            element = arguments[i]; 
            index = array.indexOf(element);
            if (index != -1) {
                array.splice(index, 1);
            }
        }
        return array;           
    //}

}

module.exports = removeFromArray
