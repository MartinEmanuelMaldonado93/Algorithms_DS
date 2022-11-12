class Solution{
    constructor( ){ }
    firstAproach(k:number, nums:number[]){
        let myMap = {};

        for(let n of nums){ // n 
            if( n in myMap)
                myMap[n]++;
            else 
                myMap[n] = 1;
        }
        let valuesOfMap = Object.entries(myMap); // n 
        let sortMap = valuesOfMap.sort( (a:[string,any],b:[string,any])=>{
            return b[1] - a[1];
        })// n log n
         
        return  sortMap.slice(0,k+1);
    }
    topKfreqElements( k:number, nums:number[] ){
        if( !(k <= nums.length) ) return null; 
        if( k === nums.length ) return nums;

        let result = [], bucket=[], map = new Map(); 

        for(let num of nums) 
            map.set( num, (map.get(num) || 0 ) + 1);//if not exists add 0+1 at the first time

        for(let [num, freq] of map)
            bucket[freq] = ( bucket[freq] || new Set() ).add(num);
        
        for(let i = bucket.length-1; i >= 0; i--) {
            if(bucket[i]) 
                result.push(...bucket[i]);
            if(result.length === k) 
                break;
        }
        return result;
    }
};

let s = new Solution();

// console.log( s.topKfreqElements(1, [1]));// 1 
// console.log( s.topKfreqElements(2, [1,2]));// 1,2

// console.log( s.topKfreqElements(3, [1,1,1,4,5,4,7,7,7,7,7,7,7,8,9,9,0,0,0,0]));//   7,0,1
// console.log( s.topKfreqElements(2, [1,1,1,2,2,100]));// 1,2
// console.log( s.topKfreqElements(1, [-1,-1]));// -1
// console.log( s.topKfreqElements(10, [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6] ));// 1 
console.log( s.topKfreqElements(1, [5,3,1,1,1,3,73,1]));// 1 