/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


var diff1 = function(l1, l2) {
	const diff = (leftNode, rightNode, extraNum = 0) => {
		if (!leftNode && !rightNode && !extraNum) return null;

		let sum = 
			(leftNode ? leftNode.val : 0)
			+ (rightNode ? rightNode.val : 0)
			+ extraNum;
		
		let newNode = new ListNode(sum % 10);
		newNode.next = diff(
			(leftNode && leftNode.next),
			(rightNode && rightNode.next),
			Math.floor(sum / 10)
		);
		return newNode;
	}

	return diff(l1, l2, 0);
};




/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	let prev = new ListNode(0);
	let cur = prev;
	let extraNum = 0;
	while(l1 || l2) {
		let sum = 
			(l1 ? l1.val : 0)
			+ (l2 ? l2.val : 0)
			+ extraNum;

		extraNum = Math.floor(sum / 10);
		cur.next = new ListNode(sum % 10);
		cur = cur.next;
		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}
	if (extraNum) {
		cur.next = new ListNode(1);
	}
	return prev.next;
};
// @lc code=end

