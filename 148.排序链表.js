/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
	function deal(node) {
		if (!node || !node.next) return node;
		let prev = node;
		let i = node;
		let j = node.next;
		while (i && j) {
			prev = i;
			i = i.next;
			if (j.next) j = j.next.next
			else j = null;
		}
		let temp2 = deal(i)
		prev.next = null;
		let temp1 = deal(node)
		return union(temp1, temp2);
	}

	function union(l1, l2) {
		let node = new ListNode();
		let cur = node;
		while (l1 || l2) {
			if (!l1) {
				cur.next = l2;
				break;
			} else if (!l2) {
				cur.next = l1;
				break;
			} else if (l2.val > l1.val) {
				cur.next = l1;
				l1 = l1.next;
			} else {
				cur.next = l2;
				l2 = l2.next;
			}	
			cur = cur.next		
		}
		return node.next;
	}

	return deal(head)
};
// @lc code=end

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}
let temp = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))
let temp2 = new ListNode(-1, 
	new ListNode(5, 
		new ListNode(3, 
			new ListNode(4, 
				new ListNode(0)))))
let temp3 = new ListNode(-1, new ListNode(5, new ListNode(4)))


console.log(sortList(temp))
console.log(sortList(temp2))
console.log(sortList(temp3))