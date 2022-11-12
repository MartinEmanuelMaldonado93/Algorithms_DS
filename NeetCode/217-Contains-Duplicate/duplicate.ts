// Runtime: 118 ms,
//  faster than 60.08% of JavaScript online 
//  submissions for Contains Duplicate.
// Memory Usage: 51.3 MB, less than 36.67% 
// of JavaScript online submissions for Contains Duplicate
let containsDuplicate = function(nums:number[]) {
    let mySet = new Set();
    for( let n of nums){
        if(!mySet.has(n))
            mySet.add(n);
        else
            return true;
    }
    return false;
};
// Runtime: 87 ms, faster than 88.75% of JavaScript online 
// submissions for Contains Duplicate.
// Memory Usage: 51.5 MB, less than 23.54% 
// of JavaScript online submissions for Contains Duplicate.
let containsDuplicate2 = function(nums:number[]) {
    let mySet = new Set([...nums]); 

    return !(nums.length === mySet.size);
};

console.log( containsDuplicate2([1,2,2,3,4,5,6,6]));// true
console.log( containsDuplicate([1,2,2,3,4,5,6,6]));// true