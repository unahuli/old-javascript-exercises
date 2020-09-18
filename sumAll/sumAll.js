const sumAll = function(firstNum, secondNum) {
    let total = 0;
    if (firstNum < 0 || secondNum < 0 || typeof(firstNum) != 'number' || typeof(secondNum) != 'number') {
        return 'ERROR';
    } else if (secondNum > firstNum) {
        for(let i = firstNum; i <= secondNum; i++) {
            total += i;
        }
    } else {
        for(let i = secondNum; i <= firstNum; i++) {
            total += i;
        }
    }
    return total;
}

module.exports = sumAll
