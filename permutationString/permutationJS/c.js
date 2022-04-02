'use strict';
// Unknown
function permutations(str) {
    let result = [];
    if ( str.length === 1 )
        return [str];

    for (let i = 0; i < str.length; i++) {
        let first = str[i];
        let subString = str.substring(0,i) + str.substring(i+1);
        let reminder = permutations(subString);

        for (let j = 0; j < reminder.length; j++)  
            result.push(first + reminder[j]);  
    }
    return result;
}
console.log(permutations("abc"));// works fine 

// Alvin 
function permutation(elements){
    if( elements.length === 0 )   return [[]];
    const firstEl = elements[0];
    const rest = elements.slice(1);
    
    const permWithoutFirst = permutation(rest);
    const allPermutation = [];
    permWithoutFirst.forEach( perm => {
        for(let i = 0; i<= perm.length; i++){
            const permWithFirst = [...perm.slice(0,i),firstEl,...perm.slice(i)];
            allPermutation.push(permWithFirst);
        }
    });
    return allPermutation;
}
console.log(permutation(["a",'b','c']));
