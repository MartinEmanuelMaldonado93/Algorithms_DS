function decToBin(num) {
    if (num <= 0)
        return '';
    var rem = num % 2;
    var divResult = Math.floor(num / 2);
    return "".concat(decToBin(divResult)).concat(rem);
}
// 100
console.log(decToBin(8)); //1000
console.log(decToBin(9)); //1001
