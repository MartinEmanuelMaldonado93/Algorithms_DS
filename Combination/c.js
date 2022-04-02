var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var combinations = function (elements) {
    if (elements.length == 0)
        return [[]];
    var firstEl = elements[0]; // 'a'
    var rest = elements.slice(1); // 'b' 'c'
    var combsWithoutFirst = combinations(rest);
    var combsWithFirst = [];
    combsWithoutFirst.forEach(function (comb) {
        var combWithFirst = __spreadArray(__spreadArray([], comb, true), [firstEl], false);
        console.log(combWithFirst);
        combsWithFirst.push(combWithFirst);
    });
    return __spreadArray(__spreadArray([], combsWithoutFirst, true), combsWithFirst, true);
};
combinations(['a', 'b', 'c']);
//console.log(combinations(['a','b','c']));
// []
// [a]
// [b]
// [c]
// [a,b]
// [b,c]
// [a,c]
// [a,b,c]
