// Simple Tree Node
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Create a very deep tree (like a linked list only to the left)
function createDeepTree(depth) {
    let root = new TreeNode(1);
    let curr = root;
    for (let i = 2; i <= depth; i++) {
        curr.right = new TreeNode(i);
        curr = curr.right;
    }
    return root;
}

// Width of Binary Tree (WITHOUT using index - firstIndex adjustment)
function widthOfBinaryTree(root) {
    if (!root) return 0;
    let maxWidth = 0;
    let queue = [[root, 0]]; // [node, index]

    while (queue.length > 0) {
        let size = queue.length;
        let firstIndex = queue[0][1];
        let lastIndex = queue[queue.length - 1][1];
        maxWidth = Math.max(maxWidth, lastIndex - firstIndex + 1);

        for (let i = 0; i < size; i++) {
            let [node, index] = queue.shift();
            index = index - firstIndex
            if (node.left) queue.push([node.left, 2 * index]);
            if (node.right) queue.push([node.right, 2 * index + 1]);
            console.log(index)
        }
    }
    return maxWidth;
}

// Create a deep tree
let deepTree = createDeepTree(10000); // depth = 1000
console.log("Width:", widthOfBinaryTree(deepTree));
