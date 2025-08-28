

function Node(val) {
    this.left = null
    this.right = null
    this.val = val
}

var lowestCommonAncestor = function (root, p, q) {
    if (root == p || root == q || !root) {
        return root
    }
    let leftNode = lowestCommonAncestor(root.left, p, q)
    let rightNode = lowestCommonAncestor(root.right, p, q)
    if (!leftNode) return rightNode
    if (!rightNode) return leftNode
    else return root
}

let root = new Node(0);
root.left = new Node(1);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
let p = root.left.left
let q = root.right.left

console.log(lowestCommonAncestor(root, p, q).val)