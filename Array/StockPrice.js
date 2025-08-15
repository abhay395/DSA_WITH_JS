/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let maxval = prices[prices.length - 1]
    let arr = [maxval];
    for (let i = prices.length - 1; i > 0; i--) {
        // console.log(prices[i], prices[i - 1])
        if (prices[i - 1] > prices[i]) {
            if (prices[i - 1] > maxval) {
                arr.unshift(prices[i - 1])
                maxval = prices[i - 1]
            } else {
                arr.unshift(maxval)
            }
        } else {
            arr.unshift(maxval)
        }
    }
    console.log(prices)
    console.log()
    for (let i = 0; i < prices.length; i++) {
        if (maxProfit < arr[i] - prices[i]) {
            maxProfit = arr[i] - prices[i]
        }
    }
    return maxProfit
};

console.log(maxProfit([7, 6, 4, 3, 1]))