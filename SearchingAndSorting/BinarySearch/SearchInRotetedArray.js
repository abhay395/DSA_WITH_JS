

/**
 * @param {Array} nums
 * @return {number}
 */

function findLastAndFirst(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let lowerBound = -1
    while (i <= j) {
        let mid = i + Math.floor((j - i) / 2);
        if (nums[mid] >= target) {
            lowerBound = mid;
            j = mid - 1
        } else {
            i = mid + 1
        }
    }
    if (lowerBound == -1 || nums[lowerBound] != target) return [-1, -1]
    if (lowerBound == nums.length - 1) return [lowerBound, lowerBound]
    let upperBound = -1;
    i = 0;
    j = nums.length - 1;
    while (i <= j) {
        let mid = i + Math.floor((j - i) / 2);
        if (nums[mid] > target) {
            upperBound = mid;
            j = mid - 1
        } else {
            i = mid + 1
        }
    }
    if (upperBound == -1) return
}

findLastAndFirst([5, 6, 7, 8, 8], 8)