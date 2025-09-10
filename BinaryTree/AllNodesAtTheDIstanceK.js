
//   Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    if (k == 0) return [target?.val]
    let map = new Map();
    map.set(root, null)
    function dfs(root) {
        if (!root) return;
        if (root) map.set(root.left, root)
        if (root) map.set(root.right, root)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    let visit = new Set([target])
    let queue = [target]
    let index = 0;
    let result = [];
    let distance = 0;
    while (queue.length > 0) {
        distance++;
        let size = queue.length - index;
        for (let i = 0; i < size; i++) {
            let front = queue[index++];
            for (let negihbor of [front?.left, front?.right, map.get(front)]) {
                if (negihbor && !visit.has(negihbor)) {
                    queue.push(negihbor)
                    visit.add(negihbor)
                }
            }
        }
        if (distance == k) {
            console.log(queue[index])
            while (index < queue.length) {
                result.push(queue[index++]?.val)
            }
            return result
        }
    }
    return []
};

let treeBulder = (arr, index = 0) => {
    if (index >= arr.length || arr[index] == null) return null
    let node = new TreeNode(arr[index])
    node.left = treeBulder(arr, index * 2 + 1)
    node.right = treeBulder(arr, index * 2 + 2)
    return node
}
let root = treeBulder([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
let target = root.left

console.log(distanceK(root, target, 2))