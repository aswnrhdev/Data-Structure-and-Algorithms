class Node {
    constructor(value) {
        this.value = value; // Value of the node
        this.left = null; // Reference to the left child node
        this.right = null; // Reference to the right child node
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // Root of the binary search tree
    }

    isEmpty() {
        return this.root === null; // Check if the tree is empty
    }

    insert(value) {
        const node = new Node(value); // Create a new node with the given value
        if (this.isEmpty()) { // If the tree is empty, set the new node as the root
            this.root = node;
        } else { // If the tree is not empty, insert the new node recursively
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) { // If the value of the new node is less than the value of the current node
            if (root.left === null) { // If the left child of the current node is null, insert the new node as the left child
                root.left = node;
            } else { // If the left child of the current node is not null, recursively insert the new node into the left subtree
                this.insertNode(root.left, node);
            }
        } else { // If the value of the new node is greater than or equal to the value of the current node
            if (root.right === null) { // If the right child of the current node is null, insert the new node as the right child
                root.right = node;
            } else { // If the right child of the current node is not null, recursively insert the new node into the right subtree
                this.insertNode(root.right, node);
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value); // Start the search from the root node
    }

    searchNode(root, value) {
        if (!root) { // If the current node is null, the value does not exist in the tree
            return false;
        } else {
            if (root.value === value) { // If the value of the current node matches the value being searched for, return true
                return true;
            } else if (value < root.value) { // If the value being searched for is less than the value of the current node, search in the left subtree
                return this.searchNode(root.left, value);
            } else if (value > root.value) { // If the value being searched for is greater than the value of the current node, search in the right subtree
                return this.searchNode(root.right, value);
            } else {
                return false; // If none of the above conditions are met, the value does not exist in the tree
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value); // Print the value of the current node
            this.preOrder(root.left); // Recursively traverse the left subtree in pre-order
            this.preOrder(root.right); // Recursively traverse the right subtree in pre-order
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left); // Recursively traverse the left subtree in in-order
            console.log(root.value); // Print the value of the current node
            this.inOrder(root.right); // Recursively traverse the right subtree in in-order
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left); // Recursively traverse the left subtree in post-order
            this.postOrder(root.right); // Recursively traverse the right subtree in post-order
            console.log(root.value); // Print the value of the current node
        }
    }

    levelOrder() {
        const queue = []; // Initialize a queue for level-order traversal
        queue.push(this.root); // Enqueue the root node
        while (queue.length) { // Continue traversal until the queue is empty
            let curr = queue.shift(); // Dequeue the front node from the queue
            console.log(curr.value); // Print the value of the dequeued node
            if (curr.left) { // If the dequeued node has a left child, enqueue it
                queue.push(curr.left);
            }
            if (curr.right) { // If the dequeued node has a right child, enqueue it
                queue.push(curr.right);
            }
        }
    }

    min(root) { // Find the minimum value in the tree starting from the given root node
        if (!root.left) { // If there is no left child, the minimum value is found
            return root.value;
        } else {
            return this.min(root.left); // Recursively search in the left subtree for the minimum value
        }
    }

    max(root) { // Find the maximum value in the tree starting from the given root node
        if (!root.right) { // If there is no right child, the maximum value is found
            return root.value;
        } else {
            return this.max(root.right); // Recursively search in the right subtree for the maximum value
        }
    }

    delete(value) { // Delete a node with the given value from the tree
        this.root = this.deleteNode(this.root, value); // Start the deletion from the root node
    }

    deleteNode(root, value) { // Helper method to delete a node with the given value from the tree
        if (root === null) { // If the current node is null, the value does not exist in the tree
            return root;
        }
        if (value < root.value) { // If the value to be deleted is less than the value of the current node, delete from the left subtree
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) { // If the value to be deleted is greater than the value of the current node, delete from the right subtree
            root.right = this.deleteNode(root.right, value);
        } else { // If the value to be deleted matches the value of the current node
            if (!root.left && root.right) { // Case 1: Node has only right child or no children
                return null; // Set the current node to null
            }
            if (!root.left) { // Case 2: Node has only left child
                return root.right; // Replace the current node with its right child
            } else if (!root.right) { // Case 3: Node has only right child
                return root.left; // Replace the current node with its left child
            }
            // Case 4: Node has both left and right children
            root.value = this.min(root.right); // Find the minimum value in the right subtree
            root.right = this.deleteNode(root.right, root.value); // Delete the node with the minimum value from the right subtree
        }
        return root;
    }

    isTreeEqual(root1, root2) {
        if (root1 === null && root2 === null) {
            return true
        }

        if (root1 === null || root2 === null) {
            return false
        }

        if (root1.value !== root2.value) {
            return false
        }

        return this.isTreeEqual(root1.left, root2.left) && this.isTreeEqual(root1.right, root2.right)
    }
}



// Example usage:
const bst1 = new BinarySearchTree();
const bst2 = new BinarySearchTree();

bst1.insert(10);
bst1.insert(5);
bst1.insert(15);
bst1.insert(3);
bst1.insert(7);

// bst2.insert(10);
bst2.insert(5);
bst2.insert(15);
bst2.insert(3);
bst2.insert(7);

console.log(bst1.isTreeEqual(bst1.root, bst2.root));

// console.log(bst.search(5));
// console.log(bst.search(70));

// console.log(bst.max(bst.root));
// console.log(bst.min(bst.root));

// bst.levelOrder();

// console.log('preOrder');
// bst.preOrder(bst.root);

// console.log('inOrder');
// bst.inOrder(bst.root);

// console.log('postOrder');
// bst.postOrder(bst.root);

// bst.delete(10);
// bst.levelOrder();
