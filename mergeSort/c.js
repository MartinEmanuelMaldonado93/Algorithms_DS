'use strict';
var Solution = /** @class */ (function () {
    function Solution() {
    }
    Solution.prototype.mergeSort = function (data) {
        return this.wrapMergeSort(data, 0, data.length - 1);
    };
    Solution.prototype.wrapMergeSort = function (data, start, end) {
        if (start < end) {
            var mid = Math.floor((end + start) / 2);
            this.wrapMergeSort(data, start, mid);
            this.wrapMergeSort(data, mid + 1, end);
            this.merge(data, start, mid, end);
        }
        return data;
    };
    Solution.prototype.merge = function (data, start, mid, end) {
        var temp = new Array(end - start + 1); //size of data , 
        var i = start, j = mid + 1, k = 0;
        while (i <= mid && j <= end) { // sea algo lógico 
            if (data[i] <= data[j]) { // Si esta ordenado 
                temp[k] = data[i]; // guardo i 
                i++;
                k++;
            }
            else {
                temp[k] = data[j];
                k++;
                j++;
            }
        }
        while (i <= mid) { // remaining 
            temp[k] = data[i];
            k++;
            i++;
        }
        while (j <= end) {
            temp[k] = data[j];
            k++;
            j++;
        }
        for (var i_1 = start; i_1 <= end; i_1++) {
            data[i_1] = temp[i_1 - start];
        }
    };
    return Solution;
}());
;
var s = new Solution();
var n = [5, 4, 1, 10, 9];
console.log(s.mergeSort(n));
console.log();
