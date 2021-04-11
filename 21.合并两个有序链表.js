/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	let newNode = new ListNode();
	let next = newNode;
	while(l1 || l2) {
		if (!l1) {
			next.next = l2;
			break;
		} else if (!l2) {
			next.next = l1;
			break;
		} else if (l1.val >= l2.val) {
			next.next = l2;
			l2 = l2.next;
		} else {
			next.next = l1;
			l1 = l1.next;
		}
		next = next.next;
	}
	return newNode.next;
};
// @lc code=end
