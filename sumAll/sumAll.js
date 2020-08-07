const sumAll = function(firstNum, secondNum) {
    let higher = 0;
    let lower = 0;
    let sum = 0;
    if (firstNum < 0 || 
        secondNum < 0  ||
        typeof(firstNum) !== 'number' ||
        typeof(secondNum) !== 'number') {
        return 'ERROR';
    }
    if (firstNum > secondNum) {
        higher = firstNum;
        lower = secondNum;
    } else {
        higher = secondNum;
        lower = firstNum;
    }
    for (lower; lower <= higher; lower++) {
        sum += lower;
    }
    return sum;
}

module.exports = sumAll
