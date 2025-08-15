/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// ! Brute Force
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target && i + 1 == nums.length) {
            return i + 1;
        }
        if (nums[i] == target) {
            return i;
        }
        if (nums[i] > target) {
            // console.log(i);
            return i;
        }
    }
};
// ? Optimal Solution
var searchInsert = function (nums, target) {
    let low = 0;
    let highe = nums.length - 1;
    while (low <= highe) {
        let mid = Math.floor((low + highe) / 2);
        // console.log(mid)
        if (target > nums[nums.length - 1]) {
            return nums.length;
        }
        else if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid] && target < nums[mid + 1]) {
            return mid + 1;
        } else if (target > nums[mid]) {
            console.log(low, highe)
            low = mid + 1;
        } else {
            highe = mid - 1;
        }
    }
    // return -1
};

console.log(searchInsert([1, 2, 3, 5, 6, 9], 10))