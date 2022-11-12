
// SORTED ARRAYS...
function solve(A: number[], B: number[], C: number[]) {
    
    let i = A.length - 1; 
    let j = B.length - 1;
    let k = C.length - 1;

    let min_diff= Number.MAX_SAFE_INTEGER , current_diff, max_term;    

    while (i != -1 && j != -1 && k != -1){
        current_diff = Math.abs( Math.max( A[i], B[j], C[k] )
                               - Math.min( A[i], B[j], C[k]) ); 
         
        if (current_diff < min_diff)
            min_diff = current_diff;
       
        max_term = Math.max(A[i], Math.max(B[j], C[k])); 
         
        if (A[i] == max_term)
            i--;
        else if (B[j] == max_term)
            j--;
        else
            k--;
    }
    return min_diff;
}

// Driver Function
    let D = [ 5, 8, 10, 15 ];
    let E = [ 6, 9, 15, 78, 89 ];
    let F = [ 2, 3, 6, 6, 8, 8, 10 ];
    console.log(solve(D, E, F)?"Result: 1 Perfect!":"Fail...");//must be  1 perfect 
        