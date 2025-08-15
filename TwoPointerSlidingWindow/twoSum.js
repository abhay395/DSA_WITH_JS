/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums = [], target) {
    let map = new Map();
    for (let [index, val] of nums.entries()) {
        let dif = target - val
        if (map.has(val)) {
            return [dif, map.get(val)]
            // return [el, el - target]
        } else {
            map.set(dif, index)
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))