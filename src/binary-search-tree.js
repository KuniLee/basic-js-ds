const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    #root

    constructor() {
        this.#root = null;
    }

    root() {
        return this.#root
    }

    add(data) {
        this.#root = addBelow(this.#root, data)

        function addBelow(node, data) {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addBelow(node.left, data);
            } else {
                node.right = addBelow(node.right, data);
            }
            return node;
        }
    }

    #findBelow(node, data) {
        if (!node) {
            return null;
        }

        if (node.data === data) {
            return node;
        }

        return data < node.data ?
            this.#findBelow(node.left, data) :
            this.#findBelow(node.right, data);
    }

    has(data) {
        return !!this.#findBelow(this.#root, data)
    }

    find(data) {
        return this.#findBelow(this.#root, data)
    }

    remove(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    max() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

// const tree = new BinarySearchTree();
// tree.add(1);
// tree.add(2);
// console.log(tree.has(2))

module.exports = {
    BinarySearchTree
};