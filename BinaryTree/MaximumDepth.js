
function Node(value) {
    this.value = value
    this.left = null;
    this.right = null
}

var maxDepth = function (root) {
    // let queue = [];
    // let hight = 0
    // let left = 0;
    // queue.push(root); //* Level order traverese Time complexity O(n) in n is number of Nodes and Space Compexity O(n)
    // while (queue.length - left > 0) {
    //     let size = queue.length - left; //! Right more optimal 
    //     let temp = [];
    //     for (let i = 0; i < size; i++) {
    //         let front = queue[left++]
    //         if (front.left) queue.push(front.left)
    //         if (front.right) queue.push(front.right)
    //         temp.push(front.value)
    //     }
    //     console.log(temp)
    //     hight++
    // }
    // console.log(hight)
    if (!root) return 0;
    let lefthight = maxDepth(root?.left)
    let righthight = maxDepth(root?.right)
    return Math.max(lefthight, righthight) + 1
};
let root = new Node(0);
root.left = new Node(1);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);

console.log(maxDepth(root))