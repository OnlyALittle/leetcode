var reverseList1 = function(head) {
	let prev = null
	let cur = head // 这个变量用于不断的移动指针。
	while (cur) {
		const next = cur.next;
		cur.next = prev; // 当前节点next指针翻转指向pre前置节点
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
	let next = head.next; // next节点，反转后是最后一个节点
	const newNode = reverseList(next);
	head.next = null; // 裁减 head
    next.next = head; // 尾接
	return newNode;
};

// @lc code=end

