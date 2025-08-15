/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    // let lenOfJe = jewels.length;
    // let lenOfSt = stones.length;
    // let count = 0;
    // for (let i = 0; i < lenOfJe; i++) {
    //     let jeChar = jewels[i];
    //     for (let j = 0; j < lenOfSt; j++) {
    //         if (stones[j] == jeChar) {
    //             count++;
    //         }
    //         // console.log(stones[j])
    //     }
    // }
    // return count;
    let jewelSet = new Set(jewels);
    let count = 0;
    for (let stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }
    return count
};
console.log(numJewelsInStones("aA", "aAAbbbb"))