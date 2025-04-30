/**
 * DP 를 사용해서 피보나치 수열로 계단을 올라가는 경우의 수 반환
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	  
    let first = 1;// f(1)
    let second = 2; // f(2)
    
    for(let i=3; i<=n; i++) {
        const third = first + second;
        first = second;
        second = third;
    }  
    return second;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
