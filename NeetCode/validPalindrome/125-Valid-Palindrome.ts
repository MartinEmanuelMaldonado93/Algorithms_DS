class Solution{
    constructor( ){ }
    validPalindrome( str:string ){
        let L = 0, R = str.length-1;
        while(L < R){
            while( L<R && !this.isAlphaNumeric(str[L]) )
                L++;
            
            while( R>L && !this.isAlphaNumeric(str[R]) )
                R--;
            
            if( str[L].toLowerCase() !== str[R].toLowerCase() ) 
                return false; 

            L++; R--;
        } 
        return true;
    }
    func1( str:string ){
        let cleanStr = '';
        for (const c of str) {
            if( this.isAlphaNumeric(c) )
                cleanStr += c;
        }
        return cleanStr.toLowerCase() === cleanStr.toLowerCase().split('').reverse().join('');
    }
    func2( str:string ){
        let cleanStr = [];
        let cleanStr2 = [];
        for (const c of str) {
            if( this.isAlphaNumeric(c) ){
                cleanStr2.unshift(c.toLowerCase());
                cleanStr.push(c.toLowerCase());
            }
        }
        return cleanStr.join('') === cleanStr2.join('');
    }
    isAlphaNumeric( char:string ) { // O( 1 ) time  
          const code = char.charCodeAt(0);
          if (!(code > 47 && code < 58) && // numeric (0-9)
              !(code > 64 && code < 91) && // upper alpha (A-Z)
              !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
          } 
        return true;
    };
 };

let s = new Solution();

console.log( s.validPalindrome("4m##en#em4#"));// 
console.log( s.validPalindrome("5race a car5"));// false
console.log( s.validPalindrome("kayaK"));// true 
console.log( s.validPalindrome("A man, a plan, a canal: Panama"));// true
console.log( s.validPalindrome("0P"));//   false  