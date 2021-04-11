/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 function union(l1, l2) {
    let node = new ListNode();
    let cur = node
    while (l1 || l2) {
        if (!l1) {
            cur.next = l2;
            break;
        } else if (!l2) {
            cur.next = l1;
            break;
        } else if (l1.val > l2.val) {
            cur.next = l2;
            l2 = l2.next;
        } else {
            cur.next = l1;
            l1 = l1.next;
        }
        cur = cur.next;
    }
    return node.next;
}

var mergeKLists = function(lists) {
	if(lists.length === 0) return null
	else if (lists.length === 1) return lists[0];
	let temp = [];
	for (let i = 0; i < lists.length; i += 2) {
		temp.push(union(lists[i], lists[i+1]));
	}
	return mergeKLists(temp);
};
// @lc code=end
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}
let lists = [
	new ListNode(1, new ListNode(4, new ListNode(5))),
	new ListNode(1, new ListNode(3, new ListNode(4))),
	new ListNode(2, new ListNode(6))
]

console.log(JSON.stringify(mergeKLists(lists)))
console.log(mergeKLists([]))
console.log(mergeKLists([null]))
