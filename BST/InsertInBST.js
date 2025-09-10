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
var insertInBST = function (root, val) {
    if (!root) return new TreeNode(val)
    let current = root;
    while (true) {
        if (current.val < val) {
            if (!current?.right) {
                current.right = new TreeNode(val)
                break
            }
            current = current.right
        } else {
            if (!current?.left) {
                current.left = new TreeNode(val)
                break
            }
            current = current.left
        }
    }
}



let root = treeBulder([5, 1, 4, null, null, 3, 6])
console.log(isValidBST(root))
