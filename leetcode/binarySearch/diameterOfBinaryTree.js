/**
 * 문제 :  Diameter of Binary Tree
 * [DFS]
 * 왼쪽 노드로 갈 수 있는 횟수와 오른쪽 노드로 갈 수 있는 횟수를
 * 합치면 모든 노드를 거치는 최대 수가 된다
 * 재귀를 사용, 최대값을 비교해서 최대 수를 구한다
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 한 노드에서 다른 노드로 갈 수 있는 경우의 수 찾기
var diameterOfBinaryTree = function(root) {
    let max = 0;

    function searchTreeDepth(node) {
        if (node === null) {
            return 0;
        }

        const leftDepth = searchTreeDepth(node.left);
        const rightDepth = searchTreeDepth(node.right);

        max = Math.max(max, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    }
    searchTreeDepth(root);
    return max;
};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

//[1, 2, 3, 4, 5];
let fifthNode = new TreeNode(5);
let fourthNode = new TreeNode(4);
let secondNode = new TreeNode(2, fourthNode, fifthNode);
let thirdNode = new TreeNode(3);
let rootNode = new TreeNode(1, secondNode, thirdNode);

console.log(diameterOfBinaryTree(rootNode));