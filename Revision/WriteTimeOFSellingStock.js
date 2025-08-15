


function maxProfit(prices) {
    let minSoFar = prices[0];
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (minSoFar > prices[i]) {
            minSoFar = prices[i]
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minSoFar)
        }
    }
    console.log(maxProfit)
    // return maxProfit
    // let maxPric = minPric;
    // for (let i = minPric + 1; i < prices.length; i++) {
    //     if (prices[maxPric] < prices[i]) {
    //         maxPric = i
    //     }
    // }
    // console.log(prices[maxPric]-prices[minPric])
    // return prices[maxPric]-prices[minPric]
}

maxProfit([7, 1, 5, 3, 6, 4])