// Xavier elon 
var Solution = /** @class */ (function () {
    function Solution() {
    }
    Solution.prototype.calculate = function (str, left, right) {
        if (left == right)
            console.log(str);
        else {
            for (var i = left; i <= right; i++) {
                var swapped = this.swap(str, left, i);
                this.calculate(swapped, left + 1, right);
            }
        }
    };
    Solution.prototype.swap = function (str, i, j) {
        var temp;
        var arr = str.split('');
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr.join('');
    };
    return Solution;
}());
var s = "ABC";
var n = s.length;
var permutation = new Solution;
permutation.calculate(s, 0, n - 1);
