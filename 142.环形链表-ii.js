/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
	if (!head || !head.next) return null;

	let fast = head;
	let slow = head;
	while (1) {
		if (!fast || !fast.next) return null;
		slow = slow.next;
		fast = fast.next.next
		if (slow == fast) break;
	}
	fast = head;

	while (slow !== fast) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow;
};
// @lc code=end


function ListNode(val) {
	this.val = val;
	this.next = null;
}
let temp6 = new ListNode(6)
let temp3 = new ListNode(3)
let temp2 = new ListNode(2)
let temp0 = new ListNode(0)
let temp4 = new ListNode(4)
let temp5 = new ListNode(5)
temp6.next = temp3;
temp3.next = temp2
temp2.next = temp0;
temp0.next = temp4;
temp4.next = temp5;
temp5.next = temp2;
console.log(detectCycle(temp6))