/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
    let len = strs.length;
    // let arr = [];

    let map = new Map();
    for (let str of strs) {
        let key = str.split("").sort().join();
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str)
    }
    return Array.from(map.values())
};
var groupAnagrams = function(strs) {
    let map = new Map();

    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let ch of str) {
            count[ch.charCodeAt(0) - 97]++;
        }

        // Create a key from the count array
        let key = count.join('#'); // use '#' as a separator to avoid collision
        console.log(key)
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))