class Solution{
    constructor( ){ } 
    func( nums:number[] ){
    // [ 1, 2, 3, 1 ]
    let rob1 = 0, rob2 = 0;
        for (let n of nums) {
            let temp = Math.max( rob1+n , rob2 );
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
    func1( nums:number[] ){
        if(nums.length === 0) return 0;
        if(nums.length === 1) return nums[0];
        let dp = Array( nums.length+1 );
        dp[0] = 0;
        dp[1] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            const n = nums[i];
            dp[i+1] = Math.max( dp[i] , dp[i-1] + n );
        }
        return dp[nums.length];
    }
};

let s = new Solution();

// console.log( s.func([1,2,3,1]));
console.log( s.func1([1,2,3,1]));