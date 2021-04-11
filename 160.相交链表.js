/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	if (!headB || !headA) return null
	
	let ANode = headA;
	let BNode = headB;

	while (ANode !== BNode) {
		ANode = ANode === null ? headB : ANode.next;
		BNode = BNode === null ? headA : BNode.next;
	}
	return ANode;
};
// @lc code=end

