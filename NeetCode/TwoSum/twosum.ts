class Solution{
    constructor( ){ }
    twoSum( target:number , nums:number[] ){
        const myMap = new Map(); 

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            const diff = target - n;
            if( myMap.has( diff ) ){ 
                return [ myMap.get( diff ) , i]; 
            }
            else
                myMap.set( n , i );// don't use "myMap[n] = i" to set ! 
        }  
    }
};

let s = new Solution();

console.log( s.twoSum( 6, [3,2,4] ) ); // [1,2]
console.log( s.twoSum( 9, [2,7,11,15] ) ); // [0,1]