/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function (nums1, nums2) {
    // let len1 = nums1.length;
    // let len2 = nums2.length;
    // let arr = []
    // outer: for (let i = 0; i < len1; i++) { //? Solved by me  
    //     let stack = []
    //     for (let j = 0; j < len2; j++) {
    //         if (nums2[j] == nums1[i]) {
    //             stack.push(nums1[i])
    //         }
    //         else if (nums2[j] > stack[stack.length - 1]) {
    //             arr.push(nums2[j])
    //             console.log(stack)
    //             continue outer
    //         }
    //         if (j == len2 - 1) {
    //             arr.push(-1)
    //         }
    //         // stack.push(nums2[j]);
    //     }
    // }
    // console.log(arr)
    // return arr;
    let map = new Map();
    let stack = []
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            let val = stack.pop();
            map.set(val, nums2[i])
        }
        stack.push(nums2[i])
    }
    while (stack.length > 0) {
        map.set(stack.pop(), -1)
    }
    return nums1.map((item) => map.get(item))
};

nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])