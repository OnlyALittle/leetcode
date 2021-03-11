/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function(head) {
	let headNode = new ListNode();
	headNode.next = head;
	let cur = head;

	while (cur && cur.next) {
		let next = cur.next;
		let curVal = cur.val;
		if(curVal <= next.val) {
			// 当前值小于后面的值，不用排序
			cur = cur.next;
		} else {
			// 删除next node
			cur.next = cur.next.next;
			let prev = headNode;
			while (prev.next.val <= next.val) {
				prev = prev.next;
			}
			next.next = prev.next;
			prev.next = next;
		}
	}
	return headNode.next;
};
// @lc code=end

