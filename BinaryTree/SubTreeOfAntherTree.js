function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var isSubtree = function (root, subRoot) {
  let queue = [root];
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let front = queue.shift();
      if (front.val == subRoot.val) {
        let check = isSame(front, subRoot);
        if (check) return check;
      }
      if (front.left) queue.push(front.left);
      if (front.right) queue.push(front.right);
    }
  }
  return false;
};
function isSame(t1, t2) {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  return (
    t1.val == t2.val && isSame(t1.left, t2.left) && isSame(t1.right, t2.right)
  );
}

let root = new Node(3);
root.left = new Node(4);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(2);
let subRoot = new Node(4);
subRoot.left = new Node(1);
subRoot.right = new Node(2);
subRoot.right.left = new Node(0);

console.log(isSubtree(root, subRoot));
