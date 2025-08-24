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
function preOrderTraversalIterative(root) {
    let result = []
    let stack = [];
    stack.push(root);
    while (stack.length != 0) {
        let top = stack.pop();
        result.push(top.value)
        if (top.right) stack.push(top.right)
        if (top.left) stack.push(top.left)
    }
    console.log(result)
}
function InorderTraversalIterative(root) {
    let result = [];
    let stack = [];
    let current = root;
    while (current != null || stack.length > 0) {
        while (current != null) {
            stack.push(current);
            current = current.left;
        }
        let top = stack.pop();
        result.push(top.value);
        current = top.right
    }
    console.log(result)
}
function postOrderTraversalIterative(root) {
    let st1 = []
    let st2 = []
    let result = []
    st1.push(root);

    while (st1.length > 0) {
        let top = st1.pop();
        if (top.left) st1.push(top.left)
        if (top.right) st1.push(top.right)
        st2.push(top);
    }
    while (st2.length > 0) {
        result.push(st2.pop().value)
    }
    console.log(result)
}
function postOrderTraversalIterativeWithOneStack(root) {
    let st = []
    let result = []
    let lastVisited = null
    let current = root;
    while (st.length > 0 || current != null) {
        while (current) {
            st.push(current)
            current = current.left;
        }
        let peekNode = st[st.length - 1];
        if (peekNode.right && peekNode.right != lastVisited) {
            current = peekNode.right
        } else {
            lastVisited = st.pop();
            result.push(lastVisited.value);
        }
    }
    console.log(result)
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

// inOrderTraversal(root) // 3 1 4 0 5 2 6 In order
// preOrderTraversal(root) //  0 1 3 4 2 5 6 Pre Order
postOrderTraversalIterativeWithOneStack(root) // 3 4 1 5 6 2 0 Post Order
// console.log(root)