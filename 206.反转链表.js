var reverseList1 = function(head) {
	let prev = null
	let cur = head
	while (cur) {
		const next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}
	return prev;
};
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
	// 1 2 3
	if(!head || !head.next) return head;
	const newNode = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return newNode;
};

// @lc code=end

