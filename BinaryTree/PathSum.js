
//   Definition for a binary tree node.
function Node(value) {
    this.value = value
    this.left = null;
    this.right = null
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // let stack = [];
    // let current = root;
    // let value = 0;
    // let lastvisited = null // ? My way to solve question 
    // while (stack.length > 0 || current != null) {
    //     while (current) {
    //         value += current.value
    //         stack.push(current);
    //         current = current.left;
    //     }
    //     let peek = stack[stack.length - 1];
    //     if (value == targetSum && !peek.left && !peek.right) {
    //         // console.log(peek)
    //         return true
    //     }
    //     if (peek.right != null && lastvisited != peek.right) {
    //         current = peek.right
    //     } else {
    //         lastvisited = stack.pop();
    //         value = value - peek.value
    //     }
    // }
    // return false
    let stack = [];
    stack.push([root, root.value])
    while (stack.length > 0) {
        let [node, sum] = stack.pop();
        if (!node.left && !node.right && sum == targetSum) {
            return true
        }
        if (node.left) stack.push([node.left, sum + node.left.value])
        if (node.right) stack.push([node.right, sum + node.right.value])
    }
    return false
};

// let root = new Node(1);
// root.left = new Node(2)
let root = new Node(5)
root.left = new Node(4);
root.left.left = new Node(11);
root.left.left.left = new Node(7);
root.left.left.left = new Node(2);
root.right = new Node(8);
root.right.left = new Node(13);
root.right.left = new Node(4);
root.right.left.right = new Node(4);

console.log(hasPathSum(root, 22))