class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0;
        let maxProfit = 0;

        for(let r = 1; r < prices.length; r++){
            if(prices[r] < prices[l]){
                l = r;
            }else{
                maxProfit = Math.max(maxProfit,prices[r] - prices[l]);
            }
        }

        return maxProfit;
    }
}
