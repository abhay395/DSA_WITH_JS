
function Node(val) {
    this.val = val
    this.left = null;
    this.right = null
}

/**
 * @param {Node} root
 * @return {number[]}
 */

var rightSideView = function (root) {
    let queue = [];
    let result = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let top = queue.shift();
            if (i == size - 1) result.push(top.val)
            if (top?.left) queue.push(top.left)
            if (top?.right) queue.push(top.right)
        }
    }
    return result
}

let root = new Node(3)
root.left = new Node(9)
root.right = new Node(20)
root.right.left = new Node(15)
root.right.right = new Node(7)
console.log(rightSideView(root))