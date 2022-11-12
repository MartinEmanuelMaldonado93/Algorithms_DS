class Solution{
    constructor( ){ }
    climbStairs( n :number ){
        let one = 1;
        let two = 1;
        for (let i = 0; i < n-1; i++) {
            let temp = one;
            one += two;
            two = temp;
        }
        return one;
    }
    climbStairsRecursively( n:number, memo={} ){
        if( n in memo ) return memo[n];
        if( n === 0) return 1;
        if( n < 0) return 0;
        let result = this.climbStairsRecursively( n-1, memo ) +
                     this.climbStairsRecursively( n-2, memo ); 
        memo[n] = result;
        return result;
    }
};

let s = new Solution();

console.log( s.climbStairsRecursively( 8 ));
console.log( s.climbStairs( 5 ));