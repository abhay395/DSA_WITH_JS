/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let lenS = s.length;
    let lenT = s.length;
    if (lenS != lenT) return false;
    let mapA = new Map();
    let mapB = new Map();
    for (let i = 0; i < lenS; i++) {
        if ((mapA.has(s[i]) && mapA.get(s[i]) != t[i]) || mapB.has(t[i]) && mapB.get(t[i]) != s[i]) {
            return false;
        }
        mapA.set(s[i], t[i])
        mapB.set(t[i], s[i])
    }
    return true;
}
console.log(isIsomorphic("egg", "baa"))