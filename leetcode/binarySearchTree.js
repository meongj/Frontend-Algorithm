
/**
 *  문제:  이진 탐색 트리(BST)가 주어졌을 때, 두 노드 p, q 중에 
 *  이 두 노드의 공통 조상 중에서 가장 낮은 (가장 가까운) 조상찾기
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 재귀함수를 사용해서 이진탐색트리 실행
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return null;
    }

    // p가 root보다 작고, q도 root보다 작다면 왼쪽 노드 으로 가고
    if(p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    // p가 root보다 크고, q도 root보다 크다면 오른쪽 노드으로 간다
    if(p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    // 만약 그게 아니라면 root가 가장 가까운 조상노드이다
    // p, q가 root.val과 같다면 자기 자신이 조상 노드이다
    return root;
};

/**
 * while 함수를 이용한 좀 더 빠른 코드
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function (root, p, q) {
//   while (root != null) {
//     if (p.val < root.val && q.val < root.val) {
//       root = root.left;
//     } else if (p.val > root.val && q.val > root.val) {
//       root = root.right;
//     } else {
//       return root;
//     }
//   }
//   return null;
// };

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// [6,2,8,0,4,7,9,null,null,3,5]
console.log(
  lowestCommonAncestor(
    new TreeNode(
      6,
      new TreeNode(
        2,
        new TreeNode(0),
        new TreeNode(4, new TreeNode(3), new TreeNode(5))
      ),
      new TreeNode(8, new TreeNode(7), new TreeNode(9))
    ),
    new TreeNode(2),
    new TreeNode(4)
  )
);

