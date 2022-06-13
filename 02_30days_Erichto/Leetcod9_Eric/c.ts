function backSpaceCompare(s1:string, s2:string) { 
    return buildString(s1) === buildString(s2);
}
function buildString( s:string) {
    let ans = [];
    for(let c of s){
        if(c !== '#')
            ans.push(c);
        else if( ans.length>0 )
            ans.pop();
    } 
    return ans.join('');
}
// time  0(m * n) 
// space 0( 1 ) 

console.log( backSpaceCompare("ab#c","ad#c"));//true
console.log( backSpaceCompare("ab##","c#d#"));//true
console.log( backSpaceCompare("a##c","#a#c"));// true
console.log( backSpaceCompare("a#c","b"));// false  
console.log( backSpaceCompare("####","###"));// true  
console.log( backSpaceCompare("a####","###b#"));// true
console.log( backSpaceCompare("aer####","abc####"));// true

