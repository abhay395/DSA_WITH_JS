
function FindLargest(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
        }
    }
    return max
}

console.log(FindLargest([1, 25, 8, 8, 5, 22, 22, 222]))