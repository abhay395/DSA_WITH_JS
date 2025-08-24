function Node(value) {
    this.value = value
    this.left = null;
    this.right = null
}

function traversal(root) {
    let preOrder = [];
    let inorder = [];
    let postOrder = [];
    let st = [];
    st.push([root, 1]);
    while (st.length > 0) {
        let [top, num] = st[st.length - 1]
        if (num == 1) {
            preOrder.push(top.value)
            st[st.length - 1][1]++;
            if (top.left) st.push([top.left, 1])
        } else if (num == 2) {
            inorder.push(top.value);
            st[st.length - 1][1]++
            if (top.right) st.push([top.right, 1]);
        } else {
            postOrder.push(top.value);
            st.pop();
        }
    }
    console.log(preOrder)
    console.log(inorder)
    console.log(postOrder)
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

traversal(root)
