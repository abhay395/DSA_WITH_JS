


function pickPivot(arr, low, highe) {
    let pivot = arr[low];
    let i = low;
    let j = highe;
    while (i < j) {
        while (arr[i] <= pivot && i < highe) i++
        while (arr[j] > pivot && j > low) j--
        if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    [arr[low], arr[j]] = [arr[j], arr[low]]
    return j
}

function quickSort(arr, low, highe) {
    if (low < highe) {
        let partion = pickPivot(arr, low, highe);
        quickSort(arr, low, partion - 1)
        quickSort(arr, partion + 1, highe)
    }
}

let arr = [4, 6, 2, 5, 7, 9, 1, 3]
let a = quickSort(arr, 0, arr.length - 1)
console.log(arr)