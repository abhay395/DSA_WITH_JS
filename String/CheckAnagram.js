/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    // let lenS = s.length;//? optimal but not for all char it's only valid for a-z not A-Z
    // let lenT = t.length;
    // if (lenS != lenT) return false;
    // let count = new Array(26).fill(0);
    // for (let i = 0; i < lenS; i++) {
    //     count[s.charCodeAt(i) - 97]++;
    //     count[t.charCodeAt(i) - 97]--;
    // }
    // for (let item of count) {
    //     if (item != 0) return false;
    // }
    // return true;
    let lenS = s.length;
    let lenT = t.length;
    if (lenS != lenT) return true;
    let map = new Map();
    for (let i = 0; i < lenS; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        map.set(t[i], (map.get(t[i]) || 0) - 1);
    }
    for (let value of map.values()) {
        if (value != 0) return false;
    }
    return true
}
console.log(isAnagram("anagram", "nagaram"))