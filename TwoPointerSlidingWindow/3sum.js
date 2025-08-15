/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // let set = new Set();
    // for (let i = 0; i < nums.length; i++) { // ! Extream Brute force
    //     for (let j = i + 1; j < nums.length; j++) {
    //         for (let k = j + 1; k < nums.length; k++) {
    //             if ((nums[i] + nums[j] + nums[k]) == 0) {
    //                 let arr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
    //                 set.add(arr.toString())
    //             }
    //         }
    //     }
    // }
    // let result = Array.from(set).map(item=>item.split(',').map(Number))
    // return result
    // let resultSet = new Set(); // *little bit optimal
    // hashSet.add(4)
    // for (let i = 0; i < nums.length; i++) {
    //     let hashSet = new Set();
    //     for (let j = i + 1; j < nums.length; j++) {
    //         let thiredEl = -(nums[i] + nums[j])
    //         if (hashSet.has(thiredEl)) {
    //             let arr = [nums[i], nums[j], thiredEl].sort((a, b) => a - b).toString();
    //             resultSet.add(arr)
    //         }
    //         hashSet.add(nums[j])
    //     }
    // }
    // resultSet = Array.from(resultSet).map((item) => item.split(',').map(Number))
    // console.log(resultSet)
    let arr = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[k] + nums[j]
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                arr.push([nums[i], nums[j], nums[k]])
                j++;
                k--;
                while (j < k && nums[j - 1] == nums[j]) j++;
                while (k > i && nums[k + 1] == nums[k]) k--;
            }
        }
    }
    return arr
};

threeSum([-1, 0, 1, 2, -1, -4])
