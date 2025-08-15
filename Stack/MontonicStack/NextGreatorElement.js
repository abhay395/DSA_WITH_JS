

/**
 * @param {number[]} nums1
 * @param {number[]} 
 * @return {number[]}
 */
function nextGreaterElement(nums1) {
    let stack = []
    let res = new Array(nums1.length).fill(-1);
    // let map = new Map()
    for (let i = 0; i < nums1.length; i++) {
        while (stack.length > 0 && nums1[i] > nums1[stack[stack.length - 1]]) {
            let index = stack.pop();
            res[index] = nums1[i];
        }
        stack.push(i)
    }
    
}

nextGreaterElement([1, 2, 4, 3, 5])