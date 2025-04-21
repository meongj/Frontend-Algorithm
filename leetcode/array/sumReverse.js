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
// var addTwoNumbers = function (l1, l2) {
//   // 1. 리스트 역순으로 돌린다
//   // 2. 역순 돌린 리스트를 정수 변경
//   let l1Int = "";
//   let l2Int = "";

//   for (let i = l1.length - 1; i >= 0; i--) {
//     l1Int += l1[i].toString();
//   }
//   console.log(l1Int);
//   for (let j = l2.length - 1; j >= 0; j--) {
//     l2Int += l2[j].toString();
//   }
//   console.log(l2Int);

//   const result = String(Number(l1Int) + Number(l2Int));
//   const arr = result.split("");
//   return arr;
// };

// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// 해설
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  return dummyHead.next;
};

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
