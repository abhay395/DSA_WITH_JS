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
var kthSmallest = function (root, k) {
    // let inorder = [];
    let index = { value: 1 }
    let result = null;
    function dfs(root) {
        if (!root || result != null) return;
        dfs(root.left)
        if (index.value == k) {
            result = root.val
        }
        index.value++;
        dfs(root.right)
    }
    dfs(root)
    return result
    // return inorder[k-1]
};
let root = treeBulder([5, 3, 6, 2, 4, null, null, 1])
console.log(kthSmallest(root, 3))
