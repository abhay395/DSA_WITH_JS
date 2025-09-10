


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
    prinHeap() {
        for (let i = 1; i < this.arr.length; i++) {
            console.log(this.arr[i])
        }
    }
}

let h1 = new heap()

h1.insertInHeap(45)
h1.insertInHeap(4)
h1.insertInHeap(49)
h1.insertInHeap(50)
h1.insertInHeap(5)
h1.prinHeap()