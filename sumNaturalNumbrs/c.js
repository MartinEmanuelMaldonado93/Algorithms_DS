function sumNatural(num) {
    if(num <= 0)
        return 0;

    return num + sumNatural(num-1);
}
console.log(sumNatural(10));// 55
console.log(sumNatural(5));// 15
//console.log( 10/2 + 10*5);//55  Gauss's method
function gaussNaturalSum(num){ 
    //return num/2 + num*(num/2);
    return num*(num+1)/2;
}
console.log(gaussNaturalSum(100));//5050