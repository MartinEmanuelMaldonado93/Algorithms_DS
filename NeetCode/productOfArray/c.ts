class Solution{
    constructor( ){ }
    func( nums:number[] ){
        let result = Array(nums.length);
        let prefix = 1;
        for(let i=0; i<nums.length; i++){ 
            result[i] = prefix;
            prefix *= nums[i];
        }
        let postfix = 1;
        for(let j=nums.length-1; j>=0; j--){
            result[j] *= postfix;
            postfix *= nums[j];
        }
        return result;
    }
};

let s = new Solution();

console.log( s.func([1,2,3,4]));// [ 24,12,8,6 ]