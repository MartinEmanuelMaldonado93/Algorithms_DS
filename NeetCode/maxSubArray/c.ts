class Solution{
    constructor( ){ }
    func( nums:number[] ){
        let maxSub = nums[0];
        let acc = 0;
        for (let n of nums) {
            if(acc < 0)
                acc = 0;
            acc += n;
            maxSub = Math.max( acc, maxSub );
        }
        return maxSub;
    }
    func1( nums:number[] ){ // don't work for negative numbers
        let acc = nums[0];
        let ans = Number.MIN_SAFE_INTEGER;
        for (let n of nums) {
            acc = Math.max(acc , acc + n );
            ans = Math.max( ans, acc );
        }
        return ans;
    }
    funcN3( nums:number[] ){
        let max = Number.MIN_SAFE_INTEGER;
        let n = nums.length;
        for(let i = 0; i < n; i++) {
            for(let j = 0; j <= i; j++) {
                let sum = 0;
                for(let k = j; k <= i; k++) {
                    sum += nums[k];
                }
                max = Math.max(max, sum);
            }
        }
        
        return max;
    }
    //Ryan Schachte
    //max sum subarray with at most k size
    func4( arr:number[], k:number ) {
        let maxValue = Number.MIN_VALUE;
        let currentRunningSum = 0;
        for (let i = 0; i < arr.length ; i++){
            currentRunningSum += arr[i];
            if (i >= k -1){
                maxValue = Math.max (maxValue, currentRunningSum);
                currentRunningSum = arr[i -(k - 1)];
            }
        }
        return maxValue;
    }
    // longest substring length with K distinct characters 
    // "abcdefghiklmn" max length wich that means with no repetitions 
    func5( str:string, k:number){
        let set:Set<string> = new Set(), n = str.length, start = 0;
        let maxLen = 0;
        for (let end = 0; end < n; end++) {
            if(!set.has(str[end]))
                set.add( str[end] );
            else{
                let subS = str.substring(start,end);
                console.log(subS);
                maxLen = Math.max(maxLen, subS.length);//4 first
                set.clear();
            }
        }
    }
};

let s = new Solution();

// console.log( s.func([-2,1,-3,4,-1,2,1,-5,4]));// 6 

// console.log( s.func4([-2,1,-3,4,-1,2,1,-5,4], 3));// 6 
console.log( s.func5("abcddeffghk", 4));// 'abcd
