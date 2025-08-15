



function finPeakInMountainArray(arr = []) {
    let i = 0;
    let j = arr.length;
    while (i < j) {
        let mid = i + Math.floor((j - i) / 1)
        if (arr[mid] < arr[mid + 1]) {
            i = mid + 1
        } else {
            j = mid - 1
        }
    }
    console.log(arr[i])
}


finPeakInMountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90])