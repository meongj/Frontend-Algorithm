/**
 * balanced Tree node : 
 * 각 루트 노드마다 왼쪽, 오른쪽의 노드의 높이차이가 1 이하인 경우를 말한다
 * 
 * 사용된 알고리즘 : DFS
 * Bottom-up 방식으로 풀기
 * : left, right 길이 비교하면서 루트노트까지 온다
 * left: 지금까지 left 에 저장된 높이값
 * right : 지금까지 right 에 저장된 높이값
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    // 현재 노드의 높이를 체크 및 계산하기 위한 함수
    function check(node) {
        // null인 노드는 높이가 0이다 -> true
        if (!node) return 0;
        
        // 왼쪽노드 , 오른쪽노드 
        const left = check(node.left);
        const right = check(node.right);

        // 왼쪽 오른쪽 차이가 1보다 크다면 -1 값을 지정한다 (비정상인 경우의 구분값)
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1;
        }
        // 균형있는 이진 트리라면 현재 노드 높이를 계산한다
        return Math.max(left, right) + 1;
    }
    return check(root) !== -1; // -1 아닌 경우 정상인 경우로 true 반환된다
}



function TreeNode(val, left, right) {
    this.val = (val === undefined? 0 : val);
    this.left = (left === undefined? null : left);
    this.right = (right === undefined? null: right);
}

// root = [3,9,20,null,null,15,7] -> true
console.log(
    isBalanced(new TreeNode(3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7))
    ))
);

// root = [1,2,2,3,3,null,null,4,4] -> false
console.log(
    isBalanced(new TreeNode(1,
         new TreeNode(2, 
            new TreeNode(3, 
                new TreeNode(4),
                new TreeNode(4)),  
            new TreeNode(3)),
        new TreeNode(2)))
);

// root = [] -> true
console.log(isBalanced());

// root =[1,null,2,null,3] -> false
console.log(isBalanced(new TreeNode(1, 
    null, 
    new TreeNode(2, null, new TreeNode(3)) 
)));

//root = [1] -> false
console.log(isBalanced(new TreeNode(1)));


