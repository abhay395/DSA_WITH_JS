/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0;
    let result = 0;
    let freqOf1 = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] == 1) freqOf1++
        while ((right - left + 1) - freqOf1 > k) {
            if (nums[left] == 1) freqOf1--
            left++;
        }
        result = Math.max(right - left + 1, result)
    }
    console.log(result)
};

longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)