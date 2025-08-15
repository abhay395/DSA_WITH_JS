function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[min] > arr[j]) {
                min = j
            };
        }
        if (i != min) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp
        }
    }
    return arr;
}
console.log(selectionSort([4, 5, 2, 1, 5, 9, 8]))