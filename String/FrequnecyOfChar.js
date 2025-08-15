/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    // Step 1: Count frequency of each character
    const freqMap = new Map();
    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Step 2: Convert map to array and sort by frequency descending
    const sortedChars = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);

    // Step 3: Build result string
    let result = '';
    for (const [char, freq] of sortedChars) {
        result += char.repeat(freq);
    }

    return result;
};

var bucketArray = function (s) {
    const freqMap = new Map();
    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    // console.log(freqMap)

    let bucket = Array(s.length+1).fill().map(() => [])
    console.log(bucket)
    for (const [char, freq] of freqMap.entries()) {
        bucket[freq].push(char);
    }
    console.log(bucket)
    // for (let [char, freq] of freqMap.entries()) {
    //     bucket[freq].push(char)
    // }
    // console.log(bucket)

}
bucketArray("tree")
// var frequencySort = function(s) {
//     const freqMap = new Map();

//     // Step 1: Count frequencies
//     for (let char of s) {
//         freqMap.set(char, (freqMap.get(char) || 0) + 1);
//     }

//     // Step 2: Create buckets
//     const buckets = Array(s.length + 1).fill().map(() => []);

//     for (const [char, freq] of freqMap.entries()) {
//         buckets[freq].push(char);
//     }

//     // Step 3: Build result from high freq to low
//     let result = '';
//     for (let i = buckets.length - 1; i > 0; i--) {
//         for (const char of buckets[i]) {
//             result += char.repeat(i);
//         }
//     }

//     return result;
// };
