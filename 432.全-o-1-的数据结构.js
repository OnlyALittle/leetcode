
class ListNode{
    constructor(val, key){
        this.val = val;
        this.key = key;
        this.pre = null;
        this.next = null;
    }
}

class DLinkList{
    constructor(){
        this.head = new ListNode(null, null);
        this.tail = new ListNode(null, null);
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }
    addAtHead(val, key){
        let newListNode = new ListNode(val, key);
        this.head.next.pre = newListNode;
        newListNode.pre = this.head;
        newListNode.next = this.head.next;
        this.head.next = newListNode;
        return newListNode;
    }
    addAtTail(val, key){
        let newListNode = new ListNode(val, key);
        this.tail.pre.next = newListNode;
        newListNode.pre = this.tail.pre;
        newListNode.next = this.tail;
        this.tail.pre = newListNode;
        return newListNode;
    }
    deleteNode(node){
        node.pre.next = node.next;
        node.next.pre = node.pre;
    }
}

/**
 * Initialize your data structure here.
 */
var AllOne = function() {
    //存储key到链表节点地址的映射 value => node;
    this.map = new Map();
    //存储同一value值的到链表的头尾节点地址的映射数组value => [head, tail];
    this.valMap = new Map();
    //维护递增的双向链表
    this.list = new DLinkList();
};

AllOne.prototype.inc = function(key) {
    if(this.map.has(key)){
        let node = this.map.get(key),
            thisNodeArray = this.valMap.get(node.val);
        node.val += 1;
        //如果当前节点不是尾节点，插入尾节点之后
        if(node != thisNodeArray[1]){
            let temp = thisNodeArray[1];
            node.next.pre = node.pre;
            node.pre.next = node.next;
            temp.next.pre = node;
            node.next = temp.next;
            temp.next = node;
            node.pre = temp;
        }
        //有且只有一个节点 head == node == tail;
        if(thisNodeArray[0] == thisNodeArray[1]){
            this.valMap.delete(node.val);
        }else{
            //node是头节点 head == node
            if(node == thisNodeArray[0]){
                thisNodeArray[0] = thisNodeArray[0].next;
            }
            //node是尾节点 node == tail
            if(node == thisNodeArray[1]){
                thisNodeArray[1] = thisNodeArray[1].pre;
            }
        }
        if(this.valMap.has(node.val)){
            this.valMap.get(node.val)[0] = node;
        }else{
            this.valMap.set(node.val, [node, node]);
        }
    } else{
        let newNode = this.list.addAtHead(1, key);
        //新加入的节点都在之前节点的前面
        if(this.valMap.has(1)){
            this.valMap.get(1)[0] = newNode;
        }else{
            this.valMap.set(1, [newNode, newNode]);
        }
        this.map.set(key, newNode);
    }
};

AllOne.prototype.dec = function(key) {
    if(!this.map.has(key)) return
	let node =  this.map.get(key),
		thisNodeArray = this.valMap.get(node.val);
	node.val -= 1;
	if(node.val == 0){
		this.list.deleteNode(node);
		this.map.delete(key);
		//节点唯一
		if(thisNodeArray[0] == thisNodeArray[1]){
			this.valMap.delete(node.val);
		}else{
			//node是头节点 head == node
			if(node == thisNodeArray[0]){
				thisNodeArray[0] = thisNodeArray[0].next;
			}
			//node是尾节点 node == tail
			if(node == thisNodeArray[1]){
				thisNodeArray[1] = thisNodeArray[1].pre;
			}
		}
	}else{
		if(node != thisNodeArray[0]){
			let temp = thisNodeArray[0];
			node.pre.next = node.next;
			node.next.pre = node.pre;
			temp.pre.next = node;
			node.pre = temp.pre;
			temp.pre = node;
			node.next = temp;
		}
		if(thisNodeArray[0] == thisNodeArray[1]){
			this.valMap.delete(node.val);
		}else{
			//node是头节点 head == node
			if(node == thisNodeArray[0]){
				thisNodeArray[0] = thisNodeArray[0].next;
			}
			//node是尾节点 node == tail
			if(node == thisNodeArray[1]){
				thisNodeArray[1] = thisNodeArray[1].pre;
			}
		}
		if(this.valMap.has(node.val)){
			this.valMap.get(node.val)[1] = node;
		}else{
			this.valMap.set(node.val, [node, node]);
		}
	}
};

