/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
	function reverseLink(node) {
		let prev = null;
		let cur = node;
		while (cur) {
			let next = cur.next;
			cur.next = prev;
			prev = cur;
			cur = next;
		}
	}

	let tempHead = new ListNode(-1);
	tempHead.next = head;

	let prev = tempHead;
	for (let i = 0; i < left - 1; i++) {
		prev = prev.next;
	}
	let rightNode = prev
	for (let i = 0; i < right - left + 1; i++) {
		rightNode = rightNode.next;
	}
	
	let leftNode = prev.next;
	let cur = rightNode.next;

	prev.next = null;
	rightNode.next = null;

	reverseLink(leftNode);
	prev.next = rightNode;
	leftNode.next = cur;
	return tempHead.next;
};
// @lc code=end

