/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
	let cur = head; // 环
	let lastOne = null;
	let count = 0;
	
	if (!head || !k) {
		return head;
	}


	while(cur) {
		count += 1;
		// lastOne = cur;
		if (!cur.next) {
			// 环
			cur.next = head;
			lastOne = cur;
			cur = cur.next;
			break;
		}
		cur = cur.next;
	}

	let remove = count - k % count;
	let fast = cur;
	let slow = null;
	// 2
	
	while(remove > 0 ) {
		slow = fast;
		fast = fast.next;
		remove--;
	}
	slow.next = null;
	return fast;
};
// @lc code=end


// let temp = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
// let temp2 = new ListNode(1, new ListNode(2))

// console.log(rotateRight(temp2, 1))