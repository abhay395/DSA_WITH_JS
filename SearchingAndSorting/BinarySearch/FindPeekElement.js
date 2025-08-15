/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let n = nums.length;
    if (n == 1) return nums[0]
    let i = 0;
    let j = n - 1
    while (i <= j) {
        let mid = i + Math.floor((j - i) / 2);
        if ((mid == 0 && nums[mid] > nums[mid + 1]) || (mid == n - 1 && nums[mid] > nums[mid - 1])) {
            return mid
        } else if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (nums[mid] < nums[mid + 1]) {
            i = mid + 1;
        } else {
            j = mid - 1
        }
    }
}

console.log(findPeakElement([1,2,1,3,5,6,4]))