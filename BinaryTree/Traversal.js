// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

function Node(value) {
    this.value = value
    this.left = null;
    this.right = null
}
function preOrderTraversal(root) {
    let result = []
    function dfs(root) {
        if (!root) {
            return;
        }
        result.push(root.value)
        dfs(root.left);
        dfs(root.right)
    }
    dfs(root)
    console.log(result)
    // return result
}
function postOrderTraversal(root) {
    let result = [];
    function dfs(root) {
        if (!root) {
            return;
        }
        dfs(root.left);
        dfs(root.right)
        result.push(root.value)
    }
    dfs(root)
    console.log(result)
}
function inOrderTraversal(root) {
    let result = [];
    function dfs(root) {
        if (!root) {
            return;
        }
        dfs(root.left)
        result.push(root.value)
        dfs(root.right)
    }
    dfs(root)
    console.log(result)
}
let root = new Node(0);
root.left = new Node(1);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);

inOrderTraversal(root) // 3 1 4 0 5 2 6 In order
preOrderTraversal(root) //  0 1 3 4 2 5 6 Pre Order
postOrderTraversal(root) // 3 4 1 5 6 2 0 Post Order
// console.log(root)