/**
 * 문제 : Reverse Linked List
 * 링크드 리스트 뒤집기
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null; // 이전노드
    let curr = head; // 현재노드

    while (curr) {
        const next = curr.next; // 다음 노드를 임시 저장
        curr.next = prev; // 현재 노드의 next를 이전노드로 변경(뒤집기)
        prev = curr;
        curr = next;
    }
    return prev;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let twoNode = new ListNode(2, null);
let oneNode = new ListNode(1, twoNode);

console.log(reverseList(oneNode));