class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0;
        let profit = 0;
        let betterProfit = 0;
        let buyValue = prices[0];

        for(let r = 1; r < prices.length; r++){
            if(prices[r] < buyValue && r < prices.length - 1){
                buyValue = prices[r];
                l = r;
            }

            profit = prices[r] - prices[l]

            if(profit > betterProfit){
                betterProfit = profit;
            }
        }

        return betterProfit;
    }
}
