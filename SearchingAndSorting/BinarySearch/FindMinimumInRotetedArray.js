/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    // let min = nums[0]; //? my way 
    // let i = 0;
    // let j = nums.length - 1;
    // while (i <= j) {
    //     let mid = i + Math.floor((j - i) / 2);
    //     console.log(i, j)
    //     if (min > nums[mid]) {
    //         min = Math.min(min, nums[j]);
    //     }
    //     else if (min > nums[j]) {
    //         min = Math.min(min, nums[j]);
    //         i = mid + 1
    //     } else {
    //         min = Math.min(min, nums[i])
    //         j = mid - 1
    //     }
    // }
    // console.log(min)
    let i = 0;
    let j = nums.length - 1
    while (i < j) {
        let mid = i + Math.floor((j - i) / 2);
        // If mid element is greater than the rightmost element,
        // the minimum is in the right half
        if (nums[mid] > nums[j]) {
            i = mid + 1
        } else {
            // Else, minimum is in the left half (including mid)
            j = mid;
        }
    }
    // When i == j, it points to the smallest element
    console.log(nums[i])
};

findMin([11, 13, 15, 17])