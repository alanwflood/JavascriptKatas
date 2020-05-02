class ListNode {
    constructor(value, key) {
        this.value = value;
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.start = null;
        this.end = null;
        this.capacity = capacity;
    }
    
    addAtTop(node) {
        node.right = this.start;
        node.left = null;
        if (this.start !== null) this.start.left = node;
        this.start = node
        if (this.end === null) this.end = this.start
    }
    
    removeNode(node) {
        if (node.left !== null) node.left.right = node.right
        else this.start = node.right;
        
        if (node.right !== null) node.right.left = node.left;
        else this.end = node.left
    }
    
    get(key) {
        console.log("key:", key);
        if (this.cache.has(key)) {
            const entry = this.cache.get(key);
            this.removeNode(entry)
            this.addAtTop(entry)
            return entry.value
        }
        return -1
    }
    
    put(key, value) {
        if (this.cache.has(key)) {
            const entry = this.cache.get(key);
            entry.value = value;
            this.removeNode(entry);
            this.addAtTop(entry)
        } else {
            const newNode = new ListNode(value, key);
            if (this.cache.size >= this.capacity) {
                this.cache.delete(this.end.key);
                this.removeNode(this.end);
                this.addAtTop(newNode);
            } else {
                this.addAtTop(newNode)
            }
            this.cache.set(key, newNode)
        }
    };
}

