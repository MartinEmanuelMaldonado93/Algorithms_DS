"use strict";

// function sumDos( target ,  arr ) {
//     let map = new Map(); 
//     for (let i = 0; i < arr.length; i++) {
//         let diff = target - arr[i];  
//         if( !(map.has(diff)) )
//             map.set( arr[i], i ); 
//         else
//             return [map.get(diff),i]; 
        
//     } 
// }
function sumDos( target ,  arr ) {
    let map = Array(arr.length); 
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];  
        if( map[diff] == undefined )
            map[arr[i]] = i ; 
        else
            return [map[diff], i]; 
        
    } 
}

// two sum, sorted array, find the target
console.log( sumDos( 9, [1,3,4,7,8,10,11]) );