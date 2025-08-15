
function MergeSort(arr, low, highe) {
    if (low >= highe) return;
    let mid = Math.floor((low + highe) / 2)
    MergeSort(arr, low, mid);
    MergeSort(arr, mid + 1, highe)
    console.log(low, mid, highe);
    Merge(arr, low, mid, highe)
}
function Merge(arr, low, mid, highe) {
    let i = low;
    let j = mid + 1;
    let temp = [];
    // console.log(low,mid,highe)
    while (i <= mid && j <= highe) { 
        if (arr[i] < arr[j]) {
            console.log(arr[i], arr[j])
            temp.push(arr[i++]);
        } else {
            temp.push(arr[j++])
        }
    }
    while (i <= mid) {
        temp.push(arr[i++]);
    }
    // console.log(k, j)
    while (j <= highe) {
        temp.push(arr[j++])
    }
    i = 0;
    let k = low
    while (k <= highe) {
        arr[k++] = temp[i++];
        // i++;
    }
    console.log(temp);
}
let arr = [3, 1, 2, 5, 4];
MergeSort(arr, 0, arr.length - 1)
// Merge(arr,0,2,arr.length-1)
console.log(arr)