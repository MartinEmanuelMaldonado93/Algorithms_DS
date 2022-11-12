class Solution{
    constructor( ){ }
    // Runtime: 87 ms, faster than 95.32% of JavaScript
    // online submissions for Longest Consecutive Sequence.
    // Memory Usage: 49.8 MB, less than 83.64% of JavaScript 
    // online submissions for Longest Consecutive Sequence.
    func( nums:number[] ){
        if( nums.length === 0 || nums.length == null) return 0;
        const set = new Set(nums); 
        let count = 0, longest = Number.MIN_SAFE_INTEGER;
        for (let n of set) { // Through the array 533ms vs  set *81ms*
            if( !set.has(n-1) ){
                count = 0;
                while( set.has( n + count )){
                    count++;
                }
                longest = Math.max( longest , count );
            }
        }
        return longest;
    }
};

let s = new Solution();

console.log( s.func([100,4,200,1,3,2]));// 4