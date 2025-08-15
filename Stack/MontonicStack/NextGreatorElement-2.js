/**
 * @param {number[]} nums
 * @param {number[]} 
 * @return {number[]}
 */
function stackTop(stack) {
    return stack[stack.length - 1]
}
function nextGreaterElement(nums) {
    let stack = []
    let arr = new Array(nums.length).fill(-1);
    let n = nums.length; //* optimal solution 
    for (let i = 2 * n - 1; i >= 0; i--) {
        let idx = i % n;
        while (stack.length > 0 && nums[idx] >= nums[stackTop(stack)]) {
            stack.pop();
        }
        if (i < n) {
            if (stack.length == 0) arr[idx] = -1
            else arr[idx] = nums[stackTop(stack)]
        }
        stack.push(idx)
    }
    console.log(arr)
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length + i; j++) {
    //         let idx = j % nums.length
    //         if (i == nums.length - 1) console.log(i, idx, j)
    //         if (nums[i] < nums[idx]) {
    //             arr[i] = nums[idx]
    //             break
    //         }
    //     }
    // }
    console.log(arr)
}

nextGreaterElement([1, 2, 3, 4, 3])