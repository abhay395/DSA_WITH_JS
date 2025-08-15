

function practice(arr = [], k, x) {
    // let distance = arr.map((val) => {
    //     return [val, Math.abs(val - x)]
    // })
    // let closeset = distance.sort((a, b) => {
    //     if (a[1] == b[1]) {
    //         return a[0] - b[0]
    //     } else return a[1] - b[1]
    // }).map((el) => el[0]).slice(0, k).sort((a, b) => a - b)
    // console.log(closeset)
    let left = 0;
    let right = arr.length - k;
    while (right - left + 1 > k) {
        if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
            left++;
        } else {
            right--;
        }
    }
    console.log(arr.slice(left, right + 1))
}

practice([1, 2, 3, 4, 5, 6, 7], 4, 5)