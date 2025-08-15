/**
 * @param {string} strs
 * @return {Array}
 */
function practice(strs) {
    // let longestPr = ''//! brute force solution
    // let first = s[0];
    // outer: for (let i = 0; i < first.length; i++) {
    //     let char = first[i];
    //     for (let j = 1; j < s.length; j++) {
    //         if (char != s[j][i]) {
    //             break outer;
    //         }
    //     }
    //     longestPr+=char;
    // }
    // return longestPr
    // let longestPrifix = s[0];//?Optimal Solution
    // let lenS = s.length;
    // for (let i = 1; i < lenS; i++) {
    //     let word = s[i];
    //     while (word.indexOf(longestPrifix) != 0) {
    //         longestPrifix = longestPrifix.slice(0, longestPrifix.length - 1);
    //     }
    // }
    // return longestPrifix
    let map = new Map();
    for (let str of strs) {
        let key = str.split("").sort().join("")
        if (!map.has(key)) {
            // console.log(key)
            map.set(key, [])
        }
        map.get(key).push(str)
    }
    return Array.from(map.values())
}
console.log(practice(["eat", "tea", "tan", "ate", "nat", "bat"]))