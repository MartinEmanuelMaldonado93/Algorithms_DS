class Solution{
    constructor( ){ }

    func(nums:number[], target:number){ 
        let set = new Set(); // we have a extra space complexity 
        for (const n of nums) { 
            if( !(set.has( n - target)) )
                set.add(n);
            else
                return [n, n- target];
        }
        return [];
    }
    func1(num:number[], target:number){ // 2,3,5,20,50,80
        let nums = num.sort((a,b)=>a-b);// o(n logn ) supose that work with no extra space ..
        console.log(nums)
        let l = 0, r = 1; // 47 ... 
        while( l < nums.length &&  r < nums.length ){
            let diff1 = nums[l] - nums[r]; 
            let diff2 = nums[r] - nums[l]; 
            if( l!=r &&  (diff1 === target||diff2 === target) )
                return [nums[l], nums[r]];

            if( diff1 > target ){ // 
                r++;
            }else { 
                l++;
            }
        }
        return [];
    }
};

let s = new Solution();

console.log( s.func1([5,20,3,2,50,80], 78 ) );// [2,80]
console.log( s.func1([5,20,3,2,50,80], 47 ) );// [50,3]