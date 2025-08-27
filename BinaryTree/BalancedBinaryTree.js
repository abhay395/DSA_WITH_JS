function Node(val) {
    this.val = val
    this.left = null;
    this.right = null
}
/**
 * @param {Node} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    // if (!root) return true
    // let hightOfLeftSubTree = hightOfTree(root.left);
    // let hightOfRightSubTree = hightOfTree(root.right);
    // if (Math.abs(hightOfLeftSubTree - hightOfRightSubTree) > 1) return false
    // let checkForLeftSubtree = isBalanced(root.left);
    // let checkForRightSubtree = isBalanced(root.right);
    // if (!checkForLeftSubtree || !checkForRightSubtree) {
    //     return false
    // }
    // return true
    let check = hightOfTree(root)
    if (check == -1) return false
    return true
};

function hightOfTree(root) {
    if (!root) {
        return 0
    }
    let lefthight = hightOfTree(root?.left);
    let righthight = hightOfTree(root?.right);
    if (Math.abs(lefthight - righthight) > 1) return -1
    return Math.max(lefthight, righthight) + 1
}

let root = new Node(3)
root.left = new Node(9)
root.right = new Node(20)
root.right.left = new Node(15)
root.right.right = new Node(7)

console.log(isBalanced(root))