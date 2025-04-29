/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Floyd's tortoise and hare 알고리즘 사용해서 사이클인지 아닌지를 찾는다
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// head = [3,2,0,-4], pos = 1
const n1 = new ListNode(3);
const n2 = new ListNode(2); // pos=1
const n3 = new ListNode(0);
const n4 = new ListNode(-4);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n2;

const head = n1;
console.log(hasCycle(head));
