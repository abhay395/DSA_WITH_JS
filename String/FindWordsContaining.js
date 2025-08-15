/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let arrCn = []
    outerLoop: for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let lengthOfword = word.length;
        for (let j = 0; j < lengthOfword; j++) {
            console.log(word[j])
            if (word[j] == x) {
                arrCn.push(i)
                continue outerLoop;
            }
        }
    }
    return arrCn
};
console.log(findWordsContaining(["leet", "code"], 'e'))