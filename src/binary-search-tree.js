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

    remove(data) {
        this.#root = removing(this.#root, data)

        function removing(node, data) {
            if (!node) return null
            if (node.data < data) {
                node.right = removing(node.right, data)
                return node
            } else if (node.data > data) {
                node.left = removing(node.left, data)
                return node
            } else {
                if (node.right === null && node.left === null) return null
                if (node.left === null) return node.right
                else if (node.right === null) return node.left

                let maxFromLeft = node.left;
                while (maxFromLeft.right) maxFromLeft = maxFromLeft.right
                node.data = maxFromLeft.data;
                node.left = removing(node.left, maxFromLeft.data);
                return node;
            }


        }
    }

    min(node = this.#root) {
        return node.left ? this.min(node.left) : node.data
    }

    max(node = this.#root) {
        return node.right ? this.max(node.right) : node.data
    }
}


module.exports = {
    BinarySearchTree
};