function Node(val) {
    this.val = val
    this.next = null
    this.left = null
    this.right = null
}

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) return root
    let queue = [root]
    while (queue.length > 0) {
        let size = queue.length;
        let prev = null
        for (let i = 0; i < size; i++) {
            let top = queue.shift();
            top.next = prev;
            // console.log(prev)
            prev = top;
            if (top?.right) queue.push(top.right)
            if (top?.left) queue.push(top.left)
        }
    }
    return root
};

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

root = connect(root)

console.log(root.left)