var containsDuplicate = function(nums:[]) {
    let mySet = new Set();
    for( let n of nums){
        if(!mySet.has(n))
            mySet.add(n);
        else
            return true;
    }
    return false;
};
// Runtime: 118 ms,
//  faster than 60.08% of JavaScript online 
//  submissions for Contains Duplicate.
// Memory Usage: 51.3 MB, less than 36.67% 
// of JavaScript online submissions for Contains Duplicate