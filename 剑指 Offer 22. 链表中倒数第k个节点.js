// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

//  

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 k = 2.

// 返回链表 4->5.

var getKthFromEndArray = function(head, k) {
	let res = new Array(k);
	let N = 0;

	while (head) {
		const data = head.val;
		res[N % k] = head;
		N++;
		head = head.next;
	}
	let index = N - k;

	return res[index % k]
};

var getKthFromEnd = function(head, k) {
	let f = head, s = head;
	let step = 0;
	while (f && step < k) {
		f = f.next;
		step++;
	}


	while (f) {
		s = s.next;
		f = f.next;
	}
	return s
};




function ListNode(val, node) {
    this.val = val;
    this.next = node;
}


let test = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
console.log(getKthFromEnd(test, 2))