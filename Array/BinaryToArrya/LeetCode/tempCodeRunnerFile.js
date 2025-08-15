var searchRange = function (nums, target) {
    let lowerBound = -1;
    let upperBound = -1;
    let low = 0;
    let highe = nums.length - 1;
    if (highe == low && nums[low] == target) {
        return [0, 0]
    }
    while (low <= highe) {
        let mid = Math.floor((low + highe) / 2)
        if (nums[mid] >= target) {
            lowerBound = mid;
            highe = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if (nums[lowerBound] != target) return [-1, -1];
    low = 0;
    highe = nums.length - 1;
    // console.log(low,highe)
    while (low <= highe) {
        let mid = Math.floor((low + highe) / 2);
        if (nums[mid] > target) {
            upperBound = mid;
            highe = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if (upperBound == -1) {
        return [lowerBound, nums.length-1]
    }
    return [lowerBound, upperBound - 1]

};