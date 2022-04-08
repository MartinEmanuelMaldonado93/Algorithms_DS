function isPalindrome(str:string) {
    if(str.length == 0 || str.length == 1)
        return true;

    if(str[0] == str[str.length-1]) 
        return isPalindrome( str.substring(1,str.length-1));

    return false;
}

console.log(isPalindrome('KayaK'));// true
console.log(isPalindrome('menem'));//true
console.log(isPalindrome('martin'));// false
