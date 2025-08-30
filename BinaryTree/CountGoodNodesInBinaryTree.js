function Node(val) {
    this.val = val
    this.left = null;
    this.right = null
}
/**
 * @param {Node} root
 * @return {number}
 */
var goodNodes = function (root) {
    let count = { value: 0, node: root };
    let stack = []
    let current = root
    let lastVisited = null
    while (stack.length > 0 || current) {
        while (current) {
            if (count.node.val <= current.val) {
                count.value++;
                count.node = current
            }
            stack.push(current)
            current = current.left
        }
        let top = stack[stack.length - 1]
        if (top?.right && lastVisited != top.right) {
            current = top.right
            count.node = current
        } else {
            lastVisited = stack.pop()
        }
    }
    return count.value
};
// function findNumberOfGoodNode(root, count) {
//     if (!root) return
//     if (root?.val >= count.node?.val) {
//         console.log(root)
//         count.value = count.value + 1;
//         count.node = root
//     }
//     findNumberOfGoodNode(root.left, count)
//     findNumberOfGoodNode(root.right, count)
// }

let root = new Node(2)
root.right = new Node(4)
root.right.left = new Node(10)
root.right.right = new Node(8)
root.right.right.left = new Node(4)
// root.left.left = new Node(4)
// root.left.right = new Node(2)
// root.right = new Node(4)
// root.left.right = new Node(3)
// root.right.left = new Node(1)
// root.right.right = new Node(5)

goodNodes(root)