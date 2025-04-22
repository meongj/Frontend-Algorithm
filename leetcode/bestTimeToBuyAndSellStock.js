/**
 * 주식을 사고 팔기에 가장 좋은 시간 구하기
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minPrice = Infinity;
    let maxProfit = 0;

    for(const price of prices) {
        // minPrice 보다 작으면 최소가격 지정
        if (price < minPrice) {
            minPrice = price;
        }
        // 아니라면 오늘 가격에 팔 경우 제일 큰 수익인지 비교
        else {
            let todayProfit = price - minPrice;
            maxProfit = Math.max(maxProfit, todayProfit);
        }
    }
    return maxProfit;
}


console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([3,3])); // 0
console.log(maxProfit([2,4,1])); // 2
