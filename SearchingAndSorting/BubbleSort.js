function BubbleSort(arr) {
    let n = arr.length - 1;
    // while (n > 0) {
    //     // console.log()
    //     let i = 1;
    //     while (i < n + 1) {
    //         // console.log("")
    //         if (arr[i - 1] > arr[i]) {
    //             console.log(arr[i - 1], arr[i])
    //             let temp = arr[i - 1];
    //             arr[i - 1] = arr[i];
    //             arr[i] = temp;
    //         }
    //         i++
    //     }
    //     n--;
    // }
    for (let i = n; i >= 1; i--) {
        let didswap = 0;
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                didswap = 1;
                // console.log(arr[j-1],arr[j])
            }
        }
        console.log(arr)
        if (didswap == 0) break;
    }

    return arr;
}

console.log(BubbleSort([1, 2, 3, 4, 5, 7, 8]))