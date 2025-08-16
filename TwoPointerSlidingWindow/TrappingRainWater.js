/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let prifixMax = Array(n).fill(0);
    let sufixMax = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        prifixMax[i] = Math.max(prifixMax[i - 1] || 0, height[i])
        sufixMax[n - i - 1] = Math.max(sufixMax[n - i] || height[n - i - 1], height[n - i - 1])
    }
    let containingWater = 0;
    for (let i = 0; i < n; i++) {
        if (height[i] < prifixMax[i] && height[i] < sufixMax[i]) {
            containingWater += Math.min(prifixMax[i], sufixMax[i]) - height[i]
        }
    }
    return containingWater
};

trap([4, 2, 0, 3, 2, 5])