var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Howsum
function bestSum(target, nums, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo)
        return memo[target];
    if (target === 0)
        return [];
    if (target < 0)
        return null;
    var shortestCombination = null;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var n = nums_1[_i];
        var remainder = target - n;
        var remainderComb = bestSum(remainder, nums, memo);
        if (remainderComb !== null) {
            var combination = __spreadArray(__spreadArray([], remainderComb, true), [n], false);
            if (shortestCombination === null
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
function allConstruct(target, wordBank, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo)
        return memo[target];
    if (target === '')
        return [[]];
    var result = [];
    var _loop_1 = function (word) {
        if (target.indexOf(word) == 0) {
            var suffix = target.slice(word.length);
            var suffixWays = allConstruct(suffix, wordBank, memo);
            var targetWays = suffixWays.map(function (way) { return __spreadArray([word], way, true); });
            result.push.apply(result, targetWays);
        }
    };
    for (var _i = 0, wordBank_1 = wordBank; _i < wordBank_1.length; _i++) {
        var word = wordBank_1[_i];
        _loop_1(word);
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
function fibTab(n) {
    var table = Array(n + 1).fill(0);
    table[1] = 1;
    for (var i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
}
// console.log(fibTab(5)); // 5
// console.log(fibTab(6)); // 8
// console.log(fibTab(7)); // 13
// console.log(fibTab(8)); // 21
// console.log(fibTab(50)); // 12586269025
// Bottom-up, tabulation
function minCoin(n, coins) {
    var table = Array(n + 1);
    coins = coins.sort();
    table[0] = 0;
    for (var i = 1; i <= n; i++) {
        table[i] = 3424234;
        for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
            var c = coins_1[_i];
            if (i - c < 0)
                break;
            else
                table[i] = Math.min(table[i], table[i - c] + 1);
        }
    }
    return table[n - 1];
}
// console.log( minCoin(7,[3,2,1,4]) ); 
// Similar to minCoin problem 
function canSum1(target, nums) {
    if (target === 0)
        return true;
    var table = Array(target + 1);
    table[0] = false;
    for (var i = 0; i < target; i++) {
        table[i] = false;
        for (var _i = 0, nums_2 = nums; _i < nums_2.length; _i++) {
            var num = nums_2[_i];
            if (i - num >= 0) { // if it's posible, add
                table[i] = true;
            }
            else
                break;
        }
    }
    return table[target - 1];
}
function canSum(target, nums) {
    var table = Array(target + 1).fill(false);
    // table.forEach( a => a=false ); 
    table[0] = true;
    for (var i = 0; i <= target; i++) {
        if (table[i] === true) {
            for (var _i = 0, nums_3 = nums; _i < nums_3.length; _i++) {
                var num = nums_3[_i];
                table[i + num] = true;
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
function howSum(target, nums) {
    var table = Array(target + 1).fill(null);
    table[0] = []; //First case empty array
    for (var i = 0; i <= target; i++) {
        if (table[i] !== null) {
            for (var _i = 0, nums_4 = nums; _i < nums_4.length; _i++) {
                var num = nums_4[_i];
                var comb = __spreadArray(__spreadArray([], table[i], true), [num], false);
                table[i + num] = comb;
            }
        }
    }
    return table[target];
}
// console.log( howSum(8, [2,3,5]));// 2, 2, 2, 2
// console.log( howSum(7, [3,4,9]));// 4,3
// console.log( howSum(9, [5,3,4,7]));// 3,3,3
// console.log( howSum(300, [7, 14]));// null
function bestSumIter(target, nums) {
    var table = Array(target + 1).fill(null);
    table[0] = [];
    for (var i = 0; i <= target; i++) {
        if (table[i] !== null) {
            for (var _i = 0, nums_5 = nums; _i < nums_5.length; _i++) {
                var num = nums_5[_i];
                var comb = __spreadArray(__spreadArray([], table[i], true), [num], false);
                if (!(table[i + num]) || // falsy value
                    table[i + num].length > comb.length) {
                    table[i + num] = comb;
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
function canConstructIter(target, wordBank) {
    var table = Array(target.length + 1).fill(false);
    table[0] = true; // bc for construct '' we no need any word
    for (var i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (var _i = 0, wordBank_2 = wordBank; _i < wordBank_2.length; _i++) {
                var word = wordBank_2[_i];
                if (target.slice(i, i + word.length) === word) //that porcion of target==word??...
                    table[i + word.length] = true;
            }
        }
    }
    return table[target.length];
}
// console.log( canConstructIter('abcdef',['ab','abc','cd','def','abcd']) ); // true
// console.log( canConstructIter('abcdef',['z','ab','ret']) ); // false
// console.log( canConstructIter('skateboard',['bo','rd','ate','t','ska','sk','boar']) ); // false
function countConstruct(target, wordBank) {
    var table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (var i = 0; i <= target.length; i++) {
        for (var _i = 0, wordBank_3 = wordBank; _i < wordBank_3.length; _i++) {
            var word = wordBank_3[_i];
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i]; // accumulate 
            }
        }
    }
    return table[target.length];
}
// console.log(countConstruct('abc', ['a','b','c','ab','bc']) );// 3
// console.log(countConstruct('purple', ['purp','p','ur','le','purpl']) );//2
// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) );//1  
function allConstructTab(target, wordBank) {
    var table = Array(target.length + 1)
        .fill(null).map(function () { return []; });
    table[0] = [[]];
    for (var i = 0; i < target.length; i++) {
        var _loop_2 = function (word) {
            var _a;
            if (target.slice(i, word.length + i) == word) {
                var newCombination = table[i].map(function (subArray) { return __spreadArray(__spreadArray([], subArray, true), [word], false); });
                (_a = table[i + word.length]).push.apply(_a, newCombination);
            }
        };
        for (var _i = 0, wordBank_4 = wordBank; _i < wordBank_4.length; _i++) {
            var word = wordBank_4[_i];
            _loop_2(word);
        }
    }
    return table[target.length];
}
console.log(allConstructTab('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// console.log(allConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"]) );  
