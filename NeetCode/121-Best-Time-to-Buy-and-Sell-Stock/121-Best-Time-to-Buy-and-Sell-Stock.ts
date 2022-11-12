class Solution{
    constructor( ){ }
    func( prices:number[] ){
    let maxProfit = 0;
    let l = 0, r = 1; 
    while( r < prices.length){
        if(prices[l] < prices[r]){
            let diff = prices[r] - prices[l];
            maxProfit = Math.max( maxProfit , diff );
        }
        else
            l = r;
        r++;
    }
        return maxProfit;
    }

    func2( prices:number[]):number {
        let bestWithOutStock = 0;
        let bestWithStock = -(1e9+5);//Number.MIN_SAFE_INTEGER;
        for (const x of prices) {
            bestWithStock = Math.max( bestWithStock, bestWithOutStock-x );
            bestWithOutStock = Math.max(bestWithOutStock, bestWithStock+x );
        }
        return bestWithOutStock;
    }
};

let s = new Solution();

// console.log( s.func( [7,1,5,3,6,4]));// 5   
// console.log( s.func([7,6,4,3,1]));// 0 
// Best time to sell stock  II 
// console.log( s.func2([7,6,4,3,1]));// 0 
console.log( s.func2([7,1,5,3,6,4]));// 7 
console.log( s.func2([1,2,3,4,5]));// 4