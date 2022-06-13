function factorialOverFlow( n:number ){

    if(n > 0) {
        let result = n * factorialOverFlow(n - 1);
        console.log(n , result);
        return result;
    }

    return 1;
}

function factorial( n:number ) {
    return factorialTail(n , 1);
}

function factorialTail( n:number , multiplier:number ) {
    
    if( n > 0) {
        return factorialTail(n-1 , n * multiplier);
    }

    return multiplier;
}
// console.log(factorial(5));
console.log( factorialOverFlow(5));