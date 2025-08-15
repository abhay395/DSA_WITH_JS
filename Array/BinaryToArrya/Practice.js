function practice(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let lowerBound = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] >= target) {
            lowerBound = mid;
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
    if (lowerBound == -1 || arr[lowerBound]!=target) return [-1, -1];
    let upperBound = -1;
    start = 0;
    end = arr.length-1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] > target) {
            upperBound = mid;
            end = mid - 1;
            // console.log(end)
        } else {
            console.log(start)
            start = mid + 1
        }
    }
    console.log(upperBound)
    if(upperBound==-1){
        return [lowerBound,arr.length-1]
    }
    return [lowerBound,upperBound-1]
    // return lowerBound
}

console.log(practice([5,7,7,8,8,10], 6))