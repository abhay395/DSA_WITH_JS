
function Node(value) {
    this.value = value
    this.left = null;
    this.right = null
}

var isSymmetricBinaryTree = function (root) {
    //     if (!root) return true // ? Done by me 
    //     let st1 = [];
    //     let st2 = [];
    //     st1.push(root.left)
    //     st2.push(root.right)
    //     while (st1.length > 0 || st2.length > 0) {
    //         let top1 = st1.pop();
    //         let top2 = st2.pop();
    //         if (top1.value != top2.value) return false;
    //         if (top1.right) st1.push(top1.right)
    //         if (top1.left) st1.push(top1.left)
    //         if (top2.left) st2.push(top2.left)
    //         if (top2.right) st2.push(top2.right)
    //     }
    //    return true
    let queue = []
    queue.push(root?.left, root?.right)
    while (queue.length > 0) {
        let t1 = queue.shift();
        let t2 = queue.shift();
        if (!t1 && !t2) continue;
        if (!t1 || !t2) return false
        if (t1.value != t2.value) return false
        queue.push(t1.left, t2.right);
        queue.push(t1.right, t2.left)
    }
    return true
};
function SymmetricHelp(leftTree, rightTree) {
    if (leftTree == null || rightTree == null) return leftTree == rightTree
    if (leftTree.value != leftTree.value) return false

}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(5);
root.right.right = new Node(4);

console.log(isSymmetricBinaryTree(root))