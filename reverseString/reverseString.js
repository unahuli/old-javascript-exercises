const reverseString = function(word) {
    let reversedWord = '';
    let length = word.length - 1;
    for (let i = length; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;
}

module.exports = reverseString
