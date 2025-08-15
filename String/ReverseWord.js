/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.split("").reverse().join("");
    let sub = ""
    let i = 0
    while (i < s.length) {
        let start = i;
        // console.log('ak')
        if (i > s.length) break
        while (s[i] != ' ' && i < s.length) i++;
        let end = i;
        sub += s.slice(start, end).split("").reverse().join("")
        i++
    }
    console.log(sub)
};

reverseWords("the sky is blue")