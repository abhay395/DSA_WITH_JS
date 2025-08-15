


// function practice(nums) {
//     let k = 1;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] != nums[k - 1]) {
//             [nums[i], nums[k]] = [nums[k], nums[i]]
//             k++
//         }
//     }
//     console.log(nums);
//     return k
// }

// console.log(practice([1,1,2,2,2,3,4,4]))

function functionName(s) {
    let map = new Map();
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    let arr = Array.from([...map])
    arr = arr.sort((a, b) => b[1] - a[1])
    let str = ''
    for (let [key, value] of arr) {
        for (let i = 0; i < value; i++)str += key
    }
    console.log(str)
}
functionName("ttttreee")
