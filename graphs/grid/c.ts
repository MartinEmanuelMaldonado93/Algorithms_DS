function gridTraveler( m:number, n:number) {
    let table = Array( m+1 ).fill('').map( ()=> Array(n+1).fill(0));
    table[1][1] = 1;
    for (let r = 0; r <= m; r++) {
        for (let c = 0; c <= n; c++) {
            let curr = table[r][c];
            if(r + 1 <= m) table[r+1][c] += curr;
            if(c + 1 <= n) table[r][c+1] += curr;
        } 
    }
    return table[m][n];
}

console.log(gridTraveler(3,3)); 
console.log(gridTraveler(18,18));
