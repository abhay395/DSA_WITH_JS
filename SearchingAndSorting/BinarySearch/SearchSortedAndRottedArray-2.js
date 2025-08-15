/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let left = 0;
    let rigth = nums.length - 1;
    while (left <= rigth) {
        let mid = left + Math.floor((rigth - left) / 2);
        if (nums[mid] == target) return true
        if (nums[mid] == nums[left] && nums[left] == nums[rigth]) {
            left++;
            rigth--;
            console.log(nums[left], nums[rigth], nums[mid])
        }
        else if (nums[mid] < nums[left]) { // if left part is not sorted 
            if (target > nums[mid] && target <= nums[rigth]) {
                left = mid + 1;
            } else {
                rigth = mid - 1
            }
        } else {
            if (target < nums[mid] && target >= nums[left]) {
                rigth = mid - 1
            } else {
                left = mid + 1;
            }
        }
    }
    return false
};

console.log(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 13))