class Solution{
    constructor( ){ }
    //combination of valid parentheses
    func( n:number ){
        let stack:string[] = [], res:string[] = []; 

        function backtrack(openN:number, closedN:number){
            if( openN === closedN && n === openN && n === closedN){
                res.push( stack.join('') );
                return ; 
            }
            if (openN < n){// print 3 times
                stack.push('(');
                backtrack(openN +1, closedN);
                stack.pop();
            }
            if(closedN < openN){
                stack.push(')');
                backtrack(openN, closedN +1);
                stack.pop();
            }
        }
        backtrack(0,0); 
        console.log( stack.length );
        return res; 
    }
};

let s = new Solution();

console.log( s.func(2));// [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
// console.log( s.func(3));// [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
// console.log( s.func(4));// [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
