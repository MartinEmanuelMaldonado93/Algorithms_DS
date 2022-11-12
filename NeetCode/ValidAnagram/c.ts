// Runtime: 56 ms, faster than 99.99% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 42.7 MB, less than 89.79% of JavaScript online submissions for Valid Anagram.

function isAnagram( s1:string, s2:string) {
    if(s1.length !== s2.length) return false;  
    let counts = Array(26).fill(0); 

    for (let i = 0; i < s1.length; i++) {
        counts[ s1.charCodeAt(i) - 97]++; // 97 is letter 'a' 
        counts[ s2.charCodeAt(i) - 97]--;
    } 
    for(let i=0; i<26;i++)
        if(counts[i]) // if finds 1
            return false;
    
    return true;
}

console.log( isAnagram("anagram", "nagaram"));// true 
console.log( isAnagram("neetcode", "codeleet"));//false
console.log( isAnagram("aacc", "ccac"));// false 
