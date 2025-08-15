


function findLowerBound(arr, x) {
    let i = 0;
    let j = arr.length;
    let ans = arr[0];
    while (i <= j) {
        let mid = i + Math.floor((j - i) / 2);
        if (arr[mid] == x) {
            ans = arr[mid];
            break;
        }
        if (arr[mid] < x) {
            ans = arr[mid];
            i = mid + 1
        } else {
            j = mid - 1
        }
    }
    console.log(ans)
}
findLowerBound([3,5,8,15,19], 9)