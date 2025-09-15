


class heap {
    arr = [-1];
    insertInHeap(val) {
        this.arr.push(val);
        let index = this.arr.length - 1;
        while (index > 1) {
            let parent = Math.floor(index / 2)
            if (this.arr[parent] < this.arr[index]) {
                [this.arr[parent], this.arr[index]] = [this.arr[index], this.arr[parent]]
                index = parent
            }
            else break
        }
    }
    deletionHeap() {
        if (this.arr.length == 1) {
            console.log("heap is empty")
            return
        }
        this.arr[1] = this.arr[this.arr.length - 1]
        this.arr.pop();
        let i = 1;
        while (true) {
            let left = i * 2;
            let right = i * 2 + 1
            let largest = i;
            if (left < this.arr.length && this.arr[largest] < this.arr[left]) {
                largest = left
            }
            if (right < this.arr.length && this.arr[largest] < this.arr[right]) {
                largest = right
            }
            if (largest == i) {
                break
            }
            [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]]
            i = largest
        }
    }
    prinHeap() {
        for (let i = 1; i < this.arr.length; i++) {
            console.log(this.arr[i])
        }
    }
}

function heapify(arr, i) {
    let left = i * 2
    let right = i * 2 + 1
    let largest = i;
    if (left < arr.length && arr[left] > arr[largest]) largest = left
    if (right < arr.length && arr[right] > arr[largest]) largest = right
    if (largest != i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]]
        heapify(arr, largest)
    }
}
let h1 = new heap()


let arr = [-1, 54, 53, 55, 52, 50]
for (let i = Math.floor(arr.length / 2); i > 0; i--) {
    heapify(arr, i)
}
console.log(arr)
// h1.insertInHeap(45)
// h1.insertInHeap(4)
// h1.insertInHeap(49)
// h1.insertInHeap(50)
// h1.insertInHeap(51)
// h1.insertInHeap(55)
// h1.prinHeap()
// h1.deletionHeap()
// h1.deletionHeap()
// h1.deletionHeap()
// h1.deletionHeap()
// h1.deletionHeap()
// h1.deletionHeap()
// h1.deletionHeap()
// console.log()
