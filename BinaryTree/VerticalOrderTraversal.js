function Node(value) {
    this.val = value
    this.left = null
    this.right = null
}

let treeBulder = (arr, index = 0) => {
    if (index >= arr.length || arr[index] == null) return null
    let node = new Node(arr[index])
    node.left = treeBulder(arr, index * 2 + 1)
    node.right = treeBulder(arr, index * 2 + 2)
    return node
}

var verticalTraversal = function (root) {
    let queue = [[root, 0, 0]];
    let map = new Map();
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [node, row, col] = queue.shift();
            if (!map.has(col)) map.set(col, [])
            map.get(col).push([row, node.val])
            if (node?.left) queue.push([node.left, row + 1, col - 1]);
            if (node?.right) queue.push([node.right, row + 1, col + 1]);
        }
    }
    let arr = Array.from(map.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([_, nodes]) => nodes.sort((a, b) =>a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]).map(el=>el[1]))
        
    return arr
};

let root = treeBulder([3, 9, 20, null, null, 15, 7]);

verticalTraversal(root)