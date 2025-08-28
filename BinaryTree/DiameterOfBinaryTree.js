function Node(val) {
    this.val = val
    this.left = null;
    this.right = null
}
/**
 * @param {Node} root
 * @return {boolean}
 */
var DiameterOfBinaryTree = function (root) {
    // let diamter = 0
    // const findMax = (root) => {
    //     if (!root) return;
    //     let lefthight = hightOfTree(root.left);
    //     let righthight = hightOfTree(root.right);
    //     diamter = Math.max(lefthight + righthight, diamter)
    //     findMax(root.left)
    //     findMax(root.right)
    // }
    // findMax(root)
    // console.log(diamter)
    let diameter = { value: 0 };
    hightOfTree(root, diameter)
    return diameter.value
};

function hightOfTree(root, diameter) {
    if (!root) {
        return 0
    }
    let lefthight = hightOfTree(root?.left, diameter);
    let righthight = hightOfTree(root?.right, diameter);
    diameter.value = Math.max(diameter.value, lefthight + righthight)
    return Math.max(lefthight, righthight) + 1
}
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [];
    let result = [];
    queue.push(root);
    while (queue.length != 0) {
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

let root = new Node(0)
root.left = new Node(1)
root.right = new Node(2)
root.left.left = new Node(3)
root.left.right = new Node(4)
root.right.left = new Node(5)
root.right.left.left = new Node(7)
root.right.right = new Node(6)

console.log(levelOrder(root))
DiameterOfBinaryTree(root)