AllOne.prototype.getMaxKey = function() {
    return this.list.tail.pre.key || '';
};

AllOne.prototype.getMinKey = function() {
    return this.list.head.next.key || '';
};
/*
 * @lc app=leetcode.cn id=432 lang=javascript
 *
 * [432] 全 O(1) 的数据结构
 */
// @lc code=start
var AllOne = function() {
    this.first = this.last = null
    this.lvHead = {} // 每层头节点
    this.lvLast = {} // 每层尾节点
    this.data = {}
    
    this.remove = function(node) {
        let f = this.lvHead[node.val]
        let l = this.lvLast[node.val]
        
        // 从链表中删除
        if(node.prev) node.prev.next = node.next
        if(node.next) node.next.prev = node.prev
        
        // 维护头尾
        node == this.first ? this.first = node.next : ''
        node == this.last  ? this.last  = node.prev : ''
        
        // 维护每一层头尾
        if(f == l) this.lvHead[node.val] = this.lvLast[node.val] = null
        else if (f == node) this.lvHead[node.val] = node.next
        else if (l == node) this.lvLast[node.val] = node.prev
        
    }
    
    // 在pos位置上的type方向上插入node节点
    // type==0表示左边, type==1表示右边
    this.add = function(pos, type, node) {
        
        let f = this.lvHead[node.val]
        let l = this.lvLast[node.val]
        
        if(pos == null) {
            if(!this.first) {
                this.first = this.last = node
                this.lvLast[node.val] = this.lvHead[node.val] = node
            } else {
                let f = this.first
                node.next = f
                f.prev = node
                this.first = node
                this.lvHead[node.val] = node
            }
            return
        }
        
        if(type == 1) {
            let next = pos.next
            node.next = next
            node.prev = pos
            pos.next = node
            next ? next.prev = node : ''
            
            if (f == null) {
              this.lvHead[node.val] = this.lvLast[node.val] = node
            } else {
              this.lvHead[node.val] = node   
            } 
            pos == this.last ? this.last = node : ''
        } else if(type == 0) {
            let prev = pos.prev
            node.next = pos
            node.prev = prev
            pos.prev = node
            prev ? prev.next = node : ''
            
            if (l == null) {
              this.lvHead[node.val] = this.lvLast[node.val] = node
            } else {
              this.lvLast[node.val] = node   
            } 
            pos == this.first ? this.first = node : ''
        }
    }
};

AllOne.prototype.inc = function(key) {
    let node = null
    if(!this.data[key]) {
        this.data[key] = node = {key:key, val: 1, next: null, prev: null}
        this.add(null, 1, node)
    } else {
        node = this.data[key]
        let newNode = {key:key, val: node.val + 1, next: null, prev: null}
        this.data[key] = newNode
        this.add(this.lvLast[node.val], 1, newNode)
        this.remove(node)
        this.data[key] = newNode
    }
};


AllOne.prototype.dec = function(key) {
    if(!this.data[key]) {
        return
    } else {
        let node = this.data[key]
        let newNode = {key:key, val: node.val - 1, next: null, prev: null}
        if(newNode.val) {
            this.data[key] = newNode
            this.add(this.lvHead[node.val], 0,  newNode)
        } else {
            this.data[key] = null
        }
        this.remove(node)
    }
};

AllOne.prototype.getMaxKey = function() {
    return this.last ?  this.last.key : ''
};

AllOne.prototype.getMinKey = function() {
    return this.first ?  this.first.key : ''
};
// @lc code=end

var obj = new AllOne()

let actions = [
	["inc","inc","inc","inc","inc","inc","getMaxKey","inc","dec","getMaxKey","dec","inc","getMaxKey","inc","inc","dec","dec","dec","dec","getMaxKey","inc","inc","inc","inc","inc","inc","getMaxKey","getMinKey"],
	[["hello"],["world"],["leet"],["code"],["ds"],["leet"],[],["ds"],["leet"],[],["ds"],["hello"],[],["hello"],["hello"],["world"],["leet"],["code"],["ds"],[],["new"],["new"],["new"],["new"],["new"],["new"],[],[]]
]
// leet ds hello hello new hello
for (let i = 0; i < actions[0].length; i++) {
	const ac = actions[0][i]
	const pa = actions[1][i]

	if (pa.length === 0) {
		console.log(obj[ac](pa[0]))
	} else {
		obj[ac](pa[0])
	}
}

