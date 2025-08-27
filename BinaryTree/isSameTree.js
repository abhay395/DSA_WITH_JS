function Node(value) {
    this.value = value
    this.left = null;
    this.right = null
}

var isSameTree = function (p, q) {
    let queue = [];
    queue.push(p, q)
    while (queue.length > 0) {
        let t1 = queue.shift()
        let t2 = queue.shift()
        if (!t1 && !t2) continue
        if (!t1 || !t2) return false
        if (t1?.value != t2?.value) return false
        queue.push(t1?.left, t2?.left)
        queue.push(t1?.right, t2?.right)
    }
    return true
};
var levelOrder = function (root) {
    // if (!root) return [];
    let queue = [];
    let result = [];
    queue.push(root);
    while (queue.length > 0) {
        let temp = []
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let front = queue.shift();
            if (front.left) queue.push(front.left)
            if (front.right) queue.push(front.right)
            temp.push(front.val)
        }
        result.push(temp)
    }
    return result
}

let r1 = new Node(1)
r1.left = new Node(2)
r1.right = new Node(1)
let r2 = new Node(1)
r2.left = new Node(1)
r2.right = new Node(2)

console.log(levelOrder(r1))
console.log(levelOrder(r2))

// console.log(isSameTree(r1, r2))