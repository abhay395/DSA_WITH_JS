function Node(value) {
    this.value = value
    this.left = null;
    this.right = null
}


var zigzagLevelOrder = function (root) {
    if (!root) return []
    let flag = false;
    let queue = []
    let result = []
    queue.push(root)
    while (queue.length > 0) {
        let temp = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let top = queue.shift();
            temp.push(top.value)
            if (top.left) queue.push(top.left)
            if (top.right) queue.push(top.right)
        }
        if (flag) {
            temp.reverse()
        }
        flag = !flag
        result.push(temp)
    }
    return result
};

let root = new Node(0);
// root.left = new Node(1);
// root.right = new Node(2);
// root.left.left = new Node(3);
// root.left.right = new Node(4);
// root.right.left = new Node(5);
// root.right.right = new Node(6);

zigzagLevelOrder(root)