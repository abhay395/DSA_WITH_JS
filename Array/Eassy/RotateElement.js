/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let n = nums.length;
    let check = k;
    // for (let i = 0; i < n; i++) {
    //     let temp = nums[0];
    //     if (check == 0) break;
    //     for (let j = 1; j < n; j++) {
    //         nums[j-1] = nums[j];
    //     }
    //     console.log(temp)
    //     nums[n-1] = temp;
    //     check--;
    // }
    for (let i = 0; i < n; i++) {
        let temp = nums[n-1];
        if (check == 0) break;
        for (let j = i; j <n-1; j++) {
            console.log(nums[j])
            nums[j+1] = nums[j];
        }
        console.log(temp)
        nums[0] = temp;
        check--;
    }
    console.log(nums);
};
rotate([1, 2, 3, 4, 5, 6, 7], 1)