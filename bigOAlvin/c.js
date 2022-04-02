'use strict';

class Solution{
    constructor( ){ }
    foo(n){
        if(n < 1){
            console.log("FIN.");
            return;
        }
        this.foo(n-2);
    }
    uniquesBad( arr ){
        let newArr = [];
        for(let x of arr){ 
            if( !newArr.includes(x) )
                newArr.push(x);
        }
        return newArr;
    }
    uniques( arr ){  // bestPerformance 
        return  Array.from(new Set([...arr]));
    }
    uniques2( arr ){
        let memo = {};
        for ( let item of arr ) 
            memo[item] = true;// assign like this is inefficient 

        return Object.keys(memo);
    }
    uniques3( arr ,  memo = {} ){  
        for(let item of arr){
            if(!(item in memo)){
                memo[item] = true;}
        }
        return Object.keys(memo);
    }
    uniques4( arr , memo = {} ){  // super efficient 
        for (let i = 0; i < arr.length; i++)
              if(!(arr[i] in memo)) 
                memo[arr[i]] = true;  
        
       return Object.keys(memo); 
    }
};
const randomArr = [];
for(let i=0; i<100000;i++)
    randomArr.push(Math.floor(Math.random()*100));

let s = new Solution(); 
// let arr = ['cat','dog','rat','rat','cat','bird'];

console.log("START ! uniquesBad"," length ->",randomArr.length);
console.time('a');
let arr1 = s.uniquesBad(randomArr);
console.timeEnd('a');//4.08 ms 

console.log("START ! uniques"," length ->",randomArr.length);
console.time('b');
let arr2 = s.uniques(randomArr);
console.timeEnd('b');// 0.554 ms 

console.log("START ! uniques2"," length ->",randomArr.length);
console.time('c');
let arr3 = s.uniques2(randomArr);
console.timeEnd('c');//  2.82 

console.log("START ! uniques3 "," length ->",randomArr.length);
console.time('d');
let arr4 = s.uniques3(randomArr);
console.timeEnd('d');//  2.5ms 

console.log("START ! uniques4 "," length ->",randomArr.length);
console.time('c');
let arr5 = s.uniques4(randomArr);
console.timeEnd('c');//  0.86ms Very efficient 