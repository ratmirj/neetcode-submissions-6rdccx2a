class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */


    maxProfit(prices) {
        let profit = 0;
        let lowest = prices[0];

        for(let i = 0; i< prices.length; i++){
            const porentialProfit = prices[i] - lowest;

            if(porentialProfit < 0){
                lowest = prices[i];
                continue;
            }
            
            profit = porentialProfit > profit ? porentialProfit : profit;

        }

    return profit;

    }
}
