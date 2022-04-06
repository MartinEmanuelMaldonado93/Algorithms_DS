function gridTraveler(m, n) {
    var table = Array(m + 1).fill('').map(function () { return Array(n + 1).fill(0); });
    table[1][1] = 1;
    for (var r = 0; r <= m; r++) {
        for (var c = 0; c <= n; c++) {
            var curr = table[r][c];
            if (r + 1 <= m)
                table[r + 1][c] += curr;
            if (c + 1 <= n)
                table[r][c + 1] += curr;
        }
    }
    return table[m][n];
}
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));
