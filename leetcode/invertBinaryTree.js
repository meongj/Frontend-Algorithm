/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * DFS 재귀 방식 사용
 * 자식 왼쪽, 오른쪽을 바꾼다
 * - 재귀를 사용해서 자식 타고타고 ..들어가서 자식 위치를 서로 바꿔준다
 * null이면 stop
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null)  return null;

    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
};


function TreeNode(val, left =null, right=null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// [4,2,7,1,3,6,9]
const root = new TreeNode(
    4, 
    new TreeNode(2, new TreeNode(1), new TreeNode(3)), 
    new TreeNode(7,new TreeNode(6), new TreeNode(9))
);
console.log(invertTree(root));