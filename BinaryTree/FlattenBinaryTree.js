//   Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var flattenBinaryTree = function (root) {
    if (!root || !root?.left || !root.right) return
    flattenBinaryTree(root?.left)
    flattenBinaryTree(root?.right)
    let tempright = root.right;
    root.right = root.left
    let current = root.right;
    while (current && current?.right) {
        current = current.right
    }
    current.right = tempright
}

let treeBulder = (arr, index = 0) => {
    if (index >= arr.length || arr[index] == null) return null
    let node = new TreeNode(arr[index])
    node.left = treeBulder(arr, index * 2 + 1)
    node.right = treeBulder(arr, index * 2 + 2)
    return node
}
let root = treeBulder([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
let target = root.left

console.log(distanceK(root, target, 2))