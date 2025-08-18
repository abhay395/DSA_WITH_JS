/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // let n = height.length;
    // let prifixMax = Array(n).fill(0); // * Useing suffix Max or prifix Max
    // let sufixMax = Array(n).fill(0);
    // for (let i = 0; i < n; i++) {
    //     prifixMax[i] = Math.max(prifixMax[i - 1] || 0, height[i])
    //     sufixMax[n - i - 1] = Math.max(sufixMax[n - i] || height[n - i - 1], height[n - i - 1])
    // }
    // let containingWater = 0;
    // for (let i = 0; i < n; i++) {
    //     if (height[i] < prifixMax[i] && height[i] < sufixMax[i]) {
    //         containingWater += Math.min(prifixMax[i], sufixMax[i]) - height[i]
    //     }
    // }
    // return containingWater
    // let n = height.length //* More optimized
    // let containWater = 0;
    // const sufixMax = Array(n).fill(0);
    // sufixMax[n - 1] = height[n - 1]
    // for (let i = n - 2; i >= 0; i--) {
    //     sufixMax[i] = Math.max(sufixMax[i + 1], height[i])
    // }
    // // console.log(sufixMax)
    // let leftMax = 0;
    // for (let i = 0; i < n; i++) {
    //     leftMax = Math.max(height[i], leftMax)
    //     if (leftMax > height[i] && sufixMax[i] > height[i]) {
    //         // let smallHi = Math.min(leftMax,sufixMax[i])
    //         containWater += Math.min(leftMax, sufixMax[i]) - height[i]
    //     }
    // }
    // let containWater = 0;
    // for (let i = 0; i < height.length; i++) { //! Extream brute force
    //     let leftMax = 0;
    //     let rightMax = 0;
    //     for (let j = 0; j <= i; j++) {
    //         leftMax = Math.max(height[j], leftMax)
    //     }
    //     for (let j = height.length - 1; j >= i; j--) {
    //         rightMax = Math.max(height[j], rightMax)
    //     }
    //     if (leftMax > height[i] && rightMax > height[i]) {
    //         let water = Math.min(leftMax, rightMax) - height[i]
    //         console.log(leftMax, height[i], [i], rightMax, "+=", water)
    //         containWater += water
    //     }
    // }
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let containWater = 0;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right])
        if (height[left] < height[right]) {
            containWater += leftMax - height[left];
            left++
        }
        else if (height[right] <= height[left]) {
            containWater += rightMax - height[right]
            right--
        }
    }
    console.log(containWater)
};

trap([4, 2, 0, 3, 2, 5])
////* 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15