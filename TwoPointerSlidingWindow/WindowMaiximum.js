/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


function popFront(dequ = []) {
    return dequ.shift();
}
var maxSlidingWindow = function (nums, k) {
    // let arr = [];
    // let n = nums.length; //! Brute force approach
    // for (let i = 0; i <= n - k; i++) {
    //     let max = 0;
    //     for (let j = i; j < i + k; j++) {
    //         max = Math.max(nums[j], max)
    //     }
    //     arr.push(max)
    // }
    // console.log(arr)
    // if (k == 1) return nums
    // let Deq = [];
    // let arr = [];
    // let front = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (Deq.length - front && Deq[front] <= i - k) {
    //         front++;
    //     }
    //     while (Deq.length - front && nums[i] > nums[Deq[Deq.length - 1]]) {
    //         Deq.pop()
    //     }
    //     Deq.push(i)
    //     if (i > k) {
    //         arr.push(nums[Deq[front]])
    //     }
    // }
    // console.log(arr)
    // return arr
};
var maxSlidingWindow = function (nums, k) {
    if (k === 1) return nums;
    let Deq = [], arr = [];
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        // Remove elements out of window
        if (Deq.length - left && Deq[left] <= i - k) {
            left++;
        }

        // Maintain decreasing order
        while (Deq.length - left && nums[i] > nums[Deq[Deq.length - 1]]) {
            Deq.pop();
        }

        // Add current element index
        Deq.push(i);

        // Push current window max
        if (i >= k - 1) {
            arr.push(nums[Deq[left]]);
        }
    }
    console.log(arr)
    return arr;
};

// maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
maxSlidingWindow([7, 2, 4], 2)