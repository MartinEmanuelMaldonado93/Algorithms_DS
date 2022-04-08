function backSpaceCompare(s1, s2) {
    return buildString(s1) === buildString(s2);
}
function buildString(s) {
    var ans = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var c = s_1[_i];
        if (c !== '#')
            ans.push(c);
        else if (ans.length > 0)
            ans.pop();
    }
    return ans.join('');
}
// time  0(m * n) 
// space 0( 1 ) 
console.log(backSpaceCompare("ab#c", "ad#c")); //true
console.log(backSpaceCompare("ab##", "c#d#")); //true
console.log(backSpaceCompare("a##c", "#a#c")); // true
console.log(backSpaceCompare("a#c", "b")); // false  
console.log(backSpaceCompare("####", "###")); // true  
console.log(backSpaceCompare("a####", "###b#")); // true
console.log(backSpaceCompare("aer####", "abc####")); // true
