
function Node(value) {
    this.value = value
    this.left = null;
    this.right = null
}

// function LevelOrderTraversal(root) {
//     let arr = [];
//     let queue = [];
//     queue.push(root);
//     while (queue.length != 0) {
//         let temp = [];
//         let size = queue.length;
//         for (i = 0; i < size; i++) {
//             let front = queue.shift();
//             if (front.left) queue.push(front.left)
//             if (front.right) queue.push(front.right)
//             temp.push(front.value)
//         }
//         arr.push(temp)
//     }
//     return arr
// }
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [];
    let result = [];
    queue.push(root);
    while (queue.length != 0) {
        let temp = []
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let front = queue.shift();
            if (front.left) queue.push(front.left)
            if (front.right) queue.push(front.right)
            temp.push(front.val)
        }
        result.push(temp)
    }
    return result
}

let root = new Node(0);
root.left = new Node(1);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
levelOrder(root)
