/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * list1 -> 1 -> 2 -> 4
 * list2 -> 3 -> 4
 * dummy -> 1 -> 3 -> 4
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode();
  let node = dummy;

  while(list1 && list2) { /// list1, list2 둘다 어떤 노드를 가리키고 있다면
    if (list1.val < list2.val) {
        // list1값이 list2값 보다 작다면
        node.next = list1; // 더 작은 값을 둔다
        list1 = list1.next; // list1을 다음 노드로 이동시킴
    }
    else {
        node.next = list2;
        list2 = list2.next;
    }
    node = node.next;
  }
    // list1 이나 list2 둘 중 하나가 null을 가리켰다면
    node.next = list1 || list2; // list1이 있다면 다음값에 들어가고, list1없으면(null=false) list2 들어감

  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}


// 테스트용 연결 리스트 만들기
function buildList(arr) {
    let dummy = new ListNode();
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
}
const list1 = buildList([1, 2, 4]);
const list2 = buildList([1, 3, 4]);

const merged = mergeTwoLists(list1, list2);
console.log(merged);
