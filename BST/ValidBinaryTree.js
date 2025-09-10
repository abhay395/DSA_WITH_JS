function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let treeBulder = (arr, index = 0) => {
    if (index >= arr.length || arr[index] == null) return null
    let node = new TreeNode(arr[index])
    node.left = treeBulder(arr, index * 2 + 1)
    node.right = treeBulder(arr, index * 2 + 2)
    return node
}
var isValidBST = function (root) {
    console.log(Infinity)
    return helper(root, -Infinity, Infinity)
}
function helper(node, min, max) {
    if (!node) return true;
    if (node.val <= min) return false
    else if (node.val >= max) return false
    return helper(node.left, min, node.val) && helper(node.right, node.val, max)
}


let root = treeBulder([5, 1, 4, null, null, 3, 6])
console.log(isValidBST(root))
