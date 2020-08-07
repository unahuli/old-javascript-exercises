const reverseString = function(word) {
    word = word.toLowerCase();
    length = word.length;
    let reversedWord = '';
    for (let i = 0; i < word.length; i++) {
        reversedWord += word.charAt((word.length - 1)-i);
    }
    return reversedWord;
}

module.exports = reverseString
