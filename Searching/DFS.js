class node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class queue {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

class myTree {
  constructor(value) {
    this.root = new node(value);
  }

  insertNode(value) {
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new node(value);
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new node(value);
          break;
        }
        currentNode = currentNode.right;
      }
      console.log(currentNode.value);
    }
  }

  bfs() {
    let que = new queue(this.root);
    let top = que;
    let tail = que;
    while (true) {
      console.log("--> ", top.node.value);
      tail.next = top.node.left;
      tail = tail.next;
      tail.next = top.node.right;
      tail = tail.next;
      console.log(tail);
      top = top.next;
      if (!top) break;
    }
  }
}

const tree = new myTree(9);
tree.insertNode(4);
tree.insertNode(1);
tree.insertNode(6);
tree.insertNode(20);
tree.insertNode(15);
tree.insertNode(45);

console.log(JSON.stringify(tree, null, 2));
tree.bfs();
