function Node(val) {
    this.val = val
    this.left = null;
    this.right = null
}

var invertTree = function (root) {
    let queue = []
    queue.push(root);
    while (queue.length > 0) {
        let front = queue.shift();
        if (!front.left && !front.right) {
            continue
        }
        let temp = front.left;
        front.left = front.right;
        front.right = temp
        if (front.left) queue.push(front.left)
        if (front.right) queue.push(front.right)
    }
    return root
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


let root = new Node(4)
root.left = new Node(2)
root.right = new Node(7)
root.left.left = new Node(1)
root.left.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(9)

console.log(levelOrder(root))
root = invertTree(root)
console.log(levelOrder(root))