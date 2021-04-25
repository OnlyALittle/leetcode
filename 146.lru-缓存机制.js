/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start

function LinkNode(key, val) {
	this.key = key;
	this.val = val;
	this.pre = null;
	this.next = null;
}

function DoubleLinkNode() {
	this.head = new LinkNode();
	this.tail = new LinkNode();

	this.head.next = this.tail;
	this.tail.pre = this.head;

}

DoubleLinkNode.prototype.add = function(node) {
	node.next = this.head.next;
	this.head.next.pre = node;
	node.pre = this.head;
	this.head.next = node;
}

DoubleLinkNode.prototype.remove = function(node) {
	const prevNode = this.tail.pre;
	prevNode.pre.next = this.tail;
	this.tail.pre = prevNode.pre;
	return prevNode;
}

DoubleLinkNode.prototype.moveToHead = function(node) {
	node.pre.next = node.next;
	node.next.pre = node.pre;
	node.pre = null;
	node.next = null;
	this.add(node)
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
	this.temp = {};
	this.capacity = capacity;
	this.size = 0;
	this.dbLink = new DoubleLinkNode();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	let tNode = this.temp[key];
	if (tNode !== undefined) {
		this.dbLink.moveToHead(tNode);
		return tNode.val;
	}
	return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
	let tNode = this.temp[key];
	if (tNode !== undefined) {
		tNode.val = value;
		this.dbLink.moveToHead(tNode);
	} else {
		let newNode = new LinkNode(key, value)
		this.temp[key] = newNode;
		this.dbLink.add(newNode)
		this.size++;
		if (this.size > this.capacity) {
			let tNode = this.dbLink.remove();
			delete this.temp[tNode.key];
			this.size--;
		}
	}
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

let lRUCache = new LRUCache(3);


["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"]


lRUCache.put(1, 1);
lRUCache.put(2, 2);  
lRUCache.put(3, 3);  
lRUCache.put(4, 4);  
console.log(lRUCache.get(4));    
console.log(lRUCache.get(3));    
console.log(lRUCache.get(2));    
console.log(lRUCache.get(1));    
lRUCache.put(5, 5);  
console.log(lRUCache.get(1));    
console.log(lRUCache.get(2));    
console.log(lRUCache.get(3));    
console.log(lRUCache.get(4));    
console.log(lRUCache.get(5));    