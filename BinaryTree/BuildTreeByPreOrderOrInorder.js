function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let hash = new Map();
    inorder.forEach((item, idx) => hash.set(item, idx))
    let lenPr = preorder.length
    let lenIn = inorder.length
    return helper(preorder, 0, lenPr - 1, inorder, 0, lenIn - 1, hash)
};
function helper(preorder, startPr, endPr, inorder, startIn, endIn, hashMap) {
    if (startPr > endPr || startIn > endIn) return null
    let node = new TreeNode(preorder[startPr]);
    let inRoot = hashMap.get(node.val);
    let numLeft = inRoot - startIn
    console.log(node)
    node.left = helper(preorder, startPr + 1, numLeft + startPr, inorder, startIn, inRoot - 1, hashMap);
    node.right = helper(preorder, startPr + 1 + numLeft, endPr, inorder, inRoot + 1, endIn, hashMap)
    return node
}
buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])