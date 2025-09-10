/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = 0;
    while (right < nums.length || left < nums.length) {
        sum += nums[right]
        while (sum > goal && left < nums.length) {
            sum -= nums[left];
            left++;
        }
        if (sum == goal) {
            console.log(sum, left, right)
            result++;
        }
        right++
    }
    console.log(result)
};
numSubarraysWithSum([1, 0, 1, 0, 1], 2)