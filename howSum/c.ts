//Howsum
function bestSum(target:number, nums:any, memo = {}) {
    if(target in memo) return memo[target];
    if(target === 0 ) return [];
    if(target < 0 ) return null;

    let shortestCombination = null;

    for (const n of nums) {
        const remainder = target - n;
        const remainderComb = bestSum(remainder, nums, memo) ;
        if(remainderComb !== null){
            const combination = [...remainderComb, n]; 
            if(shortestCombination === null 
            || combination.length < shortestCombination.length)
                shortestCombination = combination;
        }
    }
    memo[target] = shortestCombination;
    return shortestCombination;
} 
// console.log(bestSum(7, [5, 3, 4, 7])); // [7]
// console.log(bestSum( 8, [2, 3, 5])); // [3, 5]
// console.log(bestSum(8, [1, 4, 5])); // 14, 41
// console.log(bestSum(100, [1, 2, 5, 25])); // (25, 25, 25, 25]

function allConstruct(target:string, wordBank:any, memo={}) {
    if(target in memo) return memo[target];
    if(target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if(target.indexOf(word)== 0){
            const suffix = target.slice(word.length);
            let suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map( way => [word,...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
}
// console.log(allConstruct('purple', ['purp', 'p', 'ur','le', 'purpl']));
// 'purp', 'le ),
//'p', 'ur', 'p', 'le' ]
// console.log(allConstruct ("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
// [ 'ab', 'cd', 'ef' 1,
//'ab', 'c', 'def 1,
//   I 'abc', 'def' 1,
//'abcd', 'ef' )
// // 1
// console.log( allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska","sk","boar"]) ) ;
// console.log( allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz",["a", "aa" ,"aaaa", "aaaaa"] ) );  
function fibTab(n:number) {
    let table = Array(n+1).fill(0);
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[n];
}

// console.log(fibTab(5)); // 5
// console.log(fibTab(6)); // 8
// console.log(fibTab(7)); // 13
// console.log(fibTab(8)); // 21
// console.log(fibTab(50)); // 12586269025


// Bottom-up, tabulation
function minCoin(n:number, coins:[number,number,number,number]) {
    let table = Array( n + 1 );  
    coins = coins.sort(); 

    table[0] = 0;
    for (let i = 1; i <= n; i++) {
        table[i] = 3424234;
        for (const c of coins) {
            if(i-c < 0)
                break;   
            else
                table[i] = Math.min( table[i], table[i-c]+1 );
        }
    }
    return table[n-1];
}

// console.log( minCoin(7,[3,2,1,4]) ); 

// Similar to minCoin problem 
function canSum1( target:number, nums:any) {
    if(target === 0) return true;

    let table = Array( target+1 );
    table[0] = false; 
    
    for(let i=0; i<target; i++){
        table[i] = false;
        for (let num of nums) {
            if(i-num >= 0){ // if it's posible, add
                table[i] = true; 
            }
            else
                break;
        }
    }
    return table[target-1]; 
} 
function canSum( target:number, nums:number[]) {
    let table = Array(target+1).fill(false);
    // table.forEach( a => a=false ); 
    table[0] = true; 
    for (let i = 0; i <= target; i++) {
        if(table[i] === true){ 
            for (let num of nums) {
                table[i+num] = true;
            }
        } 
    }
    return table[target];
}

// console.log( canSum(7, [3,4,9]));// must be 'true', doesn't matter the order of array
// console.log( canSum(7, [5,4,2]));// must be 'true'
// console.log( canSum(1, [5,3,4]));// must be 'false'
// console.log( canSum(0, [5,3,4]));// must be 'true'
// console.log( canSum(3004, [7,14]));// must be 'true'

function howSum(target:number, nums:number[]) {
    let table = Array( target +1 ).fill(null);
    table[0] = []; //First case empty array
    for (let i = 0; i <= target; i++) {
        if( table[i] !== null){
            for (let num of nums) {  
                let comb = [...table[i],num]; 
                table[ i+num ] = comb;  
            }
        }        
    } 
    return table[target];
}
// console.log( howSum(8, [2,3,5]));// 2, 2, 2, 2
// console.log( howSum(7, [3,4,9]));// 4,3
// console.log( howSum(9, [5,3,4,7]));// 3,3,3
// console.log( howSum(300, [7, 14]));// null

function bestSumIter( target:number, nums:number[]) {
    let table = Array( target +1 ).fill(null);
    table[0] = []; 

    for (let i = 0; i <= target; i++) {
        if( table[i] !== null ){
            for (let num of nums) {  
                let comb = [...table[i],num]; 
                if( !(table[i+num]) || // falsy value
                    table[i+num].length > comb.length  ){

                    table[i+num] = comb;
                }
            }
        }        
    } 
    return table[target];
}

// console.log( bestSumIter(8, [2,3,5]));// 3,5
// console.log( bestSumIter(7, [3,4,9]));// 3,4
// console.log( bestSumIter(15, [3,4,9]));// 3,3,9 
// console.log( bestSumIter(100, [1,2,9,25]));// 25, 25, 25, 25

//                          ~Strings~
function canConstructIter(target:string, wordBank:string[]) {
    let table = Array( target.length +1 ).fill(false);
    table[0] = true;// bc for construct '' we no need any word

    for (let i = 0; i <= target.length; i++) {
        if(table[i] === true){
            for (let word of wordBank) {

                if(target.slice( i, i+word.length ) === word)//that porcion of target==word??...
                    table[i + word.length ] = true;
            }
        }
    }
    return table[target.length];
}

// console.log( canConstructIter('abcdef',['ab','abc','cd','def','abcd']) ); // true
// console.log( canConstructIter('abcdef',['z','ab','ret']) ); // false
// console.log( canConstructIter('skateboard',['bo','rd','ate','t','ska','sk','boar']) ); // false

 
function countConstruct(target:string, wordBank:string[]) {
    let table = Array( target.length +1 ).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) { 
        for (let word of wordBank) { 
            if(target.slice(i, i+word.length) === word){

                table[i + word.length ] += table[i]; // accumulate 
            }
        } 
    }
    return table[target.length];
}

// console.log(countConstruct('abc', ['a','b','c','ab','bc']) );// 3
// console.log(countConstruct('purple', ['purp','p','ur','le','purpl']) );//2
// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) );//1  

function allConstructTab(target:string, wordBank:string[]) {
    let table = Array( target.length +1 )
    .fill(null).map( ()=>[] );

    table[0] = [[]];

    for (let i = 0; i < target.length; i++) {
        for (let word of wordBank) {
            if(target.slice(i, word.length+i ) == word){
                
                const newCombination =  table[i].map( subArray => [...subArray, word ]);
                table[i + word.length].push(...newCombination);
            }
        }
    }
    return table[ target.length ];
}

console.log(allConstructTab('purple', ['purp','p','ur','le','purpl']) );
// console.log(allConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"]) );  