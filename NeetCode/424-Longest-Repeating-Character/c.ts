class Solution{
    constructor( ){ }
    func1( str:string , k:number ){
        let N = str.length;
        let chars = Array(str.length);

        let w_start = 0;
        let max_len = 0;
        let max_count = 0;

        for(let w_end = 0; w_end<N ; w_end++){ 
            chars[ str.charCodeAt(w_end) - 65]++;
            let curr_char_count = chars[str.charCodeAt(w_end) - 65];
            max_count = Math.max( max_count , curr_char_count );
            
            while( w_end - w_start - max_count +1 > k ){
                chars[str.charCodeAt(w_start) - 65]--;
                w_start++;
            }
            max_len = Math.max( max_len, w_end-w_start +1 );
        }
        return max_len;
    }
    func( str:string, k:number ) {
        let memoChar  = {}; 
        let maxFreq = 0, l = 0, maxLen = 0;

        for(let r=0 ; r<str.length ; r++){ 
            memoChar[str[r]] = memoChar[str[r]]+1 || 1; 
            maxFreq = Math.max( maxFreq, memoChar[str[r]]);

            while( ( r-l +1) - maxFreq > k ){
                memoChar[str[l]]--;
                l++;
            }
            maxLen = Math.max( maxLen, r-l + 1);
        }
        return maxLen;
    }
};
let s = new Solution();

console.log( s.func("ABAB", 2));   // 4 
console.log( s.func("AABABBA", 1));// 4